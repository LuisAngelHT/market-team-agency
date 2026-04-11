import { useState, useEffect } from "react";

interface NavbarProps {
  onCtaClick: () => void;
}

const Navbar = ({ onCtaClick }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 rounded-full navbar-gradient px-2 py-2 ${
        scrolled
          ? "backdrop-blur-md shadow-lg shadow-primary/10"
          : ""
      }`}
    >
      <div className="flex items-center gap-1">
        <button
          onClick={onCtaClick}
          className="btn-cta-gradient rounded-full px-5 py-2 text-xs font-bold uppercase tracking-wider text-[hsl(0,0%,100%)] border border-[hsl(0,0%,100%)]/20 transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/30"
          style={{ fontFamily: "'Hind', sans-serif" }}
        >
          Consultoría Gratis
        </button>
        <a
          href="#clientes"
          className="px-4 py-2 text-sm font-medium text-[hsl(0,0%,80%)] transition-colors hover:text-[hsl(0,0%,100%)]"
          style={{ fontFamily: "'Hind', sans-serif" }}
        >
          Clientes
        </a>
        <a
          href="#faq"
          className="px-4 py-2 text-sm font-medium text-[hsl(0,0%,80%)] transition-colors hover:text-[hsl(0,0%,100%)]"
          style={{ fontFamily: "'Hind', sans-serif" }}
        >
          FAQ
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
