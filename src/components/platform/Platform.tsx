import { useEffect, useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";

const platform = [
  {
    id: "sales",
    name: "Sales",
    description:
      "Track leads through your pipeline, send quotes, manage deals, and keep your sales process moving.",
    points: [
      "Visual sales pipeline",
      "Quote & proposal builder",
      "Revenue forecasting",
      "Commission tracking",
    ],
    button: "Explore Sales",
  },
  {
    id: "finance",
    name: "Finance",
    description:
      "Stay on top of your business finances with clear records, automated invoicing, and actionable insights.",
    points: [
      "Invoicing and payment tracking",
      "Expense management",
      "Cash flow monitoring",
      "Financial reports",
    ],
    button: "Explore Finance",
  },
  {
    id: "inventory",
    name: "Inventory",
    description:
      "Manage your stock, monitor product movement, and know what is available across your business.",
    points: [
      "Real-time stock tracking",
      "Low-stock alerts",
      "Purchase order management",
      "Inventory valuation",
    ],
    button: "Explore Inventory",
  },
  {
    id: "workspace",
    name: "Workspace",
    description:
      "Bring your business operations together in one organized workspace built around the way your team works.",
    points: [
      "Central business dashboard",
      "Tasks and team collaboration",
      "Shared files and documents",
      "Business activity overview",
    ],
    button: "Explore Workspace",
  },
  {
    id: "crm",
    name: "CRM",
    description:
      "Build stronger customer relationships with organized contact records, follow-ups, and customer insights.",
    points: [
      "Centralized customer records",
      "Customer interaction history",
      "Follow-up reminders",
      "Customer relationship insights",
    ],
    button: "Explore CRM",
  },
  {
    id: "hr",
    name: "HR",
    description:
      "Simplify people operations, keep employee information organized, and support your team as it grows.",
    points: [
      "Employee records",
      "Leave and attendance tracking",
      "Team roles and permissions",
      "HR documents and workflows",
    ],
    button: "Explore HR",
  },
] as const;

type PlatformName = (typeof platform)[number]["name"];

function PlatformIllustration({
  activePlatform,
}: {
  activePlatform: PlatformName;
}) {
  return (
    <div className="relative mx-auto flex min-h-[320px] w-full max-w-[520px] items-center justify-center sm:min-h-[380px]">
      <div className="absolute right-[8%] top-[8%] h-56 w-56 rounded-full bg-teal-400/10 blur-3xl" />

      <div className="relative w-full max-w-[460px]">
        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-xl shadow-slate-900/5 dark:border-slate-700 dark:bg-slate-900 sm:p-5">
          <div className="mb-5 flex items-center justify-between gap-3">
            <div>
              <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                Moyem workspace
              </p>
              <h3 className="mt-1 text-lg font-bold text-slate-900 dark:text-white">
                {activePlatform} overview
              </h3>
            </div>
            <span className="rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-800 dark:bg-teal-950 dark:text-teal-300">
              Live
            </span>
          </div>

          <div className="grid grid-cols-3 gap-2 sm:gap-3">
            {["Overview", "Activity", "Reports"].map((item, index) => (
              <div
                key={item}
                className={`rounded-xl border p-3 ${
                  index === 0
                    ? "border-teal-200 bg-teal-50 dark:border-teal-900 dark:bg-teal-950/50"
                    : "border-slate-100 bg-slate-50 dark:border-slate-800 dark:bg-slate-800/60"
                }`}
              >
                <div className="mb-3 h-2 w-10 rounded-full bg-slate-200 dark:bg-slate-700" />
                <div
                  className={`h-5 w-12 rounded-md ${
                    index === 0
                      ? "bg-teal-500/70"
                      : "bg-slate-200 dark:bg-slate-700"
                  }`}
                />
                <p className="mt-2 text-[10px] text-slate-500 dark:text-slate-400">
                  {item}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-4 rounded-xl border border-slate-100 p-3 dark:border-slate-800 sm:p-4">
            <div className="mb-4 flex items-center justify-between">
              <div className="h-2.5 w-24 rounded-full bg-slate-200 dark:bg-slate-700" />
              <div className="h-2 w-12 rounded-full bg-teal-200 dark:bg-teal-900" />
            </div>
            <svg
              viewBox="0 0 400 150"
              className="h-auto w-full"
              role="img"
              aria-label={`${activePlatform} activity chart illustration`}
            >
              {[25, 60, 95, 130].map((y) => (
                <line
                  key={y}
                  x1="0"
                  y1={y}
                  x2="400"
                  y2={y}
                  stroke="currentColor"
                  className="text-slate-100 dark:text-slate-800"
                  strokeWidth="1"
                  strokeDasharray="4 5"
                />
              ))}
              <path
                d="M 8 120 C 48 112, 58 90, 94 96 S 145 62, 180 75 S 230 42, 266 58 S 330 30, 392 12"
                fill="none"
                stroke="#0d9488"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <path
                d="M 8 120 C 48 112, 58 90, 94 96 S 145 62, 180 75 S 230 42, 266 58 S 330 30, 392 12 L 392 145 L 8 145 Z"
                fill="#0d9488"
                opacity="0.08"
              />
              {[
                [94, 96],
                [180, 75],
                [266, 58],
                [392, 12],
              ].map(([cx, cy]) => (
                <circle
                  key={`${cx}-${cy}`}
                  cx={cx}
                  cy={cy}
                  r="5"
                  fill="#0d9488"
                  stroke="white"
                  strokeWidth="2"
                />
              ))}
            </svg>
          </div>

          <div className="mt-4 flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-teal-100 dark:bg-teal-900/60" />
            <div className="flex-1">
              <div className="h-2 w-28 rounded-full bg-slate-200 dark:bg-slate-700" />
              <div className="mt-2 h-2 w-20 rounded-full bg-slate-100 dark:bg-slate-800" />
            </div>
            <div className="h-7 w-16 rounded-lg bg-teal-700/10 dark:bg-teal-400/10" />
          </div>
        </div>

        <div className="absolute -bottom-5 -left-4 hidden rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-lg dark:border-slate-700 dark:bg-slate-900 sm:block">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-300">
              <Check size={18} />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-900 dark:text-white">
                All in one place
              </p>
              <p className="text-[10px] text-slate-500 dark:text-slate-400">
                Your business, connected
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Platform() {
  const [activePlatform, setActivePlatform] = useState<PlatformName>("Sales");

  useEffect(() => {
    const syncPlatformFromHash = () => {
      const hash = window.location.hash.replace("#platform-", "");

      const matchedPlatform = platform.find((item) => item.id === hash);

      if (matchedPlatform) {
        setActivePlatform(matchedPlatform.name);
      }
    };

    syncPlatformFromHash();
    window.addEventListener("hashchange", syncPlatformFromHash);

    return () => {
      window.removeEventListener("hashchange", syncPlatformFromHash);
    };
  }, []);

  const selectedPlatform =
    platform.find((p) => p.name === activePlatform) ?? platform[0];

  const selectPlatform = (name: PlatformName) => {
    const selected = platform.find((item) => item.name === name);

    if (!selected) return;

    setActivePlatform(selected.name);
    window.history.replaceState(null, "", `#platform-${selected.id}`);
  };

  return (
    <section
      id="platform"
      className="bg-[var(--color-page)] px-5 py-20 text-[var(--color-text)] transition-colors duration-300 sm:px-8 lg:px-12 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-bold uppercase tracking-wide text-[var(--color-text)] sm:text-4xl lg:text-5xl">
            Six tools. One platform.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[var(--color-muted)] sm:text-base">
            Replace the stack of disconnected apps your team uses every day with
            a single workspace built for how businesses actually work.
          </p>
        </div>

        <div
          className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:mt-12 sm:gap-5"
          role="tablist"
          aria-label="Moyem business tools"
        >
          {platform.map((p) => {
            const isActive = activePlatform === p.name;

            return (
              <button
                key={p.name}
                type="button"
                role="tab"
                id={`tab-${p.id}`}
                aria-selected={isActive}
                aria-controls="platform-panel"
                onClick={() => selectPlatform(p.name)}
                className={`min-w-[108px] rounded-full border px-6 py-2.5 text-sm transition-all duration-200 sm:min-w-[120px] sm:px-8 sm:text-base ${
                  isActive
                    ? "border-teal-800 bg-transparent font-medium text-teal-800 dark:border-teal-400 dark:text-teal-300"
                    : "border-[var(--color-border)] text-[var(--color-muted)] hover:border-teal-600 hover:text-teal-700 dark:hover:border-teal-400 dark:hover:text-teal-300"
                }`}
              >
                {p.name}
              </button>
            );
          })}
        </div>

        <div
          id="platform-panel"
          role="tabpanel"
          aria-labelledby={`tab-${selectedPlatform.id}`}
          className="mt-14 grid items-center gap-12 lg:mt-16 lg:grid-cols-2 lg:gap-16"
        >
          <div className="max-w-xl">
            <h3 className="font-heading text-3xl font-bold tracking-tight text-[var(--color-text)] sm:text-4xl">
              {selectedPlatform.name}
            </h3>

            <p className="mt-4 max-w-md text-sm leading-7 text-[var(--color-muted)] sm:text-base">
              {selectedPlatform.description}
            </p>

            <ul className="mt-7 space-y-4">
              {selectedPlatform.points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <Check
                    size={20}
                    strokeWidth={2}
                    className="mt-0.5 shrink-0 text-[var(--color-text)]"
                    aria-hidden="true"
                  />
                  <span className="text-base leading-6 text-[var(--color-text)] sm:text-lg">
                    {point}
                  </span>
                </li>
              ))}
            </ul>

            <a
              href={`#platform-${selectedPlatform.id}`}
              onClick={(event) => {
                event.preventDefault();
                selectPlatform(selectedPlatform.name);
                document.getElementById("platform-panel")?.scrollIntoView({
                  behavior: "smooth",
                  block: "center",
                });
              }}
              className="mt-10 inline-flex items-center gap-2 rounded-2xl bg-teal-800 px-5 py-4 text-sm font-medium text-white transition hover:bg-teal-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 dark:bg-teal-600 dark:hover:bg-teal-500"
            >
              {selectedPlatform.button}
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>

          <PlatformIllustration activePlatform={selectedPlatform.name} />
        </div>
      </div>
    </section>
  );
}
