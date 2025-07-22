import Image from "next/image";
import { useEffect, useState, useRef } from "react";

export default function Hero2() {
  const [isTextVisible, setIsTextVisible] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    // Intersection Observer for the "Good food, great company" text
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

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);

  return (
    <div className="bg-amber-50 py-24 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Main Headline */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-semibold tracking-tight text-amber-900 sm:text-5xl lg:text-4xl">
            A meal may be simple, but it&apos;s a moment worth cherishing.
          </h1>
        </div>

        {/* Restaurant Image - Centered with Border */}
        <div className="flex justify-center mb-16 -mx-6 sm:mx-0">
          <div>
            <Image
              alt="Elegant restaurant interior with stained glass window"
              src="/images/2.jpg"
              className="w-screen sm:w-full sm:max-w-4xl h-64 sm:h-120 object-cover"
              width={2070}
              height={1380}
              priority
            />
          </div>
        </div>

        <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-2 lg:gap-x-12">
          {/* Left Column */}
          <div ref={textRef}>
            <h1
              className={`mt-24 text-5xl font-normal tracking-tight text-pretty text-amber-900 sm:mt-10 sm:text-7xl transform transition-all duration-1000 ease-out ${
                isTextVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-8 opacity-0'
              }`}
              style={{ fontFamily: "'Crimson Text', serif" }}
            >
              Good food, great company.
            </h1>
          </div>

          {/* Right Column */}
          <div>
            {/* Description Text */}
            <div className={`text-amber-800 leading-relaxed space-y-4 mb-8 transform transition-all duration-1000 ease-out ${
              isTextVisible 
                ? 'translate-y-0 opacity-100' 
                : 'translate-y-8 opacity-0'
            }`}
            style={{ transitionDelay: '300ms' }}>
              <p className="mt-8 text-lg font-medium text-pretty text-amber-700 sm:text-xl/8">
                Welcome to Lizto, a pasta sanctuary where tradition and
                imagination meet. Founded by Chef Tom Choi, whose journey
                includes time in Michelin-starred kitchens, Lizto brings the
                finesse of fine dining to the comforting soul of handmade pasta.
                Inspired by the warmth of Italian home-cooking and the joy of
                shared meals, every dish here tells a story—crafted with heart,
                shaped by hand, and served with purpose.{" "}
              </p>
            </div>

            {/* Call to Action Button */}
            <a
              href="/menu"
              className={`inline-block bg-amber-600 px-8 py-3 text-sm font-semibold tracking-widest text-white uppercase rounded-full hover:bg-amber-700 transition-all duration-300 ease-out transform ${
                isTextVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: '600ms' }}
            >
              <span className="inline-block hover:scale-110 transition-transform duration-300 ease-out">
                see our menu
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}