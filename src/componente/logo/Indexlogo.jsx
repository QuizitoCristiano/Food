import React from "react";
import "./Indexlogo.css"

import Professor from "../../imagens/professor1.png";
export const Indexlogo = () => {
    return (
        <>
            <div className="Indexlogo">
                <div className="school-container1">
                    <div className="infoWrapper1">
                        <h4>Escola de__</h4>
                        <h2>Programação</h2>

                        <p>
                            Mergulhe no universo de Front-end.e back-end.Programe nas
                            principais plataformas e linguagens, de Programação
                            como o React-js .React-Native, React-typescript,  Crie
                            sistemas web e desenhe a arquitetura de soluções inovadoras,
                            com código e boas práticas.
                        </p>
                        <p className="nosos-cursus">Veja os nonos cursos</p>
                        <button className="caminhos">Caminhe Conosco</button>
                    </div>
                    <div className="infoWrapper2">
                        <img className="prof1" src={Professor} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}
