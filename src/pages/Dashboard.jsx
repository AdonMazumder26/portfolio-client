import { useEffect, useState } from "react";
import API from "../services/api";

export default function Dashboard() {
    const [projects, setProjects] = useState([]);
    const [blogs, setBlogs] = useState([]);

    const [formData, setFormData] = useState({
        title: "",
        description: "",
        techStack: "",
        githubLink: "",
        liveLink: "",
        category: "",
        image: "",
        featured: false
    });

    const [blogForm, setBlogForm] = useState({
        title: "",
        slug: "",
        content: "",
        tags: ""
    });

    const [editingId, setEditingId] = useState(null);
    const [editingBlogId, setEditingBlogId] = useState(null);



    const fetchProjects = async () => {
        const res = await API.get("/projects");
        setProjects(res.data);
    };

    const fetchBlogs = async () => {
        const res = await API.get("/blogs");
        setBlogs(res.data);
    };

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        fetchProjects();
        fetchBlogs();
    }, []);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value
        });
    };

    const handleBlogChange = (e) => {
        setBlogForm({
            ...blogForm,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formattedData = {
            ...formData,
            techStack: formData.techStack
                .split(",")
                .map((tech) => tech.trim())
                .filter(Boolean)
        };

        if (editingId) {
            await API.put(`/projects/${editingId}`, formattedData);
            setEditingId(null);
        } else {
            await API.post("/projects", formattedData);
        }

        setFormData({
            title: "",
            description: "",
            techStack: "",
            githubLink: "",
            liveLink: "",
            category: "",
            image: "",
            featured: false
        });

        fetchProjects();
    };

    const handleBlogSubmit = async (e) => {
        e.preventDefault();

        const formattedData = {
            ...blogForm,
            tags: blogForm.tags.split(",").map(tag => tag.trim())
        };

        if (editingBlogId) {
            await API.put(`/blogs/${editingBlogId}`, formattedData);
            setEditingBlogId(null);
        } else {
            await API.post("/blogs", formattedData);
        }

        setBlogForm({
            title: "",
            slug: "",
            content: "",
            tags: ""
        });

        fetchBlogs();
    };

    const handleDelete = async (id) => {
        if (window.confirm("Delete this project?")) {
            await API.delete(`/projects/${id}`);
            fetchProjects();
        }
    };

    const handleBlogDelete = async (id) => {
        if (window.confirm("Delete this blog?")) {
            await API.delete(`/blogs/${id}`);
            fetchBlogs();
        }
    };

    return (
        <div className="min-h-screen text-white px-6 md:px-16 py-20">

            <h1 className="text-4xl font-bold mb-16 tracking-tight">
                Admin Dashboard
            </h1>

            <div className="grid lg:grid-cols-2 gap-16">

                {/* ================= PROJECT MANAGEMENT ================= */}
                <div className="space-y-10">

                    <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8">
                        <h2 className="text-2xl font-semibold mb-6">
                            {editingId ? "Edit Project" : "Create Project"}
                        </h2>

                        <form onSubmit={handleSubmit} className="space-y-4">

                            <input
                                type="text"
                                name="title"
                                placeholder="Project Title"
                                value={formData.title}
                                onChange={handleChange}
                                required
                                className="inputStyle"
                            />

                            <textarea
                                name="description"
                                placeholder="Project Description"
                                value={formData.description}
                                onChange={handleChange}
                                required
                                className="inputStyle"
                            />

                            <input
                                type="text"
                                name="techStack"
                                placeholder="Tech Stack (comma separated)"
                                value={formData.techStack}
                                onChange={handleChange}
                                className="inputStyle"
                            />

                            <input
                                type="text"
                                name="githubLink"
                                placeholder="GitHub Link"
                                value={formData.githubLink}
                                onChange={handleChange}
                                className="inputStyle"
                            />

                            <input
                                type="text"
                                name="liveLink"
                                placeholder="Live Demo Link"
                                value={formData.liveLink}
                                onChange={handleChange}
                                className="inputStyle"
                            />

                            <input
                                type="text"
                                name="category"
                                placeholder="Category"
                                value={formData.category}
                                onChange={handleChange}
                                className="inputStyle"
                            />

                            <input
                                type="text"
                                name="image"
                                placeholder="Image URL"
                                value={formData.image}
                                onChange={handleChange}
                                className="inputStyle"
                            />

                            <button
                                type="submit"
                                className="w-full bg-purple-600 hover:bg-purple-700 transition rounded-xl py-3 font-semibold"
                            >
                                {editingId ? "Update Project" : "Create Project"}
                            </button>
                        </form>
                    </div>

                    <div className="space-y-4">
                        {projects.map((project) => (
                            <div
                                key={project._id}
                                className="bg-white/5 border border-white/10 rounded-xl p-5 flex justify-between items-center"
                            >
                                <div>
                                    <h3 className="font-semibold">{project.title}</h3>
                                    <p className="text-sm text-gray-400">{project.category}</p>
                                </div>

                                <div className="flex gap-3">
                                    <button
                                        onClick={() => setEditingId(project._id) || setFormData({
                                            title: project.title,
                                            description: project.description,
                                            techStack: project.techStack.join(", "),
                                            githubLink: project.githubLink || "",
                                            liveLink: project.liveLink || "",
                                            category: project.category || "",
                                            image: project.image || "",
                                            featured: project.featured || false
                                        })}
                                        className="text-purple-400 hover:text-purple-300"
                                    >
                                        Edit
                                    </button>

                                    <button
                                        onClick={() => handleDelete(project._id)}
                                        className="text-red-400 hover:text-red-300"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

                {/* ================= BLOG MANAGEMENT ================= */}
                <div className="space-y-10">

                    <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8">
                        <h2 className="text-2xl font-semibold mb-6">
                            {editingBlogId ? "Edit Blog" : "Create Blog"}
                        </h2>

                        <form onSubmit={handleBlogSubmit} className="space-y-4">

                            <input
                                type="text"
                                name="title"
                                placeholder="Blog Title"
                                value={blogForm.title}
                                onChange={handleBlogChange}
                                required
                                className="inputStyle"
                            />

                            <input
                                type="text"
                                name="slug"
                                placeholder="Slug"
                                value={blogForm.slug}
                                onChange={handleBlogChange}
                                required
                                className="inputStyle"
                            />

                            <textarea
                                name="content"
                                placeholder="Blog Content"
                                value={blogForm.content}
                                onChange={handleBlogChange}
                                required
                                className="inputStyle"
                            />

                            <input
                                type="text"
                                name="tags"
                                placeholder="Tags (comma separated)"
                                value={blogForm.tags}
                                onChange={handleBlogChange}
                                className="inputStyle"
                            />

                            <button
                                type="submit"
                                className="w-full bg-purple-600 hover:bg-purple-700 transition rounded-xl py-3 font-semibold"
                            >
                                {editingBlogId ? "Update Blog" : "Create Blog"}
                            </button>
                        </form>
                    </div>

                    <div className="space-y-4">
                        {blogs.map((blog) => (
                            <div
                                key={blog._id}
                                className="bg-white/5 border border-white/10 rounded-xl p-5 flex justify-between items-center"
                            >
                                <div>
                                    <h3 className="font-semibold">{blog.title}</h3>
                                    <p className="text-sm text-gray-400">{blog.slug}</p>
                                </div>

                                <div className="flex gap-3">
                                    <button
                                        onClick={() => setEditingBlogId(blog._id) || setBlogForm({
                                            title: blog.title,
                                            slug: blog.slug,
                                            content: blog.content,
                                            tags: blog.tags.join(", ")
                                        })}
                                        className="text-purple-400 hover:text-purple-300"
                                    >
                                        Edit
                                    </button>

                                    <button
                                        onClick={() => handleBlogDelete(blog._id)}
                                        className="text-red-400 hover:text-red-300"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

            </div>
        </div>
    );
}