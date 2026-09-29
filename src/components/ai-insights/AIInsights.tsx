import {
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  ChartNoAxesCombined,
  Lightbulb,
  ShieldAlert,
  Sparkles,
} from "lucide-react";

const insights = [
  {
    icon: ChartNoAxesCombined,
    category: "Revenue forecasting",
    title: "Anticipate your business performance",
    description:
      "Use sales history and business trends to estimate future revenue and identify potential cash-flow needs.",
    accent: "text-teal-600 dark:text-teal-400",
    background: "bg-teal-500/10",
  },
  {
    icon: ShieldAlert,
    category: "Early warnings",
    title: "Identify potential problems sooner",
    description:
      "Surface signals such as overdue invoices, low inventory, unusual spending, and projects at risk of delay.",
    accent: "text-amber-600 dark:text-amber-400",
    background: "bg-amber-500/10",
  },
  {
    icon: Lightbulb,
    category: "Smart recommendations",
    title: "Discover opportunities to work smarter",
    description:
      "Get data-informed suggestions to improve workflows, prioritize tasks, and make better use of resources.",
    accent: "text-blue-600 dark:text-blue-400",
    background: "bg-blue-500/10",
  },
];

export default function AIInsights() {
  return (
    <section
      id="ai-insights"
      className="overflow-hidden bg-[var(--color-surface)] px-5 py-20 text-[var(--color-text)] transition-colors duration-300 sm:px-8 sm:py-24 lg:px-12 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-teal-600/20 bg-teal-500/10 px-4 py-2 text-sm font-medium text-teal-700 dark:text-teal-300">
            <Sparkles size={16} aria-hidden="true" />
            Intelligent business insights
          </div>

          <h2 className="font-heading text-2xl font-bold uppercase leading-tight sm:text-3xl lg:text-4xl">
            Run your business.
            <br className="hidden sm:block" /> Make smarter decisions.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-[var(--color-muted)] sm:text-base">
            Moyem brings your business data together to help you understand
            performance, anticipate challenges, and discover opportunities to
            improve productivity.
          </p>
        </div>

        {/* Insight cards */}
        <div className="mt-14 grid gap-5 md:grid-cols-3 lg:mt-16">
          {insights.map((insight) => {
            const Icon = insight.icon;

            return (
              <article
                key={insight.category}
                className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-page)] p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-7"
              >
                <div
                  className={`mb-6 flex h-12 w-12 items-center justify-center rounded-xl ${insight.background} ${insight.accent}`}
                >
                  <Icon size={23} aria-hidden="true" />
                </div>

                <p
                  className={`mb-3 text-xs font-semibold uppercase tracking-wider ${insight.accent}`}
                >
                  {insight.category}
                </p>

                <h3 className="text-lg font-semibold leading-snug">
                  {insight.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                  {insight.description}
                </p>
              </article>
            );
          })}
        </div>

        {/* AI preview panel */}
        <div className="mt-10 overflow-hidden rounded-3xl border border-teal-700/20 bg-[#0d5553] text-white shadow-xl sm:mt-14">
          <div className="grid items-center gap-8 p-6 sm:p-9 lg:grid-cols-[1fr_1.05fr] lg:gap-12 lg:p-12">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-medium text-teal-100">
                <BrainCircuit size={15} aria-hidden="true" />
                Moyem AI Command Center
              </div>

              <h3 className="font-heading text-2xl font-bold leading-tight sm:text-3xl">
                From business data to your next smart move.
              </h3>

              <p className="mt-4 text-sm leading-7 text-teal-50/85">
                Get a clearer picture of your business with insights that
                connect activity across your workspace and help you decide what
                deserves attention.
              </p>

              <a
                href="#final-cta"
                className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#0d5553] transition-colors hover:bg-teal-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#0d5553]"
              >
                Explore Moyem
                <ArrowRight size={16} aria-hidden="true" />
              </a>
            </div>

            {/* Illustrative AI insight preview */}
            <div className="rounded-2xl border border-white/15 bg-[#083f3e] p-4 shadow-inner sm:p-6">
              <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal-400/15 text-teal-200">
                    <Sparkles size={18} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Business insight</p>
                    <p className="mt-0.5 text-xs text-teal-100/60">
                      Illustrative example
                    </p>
                  </div>
                </div>
                <span className="rounded-full bg-teal-300/10 px-2.5 py-1 text-xs text-teal-200">
                  Sample
                </span>
              </div>

              <div className="pt-5">
                <p className="text-xs font-medium uppercase tracking-wider text-teal-200">
                  Sales trend
                </p>
                <h4 className="mt-2 text-xl font-semibold leading-snug sm:text-2xl">
                  Your sales activity is changing
                </h4>
                <p className="mt-3 text-sm leading-6 text-teal-50/75">
                  Moyem could highlight shifts in sales activity and help you
                  review the underlying transactions and trends.
                </p>
              </div>

              <div className="mt-5 rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 rounded-lg bg-teal-300/15 p-2 text-teal-200">
                    <Lightbulb size={17} aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold">Suggested action</p>
                    <p className="mt-1 text-xs leading-5 text-teal-50/75">
                      Review your top-performing products, compare recent sales
                      with previous periods, and assess whether stock levels
                      need adjustment.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-2 text-xs text-teal-100/60">
                <ArrowUpRight size={14} aria-hidden="true" />
                Example of a potential data-informed recommendation
              </div>
            </div>
          </div>
        </div>

        <p className="mx-auto mt-5 max-w-3xl text-center text-xs leading-5 text-[var(--color-muted)]">
          Forecasts and recommendations depend on the business data available,
          its quality, and the capabilities enabled in the subscriber's plan.
        </p>
      </div>
    </section>
  );
}
