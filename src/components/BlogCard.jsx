import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function BlogCard({ blog }) {
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
        overflow-hidden
        rounded-3xl
        border border-white/10
        bg-white/5
        backdrop-blur-md
        transition-all duration-500
        hover:border-purple-500/30
        shadow-[0_20px_60px_rgba(0,0,0,0.35)]
      "
        >
            <div className="p-8">

                {/* Date */}
                <p className="
          text-[12px]
          uppercase
          tracking-[0.18em]
          text-gray-500
          mb-5
        ">
                    {new Date(blog.createdAt).toDateString()}
                </p>

                {/* Title */}
                <h2 className="
          font-heading
          text-[20px]
          md:text-[22px]
          font-semibold
          tracking-[-0.02em]
          leading-[1.35]
          mb-6
          group-hover:text-purple-400
          transition-colors duration-300
        ">
                    {blog.title}
                </h2>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                    {blog.tags?.map((tag, index) => (
                        <span
                            key={index}
                            className="
                text-[11px]
                font-medium
                tracking-[0.05em]
                uppercase
                text-purple-400
                bg-purple-500/10
                border border-purple-500/20
                px-3 py-1
                rounded-full
              "
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* CTA */}
                <Link
                    to={`/blogs/${blog.slug}`}
                    className="
            text-[14px]
            font-medium
            tracking-[0.02em]
            text-purple-400
            relative
            inline-block
            after:content-['']
            after:absolute
            after:left-0
            after:-bottom-1
            after:h-px
            after:w-0
            after:bg-purple-400
            after:transition-all
            after:duration-300
            hover:after:w-full
          "
                >
                    Read Article →
                </Link>

            </div>
        </motion.article>
    );
}