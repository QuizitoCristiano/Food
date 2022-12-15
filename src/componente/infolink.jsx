import React from "react";
import "./infolink.css"

import { GoSearch } from "react-icons/go";
import ReplyAllSharpIcon from '@mui/icons-material/ReplyAllSharp';

export const Index = () => {
    return (
        <>

            <div className="Infolink">
                <div className="info-tema-end-input">
                    <div className="timo1">
                        <strong>T</strong>
                        I
                        <strong>M</strong>
                        O
                    </div>
                    <div className="timo2">
                        <div className="social-liste">
                            <input type="text" placeholder="O que você quer aprender?" />

                            <GoSearch />

                        </div>
                    </div>
                </div>


                <div className="info-button-end-linkes">
                    <div className="div-linkes">
                        <div className=" header-navegacao-cursos">
                            <span>Progremação</span>
                        </div>
                        <div className=" header-navegacao-cursos">
                            <span>Todos os Cursos</span>
                        </div>
                        <div className=" header-navegacao-cursos">
                            <span>Front-end</span>
                        </div>
                        <div className=" header-navegacao-cursos">
                            <span>back-end</span>
                        </div>
                    </div>
                    <div className="div-botao">
                        <span>Entrar</span>
                        <button className="botao">Matricule-se</button>
                        <div className="icon-SharpIcon">
                            <span>
                                <ReplyAllSharpIcon />
                            </span>

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}