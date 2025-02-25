
import {RevealOnScroll} from "../RevealOnScroll";


export const Resume = () => {

   
    return (
        <section id="resume" className="min-h-screen flex items-center justify-center py-20 ">
            <RevealOnScroll>
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        Resume
                    </h2>

                    <div className="rounded-xl p-8 border-white/10 bordre hover:-translate-y-1 transtion-all">
                        <p className="text=gray-300 mb-6" > 
                            I am a passionate developer who loves to create and build new things.  I have a strong foundation in web development with expertise in building scalable applications
                            I am proficient in HTML, CSS, JavaScript, React, Node.js, Python, Express, and MongoDB. I am always looking for new opportunities to grow and expand my knowledge.
                        </p>

                        <div>
                            <h2>Download Resume</h2>
                                <a href="./assets/images/Software_Engineer.pdf" download="Software_Engineer.pdf"> Click here to download </a>
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
