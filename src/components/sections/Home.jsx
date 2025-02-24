import {RevealOnScroll} from "../RevealOnScroll";

export const Home = () => {
    return (
    <section id="home" className="min-h-screen flex items-center justify-center relative"> 

        <RevealOnScroll>
        <div className=" text-center z-10 and px4">
            <h1 className="text-5xl md: text-7xl fong-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right"> 
                Hello, my name is Shade Westwood
            </h1>

            <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto"> 
                I am a full-stack developer with a passion for creating beautiful and functional websites. 
                My goal is to help you bring your ideas to life and make your online presence stand out.
                I am eager to work with you on your next project.
            </p>

            <div className="flex justify-center space-x-4">
                <a href="#project" className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] " > View Project </a>
                <a href="#contact" className="border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10"> Contact Me </a>
            </div>

        </div>
        </RevealOnScroll>
    </section>
    );
    }