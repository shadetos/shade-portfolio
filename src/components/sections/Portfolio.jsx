import {RevealOnScroll} from "../RevealOnScroll";
import RSEmojiCopy from "../../assets/images/RSEmojiCopy.jpg"; 

export const Portfolio = () => {
    return ( 
    <section id="portfolio" className="min-h-screen flex flex-col items-center justify-center py-20">

        <RevealOnScroll>
            <div className=" max-w-5xl mx-auto -px4" >
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        Portfolio
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-6 rounded-xl border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"> 
                            <h3 className="text-xl font-bold mb-2">Project 1  </h3>
                                
                                <img src={RSEmojiCopy} className="w-[50px] h-[50px] rounded-full" />

                            <p className="text-gray-400 mb-4 "> Scaled cloud infratructure management with real-time monitoring</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                            {["React", "Node.js", "AWS"].map((tech, key) => (
                            <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                            {tech}
                        </span>
                            ))}
                            </div>

                            <div className="flex justify-between items-center">
                                <a href="https://github.com/shadetos/gamefindme" className="text-blue-400 hover:text-blue-300 transition-colors my-4 "> View Project → {" "} </a> {/* Add link to project */}
                            </div>
                        </div>    

                        <div className="p-6 rounded-xl border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"> 
                            <h3 className="text-xl font-bold mb-2">Project 2  </h3>

                            <img src={RSEmojiCopy} className="w-[50px] h-[50px] rounded-full" />

                            <p className="text-gray-400 mb-4 "> Scaled cloud infratructure management with real-time monitoring</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                            {["React", "Node.js", "AWS"].map((tech, key) => (
                            <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                            {tech}
                        </span>
                            ))}
                            </div>

                            <div className="flex justify-between items-center">
                                <a href="https://github.com/shadetos/FlixPix" className="text-blue-400 hover:text-blue-300 transition-colors my-4 "> View Project → {" "} </a> {/* Add link to project */}
                            </div>
                        </div>    

                        <div className="p-6 rounded-xl border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"> 
                            <h3 className="text-xl font-bold mb-2">Project 3  </h3>

                            <img src={RSEmojiCopy} className="w-[50px] h-[50px] rounded-full" />

                            <p className="text-gray-400 mb-4 "> Scaled cloud infratructure management with real-time monitoring</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                            {["React", "Node.js", "AWS"].map((tech, key) => (
                            <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                            {tech}
                        </span>
                            ))}
                            </div>

                            <div className="flex justify-between items-center">
                                <a href="https://github.com/shadetos/module8_weatherapp" className="text-blue-400 hover:text-blue-300 transition-colors my-4 "> View Project → {" "} </a> {/* Add link to project */}
                            </div>
                        </div>    

                        <div className="p-6 rounded-xl border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"> 
                            <h3 className="text-xl font-bold mb-2">Project 4  </h3>

                            <img src={RSEmojiCopy} className="w-[50px] h-[50px] rounded-full" />

                            <p className="text-gray-400 mb-4 "> Scaled cloud infratructure management with real-time monitoring</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                            {["React", "Node.js", "AWS"].map((tech, key) => (
                            <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                            {tech}
                        </span>
                            ))}
                            </div>

                            <div className="flex justify-between items-center">
                                <a href="https://github.com/shadetos/Module7" className="text-blue-400 hover:text-blue-300 transition-colors my-4 "> View Project → {" "} </a> {/* Add link to project */}
                            </div>
                        </div>    

                        <div className="p-6 rounded-xl border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"> 
                            <h3 className="text-xl font-bold mb-2">Project 5  </h3>

                            <img src={RSEmojiCopy} className="w-[50px] h-[50px] rounded-full" />

                            <p className="text-gray-400 mb-4 "> Scaled cloud infratructure management with real-time monitoring</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                            {["React", "Node.js", "AWS"].map((tech, key) => (
                            <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                            {tech}
                        </span>
                            ))}
                            </div>

                            <div className="flex justify-between items-center">
                                <a href="https://github.com/shadetos/first-day-repo" className="text-blue-400 hover:text-blue-300 transition-colors my-4 "> View Project → {" "} </a> {/* Add link to project */}
                            </div>
                        </div>    

                        <div className="p-6 rounded-xl border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"> 
                            <h3 className="text-xl font-bold mb-2">Project 6  </h3>

                            <img src={RSEmojiCopy} className="w-[50px] h-[50px] rounded-full" />

                            <p className="text-gray-400 mb-4 "> Scaled cloud infratructure management with real-time monitoring</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                            {["React", "Node.js", "AWS"].map((tech, key) => (
                            <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                            {tech}
                        </span>
                            ))}
                            </div>

                            <div className="flex justify-between items-center">
                                <a href="https://github.com/shadetos/shade-portfolio" className="text-blue-400 hover:text-blue-300 transition-colors my-4 "> View Project → {" "} </a> {/* Add link to project */}
                            </div>
                        </div>    


                    </div>
            </div>
        </RevealOnScroll>
    </section>
    );
};

