import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

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
                ? "bg-black/40 backdrop-blur-2xl border-b border-white/5"
                : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center text-white">

                {/* Logo */}
                <Link
                    to="/"
                    className="
            font-heading
            text-[21px] md:text-[23px]
            font-semibold
            tracking-[-0.03em]
            text-white
            transition-colors duration-300
            hover:text-purple-400
          "
                >
                    Ruhul<span className="text-purple-500">.</span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-14 relative">

                    {navLinks.map((link) => {
                        const isActive = location.pathname === link.path;

                        return (
                            <div key={link.name} className="relative">

                                <Link
                                    to={link.path}
                                    className={`
                    relative
                    px-6 py-4
                    text-[14px]
                    font-medium
                    tracking-[0.03em]
                    transition-all duration-300
                    ${isActive
                                            ? "text-white"
                                            : "text-gray-400 hover:text-white"
                                        }
                  `}
                                >
                                    {link.name}
                                </Link>

                                {/* Animated Active Pill */}
                                {isActive && (
                                    <motion.div
                                        layoutId="nav-pill"
                                        transition={{
                                            type: "spring",
                                            stiffness: 350,
                                            damping: 30,
                                        }}
                                        className="
                      absolute
                      -inset-x-2
                      -inset-y-1.5
                      -z-10
                      rounded-full
                      bg-purple-500/10
                      border border-purple-500/25
                      backdrop-blur-md
                    "
                                    />
                                )}
                            </div>
                        );
                    })}

                </div>

                {/* Mobile Toggle */}
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

            {/* Mobile Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        transition={{ duration: 0.3 }}
                        className="
              md:hidden
              bg-black/50
              backdrop-blur-2xl
              border-t border-white/10
              px-8 py-8
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
                  tracking-[0.03em]
                  text-gray-300
                  hover:text-white
                  transition-colors duration-300
                "
                            >
                                {link.name}
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}