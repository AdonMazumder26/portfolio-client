export default function SectionWrapper({ children, bg = "default" }) {
    const backgrounds = {
        default: "",
        subtle: "bg-gradient-to-b from-transparent to-gray-950/50",
    };

    return (
        <section className={`${backgrounds[bg] || ""} text-white py-28 px-6 md:px-16`}>
            <div className="max-w-7xl mx-auto">
                {children}
            </div>
        </section>
    );
}