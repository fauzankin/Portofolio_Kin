function About() {

    const skills = [
        "React",
        "Node.js",
        "Express.js",
        "Python",
        "AI/ML",
        "JavaScript",
    ]

    return(
        <section
        id="about"
        className="
        px-20
        py-20
        ">

            <h2 className="
            text-4xl
            font-bold
            ">
                About Me
            </h2>

            <p className="
            mt-5
            text-xl
            ">
                I am a passionate Full Stack Developer with a strong interest in AI and Machine Learning. I enjoy creating innovative solutions and continuously learning new technologies to enhance my skills.

            </p>

            <h3 className="
            text-2xl
            font-bold
            mt-10
            ">
                Skills
            </h3>

            <div className="
            flex
            gap-4
            mt-5
            flex-wrap
            ">

                {
                    skills.map((skill)=>(

                        <div
                        key={skill}
                        className="
                        border
                        px-5
                        py-3
                        rounded-lg
                        ">
                            {skill}
                        </div>
                    ))
                }

            </div>
        </section>

    )
}

export default About