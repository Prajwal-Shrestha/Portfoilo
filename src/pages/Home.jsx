import { ThemeToggle } from "../components/ThemeToggle";
import { Navbar } from "../components/Navbar";
import { StarBackground } from "../components/starbackground";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { Education } from "../components/Education";
import { SkillsSection } from "../components/SkillsSection";
import  Projects  from "../components/Projects";
import { ContactSection } from "../components/ContactSection";
export const Home = () => {
    return(
     <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* Theme Toggle */}
            <ThemeToggle />


        {/* Background Effects */}
            <StarBackground />
        {/* Navbar */}
            <Navbar />
        {/* Main Content */}
            <main>
                <HeroSection />
                <AboutSection />
                <Education />
                <SkillsSection />
                <Projects />
                <ContactSection />
            </main>
        {/* Footer */}
    </div>
    );
};
