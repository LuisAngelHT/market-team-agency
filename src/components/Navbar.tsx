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
    <>
      {/* Mantenemos los estilos de animación */}
      <style>{`
        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 10px rgba(74, 0, 255, 0.5), 0 0 20px rgba(74, 0, 255, 0.3);
            transform: scale(1);
          }
          50% {
            box-shadow: 0 0 20px rgba(74, 0, 255, 0.9), 0 0 40px rgba(74, 0, 255, 0.5);
            transform: scale(1.04);
          }
        }
        .btn-pulse {
          animation: pulse-glow 2s ease-in-out infinite;
        }
        .btn-pulse:hover {
          animation: none;
          transform: scale(1.04);
          box-shadow: 0 0 30px rgba(74, 0, 255, 0.8), 0 0 60px rgba(74, 0, 255, 0.4);
        }
        .nav-link {
          position: relative;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -3px;
          left: 0;
          width: 0%;
          height: 2px;
          background: #4a00ff;
          border-radius: 9999px;
          transition: width 0.3s ease;
          box-shadow: 0 0 6px rgba(74, 0, 255, 0.8);
        }
        .nav-link:hover::after {
          width: 100%;
        }
      `}</style>

      <nav className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[80%] max-w-[500px] transition-all duration-500 rounded-full border ${
        scrolled
          ? "bg-[#16172b]/70 backdrop-blur-xl shadow-[0_8px_32px_rgba(74,0,255,0.2)] border-white/10 py-2.5 px-4 sm:px-6"
          : "bg-transparent border-transparent py-4 px-4 sm:px-6"
      }`}>
        <div className="flex items-center justify-between w-full gap-2 sm:gap-4">

          {/* CTA a la izquierda - Siempre visible completo */}
          <button
            onClick={onCtaClick}
            className="btn-pulse shrink-0 rounded-full px-4 sm:px-6 py-2 text-[10px] sm:text-sm font-bold uppercase tracking-wider text-white border border-white/20 transition-all duration-300"
            style={{
              fontFamily: "'Hind', sans-serif",
              background: "linear-gradient(135deg, #4a00ff 0%, #7c3aff 50%, #a855f7 100%)",
            }}
          >
            Consultoría Gratisssss
          </button>

          {/* Links centrados/derecha - Visibles siempre */}
          <div className="flex items-center gap-3 sm:gap-6 lg:gap-8">
            <a href="#clientes" className="nav-link text-[11px] sm:text-base font-semibold text-white/80 transition-colors hover:text-white" style={{ fontFamily: "'Hind', sans-serif" }}>
              Clientes
            </a>
            <a href="#metodo" className="nav-link text-[11px] sm:text-base font-semibold text-white/80 transition-colors hover:text-white" style={{ fontFamily: "'Hind', sans-serif" }}>
              Método
            </a>
            <a href="#faq" className="nav-link text-[11px] sm:text-base font-semibold text-white/80 transition-colors hover:text-white" style={{ fontFamily: "'Hind', sans-serif" }}>
              FAQ
            </a>
          </div>

        </div>
      </nav>
    </>
  );
};

export default Navbar;