// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function AboutSection() {
    return (
        <section className="text-white px-0 md:px-4 py-24 sm:py-32">
            <div className="max-w-3xl mx-auto text-center">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <p className="
            text-[12px]
            uppercase
            tracking-[0.25em]
            text-purple-400
            font-medium
            mb-5
          ">
                        Profile
                    </p>

                    <h2 className="
            font-heading
            text-[34px]
            md:text-[48px]
            font-semibold
            tracking-[-0.02em]
            leading-[1.15]
          ">
                        About Me
                    </h2>
                </motion.div>

                {/* Main Paragraph */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                    className="
            text-[17px]
            md:text-[19px]
            text-gray-300
            leading-[1.75]
            font-light
          "
                >
                    I’m a Computer Science student focused on building scalable,
                    full-stack web applications using the MERN stack. My approach blends
                    structured backend architecture with clean, refined user interfaces —
                    ensuring performance, maintainability, and security are never afterthoughts.
                </motion.p>

                {/* Secondary Paragraph */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    viewport={{ once: true }}
                    className="
            mt-8
            text-[16px]
            text-gray-400
            leading-[1.7]
            font-light
          "
                >
                    Beyond development, I enjoy playing guitar 🎸 and continuously
                    exploring new technologies, system design principles, and modern
                    engineering practices.
                </motion.p>

            </div>
        </section>
    );
}