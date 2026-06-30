import { useState, useEffect } from "react";
import { useInView } from "../hooks/useInView";

// ── EST images
import est1 from "../assets/est/est1.png";
import est2 from "../assets/est/est2.png";
import est3 from "../assets/est/est3.png";
import est4 from "../assets/est/est4.png";
import est5 from "../assets/est/est5.png";
import est6 from "../assets/est/est6.png";
import est7 from "../assets/est/est7.png";
import est8 from "../assets/est/est8.png";

// ── Accounting System images (reuse lms folder)
import acc1 from "../assets/lms/lms1.png";
import acc2 from "../assets/lms/lms2.png";
import acc3 from "../assets/lms/lms3.png";
import acc4 from "../assets/lms/lms4.png";
import acc5 from "../assets/lms/lms5.png";
import acc6 from "../assets/lms/lms6.png";
import acc7 from "../assets/lms/lms7.png";

const projects = [
  {
    id: "est",
    title: "EatSistent",
    shortDesc: "AI-powered app for food pattern analysis and personalized nutrition recommendations.",
    overview:
      "EatSistent is an AI-based application developed as a DBS Foundation Coding Camp 2026 Capstone Project. It helps users analyze daily eating patterns, monitor nutritional intake, and receive personalized nutrition recommendations. Features include daily food diary, AI Insight analysis, progress tracker, and an interactive nutrition dashboard.",
    challenge:
      "Presenting complex nutritional data as clear, actionable insights for general users — while ensuring the AI recommendation model stays accurate and personalized based on each user's profile and consumption history.",
    tech: ["React.js", "Node.js", "Express.js", "Python", "TensorFlow", "FastAPI", "MySQL", "Tailwind CSS"],
    cover: est1,
    images: [est1, est2, est3, est4, est5, est6, est7, est8],
    github: "https://github.com/alief1206/capstone_project",
    live: "https://eatsistent.vercel.app",
  },
  {
    id: "accounting",
    title: "Accounting System",
    shortDesc: "Web-based financial management system built for a transportation & logistics company.",
    overview:
      "A full-stack Finance & Accounting Information System built as a real internal tool for a transportation company, showcased here with fictional demo data. Covers day-to-day finance operations including income, expenses, overhead, fixed assets, and financial reporting. Features a two-step auth flow (username/password → OTP via email) with JWT token management, and a Demo Mode for portfolio viewing.",
    challenge:
      "Designing a clean, modular structure that handles complex relational financial data — from Chart of Accounts and overhead tracking to auto-calculated fixed asset depreciation — while keeping the UI intuitive for non-technical finance staff.",
    tech: ["React 19", "Vite", "REST API", "JWT", "OTP Auth"],
    cover: acc1,
    images: [acc1, acc2, acc3, acc4, acc5, acc6, acc7],
    github: "https://github.com/fauzankin/AccountingSystem_Kin",
    live: null,
  },
];

/* ── Modal Component ── */
function ProjectModal({ project, onClose }) {
  const [currentImg, setCurrentImg] = useState(0);
  const [paused, setPaused] = useState(false);

  // Auto-slide every 3s, pause on hover/manual
  useEffect(() => {
    if (paused || project.images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentImg((i) => (i + 1) % project.images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [paused, project.images.length]);

  // Close on Escape key
  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  // Prevent body scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const prev = () => { setPaused(true); setCurrentImg((i) => (i - 1 + project.images.length) % project.images.length); };
  const next = () => { setPaused(true); setCurrentImg((i) => (i + 1) % project.images.length); };
  const goTo = (i) => { setPaused(true); setCurrentImg(i); };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Modal box */}
      <div
        className="relative bg-white rounded-3xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto z-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/90 hover:bg-gray-100 shadow flex items-center justify-center transition"
          aria-label="Close"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>

        {/* ── Gallery section ── */}
        <div className="px-6 pt-6 pb-4">
          {/* Gallery label */}
          <div className="flex items-center gap-2 mb-3">
            <div className="w-6 h-6 rounded bg-[#F3EEE8] flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#8B6F47" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>
                <polyline points="21 15 16 10 5 21"/>
              </svg>
            </div>
            <p className="text-xs font-semibold text-[#8B6F47] uppercase tracking-widest">Gallery</p>
            <span className="ml-auto text-xs text-gray-400">{currentImg + 1} / {project.images.length}</span>
          </div>

          {/* Main image — centered with shadow effect */}
          <div
            className="relative w-full rounded-2xl overflow-hidden cursor-pointer"
            style={{
              background: "linear-gradient(135deg, #1a1a2e 0%, #2d2d44 50%, #1a1a2e 100%)",
              minHeight: "320px",
            }}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {/* Subtle grid on dark bg */}
            <div
              className="absolute inset-0 pointer-events-none opacity-10"
              style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                backgroundSize: "40px 40px",
              }}
            />

            {/* Slide wrapper — centered */}
            <div className="relative flex items-center justify-center py-8 px-10 overflow-hidden" style={{ minHeight: "320px" }}>
              {project.images.map((img, i) => (
                <div
                  key={i}
                  className="absolute inset-0 flex items-center justify-center py-8 px-10 transition-all duration-500 ease-in-out"
                  style={{
                    opacity: i === currentImg ? 1 : 0,
                    transform: i === currentImg ? "scale(1) translateY(0)" : "scale(0.95) translateY(8px)",
                    pointerEvents: i === currentImg ? "auto" : "none",
                  }}
                >
                  <img
                    src={img}
                    alt={`${project.title} screenshot ${i + 1}`}
                    className="max-w-full max-h-72 rounded-xl object-contain"
                    style={{
                      boxShadow: "0 25px 60px rgba(0,0,0,0.6), 0 8px 20px rgba(0,0,0,0.4)",
                    }}
                  />
                </div>
              ))}
            </div>

            {/* Prev / Next */}
            {project.images.length > 1 && (
              <>
                <button
                  onClick={prev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white flex items-center justify-center transition backdrop-blur-sm"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6"/>
                  </svg>
                </button>
                <button
                  onClick={next}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white flex items-center justify-center transition backdrop-blur-sm"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"/>
                  </svg>
                </button>
              </>
            )}

            {/* Auto-slide progress bar */}
            {!paused && (
              <div className="absolute bottom-0 left-0 h-0.5 bg-[#8B6F47] rounded-full"
                style={{ animation: "progress 3s linear infinite", width: "100%" }}
              />
            )}
          </div>

          {/* Thumbnail strip */}
          {project.images.length > 1 && (
            <div className="flex gap-2 mt-3 overflow-x-auto pb-1">
              {project.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`shrink-0 w-16 h-10 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                    i === currentImg ? "border-[#8B6F47] opacity-100" : "border-transparent opacity-50 hover:opacity-80"
                  }`}
                >
                  <img src={img} alt={`thumb ${i + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-100 mx-6" />

        {/* Content */}
        <div className="p-6 md:p-8 pt-5">
          <h3 className="heading-font text-2xl md:text-3xl font-bold mb-1">{project.title}</h3>
          <p className="text-gray-500 text-sm mb-6">{project.shortDesc}</p>

          {/* Overview */}
          <div className="mb-5">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-5 h-5 rounded bg-[#F3EEE8] flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#8B6F47" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
                </svg>
              </div>
              <p className="text-xs font-semibold text-[#8B6F47] uppercase tracking-widest">Project Overview</p>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">{project.overview}</p>
          </div>

          {/* Tech stack */}
          <div className="mb-5">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-5 h-5 rounded bg-[#F3EEE8] flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#8B6F47" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
                </svg>
              </div>
              <p className="text-xs font-semibold text-[#8B6F47] uppercase tracking-widest">Technology Stack</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span key={t} className="border border-gray-300 rounded-lg px-3 py-1 text-xs font-medium text-gray-700 uppercase tracking-wide">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Challenge */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-5 h-5 rounded bg-[#F3EEE8] flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#8B6F47" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
                </svg>
              </div>
              <p className="text-xs font-semibold text-[#8B6F47] uppercase tracking-widest">Key Challenge</p>
            </div>
            <div className="border-l-4 border-[#8B6F47] bg-[#F3EEE8]/50 rounded-r-xl px-4 py-3">
              <p className="text-gray-600 text-sm leading-relaxed">{project.challenge}</p>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gray-100 mb-5" />

          {/* CTA buttons */}
          <div className="flex gap-3">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-black text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#8B6F47] transition-all duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
                View Live
              </a>
            )}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-black px-5 py-2.5 rounded-full text-sm font-medium hover:bg-black hover:text-white transition-all duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              Source Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Project Card ── */
function ProjectCard({ project, index, inView, onClick }) {
  return (
    <div
      className={`
        group cursor-pointer
        bg-white border border-[#F3EEE8] rounded-3xl overflow-hidden
        shadow-sm hover:shadow-xl hover:shadow-[#8B6F47]/10
        hover:border-[#8B6F47] hover:-translate-y-2
        transition-all duration-500
        ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
      `}
      style={{ transitionDelay: `${index * 150}ms` }}
      onClick={onClick}
    >
      {/* Cover image */}
      <div className="relative overflow-hidden h-52">
        <img
          src={project.cover}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
          <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white text-black text-sm font-semibold px-4 py-2 rounded-full shadow-lg">
            View Details
          </span>
        </div>
      </div>

      {/* Card content */}
      <div className="p-5">
        <h3 className="heading-font text-xl font-bold mb-1">{project.title}</h3>
        <p className="text-gray-500 text-sm mb-4 leading-relaxed">{project.shortDesc}</p>

        <div className="flex flex-wrap gap-2">
          {project.tech.slice(0, 3).map((t) => (
            <span key={t} className="border border-gray-200 rounded-lg px-2.5 py-1 text-xs text-gray-600 uppercase tracking-wide">
              {t}
            </span>
          ))}
          {project.tech.length > 3 && (
            <span className="border border-gray-200 rounded-lg px-2.5 py-1 text-xs text-gray-400">
              +{project.tech.length - 3}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

/* ── Main Component ── */
function Project() {
  const [selected, setSelected] = useState(null);
  const [headerRef, headerVisible] = useInView(0.2);
  const [cardsRef,  cardsVisible]  = useInView(0.1);

  return (
    <section
      id="project"
      className="relative px-5 md:px-20 py-24 overflow-hidden"
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
      <div className="absolute -top-16 -left-16 w-80 h-80 rounded-full bg-[#e8ddd0] blur-3xl opacity-40 pointer-events-none" />
      <div className="absolute bottom-0 -right-16 w-72 h-72 rounded-full bg-[#e8ddd0] blur-3xl opacity-30 pointer-events-none" />

      {/* Floating dots */}
      <div className="absolute top-20 right-[12%] w-2 h-2 rounded-full bg-[#8B6F47] opacity-20 hidden md:block" />
      <div className="absolute bottom-32 left-[8%] w-3 h-3 rounded-full bg-[#8B6F47] opacity-15 hidden md:block" />

      {/* ── Header ── */}
      <div
        ref={headerRef}
        className={`relative transition-all duration-700 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <p className="text-[#8B6F47] text-sm tracking-[0.3em] font-medium mb-2 uppercase">
          What I&apos;ve Built
        </p>
        <div className="flex flex-wrap items-end gap-4 mb-3">
          <h2 className="heading-font text-5xl md:text-6xl font-bold leading-none">
            Projects
          </h2>
          <span className="mb-1 px-4 py-1.5 rounded-full text-sm font-semibold bg-[#F3EEE8] text-[#8B6F47] border border-[#8B6F47]">
            {projects.length} Works
          </span>
        </div>
        <p className="text-gray-500 mb-12 max-w-xl leading-relaxed">
          Real projects built from scratch — click any card to see details, screenshots, and tech stack.
        </p>
      </div>

      {/* ── Cards grid ── */}
      <div
        ref={cardsRef}
        className="grid md:grid-cols-2 gap-6 max-w-4xl"
      >
        {projects.map((project, i) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={i}
            inView={cardsVisible}
            onClick={() => setSelected(project)}
          />
        ))}
      </div>

      {/* ── Modal ── */}
      {selected && (
        <ProjectModal
          project={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </section>
  );
}

export default Project;
