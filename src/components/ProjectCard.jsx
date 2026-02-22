// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
    return (
        <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="
        group
        relative
        w-full
        min-w-0
        overflow-hidden
        rounded-3xl
        border border-white/10
        bg-white/5
        backdrop-blur-md
        transition-all duration-500
        hover:border-purple-500/40
        shadow-[0_20px_60px_rgba(0,0,0,0.4)]
      "
        >
            {/* IMAGE */}
            {project.image && (
                <div className="relative h-52 overflow-hidden">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                </div>
            )}

            {/* CONTENT */}
            <div className="p-5 sm:p-6 md:p-7">

                {/* Top Meta Row */}
                <div className="flex justify-between items-center mb-5">

                    {project.category && (
                        <span className="
              text-[10px]
              font-medium
              tracking-[0.08em]
              uppercase
              text-gray-300
              bg-white/5
              border border-white/10
              px-3 py-1
              rounded-full
            ">
                            {project.category}
                        </span>
                    )}

                    {project.featured && (
                        <span className="
              text-[10px]
              font-semibold
              tracking-[0.08em]
              uppercase
              text-purple-400
              bg-purple-500/10
              border border-purple-500/30
              px-3 py-1
              rounded-full
            ">
                            Featured
                        </span>
                    )}
                </div>

                {/* Title */}
                <h2 className="
          text-[20px]
          md:text-[22px]
          font-semibold
          tracking-[-0.015em]
          leading-[1.2]
          text-white
          mb-3
          group-hover:text-purple-400
          transition-colors duration-300
        ">
                    {project.title}
                </h2>

                {/* Description */}
                <p className="
          text-[14px]
          text-gray-400
          leading-[1.65]
          font-light
          line-clamp-3
        ">
                    {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-6">
                    {project.techStack?.slice(0, 4).map((tech, index) => (
                        <span
                            key={index}
                            className="
                text-[11px]
                font-medium
                tracking-[0.03em]
                text-gray-300
                bg-black/40
                border border-white/10
                px-3 py-1
                rounded-full
                transition-colors duration-300
                group-hover:border-purple-500/30
              "
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Divider */}
                <div className="h-px bg-white/5 my-7" />

                {/* Actions */}
                <div className="flex justify-between items-center">

                    <Link
                        to={`/projects/${project._id}`}
                        className="
              text-[14px]
              font-medium
              tracking-[-0.01em]
              text-purple-400
              relative
              after:content-['']
              after:absolute
              after:left-0
              after:-bottom-1
              after:h-[1px]
              after:w-0
              after:bg-purple-400
              after:transition-all
              after:duration-300
              hover:after:w-full
            "
                    >
                        View Details
                    </Link>

                    {project.githubLink && (
                        <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                text-[13px]
                font-medium
                text-gray-400
                hover:text-white
                transition-colors duration-300
              "
                        >
                            GitHub ↗
                        </a>
                    )}
                </div>

            </div>
        </motion.article>
    );
}