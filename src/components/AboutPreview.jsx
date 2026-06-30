import { useInView } from "../hooks/useInView";

const highlights = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8B6F47" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
        <path d="M6 12v5c3 3 9 3 12 0v-5"/>
      </svg>
    ),
    label: "Fresh Graduate",
    desc: "D4 Telecommunication Engineering",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8B6F47" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2"/>
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
        <line x1="12" y1="12" x2="12" y2="16"/>
        <line x1="10" y1="14" x2="14" y2="14"/>
      </svg>
    ),
    label: "Internship",
    desc: "Real Work Experience",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8B6F47" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
    label: "3 Projects",
    desc: "Built & Deployed",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8B6F47" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    label: "Bootcamp Trained",
    desc: "AI Engineer — DBS Foundation",
  },
];

function AboutPreview() {
  const [leftRef,  leftVisible]  = useInView(0.15);
  const [rightRef, rightVisible] = useInView(0.15);

  return (
    <section
      id="about"
      className="relative py-24 px-5 md:px-20 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #ffffff 0%, #f9f5f0 50%, #F3EEE8 100%)",
      }}
    >
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
      <div className="absolute top-10 right-0 w-80 h-80 rounded-full bg-[#e8ddd0] blur-3xl opacity-40 pointer-events-none" />
      <div className="absolute -bottom-10 left-0 w-72 h-72 rounded-full bg-[#e8ddd0] blur-3xl opacity-30 pointer-events-none" />

      {/* Floating dots */}
      <div className="absolute top-16 left-[15%] w-2 h-2 rounded-full bg-[#8B6F47] opacity-20 hidden md:block" />
      <div className="absolute bottom-20 right-[20%] w-3 h-3 rounded-full bg-[#8B6F47] opacity-15 hidden md:block" />

      <div className="relative grid md:grid-cols-2 gap-12 items-center">

        {/* ── Kiri — highlight cards ── */}
        <div
          ref={leftRef}
          className={`relative transition-all duration-700 ease-out ${
            leftVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
          }`}
        >
          {/* Blob dekoratif */}
          <div className="absolute w-72 h-72 rounded-full bg-[#F3EEE8] -z-10 -top-6 -left-6" />

          <div className="grid grid-cols-2 gap-4">
            {highlights.map(({ icon, label, desc }, i) => (
              <div
                key={label}
                className={`
                  group bg-white/80 backdrop-blur-sm
                  border border-[#F3EEE8] rounded-2xl p-5
                  shadow-sm hover:shadow-lg hover:shadow-[#8B6F47]/10
                  hover:border-[#8B6F47] hover:-translate-y-1
                  transition-all duration-500 ease-out
                  ${leftVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
                `}
                style={{ transitionDelay: `${200 + i * 100}ms` }}
              >
                <div className="w-10 h-10 rounded-xl bg-[#F3EEE8] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                  {icon}
                </div>
                <p className="font-semibold text-sm text-gray-900 leading-tight">{label}</p>
                <p className="text-xs text-gray-500 mt-0.5">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Kanan — teks ── */}
        <div
          ref={rightRef}
          className={`transition-all duration-700 ease-out delay-200 ${
            rightVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
          }`}
        >
          <p className="text-[#8B6F47] text-sm tracking-[0.3em] font-medium mb-3 uppercase">
            About Me
          </p>

          <h2 className="heading-font text-3xl md:text-4xl font-bold mb-4">
            A Bit About Who I Am
          </h2>

          <p className="text-gray-600 max-w-lg mb-3 leading-relaxed">
            I&apos;m Fauzan, a fresh graduate and FullStack Developer who enjoys
            turning ideas into clean, functional web applications. My hands-on
            experience comes from an internship, a bootcamp, and real projects
            — giving me a solid foundation across the full stack.
          </p>

          <p className="text-gray-600 max-w-lg mb-8 leading-relaxed">
            I work mainly with React.js and Node.js, and I&apos;m actively
            exploring Python and AI to build smarter products. I care about
            writing maintainable code and crafting interfaces that feel
            simple, even when the logic behind them isn&apos;t.
          </p>

          <a
            href="#skills"
            className="
              inline-block border border-black px-6 py-3 rounded-full
              hover:bg-black hover:text-white
              transition-all duration-300
            "
          >
            See My Skills
          </a>
        </div>

      </div>
    </section>
  );
}

export default AboutPreview;
