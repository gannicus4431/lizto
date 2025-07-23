import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";

export default function Hero3() {
  const [isTextVisible, setIsTextVisible] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    // Store the current ref value in a variable
    const currentRef = textRef.current;
    
    // Intersection Observer for the text content
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsTextVisible(true);
        }
      },
      {
        threshold: 0.3, // Trigger when 30% of the element is visible
        rootMargin: '0px 0px -50px 0px' // Start animation 50px before element comes into view
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      // Use the stored ref value in cleanup
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div className="relative bg-white">
      <div className="mx-auto max-w-7xl flex flex-col lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        {/* Image - Shows first on mobile, second on desktop */}
        <div className="relative h-64 sm:h-80 order-1 lg:order-2 lg:col-span-5 lg:h-auto lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
          <Image
            alt="Elegant restaurant interior with handmade pasta station"
            src="/images/home/3.png"
            className="w-full h-full bg-amber-50 object-cover"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
            priority
          />
        </div>

        {/* Text Content - Shows second on mobile, first on desktop */}
        <div className="px-6 pt-10 pb-24 sm:pb-32 order-2 lg:order-1 lg:col-span-7 lg:px-0 lg:pt-40 lg:pb-48 xl:col-span-6" ref={textRef}>
          <div className="mx-auto max-w-lg lg:mx-0">
            <h1
              className={`mt-24 text-5xl font-normal tracking-tight text-pretty text-amber-900 sm:mt-10 sm:text-7xl transform transition-all duration-1000 ease-out ${
                isTextVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-8 opacity-0'
              }`}
              style={{ fontFamily: "'Crimson Text', serif" }}
            >
              Every dish tells a story, every bite creates a memory
            </h1>
            <p className={`mt-8 text-lg font-medium text-pretty text-amber-700 sm:text-xl/8 transform transition-all duration-1000 ease-out ${
              isTextVisible 
                ? 'translate-y-0 opacity-100' 
                : 'translate-y-8 opacity-0'
            }`}
            style={{ transitionDelay: '300ms' }}>
              Come as you are to our warm, spirited space. Because life is more
              delicious when you take the time to truly enjoy it.
            </p>
            <div className={`mt-10 flex items-center gap-x-6 transform transition-all duration-1000 ease-out ${
              isTextVisible 
                ? 'translate-y-0 opacity-100' 
                : 'translate-y-8 opacity-0'
            }`}
            style={{ transitionDelay: '600ms' }}>
              <Link
                href="/chef"
                className="inline-block bg-amber-600 px-8 py-3 text-sm font-semibold tracking-widest text-white uppercase rounded-full hover:bg-amber-700 transition-colors duration-300 ease-out"
              >
                <span className="inline-block hover:scale-110 transition-transform duration-300 ease-out">
                  About our chef
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}