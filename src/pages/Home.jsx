import Hero from "../components/Hero";
import ContactSection from "../components/ContactSection";
import FeaturedProjects from "../components/FeaturedProjects";
import AboutSection from "../components/AboutSection";
import SkillsSection from "../components/SkillsSection";
import SectionWrapper from "../components/SectionWrapper";
import PageWrapper from "../components/PageWrapper";

export default function Home() {


    return (
        <div>
            <PageWrapper>
                <Hero></Hero>
                <SectionWrapper>
                    <FeaturedProjects></FeaturedProjects>
                    <AboutSection bg="subtle"></AboutSection>
                    <SkillsSection></SkillsSection>
                    <ContactSection bg="subtle"></ContactSection>
                </SectionWrapper>
            </PageWrapper>
        </div>
    );
}