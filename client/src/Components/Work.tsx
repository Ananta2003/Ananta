import { motion } from "framer-motion"
import { EXPERIENCES } from '../data'

export default function Work() {


    return (
        <div className="w-full h-auto bg-black p-8 text-white overflow-hidden cursor-pointer">
            <div>
                <div id="title" className="p-4 flex gap-4 items-center">
                    <div className="h-[2px] w-18 bg-violet-500 rounded-full " />
                    <h1 className="text-violet-500 font-display font-light text-light">WORK EXPERIENCE</h1>
                </div>
                <h1 className="font-syne text-6xl font-bold text-white mb-12 px-4">Career.</h1>
            </div>
            {EXPERIENCES.map((exp, index) => {
                return (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{
                            y: -8,
                            scale: 1.01,
                        }}
                        viewport={{ once: true }}
                        transition={{
                            delay: 0.1,
                            type: "spring",
                            stiffness: 250,
                            damping: 18,
                        }}
                        className="relative group cursor-pointer my-8"
                    >
                        {/* Giant watermark company name behind the card */}
                        <div key={index} className="absolute -left-4 top-1/2 -translate-y-1/2 text-[clamp(60px,12vw,180px)] font-syne font-bold text-white/[0.02] whitespace-nowrap z-0 transition-all duration-500 group-hover:text-violet-500/5">
                            {exp.company}
                        </div>

                        <div className="relative z-10 p-8 md:p-12 border border-white/5 bg-white/[0.02] backdrop-blur-sm rounded-3xl hover:bg-white/[0.10] transition-colors">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-syne font-bold text-white mb-2">
                                        {exp.title}
                                    </h3>
                                    <p className="text-violet-400 font-medium tracking-wide">{exp.company}</p>
                                </div>
                                <span className="text-slate-500 border border-white/10 px-4 py-1.5 rounded-full text-sm font-medium w-fit">
                                    {exp.period}
                                </span>
                            </div>
                            <p className="text-slate-400 max-w-2xl text-lg leading-relaxed">
                                {exp.description}
                            </p>
                        </div>
                    </motion.div>
                )
            })}
        </div>

    )
}