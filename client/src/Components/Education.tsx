import { motion } from "framer-motion"
import { ToolKit } from "../data"

export default function Education() {

    return (
        <div>
            {/* Education & Skills */}
            <section className="py-32 px-6 sm:px-12 lg:px-24 relative z-10">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">

                    {/* Education Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div id="title" className="py-4 flex gap-4 items-center">
                            <div className="h-[2px] w-18 bg-violet-500 rounded-full " />
                            <h1 className="text-violet-500 font-display font-light text-light">EDUCATION</h1>
                        </div>
                        <h2 className="font-syne text-4xl font-bold text-white mb-12">Academic.</h2>

                        <div className="space-y-8">
                            <div className="border-l border-white/10 pl-8 relative">
                                <div className="absolute w-3 h-3 bg-violet-500 rounded-full -left-[6.5px] top-2" />
                                <h3 className="text-xl font-bold text-white mb-1">Manipal University</h3>
                                <p className="text-violet-400 mb-2">Masters of Computer Application (MCA)</p>
                                <p className="text-slate-400 text-sm">2026</p>
                            </div>
                            <div className="border-l border-white/10 pl-8 relative">
                                <div className="absolute w-3 h-3 bg-white/20 rounded-full -left-[6.5px] top-2" />
                                <h3 className="text-xl font-bold text-white mb-1">SIES College of Arts, Science and Commerce</h3>
                                <p className="text-slate-300 mb-2">Bachelor of Science in Information Technology Bsc (IT)</p>
                                <p className="text-slate-400 text-sm">2024</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Skills / Toolkit Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div id="title" className="py-4 flex gap-4 items-center">
                            <div className="h-[2px] w-18 bg-[#0ab4d8] rounded-full " />
                            <h1 className="text-[#0ab4d8] font-display font-light text-light">EXPERTISE</h1>
                        </div>
                        <h2 className="font-syne text-4xl font-bold text-white mb-12">Toolkit.</h2>

                        <div className="grid grid-cols-2 gap-6">
                            {ToolKit.map((skill, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{
                                        y: -8,
                                        scale: 1.03,
                                    }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 300,
                                        damping: 18,
                                    }}
                                    className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 cursor-pointer hover:bg-white/[0.10]"
                                >
                                    <skill.icon size={30} className={skill.color} />

                                    <h4 className="text-white font-bold mb-1 mt-4">
                                        {skill.title}
                                    </h4>

                                    <p className="text-sm text-slate-400">
                                        {skill.tools}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                </div>
            </section>
        </div>
    )
}