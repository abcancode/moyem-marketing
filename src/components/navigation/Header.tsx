import { useState } from "react";
import { Menu, X } from "lucide-react";
import moyemLogo from "../../assets/images/moyem-logo.png";

const navigationLinks = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "About us", href: "#about" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-50 w-full border-b border-gray-100 bg-white">
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-6 md:px-10">
        {/* Moyem logo placeholder */}
        <a href="/" className="shrink-0" aria-label="Moyem home">
          <img
            src={moyemLogo}
            alt="Moyem"
            className="h-auto w-[100px] object-contain"
          />
        </a>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navigationLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-base font-medium text-gray-900 transition-colors hover:text-teal-600"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop actions */}
        <div className="hidden items-center gap-5 md:flex">
          <a
            href="https://app.moyem.com"
            className="text-base font-medium text-gray-900 transition-colors hover:text-teal-600"
          >
            Login
          </a>

          <a
            href="#demo"
            className="rounded-lg bg-gradient-to-r from-[#0D5553] to-[#08B9B5] px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            See a demo
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="rounded-lg p-2 text-gray-900 hover:bg-gray-100 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile navigation */}
      {menuOpen && (
        <nav className="absolute left-0 top-full flex w-full flex-col gap-4 border-t border-gray-100 bg-white px-6 py-6 shadow-lg md:hidden">
          {navigationLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-base font-medium text-gray-900 hover:text-teal-600"
            >
              {link.label}
            </a>
          ))}

          <a
            href="https://app.moyem.com"
            className="text-base font-medium text-gray-900"
          >
            Login
          </a>

          <a
            href="#demo"
            onClick={() => setMenuOpen(false)}
            className="w-fit rounded-lg bg-gradient-to-r from-[#0D5553] to-[#08B9B5] px-6 py-3 text-sm font-semibold text-white"
          >
            See a demo
          </a>
        </nav>
      )}
    </header>
  );
}
