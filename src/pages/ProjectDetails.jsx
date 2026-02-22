import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../services/api";
import SkeletonCard from "../components/SkeletonCard";
import Reveal from "../components/Reveal";
import { motion } from "framer-motion";

export default function ProjectDetails() {
    const { id } = useParams();
    const [project, setProject] = useState(null);
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        const fetchProject = async () => {
            try {
                const res = await API.get(`/projects/${id}`);
                setProject(res.data);
            } catch (err) {
                console.error(err);
            }
        };
        fetchProject();
    }, [id]);

    if (!project) {
        return (
            <div className="min-h-screen text-white pt-32 px-6 md:px-16">
                <SkeletonCard />
            </div>
        );
    }

    return (
        <div className="min-h-screen text-white pt-36 pb-40 px-6 md:px-16">

            {/* HERO SECTION */}
            {project.image && (
                <div className="max-w-7xl mx-auto mb-32">

                    <div className="relative w-full h-115 md:h-155 overflow-hidden rounded-4xl group">

                        <motion.img
                            src={project.image}
                            alt={project.title}
                            onLoad={() => setImageLoaded(true)}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: imageLoaded ? 1 : 0 }}
                            transition={{ duration: 0.6 }}
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                        />

                        <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent"></div>

                        <div className="absolute bottom-20 left-14 max-w-2xl">

                            <p className="
                text-[12px]
                uppercase
                tracking-[0.25em]
                text-purple-400
                font-medium
                mb-6
              ">
                                Case Study
                            </p>

                            <Reveal>
                                <h1 className="
                  font-heading
                  text-[38px]
                  md:text-[60px]
                  font-semibold
                  tracking-[-0.03em]
                  leading-[1.1]
                ">
                                    {project.title}
                                </h1>
                            </Reveal>

                        </div>
                    </div>
                </div>
            )}

            {/* CONTENT */}
            <div className="max-w-4xl mx-auto">

                {/* Meta Info */}
                <Reveal delay={0.1}>
                    <div className="
            flex flex-wrap items-center gap-8
            text-[13px]
            text-gray-400
            mb-16
          ">
                        {project.category && (
                            <span className="
                text-[11px]
                uppercase
                tracking-[0.18em]
                bg-purple-500/10
                border border-purple-500/30
                text-purple-400
                px-4 py-1.5
                rounded-full
              ">
                                {project.category}
                            </span>
                        )}

                        {project.createdAt && (
                            <span className="tracking-[0.02em]">
                                {new Date(project.createdAt).toDateString()}
                            </span>
                        )}
                    </div>
                </Reveal>

                {/* Description */}
                <Reveal delay={0.2}>
                    <p className="
            text-[18px]
            md:text-[20px]
            text-gray-300
            leading-[1.8]
            font-light
            mb-24
          ">
                        {project.description}
                    </p>
                </Reveal>

                {/* Tech Stack */}
                <Reveal delay={0.3}>
                    <div className="mb-24">

                        <p className="
              text-[12px]
              uppercase
              tracking-[0.25em]
              text-gray-500
              mb-6
            ">
                            Technologies Used
                        </p>

                        <h2 className="
              font-heading
              text-[26px]
              font-semibold
              tracking-[-0.02em]
              mb-10
            ">
                            Tech Stack
                        </h2>

                        <div className="flex flex-wrap gap-4">
                            {project.techStack?.map((tech, index) => (
                                <span
                                    key={index}
                                    className="
                    text-[13px]
                    font-medium
                    tracking-[0.03em]
                    text-gray-300
                    bg-white/5
                    border border-white/10
                    px-5 py-2.5
                    rounded-full
                    transition-all duration-300
                    hover:border-purple-500/40
                    hover:text-white
                  "
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </Reveal>

                {/* Buttons */}
                <div className="flex flex-wrap gap-6">

                    {project.githubLink && (
                        <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
        inline-flex
        items-center
        justify-center
        px-10 py-3
        rounded-xl
        border border-white/15
        bg-white/5
        backdrop-blur-md
        text-[14px]
        font-medium
        tracking-[0.02em]
        text-white
        hover:border-purple-500/50
        hover:bg-purple-600/10
        transition-all duration-300
      "
                        >
                            View Source Code →
                        </a>
                    )}

                    {project.liveLink && (
                        <a
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
        inline-flex
        items-center
        justify-center
        px-10 py-3
        rounded-xl
        bg-purple-600
        hover:bg-purple-700
        transition-all duration-300
        text-[14px]
        font-medium
        tracking-[0.02em]
        shadow-lg shadow-purple-500/20
      "
                        >
                            Live Demo →
                        </a>
                    )}

                </div>

            </div>
        </div>
    );
}