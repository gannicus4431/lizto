import Image from "next/image";

export default function Banner1() {
  return (
    <section className="relative">
      {/* Image Section */}
      <div className="relative h-96 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: "url(/images/menu/2.1.jpg)" }}
        />
      </div>

      {/* Text Content Below Image */}
      <div className="py-16 px-4" style={{ backgroundColor: "#faf7f0" }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            {/* Left Column - Title */}
            <div>
              <h2 className="text-5xl md:text-7xl font-serif text-amber-900 leading-tight">
                Our Menu
              </h2>
                            <p className="text-lg md:text-xl text-amber-800 leading-relaxed mb-8">
                Discover our carefully crafted dishes, made with the finest
                ingredients.{" "}
              </p>
            </div>

            {/* Right Column - Description and Buttons */}
            <div>

              <div className="space-y-4">
                <a
                  href="#"
                  className="inline-block bg-amber-600 px-8 py-3 text-sm font-semibold tracking-widest text-white uppercase rounded-full hover:bg-amber-700 transition-all duration-300 ease-out transform hover:scale-105"
                >
                  <span className="inline-block hover:scale-110 transition-transform duration-300 ease-out">
                    brunch
                  </span>
                </a>
                <br />
                <a
                  href="#"
                  className="inline-block bg-amber-600 px-8 py-3 text-sm font-semibold tracking-widest text-white uppercase rounded-full hover:bg-amber-700 transition-all duration-300 ease-out transform hover:scale-105"
                >
                  <span className="inline-block hover:scale-110 transition-transform duration-300 ease-out">
                    lunch & dinner
                  </span>
                </a>
                <br />
                <a
                  href="#"
                  className="inline-block bg-amber-600 px-8 py-3 text-sm font-semibold tracking-widest text-white uppercase rounded-full hover:bg-amber-700 transition-all duration-300 ease-out transform hover:scale-105"
                >
                  <span className="inline-block hover:scale-110 transition-transform duration-300 ease-out">
                    High Tea
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
