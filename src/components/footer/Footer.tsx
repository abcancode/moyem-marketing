import moyemLogo from "../../assets/images/moyem-logo.png";
import moyemLogoLight from "../../assets/images/moyem-logo-light.png";
import { useTheme } from "../../context/ThemeContext";

const footerGroups = [
  {
    title: "PRODUCTS",
    links: [
      { label: "Platform", href: "#platform" },
      { label: "AI & Insights", href: "#ai-insights" },
      { label: "How It Works", href: "#how-it-works" },

      // Uncomment when these sections are available
      // { label: "Use Cases", href: "#use-cases" },
      // { label: "Pricing", href: "#pricing" },
    ],
  },
  {
    title: "RESOURCES",
    links: [{ label: "Join the Waitlist", href: "#waitlist" }],
  },

  /*
  Uncomment when the legal pages are published.

  {
    title: "LEGAL",
    links: [
      { label: "Privacy Policy", href: "#privacy" },
      { label: "Terms of Service", href: "#terms" },
      { label: "Data & Security", href: "#data-security" },
      { label: "Cookies Policy", href: "#cookies" },
    ],
  },
  */
];

export default function Footer() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <footer className="bg-[var(--color-page)] px-5 py-12 text-[var(--color-text)] transition-colors duration-300 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-[2.5fr_1fr_1fr] md:gap-8">
        {/* Brand */}
        <div className="col-span-2 flex flex-col items-start md:col-span-1">
          <a href="/" aria-label="Moyem home" className="inline-block">
            <img
              src={isDark ? moyemLogoLight : moyemLogo}
              alt="Moyem"
              className="h-auto w-[110px] object-contain"
            />
          </a>
          <p className="mt-3 max-w-[230px] text-sm leading-6 text-[var(--color-muted)]">
            The all-in-one business platform
          </p>
        </div>

        {/* Link groups */}
        {footerGroups.map((group) => (
          <nav key={group.title} aria-label={group.title}>
            <h2 className="mb-4 text-xs font-semibold text-[var(--color-text)]">
              {group.title}
            </h2>
            <ul className="space-y-3">
              {group.links.map((link) => (
                <li key={`${group.title}-${link.label}`}>
                  <a
                    href={link.href}
                    className="text-sm text-[var(--color-muted)] transition-colors hover:text-teal-700 dark:hover:text-teal-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
    </footer>
  );
}
