import Hero from "../components/Hero";
import ContactSection from "../components/ContactSection";
import FeaturedProjects from "../components/FeaturedProjects";
import AboutSection from "../components/AboutSection";
import SkillsSection from "../components/SkillsSection";

export default function Home() {


    return (
        <div>
            <Hero></Hero>
            <FeaturedProjects></FeaturedProjects>

            <AboutSection bg="subtle"></AboutSection>


            <SkillsSection bg="glass"></SkillsSection>
            <ContactSection bg="subtle"></ContactSection>
        </div>
    );
}