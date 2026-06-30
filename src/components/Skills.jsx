import { useInView } from "../hooks/useInView";

const categories = [
  {
    key: "Frontend",
    label: "Frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    desc: "Building responsive & interactive UIs",
    skills: [
      { name: "React.js",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Next.js",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "React Native", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    ],
  },
  {
    key: "Backend",
    label: "Backend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    desc: "Powering apps with robust server-side logic",
    skills: [
      { name: "Node.js",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      { name: "MySQL",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    ],
  },
  {
    key: "AI",
    label: "AI & ML",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    desc: "Exploring intelligent & data-driven solutions",
    skills: [
      { name: "Python",           icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "TensorFlow",       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
      { name: "Machine Learning", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
    ],
  },
];

function Skills() {
  const [headerRef, headerVisible] = useInView(0.2);
  const [cardsRef, cardsVisible]   = useInView(0.1);

  return (
    <section
      id="skills"
      className="relative px-5 md:px-20 py-24 overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #fdfaf7 0%, #f5ede3 50%, #fdfaf7 100%)",
      }}
    >
      {/* ── Background decorations ── */}
      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(139,111,71,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139,111,71,0.06) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Blobs */}
      <div className="absolute -top-16 -right-16 w-80 h-80 rounded-full bg-[#e8ddd0] blur-3xl opacity-40 pointer-events-none" />
      <div className="absolute bottom-0 -left-16 w-72 h-72 rounded-full bg-[#e8ddd0] blur-3xl opacity-30 pointer-events-none" />

      {/* Floating dots */}
      <div className="absolute top-20 left-[10%] w-2 h-2 rounded-full bg-[#8B6F47] opacity-20 hidden md:block" />
      <div className="absolute top-1/2 right-[8%] w-3 h-3 rounded-full bg-[#8B6F47] opacity-15 hidden md:block" />
      <div className="absolute bottom-24 left-[45%] w-2 h-2 rounded-full bg-[#8B6F47] opacity-20 hidden md:block" />

      {/* ── Header ── */}
      <div
        ref={headerRef}
        className={`relative transition-all duration-700 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <p className="text-[#8B6F47] text-sm tracking-[0.3em] font-medium mb-2 uppercase">
          What I Work With
        </p>
        <div className="flex flex-wrap items-end gap-4 mb-3">
          <h2 className="heading-font text-5xl md:text-6xl font-bold leading-none">
            Technical Skills
          </h2>
          <span className="mb-1 px-4 py-1.5 rounded-full text-sm font-semibold bg-[#F3EEE8] text-[#8B6F47] border border-[#8B6F47]">
            Core Competencies
          </span>
        </div>
        <p className="text-gray-500 mb-12 max-w-xl leading-relaxed">
          Technologies I use to build full-stack web applications and explore AI-powered solutions.
        </p>
      </div>

      {/* ── Category cards ── */}
      <div
        ref={cardsRef}
        className="grid md:grid-cols-3 gap-6"
      >
        {categories.map(({ key, label, icon, desc, skills }, i) => (
          <div
            key={key}
            className={`
              group relative
              bg-white/70 backdrop-blur-sm
              border border-[#F3EEE8] rounded-3xl p-6
              shadow-sm hover:shadow-xl hover:shadow-[#8B6F47]/10
              hover:border-[#8B6F47] hover:-translate-y-2
              transition-all duration-500
              ${cardsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
            `}
            style={{ transitionDelay: `${i * 120}ms` }}
          >
            {/* Subtle inner glow on hover */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#F3EEE8]/0 to-[#F3EEE8]/0 group-hover:from-[#F3EEE8]/40 group-hover:to-transparent transition-all duration-500 pointer-events-none" />

            {/* Category header */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-2xl bg-[#F3EEE8] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                <img src={icon} alt={label} width="26" height="26" />
              </div>
              <div>
                <h3 className="heading-font text-xl font-bold tracking-wide uppercase">
                  {label}
                </h3>
                <p className="text-xs text-gray-400 mt-0.5">{desc}</p>
              </div>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-[#F3EEE8] mb-4 group-hover:bg-[#8B6F47]/20 transition-colors duration-300" />

            {/* Skill badges */}
            <div className="flex flex-wrap gap-2">
              {skills.map(({ name, icon: skillIcon }) => (
                <span
                  key={name}
                  className="
                    flex items-center gap-1.5
                    border border-gray-200 rounded-lg px-3 py-1.5
                    text-sm text-gray-700 bg-white
                    hover:border-[#8B6F47] hover:text-[#8B6F47] hover:bg-[#F3EEE8]
                    hover:scale-105
                    transition-all duration-200 cursor-default
                  "
                >
                  <img src={skillIcon} alt={name} width="15" height="15" className="shrink-0" />
                  {name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}

export default Skills;
