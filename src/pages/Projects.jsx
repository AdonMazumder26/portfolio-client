import { useEffect, useState } from "react";
import API from "../services/api";
import SkeletonCard from "../components/SkeletonCard";
import ProjectCard from "../components/ProjectCard";
import { motion } from "framer-motion";

export default function Projects() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const res = await API.get("/projects");
                setProjects(res.data);
            } catch (err) {
                console.log(err);
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen pt-36 px-6 md:px-16">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    <SkeletonCard />
                    <SkeletonCard />
                    <SkeletonCard />
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen text-white pt-36 pb-40 px-6 md:px-16">

            <div className="max-w-7xl mx-auto">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
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
                        Portfolio
                    </p>

                    <h1 className="
            font-heading
            text-[36px]
            md:text-[52px]
            font-semibold
            tracking-[-0.03em]
            leading-[1.15]
          ">
                        My Projects
                    </h1>

                    <p className="
            mt-6
            text-[15px]
            text-gray-400
            max-w-xl
            mx-auto
            leading-[1.7]
          ">
                        A collection of full-stack applications built with modern
                        architecture, clean UI systems, and scalable backend design.
                    </p>
                </motion.div>

                {/* Project Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {projects.map((project) => (
                        <ProjectCard key={project._id} project={project} />
                    ))}
                </div>

            </div>
        </div>
    );
}