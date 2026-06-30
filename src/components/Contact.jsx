function Contact(){

    const contacts = [
        {
            name: "Email",
            value: "mfauzanskinswork@gmail.com",
            link: "mailto:mfauzanskinswork@gmail.com"
        },
        {
            name: "LinkedIn",
            value: "linkedin.com/in/fauzan",
            link: "https://linkedin.com"
        },
        {
            name: "Github",
            value: "github.com/fauzan",
            link: "https://github.com"
        }
    ]


    return(

        <section
        id="contact"
        className="
        px-20
        py-20
        ">

            <h2
            className="
            text-3xl
            font-bold
            ">
                Contact
            </h2>


            <div
            className="
            flex
            gap-5
            mt-10
            ">


            {
                contacts.map((contact)=>(

                    <a
                    href={contact.link}
                    target="_blank"
                    className="
                    border
                    rounded-xl
                    p-5
                    hover:bg-purple-500
                    hover:text-white
                    "
                    >

                        <h3 className="
                        font-bold
                        text-xl
                        ">
                            {contact.name}
                        </h3>


                        <p>
                            {contact.value}
                        </p>


                    </a>

                ))
            }


            </div>


        </section>

    )

}


export default Contact