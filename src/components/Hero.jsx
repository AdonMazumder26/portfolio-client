import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";

export default function Hero() {
    const roles = [
        "Full-Stack MERN Developer",
        "Backend Architecture Enthusiast",
        "Secure Web Systems Builder",
    ];

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % roles.length);
        }, 3500);
        return () => clearInterval(interval);
    }, [roles.length]);

    return (
        <section className="relative min-h-screen flex items-center px-6 md:px-16 pt-28 pb-20 overflow-hidden bg-[#0b0b0f] text-white">

            {/* ===== Soft Radial Glow Background ===== */}
            <div className="absolute w-175 h-175 bg-purple-600/15 blur-[160px] rounded-full -top-60 -left-60" />
            <div className="absolute w-150 h-150 bg-blue-600/15 blur-[160px] rounded-full -bottom-60 -right-60" />

            {/* Bottom fade transition */}
            <div className="absolute bottom-0 left-0 w-full h-40 bg-linear-to-b from-transparent to-[#0f0f12] pointer-events-none" />

            {/* ===== Floating Tech Icons ===== */}
            <motion.div
                animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-20 left-10 text-blue-400 text-5xl opacity-15 hidden md:block"
            >
                <FaReact />
            </motion.div>

            <motion.div
                animate={{ y: [0, 25, 0], x: [0, -15, 0] }}
                transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-24 right-24 text-green-400 text-5xl opacity-15 hidden md:block"
            >
                <FaNodeJs />
            </motion.div>

            <motion.div
                animate={{ y: [0, -30, 0], x: [0, 12, 0] }}
                transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 right-12 text-green-500 text-5xl opacity-10 hidden md:block"
            >
                <SiMongodb />
            </motion.div>

            <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">

                {/* ===== LEFT CONTENT ===== */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9 }}
                >
                    <h1 className="text-[42px] md:text-[64px] font-semibold leading-[1.05] tracking-[-0.03em]">
                        Ruhul Ma Ani Mazumder
                    </h1>

                    <motion.h2
                        key={roles[index]}
                        initial={{ opacity: 0, y: 8, filter: "blur(4px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{ duration: 0.5 }}
                        className="mt-4 text-[18px] md:text-[20px] font-medium text-purple-400 tracking-[-0.01em]"
                    >
                        {roles[index]}
                    </motion.h2>

                    <p className="mt-8 text-[17px] md:text-[19px] text-gray-300 leading-[1.7] max-w-xl font-light">
                        I build scalable digital products powered by clean backend
                        architecture, secure authentication systems, and thoughtfully
                        engineered user interfaces.
                    </p>

                    <p className="mt-5 text-[16px] text-gray-400 leading-[1.6] max-w-xl">
                        Focused on performance, maintainability, and production-ready systems.
                    </p>

                    <div className="mt-12 flex flex-wrap gap-5">
                        <Link
                            to="/projects"
                            className="px-7 py-3 bg-purple-600 hover:bg-purple-700 transition-all duration-300 rounded-xl font-medium shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40"
                        >
                            Explore Work →
                        </Link>

                        <a
                            href="#contact"
                            className="px-7 py-3 border border-white/15 hover:border-purple-500 hover:bg-purple-600/10 transition-all duration-300 rounded-xl font-medium"
                        >
                            Let’s Collaborate
                        </a>
                    </div>
                </motion.div>

                {/* ===== RIGHT IMAGE ===== */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9 }}
                    className="flex justify-center md:justify-end relative"
                >
                    {/* Subtle image glow */}
                    <div className="absolute w-80 h-80 bg-purple-600/20 blur-[120px] rounded-full" />

                    <motion.img
                        src="/my_photo.png"
                        alt="Ruhul Mazumder"
                        animate={{ y: [0, -12, 0] }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="
              relative
              w-72 h-72 md:w-80 md:h-80
              object-cover
              rounded-2xl
              border border-white/10
              shadow-[0_40px_100px_rgba(0,0,0,0.7)]
            "
                    />
                </motion.div>

            </div>
        </section>
    );
}