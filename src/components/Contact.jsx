import { useInView } from "../hooks/useInView";

function Contact() {
  const [ref, inView] = useInView(0.15);

  return (
    <section
      id="contact"
      className="relative px-5 md:px-20 py-24 overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #fdfaf7 0%, #f5ede3 50%, #fdfaf7 100%)",
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
      <div className="absolute -top-16 right-0 w-80 h-80 rounded-full bg-[#e8ddd0] blur-3xl opacity-40 pointer-events-none" />
      <div className="absolute bottom-0 -left-10 w-72 h-72 rounded-full bg-[#e8ddd0] blur-3xl opacity-30 pointer-events-none" />

      <div
        ref={ref}
        className={`relative transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        {/* ── Header ── */}
        <p className="text-[#8B6F47] text-sm tracking-[0.3em] font-medium mb-2 uppercase">
          Get In Touch
        </p>

        <div className="flex flex-wrap items-end gap-4 mb-3">
          <h2 className="heading-font text-5xl md:text-7xl font-bold leading-none">
            Got an Idea?
          </h2>
          <span className="mb-2 px-4 py-1.5 rounded-full text-sm font-semibold bg-[#F3EEE8] text-[#8B6F47] border border-[#8B6F47]">
            Start a Conversation
          </span>
        </div>

        {/* ── Sub-heading + description ── */}
        <div className="mt-8 mb-10 max-w-lg">
          <h3 className="heading-font text-xl md:text-2xl font-bold mb-3">
            Let&apos;s Make It Real.
          </h3>
          <p className="text-gray-500 leading-relaxed">
            I&apos;m actively looking for opportunities as a FullStack Developer.
            If you have a project, a role, or just want to talk tech — my inbox
            is always open.
          </p>
        </div>

        {/* ── Contact info ── */}
        <div className="flex flex-col gap-4 mb-10">
          {/* Email */}
          <a
            href="mailto:mfauzanskinswork@gmail.com"
            className="flex items-center gap-4 group w-fit"
          >
            <div className="w-12 h-12 rounded-xl bg-[#8B6F47] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
            </div>
            <span className="text-lg md:text-xl font-semibold text-gray-800 group-hover:text-[#8B6F47] transition-colors duration-300">
              mfauzanskinswork@gmail.com
            </span>
          </a>

          {/* Location */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#F3EEE8] border border-[#8B6F47] flex items-center justify-center shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8B6F47" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <line x1="2" y1="12" x2="22" y2="12"/>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              </svg>
            </div>
            <span className="text-lg md:text-xl font-semibold text-gray-800">
              Based in Indonesia, Open to Remote
            </span>
          </div>
        </div>

        {/* ── Social links ── */}
        <div className="flex gap-3">
          <a
            href="https://github.com/fauzankin"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-gray-300 px-5 py-2.5 rounded-full text-sm font-medium text-gray-700 hover:bg-black hover:text-white hover:border-black transition-all duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/fauzankinzzz"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-gray-300 px-5 py-2.5 rounded-full text-sm font-medium text-gray-700 hover:bg-[#8B6F47] hover:text-white hover:border-[#8B6F47] transition-all duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.025-3.04-1.85-3.04-1.855 0-2.14 1.45-2.14 2.945v5.665H9.36V9h3.41v1.56h.05c.475-.9 1.635-1.85 3.365-1.85 3.6 0 4.265 2.37 4.265 5.455v6.285zM5.34 7.43a2.06 2.06 0 11.005-4.12 2.06 2.06 0 01-.005 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.225 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.225 0z"/>
            </svg>
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
