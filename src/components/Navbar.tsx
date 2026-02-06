import { useState } from "react";
import { NavLink, Link } from "react-router";
import { motion, AnimatePresence } from "motion/react";

const navLinks = [
  { to: "/o-nas", label: "O nas" },
  { to: "/uslugi", label: "Usługi" },
  { to: "/pakiety", label: "Pakiety" },
  { to: "/faq", label: "FAQ" },
  { to: "/kontakt", label: "Kontakt" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-black/90 backdrop-blur-md border-b border-brand-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-20">
          <Link to="/" className="flex items-center">
            <img src="/logo.png" alt="HRup" className="h-20 w-auto" />
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `text-sm font-medium tracking-wide transition-colors duration-200 ${
                    isActive
                      ? "text-brand-pink"
                      : "text-brand-white hover:text-brand-pink"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          <div className="hidden lg:block">
            <Link
              to="/kontakt"
              className="inline-block bg-brand-pink text-brand-white text-xs font-semibold tracking-widest px-6 py-3 rounded-full transition-all duration-200 hover:bg-brand-pink/80 hover:shadow-[0_0_20px_rgba(224,3,113,0.3)]"
            >
              POROZMAWIAJMY
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden relative z-50 w-10 h-10 flex flex-col items-center justify-center gap-1.5"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="block w-6 h-0.5 bg-brand-white origin-center"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-6 h-0.5 bg-brand-white"
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="block w-6 h-0.5 bg-brand-white origin-center"
            />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-brand-black/95 backdrop-blur-xl flex flex-col items-center justify-center lg:hidden"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="flex flex-col items-center gap-8"
            >
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3, delay: 0.1 + i * 0.05 }}
                >
                  <NavLink
                    to={link.to}
                    onClick={() => setMobileOpen(false)}
                    className={({ isActive }) =>
                      `text-2xl font-medium tracking-wide transition-colors duration-200 ${
                        isActive
                          ? "text-brand-pink"
                          : "text-brand-white hover:text-brand-pink"
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3, delay: 0.1 + navLinks.length * 0.05 }}
              >
                <Link
                  to="/kontakt"
                  onClick={() => setMobileOpen(false)}
                  className="inline-block bg-brand-pink text-brand-white text-sm font-semibold tracking-widest px-8 py-4 rounded-full mt-4 transition-all duration-200 hover:bg-brand-pink/80"
                >
                  POROZMAWIAJMY
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="h-20" />
    </>
  );
}
