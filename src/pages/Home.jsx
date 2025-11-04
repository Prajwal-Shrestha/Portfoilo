import { ThemeToggle } from "../components/ThemeToggle";
import { Navbar } from "../components/Navbar";
import { StarBackground } from "../components/starbackground";

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

        {/* Footer */}
    </div>
    );
};
