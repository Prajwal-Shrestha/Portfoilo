import { ArrowDown } from "lucide-react";
import Pic from "@/assets/prajwal.jpg"; // <-- update your image path

export const HeroSection = () => {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex flex-col items-center justify-center px-4"
        >
            {/* Profile Image */}
            <div className="w-43 h-43 md:w-53 md:h-53 lg:w-63 lg:h-63 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 mb-8 flex items-center justify-center">
                <img
                    src={Pic}
                    alt="User"
                    className="w-40 h-40 md:w-50 md:h-50 lg:w-60 lg:h-60 object-cover rounded-full"
                />
            </div>

            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        <span className="text-primary opacity-0 animate-fade-in-delay-1 text-3xl md:text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                            Prajwal
                        </span>
                        <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2 text-3xl md:text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">
                            Shrestha
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                        I create stellar web experiences with modern technologies.
                        Specializing in front-end development, I build interfaces that are
                        both beautiful and functional.
                    </p>

                    <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                        <a href="#projects" className="cosmic-button">
                            View My Work
                        </a>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                <span className="text-sm text-muted-foreground mb-2">Scroll</span>
                <ArrowDown className="h-5 w-5 text-primary" />
            </div>
        </section>
    );
};