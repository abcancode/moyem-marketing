import HeroNetwork from "./HeroNetwork";

export default function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-80px)] w-full items-center justify-center overflow-hidden bg-white px-6 py-20 transition-colors duration-300 dark:bg-[#101827]">
      {/* Decorative animated network background */}
      <HeroNetwork />

      {/* Main Hero content */}
      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center text-center">
        {/* Main heading */}
        <h1 className="font-heading text-2xl font-normal leading-tight tracking-normal text-black transition-colors duration-300 dark:text-white sm:text-3xl md:text-4xl lg:text-5xl">
          Build and manage
          <br />
          your business with ease
        </h1>

        {/* Supporting description */}
        <p className="mt-5 font-body text-sm font-normal text-gray-800 transition-colors duration-300 dark:text-slate-300 sm:text-base md:text-lg">
          A unified Business Operating System.
        </p>

        {/* Waiting list button */}
        <a
          href="#waitlist"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-[#0D5553] px-8 py-4 font-body text-sm font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#08736F] hover:shadow-lg"
        >
          Join the waiting list
        </a>
      </div>
    </section>
  );
}
