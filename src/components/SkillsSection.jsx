// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const skills = {
    Frontend: ["React", "Tailwind CSS", "Framer Motion"],
    Backend: ["Node.js", "Express", "MongoDB"],
    Tools: ["Git", "Postman", "VS Code"]
};

export default function SkillsSection() {
    return (
        <section className="text-white px-6 md:px-16 py-32">
            <div className="max-w-6xl mx-auto">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-24"
                >
                    <p className="
            text-[12px]
            uppercase
            tracking-[0.25em]
            text-purple-400
            font-medium
            mb-5
          ">
                        Expertise
                    </p>

                    <h2 className="
            font-heading
            text-[34px]
            md:text-[48px]
            font-semibold
            tracking-[-0.02em]
            leading-[1.15]
          ">
                        Skills & Tools
                    </h2>

                    <p className="
            mt-6
            text-[15px]
            text-gray-400
            max-w-xl
            mx-auto
            leading-[1.6]
          ">
                        Technologies and tools I use to design, develop, and deploy
                        scalable digital products.
                    </p>
                </motion.div>

                {/* Skill Grid */}
                <div className="grid md:grid-cols-3 gap-16 text-center">
                    {Object.entries(skills).map(([category, items]) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            {/* Category Title */}
                            <h3 className="
                font-heading
                text-[18px]
                font-semibold
                tracking-[-0.01em]
                text-white
                mb-8
              ">
                                {category}
                            </h3>

                            {/* Skills */}
                            <div className="flex flex-wrap justify-center gap-3">
                                {items.map((skill, index) => (
                                    <span
                                        key={index}
                                        className="
                      text-[13px]
                      font-medium
                      tracking-[0.02em]
                      text-gray-300
                      bg-white/5
                      border border-white/10
                      px-4 py-2
                      rounded-full
                      transition-all duration-300
                      hover:border-purple-500/40
                      hover:text-white
                    "
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}