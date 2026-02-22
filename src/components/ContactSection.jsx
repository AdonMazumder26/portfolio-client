import { useState } from "react";
import API from "../services/api";
import { motion } from "framer-motion";

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        setSuccess(false);

        try {
            await API.post("/contact", formData);
            setSuccess(true);
            setFormData({ name: "", email: "", message: "" });
            // eslint-disable-next-line no-unused-vars
        } catch (err) {
            setError("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="relative py-24 sm:py-32 px-0 sm:px-2 md:px-8 text-white" id="contact">

            <div className="max-w-3xl mx-auto w-full min-w-0">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <p className="
            text-[12px]
            uppercase
            tracking-[0.25em]
            text-purple-400
            font-medium
            mb-5
          ">
                        Contact
                    </p>

                    <h2 className="
            font-heading
            text-[34px]
            md:text-[48px]
            font-semibold
            tracking-[-0.02em]
            leading-[1.15]
          ">
                        Let’s Work Together
                    </h2>

                    <p className="
            mt-6
            text-[15px]
            text-gray-400
            max-w-xl
            mx-auto
            leading-[1.6]
          ">
                        Have a project in mind or just want to connect?
                        I’m always open to discussing ideas, collaborations,
                        and new opportunities.
                    </p>
                </motion.div>

                {/* Form */}
                <motion.form
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                    onSubmit={handleSubmit}
                    className="
            relative
            bg-white/5
            backdrop-blur-xl
            border border-white/10
            rounded-2xl sm:rounded-3xl
            p-5 sm:p-6 md:p-10
            space-y-5 sm:space-y-7
            shadow-[0_20px_80px_rgba(0,0,0,0.4)]
          "
                >

                    <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-linear-to-br from-white/5 to-transparent pointer-events-none" />

                    {/* Input Fields */}
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="
              w-full
              text-[14px]
              font-light
              bg-black/30
              border border-white/10
              rounded-xl
              px-5 py-3
              placeholder:text-gray-500
              focus:outline-none
              focus:border-purple-500
              transition
            "
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="
              w-full
              text-[14px]
              font-light
              bg-black/30
              border border-white/10
              rounded-xl
              px-5 py-3
              placeholder:text-gray-500
              focus:outline-none
              focus:border-purple-500
              transition
            "
                    />

                    <textarea
                        name="message"
                        rows="5"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="
              w-full
              text-[14px]
              font-light
              bg-black/30
              border border-white/10
              rounded-xl
              px-5 py-3
              placeholder:text-gray-500
              focus:outline-none
              focus:border-purple-500
              transition
              resize-none
            "
                    />

                    {/* Button */}
                    <button
                        type="submit"
                        disabled={loading}
                        className="
              w-full
              text-[14px]
              font-medium
              tracking-[0.02em]
              bg-purple-600
              hover:bg-purple-700
              transition-all duration-300
              rounded-xl
              py-3
              shadow-lg shadow-purple-500/20
              disabled:opacity-50
            "
                    >
                        {loading ? "Sending..." : "Send Message →"}
                    </button>

                    {/* Feedback */}
                    {success && (
                        <p className="text-[13px] text-green-400 text-center tracking-[0.02em]">
                            Message sent successfully.
                        </p>
                    )}

                    {error && (
                        <p className="text-[13px] text-red-400 text-center tracking-[0.02em]">
                            {error}
                        </p>
                    )}

                </motion.form>
            </div>
        </section>
    );
}