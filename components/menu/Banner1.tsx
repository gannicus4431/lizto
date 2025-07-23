import Link from 'next/link'
import { useEffect, useState, useRef } from "react";

export default function Banner1() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Intersection Observer for the entire section
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.2, // Trigger when 20% of the element is visible
        rootMargin: '0px 0px -50px 0px' // Start animation 50px before element comes into view
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="relative" ref={sectionRef}>
      <div className="py-16 px-4" style={{ backgroundColor: "#faf7f0" }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Column - Content */}
            <div>
              <h2 className={`text-5xl md:text-7xl font-serif text-amber-900 leading-tight mb-6 transform transition-all duration-1000 ease-out ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-8 opacity-0'
              }`}>
                Our Menu
              </h2>
              <p className={`text-lg md:text-xl text-amber-800 leading-relaxed mb-8 transform transition-all duration-1000 ease-out ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: '200ms' }}>
                Discover our carefully crafted dishes, made with the finest
                ingredients.{" "}
              </p>
              
              <div>
                <div className={`transform transition-all duration-1000 ease-out ${
                  isVisible 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: '400ms' }}>
                  <Link
                    href="/brunch"
                    className="inline-block bg-amber-600 px-8 py-3 text-sm font-semibold tracking-widest text-white uppercase rounded-full hover:bg-amber-700 transition-all duration-300 ease-out transform hover:scale-105"
                  >
                    <span className="inline-block hover:scale-110 transition-transform duration-300 ease-out">
                      brunch
                    </span>
                  </Link>
                </div>
                <br />
                <div className={`transform transition-all duration-1000 ease-out ${
                  isVisible 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: '600ms' }}>
                  <Link
                    href="/lunch-dinner"
                    className="inline-block bg-amber-600 px-8 py-3 text-sm font-semibold tracking-widest text-white uppercase rounded-full hover:bg-amber-700 transition-all duration-300 ease-out transform hover:scale-105"
                  >
                    <span className="inline-block hover:scale-110 transition-transform duration-300 ease-out">
                      lunch & dinner
                    </span>
                  </Link>
                </div>
                <br />
                <div className={`transform transition-all duration-1000 ease-out ${
                  isVisible 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: '800ms' }}>
                  <Link
                    href="/high-tea"
                    className="inline-block bg-amber-600 px-8 py-3 text-sm font-semibold tracking-widest text-white uppercase rounded-full hover:bg-amber-700 transition-all duration-300 ease-out transform hover:scale-105"
                  >
                    <span className="inline-block hover:scale-110 transition-transform duration-300 ease-out">
                      High Tea
                    </span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className={`relative h-120 overflow-hidden rounded-lg transform transition-all duration-1200 ease-out ${
              isVisible 
                ? 'translate-x-0 opacity-100 scale-100' 
                : 'translate-x-8 opacity-0 scale-95'
            }`}
            style={{ transitionDelay: '300ms' }}>
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out hover:scale-110"
                style={{ backgroundImage: "url(/images/menu/2.2.webp)" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}