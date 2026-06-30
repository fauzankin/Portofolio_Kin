import React from "react";
import profile from "../assets/profile.png"

function Hero() {

    return(

        <section 
        id="home" 
        className="
        min-h-screen
        flex
        items-center
        px-5
        md:px-20
        ">
        
        <div className="
        grid
        md:grid-cols-2
        gap-10
        items-center
        w-full
        ">

            {/* Kiri */}
            <div>

                <p className="
                text-[#8B6F47]
                text-2xl
                font-medium
                mb-3">
                    HELLO, I'M
                </p>

                <h1 className="
                text-5xl
                md:text-7xl
                font-bold
                "
                >
                    FAUZAN
                </h1>

                <h2 className="
                text-2xl
                mt-4"
                >
                    FullStack Developer
                </h2>

                <p className="
                mt-3
                text-gray-600
                max-w-lg"
                >
                Building modern web applications
                and exploring AI-powered solutions.
                </p>

                <div className="
                flex
                gap-3
                items-center
                mt-8
                ">
                   <a
                    href="/CV_MUHAMAD_FAUZAN.pdf"
                    download

                    className="
                    border
                    border-black

                    px-6
                    py-3

                    rounded-full

                    hover:bg-black
                    hover:text-white

                    transition
                    "
                    >
                    Download CV
                    </a>

                    <button className="
                    bg-black
                    text-white
                    px-6
                    py-3
                    rounded-full
                    mr-3
                    hover:bg-[#8B6F47]
                    transition
                    ">
                        View My Work
                    </button>
                </div>
            </div>

            {/* Kanan */}

            <div
            className="
            relative
            flex
            justify-center
            ">

                <div
                className="
                absolute
                w-80
                h-80
                rounded-full
                bg-[#F3EEE8]
                ">
                </div>


                <img
                src={profile}

                className="
                relative

                w-72
                h-72

                rounded-full

                object-cover

                border-8

                border-white

                shadow-lg
                "
                />

            </div>

            <div
            className="
            flex
            gap-3
            mt-8
            text-sm
            text-gray-500
            ">

            <span>React.js</span>
            <span>Node.js</span>
            <span>Python</span>
            <span>AI</span>

            </div>

        </div>
        </section>
    )
}

export default Hero