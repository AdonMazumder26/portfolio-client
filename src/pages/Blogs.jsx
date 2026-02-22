import { useEffect, useState } from "react";
import API from "../services/api";
import SkeletonCard from "../components/SkeletonCard";
import BlogCard from "../components/BlogCard";
import { motion } from "framer-motion";

export default function Blogs() {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const res = await API.get("/blogs");
                setBlogs(res.data);
            } finally {
                setLoading(false);
            }
        };

        fetchBlogs();
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
                        Insights
                    </p>

                    <h1 className="
            font-heading
            text-[36px]
            md:text-[52px]
            font-semibold
            tracking-[-0.03em]
            leading-[1.15]
          ">
                        Blog & Articles
                    </h1>

                    <p className="
            mt-6
            text-[15px]
            text-gray-400
            max-w-xl
            mx-auto
            leading-[1.7]
          ">
                        Thoughts on full-stack development, system design,
                        modern JavaScript, and building scalable web applications.
                    </p>
                </motion.div>

                {/* Blog Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {blogs.map((blog) => (
                        <BlogCard key={blog._id} blog={blog} />
                    ))}
                </div>

            </div>
        </div>
    );
}