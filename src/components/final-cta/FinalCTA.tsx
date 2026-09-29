import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section
      id="final-cta"
      className="bg-[var(--color-page)] px-5 py-24 text-center text-[var(--color-text)] transition-colors duration-300 sm:px-8 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-5xl">
        <h2 className="mx-auto max-w-6xl font-heading text-[clamp(1.4rem,2.2vw,2.2rem)] font-bold uppercase leading-tight tracking-wide text-[var(--color-text)]">
          The marketing platform
          <br />
          built to scale with your
          <br />
          business
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-[var(--color-text)] sm:text-base">
          Join the Moyem waitlist and be among the first to experience a simpler
          way to manage your business.
        </p>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8">
          <a
            href="#waitlist"
            className="inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-2xl bg-[#0d5553] px-6 py-4 text-sm font-medium text-white transition-colors hover:bg-[#094543] focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 sm:w-auto"
          >
            Join the Waitlist
            <ArrowRight size={16} aria-hidden="true" />
          </a>

          {/*
          <a
            href="#demo"
            className="inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-2xl border border-[#0d5553] bg-transparent px-6 py-4 text-sm font-medium text-[#0d5553] transition-colors hover:bg-[#0d5553]/5 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 dark:border-teal-400 dark:text-teal-300 dark:hover:bg-teal-400/10 sm:w-auto"
          >
            <CalendarDays size={16} aria-hidden="true" />
            Book a Demo
          </a>
          */}
        </div>
      </div>
    </section>
  );
}
