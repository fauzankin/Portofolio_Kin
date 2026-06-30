function Navbar(){

return (
    <nav className="
    flex
    justify-between
    items-center
    px-5
    md:px-20
    py-5
    bg-white
    border-b
    border-gray-200
    ">
        
        {/* Logo */}
        <h1 className="
        text-4xl
        font-bold
        heading-font
        ">
            ZAN
            <span className="text-[#8B6F47]">
                .CODE
            </span>
        </h1>

        {/* Menu */}
        <div className="
        text-2xl
        flex
        gap-8">
            <a href="#home"
            className="
            relative
            font-medium

            hover:text-[#8B6F47]

            transition
            duration-300

            after:content-['']
            after:absolute
            after:left-0
            after:-bottom-1

            after:h-[2px]
            after:w-0

            after:bg-black

            after:transition-all
            after:duration-300

            hover:after:w-full
            ">
                Home
            </a>   

            <a href="#about"
            className="
            relative
            font-medium

            hover:text-[#8B6F47]

            transition
            duration-300

            after:content-['']
            after:absolute
            after:left-0
            after:-bottom-1

            after:h-[2px]
            after:w-0

            after:bg-black

            after:transition-all
            after:duration-300

            hover:after:w-full
            ">
                About
            </a>

            <a href="#skills"
            className="
relative
            font-medium

            hover:text-[#8B6F47]

            transition
            duration-300

            after:content-['']
            after:absolute
            after:left-0
            after:-bottom-1

            after:h-[2px]
            after:w-0

            after:bg-black

            after:transition-all
            after:duration-300

            hover:after:w-full
            ">
                Skills
            </a>

            <a href="#project"
            className="
relative
            font-medium

            hover:text-[#8B6F47]

            transition
            duration-300

            after:content-['']
            after:absolute
            after:left-0
            after:-bottom-1

            after:h-[2px]
            after:w-0

            after:bg-black

            after:transition-all
            after:duration-300

            hover:after:w-full
            ">
                Project
            </a>

            <a href="#contact"
            className="
            relative
            font-medium

            hover:text-[#8B6F47]

            transition
            duration-300

            after:content-['']
            after:absolute
            after:left-0
            after:-bottom-1

            after:h-[2px]
            after:w-0

            after:bg-black

            after:transition-all
            after:duration-300

            hover:after:w-full
            ">
                Contact
            </a>
        </div>

    </nav>
) 
}

export default Navbar