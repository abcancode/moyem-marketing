import { useEffect } from "react";

const steps = [
  {
    number: "01",
    title: "Set up your workspace",
    description:
      "Tell us about your business in 60 seconds. We activate only the modules you need, so your dashboard isn't cluttered with things you won't use.",
    visual: "workspace",
    visualLabel: "Business workspace setup",
  },
  {
    number: "02",
    title: "Invite your team",
    description:
      "Add team members and set their roles. Everyone sees exactly what they need: sales reps see pipelines, accountants see invoices, warehouse staff see stock.",
    visual: "team",
    visualLabel: "Team collaboration",
  },
  {
    number: "03",
    title: "Run your business",
    description:
      "Everything talks to everything. A closed deal triggers an invoice. A low-stock item triggers a purchase order. Less manual work, fewer mistakes.",
    visual: "dashboard",
    visualLabel: "Connected business dashboard",
  },
] as const;

function StepVisual({
  type,
  label,
}: {
  type: (typeof steps)[number]["visual"];
  label: string;
}) {
  return (
    <div
      role="img"
      aria-label={label}
      className="relative flex min-h-[230px] w-full items-center justify-center overflow-hidden rounded-sm border border-white/10 bg-[#0b4947] p-5 sm:min-h-[280px] lg:min-h-[300px]"
    >
      {type === "workspace" && (
        <div className="gs-float gs-dashboard-enter w-full max-w-[480px] rounded-xl border border-slate-200/70 bg-slate-50 p-4 shadow-2xl shadow-black/20 sm:p-5">
          <div className="flex items-center justify-between border-b border-slate-200 pb-3">
            <div>
              <div className="h-2 w-24 rounded bg-slate-300" />
              <div className="mt-2 h-2 w-36 rounded bg-slate-200" />
            </div>
            <div className="gs-soft-pulse h-7 w-7 rounded-full bg-teal-600/20" />
          </div>

          <div className="mt-4 grid grid-cols-3 gap-2">
            {["Sales", "Finance", "Inventory"].map((name, index) => (
              <div
                key={name}
                className={`gs-card-enter rounded-lg border p-3 ${
                  index === 0
                    ? "border-teal-500 bg-teal-50"
                    : "border-slate-200 bg-white"
                }`}
                style={{ animationDelay: `${index * 180}ms` }}
              >
                <div
                  className={`mb-3 h-6 w-6 rounded-md ${
                    index === 0 ? "bg-teal-600" : "bg-slate-200"
                  }`}
                />
                <p className="text-[10px] font-semibold text-slate-700 sm:text-xs">
                  {name}
                </p>
                <div className="mt-2 h-1.5 w-full rounded bg-slate-200" />
                <div className="mt-1.5 h-1.5 w-2/3 rounded bg-slate-100" />
              </div>
            ))}
          </div>

          <div className="gs-card-enter mt-3 rounded-lg border border-slate-200 bg-white p-3">
            <div className="mb-3 h-2 w-28 rounded bg-slate-200" />
            <div className="flex h-[45px] items-end gap-2">
              {[38, 62, 48, 78, 56, 90, 68, 100, 76].map((height, index) => (
                <div
                  key={index}
                  className="gs-bar-grow flex-1 rounded-t-sm bg-teal-600/80"
                  style={{
                    height: `${height * 0.45}px`,
                    animationDelay: `${500 + index * 90}ms`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {type === "team" && (
        <div className="gs-float gs-dashboard-enter relative w-full max-w-[480px]">
          <div className="rounded-xl border border-slate-200/70 bg-slate-50 p-4 shadow-2xl shadow-black/20 sm:p-5">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <div className="h-2.5 w-28 rounded bg-slate-300" />
                <div className="mt-2 h-2 w-40 rounded bg-slate-200" />
              </div>
              <div className="gs-invite-pulse rounded-md bg-teal-700 px-3 py-2 text-[10px] font-semibold text-white">
                + Invite
              </div>
            </div>

            <div className="space-y-3">
              {[
                { initials: "AM", name: "Alex Morgan", role: "Administrator" },
                { initials: "JD", name: "Jordan Davis", role: "Sales manager" },
                { initials: "SK", name: "Sam Kelly", role: "Finance" },
              ].map((member, index) => (
                <div
                  key={member.initials}
                  className="gs-member-enter flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-3"
                  style={{ animationDelay: `${index * 220}ms` }}
                >
                  <div
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[10px] font-bold ${
                      index === 0
                        ? "bg-teal-100 text-teal-800"
                        : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    {member.initials}
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="truncate text-xs font-semibold text-slate-800">
                      {member.name}
                    </p>
                    <p className="mt-1 text-[10px] text-slate-500">
                      {member.role}
                    </p>
                  </div>

                  <div className="gs-status-pulse rounded-full bg-emerald-50 px-2 py-1 text-[9px] font-medium text-emerald-700">
                    Active
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="gs-notice-enter absolute -bottom-3 -right-2 hidden rounded-lg border border-teal-100 bg-white px-3 py-2 shadow-xl sm:block">
            <p className="text-[10px] font-semibold text-slate-700">
              Team connected
            </p>
            <p className="mt-1 text-[9px] text-teal-700">
              Roles and access configured
            </p>
          </div>
        </div>
      )}

      {type === "dashboard" && (
        <div className="gs-float gs-dashboard-enter w-full max-w-[500px] rounded-xl border border-slate-700 bg-[#071c22] p-3 shadow-2xl shadow-black/30 sm:p-4">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-[9px] font-medium text-slate-400">
                BUSINESS OVERVIEW
              </p>
              <p className="mt-1 text-xs font-semibold text-white sm:text-sm">
                Your business at a glance
              </p>
            </div>
            <div className="rounded-md border border-slate-600 px-2 py-1 text-[9px] text-slate-300">
              Last 30 days
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2">
            {[
              { label: "Revenue", value: "₦8.4M" },
              { label: "Orders", value: "1,284" },
              { label: "Growth", value: "+18.6%" },
            ].map((metric, index) => (
              <div
                key={metric.label}
                className="gs-metric-enter rounded-md border border-slate-700 bg-[#102b32] p-2 sm:p-3"
                style={{ animationDelay: `${index * 180}ms` }}
              >
                <p className="text-[8px] text-slate-400 sm:text-[9px]">
                  {metric.label}
                </p>
                <p className="mt-2 text-xs font-bold text-teal-300 sm:text-base">
                  {metric.value}
                </p>
              </div>
            ))}
          </div>

          <div className="gs-card-enter mt-3 rounded-md border border-slate-700 bg-[#102b32] p-3">
            <div className="mb-3 flex items-center justify-between">
              <p className="text-[9px] font-medium text-slate-300">
                Business performance
              </p>
              <span className="gs-soft-pulse text-[8px] text-teal-300">
                +12.4%
              </span>
            </div>

            <svg
              viewBox="0 0 400 130"
              className="h-auto w-full"
              aria-hidden="true"
            >
              {[25, 55, 85, 115].map((y) => (
                <line
                  key={y}
                  x1="0"
                  y1={y}
                  x2="400"
                  y2={y}
                  stroke="#29434a"
                  strokeWidth="1"
                  strokeDasharray="4 5"
                />
              ))}

              <path
                d="M 4 105 C 35 100, 45 75, 82 83 S 133 48, 164 64 S 217 31, 251 45 S 310 27, 344 34 S 375 16, 396 10 L 396 125 L 4 125 Z"
                fill="#0d9488"
                opacity="0.12"
              />

              <path
                className="gs-chart-draw"
                d="M 4 105 C 35 100, 45 75, 82 83 S 133 48, 164 64 S 217 31, 251 45 S 310 27, 344 34 S 375 16, 396 10"
                fill="none"
                stroke="#12c9b8"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}

export default function GettingStarted() {
  useEffect(() => {
    // Animation styles are scoped to this section.
    // Reduced-motion preferences are respected below.
  }, []);

  return (
    <section
      id="how-it-works"
      className="gs-how-it-works bg-[#0d5553] px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-12 lg:py-28"
    >
      <style>{`
        @keyframes gs-dashboard-enter {
          from {
            opacity: 0;
            transform: translateY(18px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes gs-float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        @keyframes gs-card-enter {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes gs-bar-grow {
          from {
            transform: scaleY(0.08);
            opacity: 0.35;
          }
          to {
            transform: scaleY(1);
            opacity: 1;
          }
        }

        @keyframes gs-member-enter {
          from {
            opacity: 0;
            transform: translateX(-14px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes gs-notice-enter {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes gs-soft-pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.65;
          }
        }

        @keyframes gs-invite-pulse {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(13, 148, 136, 0);
          }
          50% {
            box-shadow: 0 0 0 5px rgba(13, 148, 136, 0.14);
          }
        }

        @keyframes gs-chart-draw {
          from {
            stroke-dashoffset: 650;
          }
          to {
            stroke-dashoffset: 0;
          }
        }

        .gs-dashboard-enter {
          animation: gs-dashboard-enter 700ms ease-out both;
        }

        .gs-float {
          animation: gs-float 5s ease-in-out 800ms infinite;
        }

        .gs-card-enter {
          animation: gs-card-enter 600ms ease-out both;
        }

        .gs-bar-grow {
          transform-origin: bottom;
          animation: gs-bar-grow 900ms cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        .gs-member-enter {
          animation: gs-member-enter 600ms ease-out both;
        }

        .gs-notice-enter {
          animation: gs-notice-enter 650ms ease-out 700ms both;
        }

        .gs-metric-enter {
          animation: gs-card-enter 650ms ease-out both;
        }

        .gs-soft-pulse {
          animation: gs-soft-pulse 2.8s ease-in-out infinite;
        }

        .gs-invite-pulse {
          animation: gs-invite-pulse 2.8s ease-in-out 1s infinite;
        }

        .gs-chart-draw {
          stroke-dasharray: 650;
          stroke-dashoffset: 650;
          animation: gs-chart-draw 2s ease-out 350ms forwards;
        }

        @media (prefers-reduced-motion: reduce) {
          .gs-how-it-works *,
          .gs-how-it-works *::before,
          .gs-how-it-works *::after {
            animation-duration: 0.01ms !important;
            animation-delay: 0ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
          }

          .gs-chart-draw {
            stroke-dashoffset: 0;
          }
        }
      `}</style>

      <div className="mx-auto max-w-7xl">
        <header className="mx-auto max-w-4xl text-center">
          <h2 className="mx-auto max-w-4xl text-balance font-heading text-[clamp(1.75rem,4.5vw,3.5rem)] font-bold uppercase leading-[1.08] tracking-[-0.035em] text-white">
            Let us get you up and running in minutes
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/80 sm:mt-6 sm:text-base sm:leading-8">
            No lengthy implementations. No consultants. Just workspace that
            works.
          </p>
        </header>

        <div className="mt-14 space-y-16 sm:mt-20 sm:space-y-20 lg:mt-24 lg:space-y-24">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`grid items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-16 ${
                index === 1 ? "lg:[&>div:first-child]:order-2" : ""
              }`}
            >
              <div
                className={`${index === 1 ? "lg:order-2 lg:pl-4" : "lg:pr-4"}`}
              >
                <p className="font-heading text-4xl font-bold leading-none text-[#08b9b5] sm:text-5xl lg:text-6xl">
                  {step.number}
                </p>

                <h3 className="mt-5 text-xl font-semibold tracking-tight text-white sm:mt-6 sm:text-2xl lg:text-3xl">
                  {step.title}
                </h3>

                <p className="mt-3 max-w-md text-sm leading-7 text-white/85 sm:text-base sm:leading-8">
                  {step.description}
                </p>
              </div>

              <div className={index === 1 ? "lg:order-1" : ""}>
                <StepVisual type={step.visual} label={step.visualLabel} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
