import { useEffect, useState } from "react";
import API from "../services/api";
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
        <section className="relative py-28 md:py-32 px-4 md:px-16 text-white overflow-hidden">

            {/* 🌌 Subtle Background Layer */}
            <div className="absolute inset-0 -z-10 bg-linear-to-b from-black via-[#0f0f16] to-black"></div>
            <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-125 h-125 bg-purple-600/10 blur-[140px] rounded-full -z-10"></div>

            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-20 md:mb-24"
                >
                    <p className="text-[11px] tracking-[0.2em] uppercase text-purple-400 font-medium mb-4">
                        Portfolio
                    </p>

                    <h2 className="text-[30px] md:text-[48px] font-semibold tracking-[-0.02em] leading-[1.15]">
                        Selected Projects
                    </h2>

                    <p className="mt-5 text-[14px] md:text-[15px] text-gray-400 max-w-xl mx-auto leading-[1.6]">
                        A curated selection of production-ready applications built
                        with scalable architecture and refined user experience.
                    </p>
                </motion.div>

                {loading ? (
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                        <SkeletonCard />
                        <SkeletonCard />
                        <SkeletonCard />
                    </div>
                ) : (
                    <>
                        {/* Improved Mobile Glass Container */}
                        <div
                            className="
                relative
                bg-white/4
                backdrop-blur-md
                border border-white/10
                rounded-3xl
                p-4 md:p-10
              "
                        >
                            <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-white/5 to-transparent pointer-events-none"></div>

                            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 relative z-10">
                                {projects.map((project) => (
                                    <ProjectCard key={project._id} project={project} />
                                ))}
                            </div>
                        </div>

                        <div className="text-center mt-16 md:mt-20">
                            <Link
                                to="/projects"
                                className="
                  inline-flex
                  items-center
                  justify-center
                  px-8 md:px-10
                  py-3
                  rounded-xl
                  bg-purple-600
                  hover:bg-purple-700
                  transition-all duration-300
                  font-medium
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