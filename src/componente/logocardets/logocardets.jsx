import React from "react";
import "./logocardets.css"
import { BsArrowRight } from "react-icons/bs";
export const Logocardets = () => {
    return (
        <>
            <div className="logocardets">
                <h2>Onde você está em back-end?</h2>
                <div className="container-card">

                    <div className="div-cards-school">
                        <div className="school-text--card">

                            Começando

                        </div>
                        <div className="school-tetle">
                            <p class="school-tetle--card">
                                Iniciante em programação Conheça o
                                seu primeiro passo em front-end.
                            </p>
                            <BsArrowRight className="icon" />
                        </div>
                    </div>
                    <div className="div-cards-school">
                        <div className="school-text--card">

                            Experimente

                        </div>
                        <div className="school-tetle">
                            <p class="school-tetle--card">
                                Experimente os nossos cursos para fazer a sua
                                vaga na área de programação de frond-end
                            </p>
                            <BsArrowRight className="icon" />
                        </div>
                    </div>
                    <div className="div-cards-school">
                        <div className="school-text--card">

                            Novo-Dev

                        </div>
                        <div className="school-tetle">
                            <p class="school-tetle--card">
                                Você que está começando então começe a sua área
                                com melhores professores do mundo venha aqui.
                            </p>
                            <BsArrowRight className="icon" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}