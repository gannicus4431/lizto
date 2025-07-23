import React, { useEffect, useState, useRef } from "react";

const Map = () => {
  const [isMapVisible, setIsMapVisible] = useState(false);
  const mapRef = useRef(null);

  useEffect(() => {
    // Store the current ref value in a variable
    const currentRef = mapRef.current;

    // Intersection Observer for the map section
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsMapVisible(true);
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
    <div className="relative bg-white py-16 sm:py-24" ref={mapRef}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2
            className={`text-4xl font-normal tracking-tight text-amber-900 sm:text-5xl transform transition-all duration-1000 ease-out ${
              isMapVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
            style={{ fontFamily: "'Crimson Text', serif" }}
          >
            Visit Us
          </h2>
          <p
            className={`mt-6 text-lg text-amber-700 font-medium transform transition-all duration-1000 ease-out ${
              isMapVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            Find us in the heart of Tsuen Wan
          </p>
        </div>
                {/* Google Maps Embed */}
        <div
          className={`mt-8 transform transition-all duration-1000 ease-out ${
            isMapVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "900ms" }}
        >
          <div className="overflow-hidden rounded-2xl shadow-2xl border border-amber-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3689.5586146905666!2d114.11191937718694!3d22.37028914035129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3403f9fb4c0ffe19%3A0xd34272531fa69ea4!2sLizto!5e0!3m2!1sen!2ssg!4v1753262792733!5m2!1sen!2ssg"
              width="100%"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lizto Restaurant Location"
              className="w-full"
            />
          </div>
        </div>

        {/* Contact Information */}
        <div
          className={`mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center transform transition-all duration-1000 ease-out ${
            isMapVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "600ms" }}
        >
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-amber-900">Location</h3>
            <p className="text-amber-700 text-sm">
              荃灣荃新天地一期地下G75A號舖
              <br />
              (花園廣場旁）
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-amber-900">Phone</h3>
            <p className="text-amber-700 text-sm">
              <a
                href="tel:28860603"
                className="hover:text-amber-900 transition-colors"
              >
                28860603
              </a>
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-amber-900">Email</h3>
            <p className="text-amber-700 text-sm">
              <a
                href="mailto:info@liztohk.com"
                className="hover:text-amber-900 transition-colors"
              >
                info@liztohk.com
              </a>
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-amber-900">Hours</h3>
            <p className="text-amber-700 text-sm">
              Mon - Sun
              <br />
              11:30 - 21:30
            </p>
          </div>
        </div>



        {/* Directions Button */}
        <div
          className={`mt-8 text-center transform transition-all duration-1000 ease-out ${
            isMapVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "1200ms" }}
        >
          <a
            href="https://www.google.com/maps/place/Lizto/@22.37028914035129,114.11191937718694,17z/data=!3m1!4b1!4m6!3m5!1s0x3403f9fb4c0ffe19:0xd34272531fa69ea4!8m2!3d22.37028914035129!4d114.11191937718694!16s%2Fg%2F11y3k8s6qr?entry=ttu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-amber-600 px-8 py-3 text-sm font-semibold tracking-widest text-white uppercase rounded-full hover:bg-amber-700 transition-colors duration-300 ease-out"
          >
            <span className="inline-block hover:scale-110 transition-transform duration-300 ease-out">
              Get Directions
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Map;
