import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
    return (
        <footer className="relative pt-28 pb-16 px-6 text-gray-400">

            {/* Elegant Divider */}
            <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-white/10 to-transparent"></div>

            <div className="max-w-6xl mx-auto text-center">

                {/* Brand */}
                <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold text-white tracking-tight mb-6"
                >
                    <div className="text-center">
                        <h3 className="font-heading text-[28px] md:text-[32px] font-semibold tracking-[-0.02em] text-white">
                            Ruhul<span className="text-purple-500">.</span>
                        </h3>

                        <p className="mt-3 text-[11px] uppercase tracking-[0.25em] text-gray-400">
                            Full-Stack Engineer
                        </p>
                    </div>
                </motion.h3>

                {/* Tagline */}
                <p className="text-gray-400 max-w-xl mx-auto leading-relaxed mb-10">
                    MERN Stack Developer crafting scalable, elegant web applications
                    with modern architecture and refined user experiences.
                </p>

                {/* Social Icons */}
                <div className="flex justify-center gap-8 mb-14">

                    <a
                        href="https://github.com/AdonMazumder26"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group p-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-purple-600/20 hover:border-purple-500 transition-all duration-300"
                    >
                        <Github className="w-5 h-5 text-gray-300 group-hover:text-white transition" />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/ruhul-ma-ani-mazumder-62553338a/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group p-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-purple-600/20 hover:border-purple-500 transition-all duration-300"
                    >
                        <Linkedin className="w-5 h-5 text-gray-300 group-hover:text-white transition" />
                    </a>

                    <a
                        href="mailto:ruhulmaani2003@gmail.com"
                        className="group p-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-purple-600/20 hover:border-purple-500 transition-all duration-300"
                    >
                        <Mail className="w-5 h-5 text-gray-300 group-hover:text-white transition" />
                    </a>

                </div>

                {/* Bottom Line */}
                <div className="border-t border-white/5 pt-8 text-sm text-gray-500">
                    © {new Date().getFullYear()} Ruhul Ma Ani Mazumder. All rights reserved.
                </div>

            </div>
        </footer>
    );
}