import { useEffect, useState } from "react";
import API from "../services/api";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import SkeletonCard from "./SkeletonCard";

export default function FeaturedProjects() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const res = await API.get("/projects");
                setProjects(res.data.slice(0, 3));
            } catch (err) {
                console.log(err);
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    return (
        <section className="relative py-32 px-6 md:px-16 text-white">

            <div className="max-w-7xl mx-auto">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-24"
                >

                    {/* Micro Label */}
                    <p className="
    text-[12px]
    tracking-[0.2em]
    uppercase
    text-purple-400
    font-medium
    mb-5
  ">
                        Portfolio
                    </p>

                    {/* Main Heading */}
                    <h2 className="
    text-[34px]
    md:text-[48px]
    font-semibold
    tracking-[-0.02em]
    leading-[1.15]
    text-white
  ">
                        Selected Projects
                    </h2>

                    {/* Subtle Description Line */}
                    <p className="
    mt-6
    text-[15px]
    text-gray-400
    max-w-xl
    mx-auto
    leading-[1.6]
  ">
                        A curated selection of production-ready applications built
                        with scalable architecture and refined user experience.
                    </p>

                </motion.div>

                {/* Loading State */}
                {loading ? (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                        <SkeletonCard />
                        <SkeletonCard />
                        <SkeletonCard />
                    </div>
                ) : (
                    <>
                        {/* Glass container wrapper */}
                        <div
                            className="
                relative
                bg-white/3
                backdrop-blur-sm
                border border-white/10
                rounded-3xl
                p-8 md:p-12
              "
                        >

                            {/* subtle overlay glow */}
                            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 relative z-10">
                                {projects.map((project) => (
                                    <ProjectCard key={project._id} project={project} />
                                ))}
                            </div>

                        </div>

                        <div className="text-center mt-20">
                            <Link
                                to="/projects"
                                className="
                  inline-block
                  px-10 py-3
                  rounded-xl
                  bg-purple-600
                  hover:bg-purple-700
                  transition-all duration-300
                  font-semibold
                  shadow-lg shadow-purple-500/20
                "
                            >
                                View All Projects →
                            </Link>
                        </div>
                    </>
                )}

            </div>
        </section>
    );
}