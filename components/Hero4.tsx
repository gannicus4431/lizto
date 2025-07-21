import Image from "next/image";

export default function Hero4() {
  return (
    <div className="bg-amber-50">
      <main>
        <div className="relative isolate">
          <svg
            aria-hidden="true"
            className="absolute inset-x-0 top-0 -z-10 h-256 w-full mask-[radial-gradient(32rem_32rem_at_center,white,transparent)] stroke-amber-200"
          >
            <svg x="50%" y={-1} className="overflow-visible fill-amber-100">
              <path
                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              fill="url(#hero4-pattern)"
              width="100%"
              height="100%"
              strokeWidth={0}
            />
          </svg>

          <div
            aria-hidden="true"
            className="absolute top-0 right-0 left-1/2 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
          >
            <div
              style={{
                clipPath:
                  "polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)",
              }}
              className="aspect-801/1036 w-200.25 bg-gradient-to-tr from-amber-300 to-orange-300 opacity-40"
            />
          </div>

          <div className="overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 pt-18 pb-32 sm:pt-60 lg:px-8 lg:pt-32">
              <div className="mx-auto max-w-2xl gap-x-14 flex flex-col-reverse lg:mx-0 lg:flex-row lg:max-w-none lg:items-center">
                {/* TEXT */}
                <div className="relative w-full mt-12 lg:max-w-xl lg:shrink-0 xl:max-w-2xl">
                  <h1
                    className="text-5xl font-normal tracking-tight text-pretty text-amber-900 sm:text-7xl"
                    style={{ fontFamily: "'Crimson Text', serif" }}
                  >
                    Crafting memories, one dish at a time
                  </h1>
                  <p className="mt-8 text-lg font-medium text-pretty text-amber-700 sm:max-w-md sm:text-xl/8 lg:max-w-none">
                    From our kitchen to your table, every plate tells the story
                    of passion, tradition, and the art of handmade pasta. Join
                    us in celebrating the simple pleasure of exceptional food
                    shared with those you love.
                  </p>
                  <div className="mt-10 flex items-center gap-x-6">
                    <a
                      href="#"
                      className="inline-block bg-amber-600 px-8 py-3 text-sm font-semibold tracking-widest text-white uppercase rounded-full hover:bg-amber-700 transition-colors duration-300 ease-out"
                    >
                      <span className="inline-block hover:scale-110 transition-transform duration-300 ease-out">
                        follow us
                      </span>
                    </a>
                  </div>
                </div>

                {/* IMAGES */}
                <div className="mt-1 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                  <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                    <div className="relative">
                      <Image
                        alt="Fresh handmade pasta in our kitchen"
                        src="/images/4.1.jpg"
                        className="aspect-2/3 w-full rounded-xl bg-amber-100/50 object-cover shadow-lg"
                        width={176}
                        height={264}
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-amber-200 ring-inset" />
                    </div>
                  </div>
                  <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                    <div className="relative">
                      <Image
                        alt="Chef preparing pasta with care"
                        src="/images/4.2.png"
                        className="aspect-2/3 w-full rounded-xl bg-amber-100/50 object-cover shadow-lg"
                        width={176}
                        height={264}
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-amber-200 ring-inset" />
                    </div>
                    <div className="relative">
                      <Image
                        alt="Elegant dining atmosphere"
                        src="/images/4.5.jpeg"
                        className="aspect-2/3 w-full rounded-xl bg-amber-100/50 object-cover shadow-lg"
                        width={176}
                        height={264}
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-amber-200 ring-inset" />
                    </div>
                  </div>
                  <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                    <div className="relative">
                      <Image
                        alt="Fresh ingredients and pasta making"
                        src="/images/4.4.jpeg"
                        className="aspect-2/3 w-full rounded-xl bg-amber-100/50 object-cover shadow-lg"
                        width={176}
                        height={264}
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-amber-200 ring-inset" />
                    </div>
                    <div className="relative">
                      <Image
                        alt="Beautifully plated pasta dishes"
                        src="/images/4.3.jpg"
                        className="aspect-2/3 w-full rounded-xl bg-amber-100/50 object-cover shadow-lg"
                        width={176}
                        height={264}
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-amber-200 ring-inset" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
