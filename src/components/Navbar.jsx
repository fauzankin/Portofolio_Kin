function Navbar() {

  const linkClass = `
    relative font-medium
    hover:text-[#8B6F47]
    transition duration-300
    after:content-[''] after:absolute after:left-0 after:-bottom-1
    after:h-[2px] after:w-0 after:bg-[#8B6F47]
    after:transition-all after:duration-300
    hover:after:w-full
  `;

  return (
    <nav className="
      fixed top-0 left-0 right-0 z-50
      flex justify-between items-center
      px-5 md:px-20 py-5
      bg-white
      border-b border-[#8B6F47]
    ">

      {/* Logo */}
      <h1 className="text-4xl font-bold heading-font">
        ZAN<span className="text-[#8B6F47]">.CODE</span>
      </h1>

      {/* Menu */}
      <div className="text-2xl flex gap-8">
        <a href="#home"    className={linkClass}>Home</a>
        <a href="#about"   className={linkClass}>About</a>
        <a href="#skills"  className={linkClass}>Skills</a>
        <a href="#project" className={linkClass}>Project</a>
        <a href="#contact" className={linkClass}>Contact</a>
      </div>

    </nav>
  );
}

export default Navbar;
