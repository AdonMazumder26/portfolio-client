import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../services/api";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function BlogDetails() {
    const { slug } = useParams();
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        const fetchBlog = async () => {
            const res = await API.get(`/blogs/${slug}`);
            setBlog(res.data);
        };
        fetchBlog();
    }, [slug]);

    if (!blog)
        return (
            <div className="min-h-screen flex items-center justify-center text-gray-400">
                Loading article...
            </div>
        );

    return (
        <section className="relative text-white px-6 md:px-16 pt-32 pb-32 overflow-hidden">

            {/* Subtle ambient glow */}
            <div className="absolute w-[800px] h-[800px] bg-purple-600/5 blur-[180px] rounded-full -top-80 -left-80"></div>

            <div className="relative z-10 max-w-4xl mx-auto">

                {/* Article Header */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <h1 className="text-[36px] md:text-[52px] font-semibold leading-[1.1] tracking-[-0.02em] mb-6">
                        {blog.title}
                    </h1>

                    <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">

                        <span>
                            {new Date(blog.createdAt).toDateString()}
                        </span>

                        {blog.tags?.map((tag, index) => (
                            <span
                                key={index}
                                className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-purple-400"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </motion.div>

                {/* Article Content */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="
            prose
            prose-invert
            prose-lg
            max-w-none
            prose-headings:tracking-[-0.01em]
            prose-headings:font-semibold
            prose-p:text-gray-300
            prose-p:leading-[1.75]
            prose-strong:text-white
            prose-a:text-purple-400
            prose-code:bg-white/10
            prose-code:px-1.5
            prose-code:py-0.5
            prose-code:rounded
            prose-code:text-purple-300
          "
                >
                    <ReactMarkdown
                        components={{
                            code({ inline, className, children, ...props }) {
                                const match = /language-(\w+)/.exec(className || "");
                                return !inline && match ? (
                                    <div className="my-8 rounded-xl overflow-hidden border border-white/10 shadow-lg">
                                        <SyntaxHighlighter
                                            style={oneDark}
                                            language={match[1]}
                                            PreTag="div"
                                            customStyle={{
                                                margin: 0,
                                                background: "#0f0f12",
                                                padding: "20px",
                                            }}
                                            {...props}
                                        >
                                            {String(children).replace(/\n$/, "")}
                                        </SyntaxHighlighter>
                                    </div>
                                ) : (
                                    <code className="bg-white/10 px-2 py-1 rounded text-purple-300">
                                        {children}
                                    </code>
                                );
                            }
                        }}
                    >
                        {blog.content}
                    </ReactMarkdown>
                </motion.div>

            </div>
        </section>
    );
}