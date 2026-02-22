import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Hero() {
    const roles = [
        "Full-Stack MERN Developer",
        "Backend Architecture Enthusiast",
        "Secure Web Systems Builder"
    ];

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % roles.length);
        }, 3500);
        return () => clearInterval(interval);
    }, [roles.length]);

    return (
        <section className="relative min-h-screen flex items-center px-6 md:px-16 pt-28 pb-20 overflow-hidden text-white">

            {/* Soft subtle ambient glow (much lighter) */}
            <div className="absolute w-175 h-175 bg-purple-600/4 blur-[180px] rounded-full -top-72 -left-72"></div>
            <div className="absolute w-150 h-150 bg-blue-600/4 blur-[180px] rounded-full -bottom-72 -right-72"></div>

            {/* Bottom fade for smooth transition */}
            <div className="absolute bottom-0 left-0 w-full h-40 bg-linear-to-b from-transparent to-[#0f0f12] pointer-events-none"></div>

            <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">

                {/* LEFT CONTENT */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-[42px] md:text-[64px] font-semibold leading-[1.05] tracking-[-0.02em]">
                        Ruhul Ma Ani Mazumder
                    </h1>

                    <motion.h2
                        key={roles[index]}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="mt-3 text-[18px] md:text-[20px] font-medium text-purple-400 tracking-[-0.01em]"
                    >
                        {roles[index]}
                    </motion.h2>

                    <p className="mt-8 text-[17px] md:text-[19px] text-gray-300 leading-[1.65] max-w-xl font-light">
                        I build scalable digital products powered by clean backend
                        architecture, secure authentication systems, and thoughtfully
                        engineered user interfaces.
                    </p>

                    <p className="mt-5 text-[16px] text-gray-400 leading-[1.6] max-w-xl">
                        Focused on performance, maintainability, and production-ready
                        systems.
                    </p>

                    <div className="mt-12 flex flex-wrap gap-5">
                        <Link
                            to="/projects"
                            className="px-7 py-3 bg-purple-600 hover:bg-purple-700 transition-all duration-300 rounded-xl font-medium shadow-lg shadow-purple-500/20"
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

                {/* RIGHT IMAGE */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex justify-center md:justify-end"
                >
                    <motion.img
                        src="/my_photo.png"
                        alt="Ruhul Mazumder"
                        animate={{ y: [0, -10, 0] }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="
              w-72 h-72 md:w-80 md:h-80
              object-cover
              rounded-2xl
              border border-white/10
              shadow-[0_30px_80px_rgba(0,0,0,0.6)]
            "
                    />
                </motion.div>

            </div>
        </section>
    );
}