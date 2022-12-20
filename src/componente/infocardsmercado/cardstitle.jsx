import React from "react";
import "./cardstitle.css";
import { SectionCarde } from "../CardeSection/IndexCarde"
import { useEffect } from "react";
import aos from "aos"
import "aos/dist/aos.css"
const sectionCard = [

    {
        text: `Venha ate aqui`, titulodapagina: `Em um relatório dos nossos trabalhos sobre profissões em
        alta, 9 dos 15 cargos destacados pertenciam
        à área de tecnologia`,
        nomedocards: `Back-end`
    },
    {
        text: `O futoro é tudo bom vamos?`,
        titulodapagina: `
            75% das pessoas desenvolvedoras buscam
            aprender novas linguagens e frameworks
            pelo menos uma vez ao ano
            `,
        nomedocards: `Frond-end`
    },

    {
        text: `Estamos aqui por você`,
        titulodapagina: `
            O número de vagas na área de 
            designer cresceu 100% no último ano
            no nosso mercado de designer
        `,
        nomedocards: `designer`
    }

]

export const SectionCard = ({
    text,
    titulodapagina,
    nomedocards,
}) => {
    return (<>
        <div className="container-cards-blue" data_aos="flip-up">
            <h2 className="school-banner-text">{text}</h2>
            <p className="titulodapagina">{titulodapagina}
            </p>
            <p className="card_name">{nomedocards}</p>
        </div>
    </>)
}
export const Cardstitle = () => {
    useEffect(() => {
        aos.init({ duration: 500 })
    }, []);
    return (<>


        <div className="school-container2" data-aos="flip-down">
            {
                sectionCard.map((item) => (
                    <SectionCard key={item.nome} {...item} />
                ))
            }
        </div>

    </>
    )
}



