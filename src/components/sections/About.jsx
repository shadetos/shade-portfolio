import {RevealOnScroll} from "../RevealOnScroll";



export const About = () => {

    const frontendSkills = [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Vue",
        "Tailwind CSS",
    ];

    const backendSkills = [
        "AWS",
        "Node.js",
        "Python",
        "MongoDB",
        "PostgreSQL",
        "GraphQL",
    ];


    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-20 ">
            <RevealOnScroll>
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        About Me
                    </h2>

                    <div className="rounded-xl p-8 border-white/10 bordre hover:-translate-y-1 transtion-all">
                        <p className="text=gray-300 mb-6" > 
                            I am a passionate developer who loves to create and build new things.  I have a strong foundation in web development with expertise in building scalable applications
                            I am proficient in HTML, CSS, JavaScript, React, Node.js, Python, Express, and MongoDB. I am always looking for new opportunities to grow and expand my knowledge.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6" >
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all " >
                                <h3 className="text-xl font-bold mb-4 " >
                                    Frontend
                                    <div className="flex flex-wrap gap-2">
                                        {frontendSkills.map((tech, key) => (
                                            <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </h3>
                            </div>

                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all " >
                                <h3 className="text-xl font-bold mb-4 " >
                                    Backend
                                    <div className="flex flex-wrap gap-2">
                                        {backendSkills.map((tech, key) => (
                                            <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </h3>
                            </div>
                        </div>

                    </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                            <div className=" p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">
                                📚 Education
                                </h3>
                                    <ul className = "list-disc list-inside text-gray-300 space-y-2">
                                        <li>
                                            <strong>
                                                Masters in Business Administration
                                            </strong>
                                        </li>
                                        <li>
                                            <strong>
                                            Relevant Coursework:    
                                                Information Security, Business Analytics and Intelligence
                                            </strong>
                                        </li>
                                    </ul>

                            </div>

                            <div className=" p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">
                                💼 Work Experience
                                </h3>
                                    <div className="space-y-4 text-gray-300"> 
                                        <div>
                                            <h4 className="font-semibold">
                                                ABC Company: Engineer 
                                                    <p>
                                                        Developed and maintained microservices for cloud-based applications
                                                    </p>
                                            </h4>

                                            <h4 className="font-semibold">
                                                BCD Company: Engineer 
                                                    <p>
                                                        Developed and maintained microservices for cloud-based applications
                                                    </p>
                                            </h4>

                                            <h4 className="font-semibold">
                                                CDE Company: Engineer 
                                                    <p>
                                                        Developed and maintained microservices for cloud-based applications
                                                    </p>
                                            </h4>

                                        </div>

                                    </div>

                            </div>


                        </div>                     

                </div>
            </RevealOnScroll>
        </section>
    )   
};