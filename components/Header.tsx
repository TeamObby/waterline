import Link from "next/link";
import { Logo } from "./Logo";

const navLinks = [
  { href: "#calculator", label: "Leak check" },
  { href: "#how", label: "How it works" },
  { href: "#offer", label: "Offer" },
  { href: "#faq", label: "FAQ" },
  { href: "#cta", label: "Get started" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-ink/90 backdrop-blur">
      <div className="container-page flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center">
          <Logo />
        </Link>
        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-paper/70 transition hover:text-paper"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a href="#cta" className="btn-primary !py-2.5 !text-sm">
          Plug the leak
        </a>
      </div>
    </header>
  );
}
