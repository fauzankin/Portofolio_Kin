function Project() {

    const project = [
        {
            title: "SemaphoreCollab",
            description: "Collaboration platform for team productivity.",
            tech:[
                "React",
                "Next.js",
                "Spring Boot",
                "Tailwind CSS",
            ]
        },

        {
            title: "SemaphoreCollab",
            description: "Collaboration platform for team productivity.",
            tech:[
                "React",
                "Next.js",
                "Spring Boot",
                "Tailwind CSS",
            ]
        }
    ]

    return(
        <section 
        id="project" 
        className="
        min-h-screen
        px-20
        py-20
        ">
            
            <h2 className="
            text-3xl
            font-bold
            ">
                Projects

            </h2>

            <div className="
            grid
            grid-cols-2
            gap-5
            mt-10">

            {project.map((project)=>(

                <div className="
                border
                p-5
                rounded-xl
                hover:shadow-lg
                transition
                p-5
                ">

                    <h3>
                        {project.title}
                    </h3>
                    <p>
                        {project.description}
                    </p>

                </div>
            ))}

            </div>

        </section>
    )
}

export default Project