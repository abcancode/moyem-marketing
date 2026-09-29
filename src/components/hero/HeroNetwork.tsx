const features = [
  { label: "Finance", position: "left-[8%] top-[18%]" },
  { label: "CRM", position: "left-[25%] top-[12%]" },
  { label: "AI Command Center", position: "right-[8%] top-[17%]" },
  { label: "Business DNA", position: "left-[4%] top-[52%]" },
  { label: "Workspace", position: "right-[25%] top-[49%]" },
  { label: "Sales", position: "left-[22%] bottom-[12%]" },
  { label: "Project Management", position: "right-[7%] bottom-[13%]" },
];

const nodes = [
  [40, 140],
  [210, 100],
  [370, 190],
  [570, 95],
  [760, 175],
  [990, 95],
  [1170, 160],
  [170, 320],
  [480, 390],
  [900, 340],
  [80, 530],
  [290, 590],
  [650, 570],
  [1080, 550],
];

export default function HeroNetwork() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Network lines and nodes */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1200 700"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <defs>
          {/* Soft teal glow */}
          <radialGradient id="nodeGlow">
            <stop offset="0%" stopColor="#08B9B5" stopOpacity="0.65" />
            <stop offset="45%" stopColor="#08B9B5" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#08B9B5" stopOpacity="0" />
          </radialGradient>

          <filter id="softGlow" x="-200%" y="-200%" width="500%" height="500%">
            <feGaussianBlur stdDeviation="5" />
          </filter>
        </defs>

        {/* Main connecting paths with flowing animation */}
        <g
          className="network-flow"
          stroke="#08B9B5"
          strokeWidth="1"
          strokeOpacity="0.3"
        >
          <path d="M40 140 L210 100 L370 190 L570 95 L760 175 L990 95 L1170 160" />
          <path d="M40 140 L170 320 L370 190 L480 390 L760 175 L900 340 L1170 160" />
          <path d="M170 320 L80 530 L290 590 L480 390 L650 570 L900 340 L1080 550 L1170 160" />
          <path d="M210 100 L170 320 L290 590" />
          <path d="M570 95 L480 390 L650 570" />
          <path d="M990 95 L900 340 L1080 550" />
          <path d="M370 190 L650 570" />
          <path d="M760 175 L1080 550" />
          <path d="M80 530 L170 320 L480 390 L900 340 L1080 550" />
        </g>

        {/* Subtle secondary connections */}
        <g
          className="network-flow network-flow-slow"
          stroke="#08B9B5"
          strokeWidth="0.8"
          strokeOpacity="0.15"
          strokeDasharray="3 7"
        >
          <path d="M0 350 L370 190 L650 570 L1170 160" />
          <path d="M210 100 L480 390 L990 95" />
          <path d="M40 140 L480 390 L1170 160" />
          <path d="M80 530 L570 95 L1080 550" />
        </g>

        {/* Diffused node glow */}
        <g filter="url(#softGlow)">
          {nodes.map(([cx, cy], index) => (
            <circle
              key={index}
              className="network-node-glow"
              cx={cx}
              cy={cy}
              r="18"
              fill="#08B9B5"
              opacity="0.35"
              style={{
                animationDelay: `${index * 0.25}s`,
              }}
            />
          ))}
        </g>

        {/* Pulsing node centers */}
        <g fill="#08B9B5">
          {nodes.map(([cx, cy], index) => (
            <circle
              key={index}
              className="network-node-core"
              cx={cx}
              cy={cy}
              r="3.5"
              style={{
                animationDelay: `${index * 0.25}s`,
              }}
            />
          ))}
        </g>
      </svg>

      {/* Floating feature labels */}
      {features.map((feature, index) => (
        <div
          key={feature.label}
          className={`network-label absolute ${feature.position} hidden rounded-full border border-[#08B9B5]/30 bg-white/90 px-4 py-2 text-xs font-medium text-[#0D5553] shadow-[0_3px_18px_rgba(8,185,181,0.12)] backdrop-blur-sm transition-colors duration-300 dark:border-[#08B9B5]/40 dark:bg-slate-900/90 dark:text-teal-300 sm:block md:px-5 md:py-2.5 md:text-sm`}
          style={{
            animationDelay: `${index * 0.6}s`,
          }}
        >
          {feature.label}
        </div>
      ))}
    </div>
  );
}
