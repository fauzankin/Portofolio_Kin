function Skills(){

    const skills = [
        {
            name: "React.js",
            category: "Frontend",
        },
        {
            name: "Next.js",
            category: "Frontend"
        },
        {
            name: "React Native",
            category: "Frontend"
        },
        {
            name: "Tailwind CSS",
            category: "Frontend"
        },
        {
            name: "Node.js",
            category: "Backend"
        },
        {
            name: "Express.js",
            category: "Backend"
        },{
            name: "Python",
            category: "AI"
        },{
            name: "Machine Learning",
            category: "AI"
        },
    ]

        const frontend= skills.filter(
            skill => skill.category === "Frontend"
        )

        const backend= skills.filter(
            skill => skill.category === "Backend"
        )

        const ai= skills.filter(
            skill => skill.category === "AI"
        )


    return(

        <section 
        id="skills" 
        className="
        flex
        gap-10
        justify-between
        px-20
        py-20
        ">
            <div>

                <h2 className="
                text-3xl 
                font-bold 
                mt-10">
                    Frontend
                </h2>

                <div className="
                flex
                gap-4
                mt-5
                flex-wrap
                ">
                    {frontend.map((skill)=>(
                        <p className="
                        font-bold
                        border
                        px-5
                        py-3
                        rounded-lg
                        hover:bg-purple-500
                        ">
                            {skill.name}
                        </p>
                    ))}
                </div>
            </div>

            <div>

                <h2 className="
                text-3xl 
                font-bold 
                mt-10">
                    Backend
                </h2>

                <div className="
                flex
                gap-4
                mt-5
                flex-wrap
                ">
                    {backend.map((skill)=>(
                        <p className="
                        font-bold
                        border
                        px-5
                        py-3
                        rounded-lg
                        hover:bg-purple-500
                        ">
                            {skill.name}
                        </p>
                    ))}
                </div>

            </div>

            <div>

                <h2 className="
                text-3xl 
                font-bold 
                mt-10">
                    AI
                </h2>

                <div className="
                flex
                gap-4
                mt-5
                flex-wrap
                ">
                    {ai.map((skill)=>(
                        <p className="
                        font-bold
                        border
                        px-5
                        py-3
                        rounded-lg
                        hover:bg-purple-500
                        ">
                            {skill.name}
                        </p>
                    ))}
                </div>

            </div>
        

        </section>


    )

}


export default Skills