import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";

export default function Footer() {
    return (
        <footer id="contact" className="py-20 px-6 sm:px-12 lg:px-24 border-t border-white/10 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute inset-0 z-0 pointer-events-none flex items-end justify-center">
                <div className="w-[800px] h-[400px] rounded-full bg-violet-600/30"
                    style={{ filter: 'blur(80px)', transform: 'translateY(50%)', mixBlendMode: 'screen' }} />
            </div>
            <div className="max-w-6xl mx-auto relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
                {/* Left */}
                <div>
                    <h2 className="font-syne text-3xl font-bold text-white mb-2">Ready to build?</h2>
                    <p className="text-slate-400">Let's create something extraordinary together.</p>
                </div>
                {/* Right — icon buttons */}
                <div className="flex items-center gap-4">
                    {[
                        { icon: <FaGithub/>, href: "https://github.com/Ananta2003" },
                        { icon: <FaXTwitter/>, href: "https://x.com/AnantaInsights" },
                        { icon: <FaLinkedin/>, href: "https://www.linkedin.com/in/ananta-vigave/" },
                        { icon: <CiMail/>, href: "mailto:vigaveananta@gmail.com" },
                    ].map(({ icon: Icon, href }, i) => (
                        <a  target="_blank" key={i} href={href}
                            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:bg-white hover:text-black transition-all duration-300">
                            {Icon}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    )
}