import React from "react";
import "./infolink.css"

import { GoSearch } from "react-icons/go";
import ReplyAllSharpIcon from '@mui/icons-material/ReplyAllSharp';
import { useState } from "react";
import ClearIcon from '@mui/icons-material/Clear';


export const Index = () => {

    const [menuAberto, setMenuAberto] = useState(false)

    const handleAbrirMenu = () => {
        setMenuAberto(true);
    }
    const handleFecharMenu = () => {
        setMenuAberto(false);
    }


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

                    <div className="div-linkes" id="LinksHome">
                        <div className=" header-navegacao-cursos">

                        </div>

                        <div className=" header-navegacao-cursos">

                            <a className="a-linkes" href="#">Progremação</a>
                        </div>
                        <div className=" header-navegacao-cursos">

                            <a className="a-linkes" href="#">Todos os Cursos</a>
                        </div>
                        <div className=" header-navegacao-cursos">

                            <a className="a-linkes" href="#">Front-end</a>
                        </div>
                        <div className=" header-navegacao-cursos">

                            <a className="a-linkes" href="#">back-end</a>
                        </div>


                    </div>
                    <div className="div-botao">
                        <span>Entrar</span>
                        <button className="botao">Matricule-se</button>
                        <div className="icon-SharpIcon">
                            <span>
                                <ReplyAllSharpIcon onClick={handleAbrirMenu} />
                            </span>


                        </div>

                    </div>

                </div>
                {menuAberto && (
                    <div className="menu-celular">

                        <div className="icone-fechar">
                            fechar
                            <ClearIcon onClick={handleFecharMenu} />
                        </div>
                        <div class="itens-menu-celular">
                            <div className=" header-navegacao-cursos">

                                <a className="a-linkes" href="#">Progremação</a>
                            </div>
                            <div className=" header-navegacao-cursos">

                                <a className="a-linkes" href="#">Todos os Cursos</a>
                            </div>
                            <div className=" header-navegacao-cursos">

                                <a className="a-linkes" href="#">Front-end</a>
                            </div>
                            <div className=" header-navegacao-cursos">

                                <a className="a-linkes" href="#">back-end</a>
                            </div>
                        </div>

                    </div>
                )}
            </div>

        </>
    )
}