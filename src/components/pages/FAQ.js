import React from "react";
import DefaultAccordion from "../ui/DefaultAccordion"

function FAQ(){

    const faqs = [
        {
            "id":1,
            "title":"What does Qeja offer",
            "content":"Lorem ipsum dolor sit amet, consecetur adispicing, nulla ut commodo saggitis, sapien."
        },
        {
            "id":2,
            "title":"How do you register on Qeja",
            "content":"Lorem ipsum dolor sit amet, consecetur adispicing, nulla ut commodo saggitis, sapien."
        },
        {
            "id":3,
            "title":"Do you need to have an account to participate in the Community chat",
            "content":"Lorem ipsum dolor sit amet, consecetur adispicing, nulla ut commodo saggitis, sapien."
        },
        {
            "id":4,
            "title":"Are you allowed to have two accounts on Qeja",
            "content":"Lorem ipsum dolor sit amet, consecetur adispicing, nulla ut commodo saggitis, sapien."
        }
    ]

    return(
        <div className="p-3 bg-slate-950 h-screen ">
            <h3 className="mb-4 text-2xl tracking-widest text-center text-white mt-5 font-bold">Frequently Asked Questions</h3>

            {faqs && faqs.map((faq, index)=>(
                <DefaultAccordion key={index} faq={faq}/>
            ))}
        </div>
    )
}

export default FAQ;