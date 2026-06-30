import { useState, useEffect } from "react";
import profile from "../assets/profile.png";

const roles = ["FullStack Developer", "AI Enthusiast", "Problem Solver"];

function useTyping(words, typingSpeed = 100, deletingSpeed = 60, pause = 1800) {
  const [displayed, setDisplayed] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];
    let timeout;

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), typingSpeed);
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), deletingSpeed);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pause]);

  return displayed;
}

function Hero() {
  const typedRole = useTyping(roles);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const fadeClass = (delay) =>
    `transition-all duration-700 ${delay} ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`;

  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        flex
        items-center
        px-5
        md:px-20
        overflow-hidden
      "
      style={{
        background: "linear-gradient(135deg, #ffffff 0%, #f9f5f0 50%, #F3EEE8 100%)",
      }}
    >
      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(139,111,71,0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139,111,71,0.07) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />
      {/* Background blobs */}
      <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-[#e8ddd0] blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] rounded-full bg-[#e8ddd0] blur-3xl opacity-40 pointer-events-none" />

      {/* Decorative dots */}
      <div className="absolute top-1/3 left-1/2 w-2 h-2 rounded-full bg-[#8B6F47] opacity-30 pointer-events-none hidden md:block" />
      <div className="absolute top-1/2 left-[20%] w-2 h-2 rounded-full bg-[#8B6F47] opacity-30 pointer-events-none hidden md:block" />
      <div className="absolute bottom-1/4 left-[35%] w-2 h-2 rounded-full bg-[#8B6F47] opacity-20 pointer-events-none hidden md:block" />

      <div className="relative grid md:grid-cols-2 gap-10 items-center w-full">

        {/* ── Left ── */}
        <div>

          <p className={`text-[#8B6F47] text-sm tracking-[0.3em] font-medium mb-3 uppercase ${fadeClass("delay-[0ms]")}`}>
            Hello, I&apos;m
          </p>

          {/* Name with gradient */}
          <h1 className={`heading-font text-5xl md:text-8xl font-bold leading-tight ${fadeClass("delay-[150ms]")}`}>
            <span className="bg-gradient-to-r from-[#8B6F47] to-[#3d2b1f] bg-clip-text text-transparent">
              FAUZAN
            </span>
          </h1>

          {/* Typing effect */}
          <h2 className={`text-xl mt-4 h-8 ${fadeClass("delay-[300ms]")}`}>
            <span>{typedRole}</span>
            <span className="inline-block w-0.5 h-6 bg-[#8B6F47] ml-1 animate-pulse align-middle" />
          </h2>

          <p className={`mt-3 text-gray-600 max-w-lg leading-relaxed ${fadeClass("delay-[450ms]")}`}>
            Building modern web applications and exploring AI-powered solutions.
          </p>

          {/* CTA buttons */}
          <div className={`flex gap-3 items-center mt-8 ${fadeClass("delay-[600ms]")}`}>
            <a
              href="https://drive.google.com/file/d/1a2vMrvRTHhSUL1yPZCRGT4N447rAYzIi/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="
                border border-black px-6 py-3 rounded-full
                hover:bg-black hover:text-white
                transition-all duration-300
              "
            >
              Download CV
            </a>

            <button
              onClick={() => document.getElementById('project')?.scrollIntoView({ behavior: 'smooth' })}
              className="
              bg-black text-white px-6 py-3 rounded-full
              hover:bg-[#8B6F47]
              transition-all duration-300
              hover:shadow-lg hover:shadow-[#8B6F47]/30
            ">
              View My Work
            </button>
          </div>

          {/* Social icons */}
          <div className={`flex gap-4 items-center mt-8 ${fadeClass("delay-[750ms]")}`}>
            <a
              href="https://github.com/fauzankin"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="
                w-10 h-10 flex items-center justify-center
                rounded-full border border-gray-300 text-gray-700
                hover:bg-black hover:text-white hover:border-black
                transition-all duration-300 hover:scale-110
              "
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/fauzankinzzz"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="
                w-10 h-10 flex items-center justify-center
                rounded-full border border-gray-300 text-gray-700
                hover:bg-[#8B6F47] hover:text-white hover:border-[#8B6F47]
                transition-all duration-300 hover:scale-110
              "
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.025-3.04-1.85-3.04-1.855 0-2.14 1.45-2.14 2.945v5.665H9.36V9h3.41v1.56h.05c.475-.9 1.635-1.85 3.365-1.85 3.6 0 4.265 2.37 4.265 5.455v6.285zM5.34 7.43a2.06 2.06 0 11.005-4.12 2.06 2.06 0 01-.005 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.225 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.225 0z" />
              </svg>
            </a>

            <a
              href="https://www.instagram.com/fauzankin/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="
                w-10 h-10 flex items-center justify-center
                rounded-full border border-gray-300 text-gray-700
                hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-pink-500 hover:to-purple-500
                hover:text-white hover:border-transparent
                transition-all duration-300 hover:scale-110
              "
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.336 3.608 1.311.975.975 1.249 2.242 1.311 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.069 4.85c-.062 1.366-.336 2.633-1.311 3.608-.975.975-2.242 1.249-3.608 1.311-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.069c-1.366-.062-2.633-.336-3.608-1.311-.975-.975-1.249-2.242-1.311-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.069-4.85c.062-1.366.336-2.633 1.311-3.608.975-.975 2.242-1.249 3.608-1.311C8.416 2.175 8.796 2.163 12 2.163zm0 1.802c-3.156 0-3.51.012-4.748.069-1.024.046-1.58.215-1.95.357-.49.19-.84.418-1.21.788-.37.37-.598.72-.788 1.21-.142.37-.311.926-.357 1.95-.057 1.238-.069 1.592-.069 4.748s.012 3.51.069 4.748c.046 1.024.215 1.58.357 1.95.19.49.418.84.788 1.21.37.37.72.598 1.21.788.37.142.926.311 1.95.357 1.238.057 1.592.069 4.748.069s3.51-.012 4.748-.069c1.024-.046 1.58-.215 1.95-.357.49-.19.84-.418 1.21-.788.37-.37.598-.72.788-1.21.142-.37.311-.926.357-1.95.057-1.238.069-1.592.069-4.748s-.012-3.51-.069-4.748c-.046-1.024-.215-1.58-.357-1.95-.19-.49-.418-.84-.788-1.21-.37-.37-.72-.598-1.21-.788-.37-.142-.926-.311-1.95-.357-1.238-.057-1.592-.069-4.748-.069zm0 4.594a5.441 5.441 0 110 10.882 5.441 5.441 0 010-10.882zm0 1.802a3.639 3.639 0 100 7.278 3.639 3.639 0 000-7.278zm5.722-1.998a1.271 1.271 0 11-2.542 0 1.271 1.271 0 012.542 0z" />
              </svg>
            </a>
          </div>
        </div>

        {/* ── Right ── */}
        <div className={`relative flex justify-center ${fadeClass("delay-[200ms]")}`}>

          {/* Rotating gradient ring */}
          <div className="absolute w-[22rem] h-[22rem] rounded-full animate-spin-slow"
            style={{
              background: "conic-gradient(from 0deg, #8B6F47, #F3EEE8, #8B6F47, #F3EEE8, #8B6F47)",
              padding: "3px",
            }}
          >
            <div className="w-full h-full rounded-full bg-white" />
          </div>

          {/* Soft glow behind photo */}
          <div className="absolute w-80 h-80 rounded-full bg-[#F3EEE8] blur-2xl opacity-80" />

          {/* Floating profile photo */}
          <img
            src={profile}
            alt="Fauzan profile"
            className="
              relative
              w-80 h-80
              rounded-full
              object-cover
              border-4 border-white
              shadow-2xl
              animate-float
            "
          />

          {/* Floating badge — trait 1 */}
          <div className="
            absolute -bottom-2 -left-4
            bg-white rounded-2xl shadow-lg px-4 py-2
            flex items-center gap-3
            animate-float-delayed
          ">
            <div className="w-9 h-9 rounded-xl bg-[#F3EEE8] flex items-center justify-center shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8B6F47" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6"/>
                <polyline points="8 6 2 12 8 18"/>
              </svg>
            </div>
            <div>
              <p className="text-xs text-gray-400 leading-none mb-0.5">Code Style</p>
              <p className="text-[#8B6F47] font-semibold text-sm">Clean Code</p>
            </div>
          </div>

          {/* Floating badge — trait 2 */}
          <div className="
            absolute -top-2 -right-4
            bg-white rounded-2xl shadow-lg px-4 py-2
            flex items-center gap-3
            animate-float
          ">
            <div className="w-9 h-9 rounded-xl bg-[#F3EEE8] flex items-center justify-center shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8B6F47" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2a10 10 0 1 0 10 10"/>
                <path d="M12 6v6l4 2"/>
                <path d="M22 2 12 12"/>
              </svg>
            </div>
            <div>
              <p className="text-xs text-gray-400 leading-none mb-0.5">Mindset</p>
              <p className="text-[#8B6F47] font-semibold text-sm">Always Learning</p>
            </div>
          </div>
        </div>

        {/* ── Tech stack badges ── */}
        <div className={`flex flex-wrap gap-3 mt-4 ${fadeClass("delay-[900ms]")}`}>
          {[
            {
              label: "React.js",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
            },
            {
              label: "Node.js",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
            },
            {
              label: "Python",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
            },
            {
              label: "TailwindCSS",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
            },
            {
              label: "MySQL",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
            },
          ].map(({ label, icon }) => (
            <span
              key={label}
              className="
                flex items-center gap-2
                text-sm text-gray-700
                border border-gray-300
                rounded-full px-4 py-1.5
                hover:border-[#8B6F47] hover:text-[#8B6F47] hover:bg-[#F3EEE8]
                transition-all duration-300 cursor-default
              "
            >
              <img src={icon} alt={label} width="16" height="16" className="shrink-0" />
              {label}
            </span>
          ))}
        </div>

      </div>

      {/* Scroll indicator */}
      <a
        href="#about-preview"
        aria-label="Scroll down"
        className="
          absolute bottom-8 left-1/2 -translate-x-1/2
          flex flex-col items-center gap-2
          text-gray-400 hover:text-[#8B6F47]
          transition-all duration-300
          animate-bounce
        "
      >
        <span className="text-xs tracking-widest">SCROLL</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </a>

    </section>
  );
}

export default Hero;
