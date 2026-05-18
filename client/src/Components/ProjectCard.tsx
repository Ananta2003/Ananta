import { motion } from "framer-motion"
import { MdOpenInNew } from "react-icons/md";
import { PROJECTS } from "../data"

export default function ProjectCard() {
    return (
        <div id='projects' className="w-full h-auto bg-black  rounded-xl p-8 text-white overflow-hidden cursor-pointer">
            {/* Projects Section */}
            <div >
                <div id="title" className="p-4 flex gap-4 items-center">
                    <div className="h-[2px] w-18 bg-[#0ab4d8] rounded-full " />
                    <h1 className="text-[#0ab4d8] font-display font-light text-light">SELECTED WORK</h1>
                </div>
                <h1 className="font-syne text-6xl font-bold text-white mb-12 px-4">Projects.</h1>
            </div>

            <div className="max-w-6xl mx-auto py-8">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {PROJECTS.map((proj, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={`group relative rounded-3xl overflow-hidden aspect-[4/3] md:aspect-auto md:min-h-[500px] ${proj.colSpan}`}

                        >
                            <a href={proj.anchor} target='_blank'>
                                <div className="absolute inset-0 bg-slate-800 overflow-hidden">
                                    <img
                                        src={proj.image}
                                        alt={proj.title}
                                        className="w-full h-full object-cover lg:filter lg:scale-110 lg:blur-[5px] lg:brightness-50 lg:transition-all lg:duration-700 lg:ease-out lg:group-hover:blur-none lg:group-hover:scale-105 lg:group-hover:brightness-100"
                                    />
                                </div>

                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20" />

                                <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
                                    <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                        <span className="text-cyan-400 lg:text-xl md:text-md font-normal tracking-widest uppercase mb-3 block">
                                            {proj.category}
                                        </span>
                                        <h3 className="lg:text-5xl md:text-4xl font-syne font-bold text-white mb-6">
                                            {proj.title}
                                        </h3>

                                        <div className="flex flex-wrap gap-3 mb-8 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                            {proj.technologies.map(tag => (
                                                <span key={tag} className="px-3 py-1 rounded-full border border-white/20 text-xs text-slate-300 backdrop-blur-md">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        <button className="flex items-center gap-2 text-white font-medium hover:text-cyan-400 transition-colors">
                                            View Project <MdOpenInNew size={25} />
                                        </button>
                                    </div>
                                </div>
                            </a>

                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}