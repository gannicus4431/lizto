import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";

const Banner1 = () => {
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
        rootMargin: "0px 0px -50px 0px", // Start animation 50px before element comes into view
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
            alt="Chef Tom portrait"
            src="/images/chef/tom.png"
            className="w-full h-full bg-amber-50 object-cover"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
            priority
          />
        </div>

        {/* Text Content - Shows second on mobile, first on desktop */}
        <div
          className="px-6 pb-24 sm:pb-32 order-2 lg:order-1 lg:col-span-7 lg:px-0 lg:pt-40 lg:pb-48 xl:col-span-6"
          ref={textRef}
        >
          <div className="mx-auto max-w-lg lg:mx-0">
            <h1
              className={`mt-24 text-5xl font-normal tracking-tight text-pretty text-amber-900 sm:mt-10 sm:text-7xl transform transition-all duration-1000 ease-out ${
                isTextVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{ fontFamily: "'Crimson Text', serif" }}
            >
              Our Chef:
            </h1>

            <div
              className={`mt-8 space-y-6 text-lg font-medium text-pretty text-amber-700 sm:text-xl/8 transform transition-all duration-1000 ease-out ${
                isTextVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: "300ms" }}
            >
              <p>
                Hailing from Hong Kong, Chef Tom began his culinary journey at a
                young age, driven by an enduring passion for food and the joy it
                brings to people. His path has taken him through some of the
                most refined kitchens in the city, including the
                Michelin-starred <em>Odyssee</em> and the prestigious{" "}
                <em>St. Regis</em>.
              </p>

              <p>
                Years of dedication in these world-class establishments have
                shaped Tom&apos;s deep respect for precision, technique, and the
                art of balancing bold and subtle flavors. His cooking reflects
                not only the influence of haute cuisine but also the soulful
                tastes of his upbringing — dishes that connect memory, heritage,
                and innovation.
              </p>

              <p>
                Now entering a new chapter, Tom continues to channel his
                experience into creating thoughtful, expressive cuisine, one
                plate at a time, honoring both his roots and the evolution of
                his craft.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner1;
