// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import {
    FaReact,
    FaNodeJs,
    FaGitAlt,
    FaCode
} from "react-icons/fa";
import {
    SiTailwindcss,
    SiFramer,
    SiMongodb,
    SiPostman
} from "react-icons/si";

const skills = [
    {
        category: "Frontend",
        items: [
            { name: "React", icon: FaReact, color: "#61DAFB" },
            { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
            { name: "Framer Motion", icon: SiFramer, color: "#E10098" }
        ]
    },
    {
        category: "Backend",
        items: [
            { name: "Node.js", icon: FaNodeJs, color: "#3C873A" },
            { name: "MongoDB", icon: SiMongodb, color: "#47A248" }
        ]
    },
    {
        category: "Tools",
        items: [
            { name: "Git", icon: FaGitAlt, color: "#F1502F" },
            { name: "Postman", icon: SiPostman, color: "#FF6C37" },
            { name: "Editor", icon: FaCode, color: "#A78BFA" }
        ]
    }
];

export default function SkillsSection() {
    return (
        <section className="relative py-28 md:py-32 text-white overflow-hidden">

            {/* Subtle Background Blend */}
            {/* <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black via-[#0f0f16] to-black"></div> */}
            {/* <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-600/10 blur-[140px] rounded-full -z-10"></div> */}

            <div className="max-w-6xl mx-auto px-6 md:px-4">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <p className="text-[11px] uppercase tracking-[0.25em] text-purple-400 font-medium mb-4">
                        Expertise
                    </p>

                    <h2 className="text-[32px] md:text-[48px] font-semibold tracking-[-0.03em] leading-[1.15]">
                        Skills & Technologies
                    </h2>

                    <p className="mt-5 text-[14px] md:text-[15px] text-gray-400 max-w-xl mx-auto leading-[1.6]">
                        Modern tools and technologies I use to build scalable,
                        production-ready full-stack applications.
                    </p>
                </motion.div>

                {/* Grid */}
                <div className="grid md:grid-cols-3 gap-16 text-center">

                    {skills.map((group, index) => (
                        <motion.div
                            key={group.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >

                            {/* Refined Category Typography */}
                            <h3 className="text-[15px] tracking-[0.3em] uppercase text-gray-400 font-medium mb-10">
                                {group.category}
                            </h3>

                            {/* Floating Icons */}
                            <div className="flex flex-wrap justify-center gap-10">

                                {group.items.map((skill, i) => {
                                    const Icon = skill.icon;

                                    return (
                                        <motion.div
                                            key={i}
                                            animate={{ y: [0, -8, 0] }}
                                            transition={{
                                                duration: 3 + i,
                                                repeat: Infinity,
                                                ease: "easeInOut"
                                            }}
                                            className="flex flex-col items-center gap-3"
                                        >
                                            <div className="
                        w-16 h-16
                        flex items-center justify-center
                        rounded-2xl
                        bg-white/5
                        backdrop-blur-md
                        border border-white/10
                        hover:border-purple-500/40
                        hover:shadow-lg hover:shadow-purple-500/20
                        transition-all duration-300
                      ">
                                                <Icon size={28} color={skill.color} />
                                            </div>

                                            <span className="text-[13px] text-gray-300 tracking-[0.02em]">
                                                {skill.name}
                                            </span>
                                        </motion.div>
                                    );
                                })}

                            </div>

                        </motion.div>
                    ))}

                </div>
            </div>
        </section>
    );
}