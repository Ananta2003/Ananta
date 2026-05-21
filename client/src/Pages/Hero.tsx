import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Hero() {

    const icons = [
        {
            icon: FaGithub,
            link: "https://github.com/Ananta2003",
        },
        {
            icon: FaLinkedinIn,
            link: "https://www.linkedin.com/in/ananta-vigave/",
        },
        {
            icon: FaXTwitter,
            link: "https://x.com/AnantaInsights",
        },
    ];

    return (
        <div className="w-full h-screen flex items-center overflow-hidden bg-gradient-to-b from-black via-violet-900 to-black p-8">
            <div className="relative z-20 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center p-4">

                <div className="flex flex-col">


                    {/* Name */}
                    <div className="overflow-hidden mb-4">
                        <motion.h1
                            initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                            className="font-syne font-bold text-white leading-[0.85] tracking-tighter"
                            style={{ fontSize: 'clamp(56px, 9vw, 130px)' }}
                        >
                            ANANTA
                        </motion.h1>
                    </div>

                    {/* Role */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.45 }}
                        className="flex items-center gap-4 mb-8"
                    >
                        <div className="h-[2px] w-12 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full" />
                        <span className="font-syne text-lg md:text-xl text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400 font-semibold tracking-widest uppercase">
                            Full Stack Developer
                        </span>
                    </motion.div>

                    {/* Bio */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="text-slate-400 text-lg leading-relaxed max-w-lg mb-12"
                    >
                        I build polished digital products where great design meets solid engineering — from
                        interactive UIs to scalable APIs. 5+ years turning complex problems into clean, fast experiences.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.75 }}
                        className="flex flex-wrap items-center gap-4 mb-12"
                    >
                        <a href="#projects" className="group px-7 py-3.5 rounded-full bg-gradient-to-r from-violet-600 to-cyan-600 text-white font-semibold tracking-wide hover:opacity-90 transition-all flex items-center gap-2 shadow-lg shadow-violet-500/25" >
                            See My Work

                        </a>
                        <a href="#contact" className="px-7 py-3.5 rounded-full border border-white/15 text-slate-300 font-semibold tracking-wide hover:bg-white/5 hover:border-white/30 hover:text-white transition-all flex items-center gap-2">
                            Get in Touch
                        </a>
                    </motion.div>

                    {/* Stats + Socials */}
                    <motion.div
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.9 }}
                        className="flex items-center gap-8 pt-4 border-t border-white/5"
                    >
                        {[
                            { num: "2+", label: "Years exp." },
                            { num: "10+", label: "Projects built" },
                        ].map(({ num, label }) => (
                            <div key={label}>
                                <div className="font-syne text-2xl font-bold text-white">{num}</div>
                                <div className="text-slate-500 text-xs tracking-wide mt-0.5">{label}</div>
                            </div>
                        ))}
                        <div className="ml-auto flex items-center gap-3">
                            {icons.map(({ icon: Icon, link }, i) => (
                                <a
                                    key={i}
                                    href={link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/30 transition-all"
                                >
                                    <Icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    </motion.div>
                </div>


                <motion.div
                    initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="hidden lg:flex items-center justify-center relative h-[500px]"
                >
                    {/* Pulse rings */}
                    {[0, 1, 2].map((i) => (
                        <div key={i} className="absolute rounded-full border border-violet-400/20"
                            style={{
                                width: `${340 + i * 90}px`, height: `${340 + i * 90}px`,
                                animation: `pulse-ring ${3 + i}s ease-in-out infinite`, animationDelay: `${i * 0.6}s`
                            }}
                        />
                    ))}

                    {/* Orbit rings */}
                    <div className="absolute w-[320px] h-[320px] rounded-full border border-dashed border-[#06b6d4]"
                        style={{ animation: 'spin-slow 20s linear infinite' }}>
                        <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-cyan-400" style={{ boxShadow: '0 0 12px #06b6d4' }} />
                    </div>
                    <div className="absolute w-[260px] h-[260px] rounded-full border border-dashed border-[#8b5cf6]"
                        style={{ animation: 'spin-slow-rev 15s linear infinite' }}>
                        <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-violet-400" style={{ boxShadow: '0 0 10px #8b5cf6' }} />
                    </div>

                    {/* Core orb */}
                    <div className="relative w-52 h-52 rounded-full flex items-center justify-center"
                        style={{ animation: 'orb-glow 4s ease-in-out infinite' }}>
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-600 via-indigo-700 to-cyan-700 opacity-80" />
                        <div className="absolute inset-[3px] rounded-full bg-[#070711]" />
                        <motion.div animate={{ x: [0, 100, 0] }}>
                            <div className="relative z-10 font-syne font-bold text-5xl text-transparent bg-clip-text bg-gradient-to-br from-violet-300 to-cyan-300">A</div>
                        </motion.div>

                    </div>

                    {/* Skill chips */}
                    {[
                        {
                            label: "React",
                            color: "text-cyan-400 border-cyan-500/30 bg-cyan-500/10",
                            pos: "top-6 -right-4",
                        },
                        {
                            label: "Node.js",
                            color: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
                            pos: "top-1/3 -right-12",
                        },
                        {
                            label: "TypeScript",
                            color: "text-violet-400 border-violet-500/30 bg-violet-500/10",
                            pos: "bottom-12 -right-6",
                        },
                        {
                            label: "Next.js",
                            color: "text-slate-300 border-white/15 bg-white/5",
                            pos: "top-6 -left-4",
                        },
                        {
                            label: "PostgreSQL",
                            color: "text-sky-400 border-sky-500/30 bg-sky-500/10",
                            pos: "bottom-10 -left-8",
                        },
                    ].map(({ label, color, pos }) => (
                        <motion.div
                            key={label}
                            whileHover={{
                                y: -6,
                                scale: 1.08,
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 300,
                                damping: 15,
                            }}
                            className={`absolute px-3 py-1.5 rounded-full border text-xs font-semibold tracking-wide cursor-pointer ${color} ${pos}`}
                            style={{ backdropFilter: "blur(8px)" }}
                        >
                            {label}
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    )
}
