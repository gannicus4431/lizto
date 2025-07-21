import Image from "next/image";

export default function Hero3() {
  return (
    <div className="relative bg-white">
      <div className="mx-auto max-w-7xl flex flex-col lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        {/* Image - Shows first on mobile, second on desktop */}
        <div className="relative h-64 sm:h-80 order-1 lg:order-2 lg:col-span-5 lg:h-auto lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
          <Image
            alt="Elegant restaurant interior with handmade pasta station"
            src="/images/3.png"
            className="w-full h-full bg-amber-50 object-cover"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
            priority
          />
        </div>

        {/* Text Content - Shows second on mobile, first on desktop */}
        <div className="px-6 pt-10 pb-24 sm:pb-32 order-2 lg:order-1 lg:col-span-7 lg:px-0 lg:pt-40 lg:pb-48 xl:col-span-6">
          <div className="mx-auto max-w-lg lg:mx-0">
            <h1
              className="mt-24 text-5xl font-normal tracking-tight text-pretty text-amber-900 sm:mt-10 sm:text-7xl"
              style={{ fontFamily: "'Crimson Text', serif" }}
            >
              Every dish tells a story, every bite creates a memory
            </h1>
            <p className="mt-8 text-lg font-medium text-pretty text-amber-700 sm:text-xl/8">
              Come as you are to our warm, spirited space. Because life is more
              delicious when you take the time to truly enjoy it.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <a
                href="#"
                className="inline-block bg-amber-600 px-8 py-3 text-sm font-semibold tracking-widest text-white uppercase rounded-full hover:bg-amber-700 transition-colors duration-300 ease-out"
              >
                <span className="inline-block hover:scale-110 transition-transform duration-300 ease-out">
                  more about us
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}