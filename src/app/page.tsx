import { RiMailLine } from "@remixicon/react";

/* eslint-disable @next/next/no-img-element */
export default function HomePage() {
  return (
    <main>
      <header className="px-6 py-4 sm:px-20 md:px-36 lg:px-28">
        <img src="/logo.svg" alt="logo" className="h-20 w-20" />
      </header>
      <section className="relative flex flex-col items-center gap-10 px-6 pb-20 pt-10 sm:px-20 md:px-36 lg:flex-row lg:items-start lg:gap-10 lg:px-28">
        <img
          src="waves.png"
          alt="Waves background"
          className="absolute bottom-0 left-0 -z-20 h-80 w-screen opacity-30"
        />
        <div className="absolute bottom-0 left-0 -z-10 h-80 w-screen bg-gradient-to-b from-transparent via-transparent to-neutral-950"></div>
        <div className="flex h-full flex-col items-center gap-10 lg:w-1/2 lg:max-w-md lg:items-start lg:justify-start">
          <div className="rounded-full border border-primary-500 bg-primary-800/40 px-3 py-1 text-sm tracking-tight">
            Currently in private beta
          </div>
          <h1 className="text-center text-5xl tracking-tight lg:text-start">
            MoneyGlitch is the Content Platform for traders
          </h1>
          <h2 className="text-center text-lg font-light tracking-tight text-neutral-400 lg:text-start">
            Create trading content and make money. Stop wasting time trying
            monetize your knowledge, get started in just few clicks.
          </h2>
          <div className="flex h-10 w-full items-center">
            <div className="relative grow">
              <input
                id="email"
                type="email"
                name="email"
                autoComplete="off"
                placeholder="Enter your email"
                className="z-10 w-full rounded-l-xl border border-neutral-600 bg-neutral-950 py-2.5 pl-12 pr-3 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary-600"
              />
              <label htmlFor="email">
                <RiMailLine className="absolute left-3 top-2.5 text-neutral-400" />
              </label>
            </div>
            <button className="rounded-r-xl border border-neutral-600 bg-neutral-950 p-2.5 font-medium tracking-tight hover:bg-neutral-800">
              Subscribe
            </button>
          </div>
          <div className="text-neutral-400">100+ traders subscribed</div>
        </div>
        <div className="flex grow items-center justify-center lg:w-1/2">
          <img
            src="/sculpture.png"
            alt="Coins"
            className="ml-auto w-full max-w-lg rotate-12 scale-125"
          />
        </div>
      </section>
    </main>
  );
}
