import { motion } from "framer-motion";
import { useMemo } from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Hyperspeed from "../Components/Hyperspeed/Hyperspeed";

export default function Hero() {


    const hyperspeedOptions = useMemo(() => ({
        distortion: 'turbulentDistortion',
        length: 400,
        roadWidth: 10,
        islandWidth: 2,
        lanesPerRoad: 3,
        fov: 90,
        fovSpeedUp: 150,
        speedUp: 2,
        carLightsFade: 0.4,
        totalSideLightSticks: 20,
        lightPairsPerRoadWay: 40,
        shoulderLinesWidthPercentage: 0.05,
        brokenLinesWidthPercentage: 0.1,
        brokenLinesLengthPercentage: 0.5,
        lightStickWidth: [0.12, 0.5] as [number, number],
        lightStickHeight: [1.3, 1.7] as [number, number],
        movingAwaySpeed: [60, 80] as [number, number],
        movingCloserSpeed: [-120, -160] as [number, number],
        carLightsLength: [400 * 0.03, 400 * 0.2] as [number, number],
        carLightsRadius: [0.05, 0.14] as [number, number],
        carWidthPercentage: [0.3, 0.5] as [number, number],
        carShiftX: [-0.8, 0.8] as [number, number],
        carFloorSeparation: [0, 5] as [number, number],
        colors: {
            roadColor: 0x080808,
            islandColor: 0x0a0a0a,
            background: 0x000000,
            shoulderLines: 0x131318,
            brokenLines: 0x131318,
            leftCars: [0x7B5CF0, 0x3B82F6, 0x06B6D4],  // violet/blue/cyan
            rightCars: [0x06B6D4, 0x7B5CF0, 0xA78BFA],
            sticks: 0x7B5CF0,
        }
    }), []);

    const icons = [
        { icon: FaGithub, link: "https://github.com/Ananta2003" },
        { icon: FaLinkedinIn, link: "https://www.linkedin.com/in/ananta-vigave/" },
        { icon: FaXTwitter, link: "https://x.com/AnantaInsights" },
    ];

    return (
        <div className="w-full h-screen flex items-center overflow-hidden relative bg-black p-8">
            <div className="absolute inset-0 z-0">
                <Hyperspeed effectOptions={hyperspeedOptions} />
            </div>
            <div className="relative z-20 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center  p-4">

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

                
            </div>
        </div>
    )
}
