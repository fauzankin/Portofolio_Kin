function Footer() {
  return (
    <footer className="bg-white border-t-2 border-[#8B6F47] px-5 md:px-20 py-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">

        {/* Brand */}
        <h2 className="heading-font text-xl font-bold tracking-wide text-gray-900">
          FAUZAN<span className="text-[#8B6F47]">.DEV</span>
        </h2>

        {/* Center icons */}
        <div className="flex items-center gap-6 text-gray-400">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"/>
            <line x1="2" y1="12" x2="22" y2="12"/>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
          </svg>
        </div>

        {/* Copyright */}
        <p className="text-gray-400 text-xs text-center md:text-right leading-relaxed">
          © 2026 Fauzan.<br className="hidden md:block" />
          Engineered with React &amp; Tailwind.
        </p>

      </div>
    </footer>
  );
}

export default Footer;
