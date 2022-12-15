import React from "react";
import "./Cardestext.css"
import Professor from "../../imagens/professor1.png";
import Quizito from "../../imagens/quizito.jpeg";
import Quizito2 from "../../imagens/quizito2.jpeg";
import Quizito1 from "../../imagens/quizito.png";
import Timoteo from "../../imagens/timoteo1.png";
import Nossa from "../../imagens/nossa.jpeg";
import { useEffect } from "react";
import aos from "aos"
import "aos/dist/aos.css"
import { Card } from "../Cards/Conponent";
// const cards = [
//     {
//         photo: Professor, title: `NOSSOS CURSUS`, description: `
//         O nosso maior desejo é que você seja capaz de explorar e navegar por diferen
//         tes áreas de conhecimento, ganhando repertório para entender o
//          que está por trás das telas.
//         `
//     },
//     {
//         photo: Quizito, title: `CORSUS GRATUITOS`, description: `
//         Aqui na Escola de Programação, você vai encontrar experiências de
//         aprendizado específicas para cada linguagem utilizada
//         no mercado, seja JavaScript, C++ PHP, Java Vue e muito mais.
//         `
//     },
//     {
//         photo: Quizito2, title: `A SUA QUALIDADE COMEÇA AQUI`, description: `
//         desde redes sociais, até sistemas bancários complexos.O melhor 
//         de tudo é que durante as nossas aulas, você vai aprender colocando a mão na massa. Ao 
//         final de cada curso, terá desenvolvido programas e aplicações para compor o seu portfólio.
//         `
//     },
//     {
//         photo: Quizito1, title: `QUALIDADE PARA VOÇÊ`, description: `
//         Todas as nossas formações são construídas com base em situações 
//         reais de trabalho. Queremos que você tenha uma experiência de estudo 
//         o mais próxima possível daquilo que vai encontrar em sua vida profissional.
//         `
//     },
//     {
//         photo: Nossa, title: ` PROGRAMAÇÃO AU VIVO`, description: `
//         O oceano da programação é gigantesco.Com programação, você será capaz de
//          encontrar soluções inovadoras para resolver problemas enfrentados pelos
//          negócios mais diversos. Aqui, você será capaz de desenvolver projetos 
//          digitais incríveis.
//         `
//     },
//     {
//         photo: Timoteo, title: `QUALIDADES PARA VOÇÊ`, description: `
//         Nós produzimos diversos conteúdos complementares em parceria com a
//          comunidade dev, sempre buscando expandir a sua visão da área e 
//          trazendo experiências de várias frentes do mercado.Além disso,
//          o Timo possui mais de 3500 cursos de diversos temas em tecnologia.
//         `
//     },
// ]

// export const Cards = ({
//     photo,
//     title,
//     description,
// }) => {
//     return (<>
//         <div className="gardestext">
//             <div className="container-box" data-aos="fade-up"
//                 data-aos-anchor-placement="center-bottom">
//                 <div className="info-imagens">
//                     <img src={photo} alt="" />
//                 </div>
//                 <div className="container-title">
//                     <div className="wrapper-info-text">
//                         <h2>{title}</h2>
//                         <p>
//                             {
//                                 description
//                             }
//                         </p>
//                     </div>
//                 </div>
//             </div>

//         </div>
//     </>)
// }
export const Cardestext = () => {

    useEffect(() => {
        aos.init({ duration: 800 })
    }, []);
    return (
        <>
            <div className="wrapper-gardestext">
                <Card data_aos="fade-up"
                    photo={Professor}
                    title='NOSSOS CURSOS'
                    description=' O nosso maior desejo é que você seja capaz de explorar e navegar por diferen
                    tes áreas de conhecimento, ganhando repertório para entender o
                    que está por trás das telas.'
                />
                <Card data_aos="fade-down"
                    photo={Quizito}
                    title="CORSOS GRATUITOS"
                    description="
                    Aqui na Escola de Programação, você vai encontrar experiências de
                    aprendizado específicas para cada linguagem utilizada
                    no mercado, seja JavaScript, C++ PHP, Java Vue e muito mais.
                    "

                />
                <Card data_aos="fade-rigth"

                    photo={Quizito2}
                    title="A SUA QUALIDADE COMEÇA AQUI"
                    description="
                    desde redes sociais, até sistemas bancários complexos.O melhor 
                    de tudo é que durante as nossas aulas, você vai aprender colocando a mão na massa. Ao 
                    final de cada curso, terá desenvolvido programas e aplicações para compor o seu portfólio.
                    "
                />
                <Card data_aos="fade-left"

                    photo={Quizito1}
                    title="QUALIDADE PARA VOÇÊ"
                    description="
                    Todas as nossas formações são construídas com base em situações 
                    reais de trabalho. Queremos que você tenha uma experiência de estudo 
                    o mais próxima possível daquilo que vai encontrar em sua vida profissional.
                    "
                />
                <Card data_aos="zoom-in-right"

                    photo={Nossa}
                    title=" PROGRAMAÇÃO AU VIVO"
                    description="
                    O oceano da programação é gigantesco.Com programação, você será capaz de
                    encontrar soluções inovadoras para resolver problemas enfrentados pelos
                    negócios mais diversos. Aqui, você será capaz de desenvolver projetos 
                    digitais incríveis."
                />
                <Card data_aos="flip-up"

                    photo={Timoteo}
                    title="QUALIDADESPARA VOÇÊ"
                    description="
                    Nós produzimos diversos conteúdos complementares em parceria com a
                    comunidade dev, sempre buscando expandir a sua visão da área e 
                    trazendo experiências de várias frentes do mercado.Além disso,
                    o Timo possui mais de 3500 cursos de diversos temas em tecnologia.
                    "
                />
            </div>
        </>
    )
}

