import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { HashLink } from "react-router-hash-link";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Projects", path: "/projects" },
        { name: "Blog", path: "/blogs" },
    ];

    return (
        <motion.nav
            initial={{ y: -80 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6 }}
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled
                    ? "bg-black/50 backdrop-blur-2xl border-b border-white/5 py-4"
                    : "bg-transparent py-6"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-white">

                {/* ===== Logo ===== */}
                <Link
                    to="/"
                    className="group relative font-semibold text-[22px] tracking-[-0.04em]"
                >
                    <span className="transition-colors duration-300 group-hover:text-purple-400">
                        Ruhul
                    </span>
                    <span className="text-purple-500">.</span>

                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>

                {/* ===== Desktop Nav ===== */}
                <div className="hidden md:flex items-center gap-10 relative">
                    {navLinks.map((link) => {
                        const isActive = location.pathname === link.path;

                        return (
                            <div key={link.name} className="relative group">
                                <Link
                                    to={link.path}
                                    className={`
                    relative
                    text-[16px]
                    font-medium
                    tracking-[-0.03em]
                    transition-all duration-300
                    ${isActive
                                            ? "text-white"
                                            : "text-gray-400 group-hover:text-white"
                                        }
                  `}
                                >
                                    {link.name}
                                </Link>

                                {/* Active underline */}
                                {isActive && (
                                    <motion.div
                                        layoutId="nav-active"
                                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                                        className="
                      absolute
                      -bottom-2
                      left-0
                      w-full
                      h-0.5
                      bg-purple-500
                      rounded-full
                    "
                                    />
                                )}

                                {/* Hover underline */}
                                {!isActive && (
                                    <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full rounded-full"></span>
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* ===== Desktop Contact (HashLink) ===== */}
                <div className="hidden md:block">
                    <HashLink
                        smooth
                        to="/#contact"
                        className="
              px-5 py-2.5
              rounded-full
              border border-white/10
              bg-white/5
              backdrop-blur-md
              text-[14px]
              font-medium
              tracking-[-0.02em]
              hover:border-purple-500/50
              hover:bg-purple-500/10
              transition-all duration-300
            "
                    >
                        Contact
                    </HashLink>
                </div>

                {/* ===== Mobile Toggle ===== */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="
            md:hidden
            p-3
            rounded-xl
            border border-white/10
            bg-white/5
            backdrop-blur-md
            hover:border-purple-500/50
            transition-all duration-300
          "
                >
                    {menuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </div>

            {/* ===== Mobile Menu ===== */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="
              md:hidden
              bg-black/70
              backdrop-blur-2xl
              border-t border-white/10
              px-8 py-10
              flex flex-col gap-8
              text-white
            "
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={() => setMenuOpen(false)}
                                className="
                  text-[16px]
                  font-medium
                  tracking-[-0.02em]
                  text-gray-300
                  hover:text-white
                  transition-colors duration-300
                "
                            >
                                {link.name}
                            </Link>
                        ))}

                        <HashLink
                            smooth
                            to="/#contact"
                            onClick={() => setMenuOpen(false)}
                            className="
                mt-4
                text-center
                px-6 py-3
                rounded-full
                border border-purple-500/40
                bg-purple-500/10
                text-[15px]
                font-medium
                tracking-[-0.02em]
                hover:bg-purple-500/20
                transition-all duration-300
              "
                        >
                            Contact
                        </HashLink>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}