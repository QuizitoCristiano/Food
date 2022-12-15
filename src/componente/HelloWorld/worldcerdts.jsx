import React from "react";
import "./worldcerdts.css"
import Quizito from '../../imagens/quizito.jpeg'
import { School, Mic, MenuBook, YouTube } from '@mui/icons-material'
import StarBorderIcon from '@mui/icons-material/StarBorder';

import StarRateIcon from '@mui/icons-material/StarRate';

import aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react";
export const Worldcerdts = () => {

    useEffect(() => {
        aos.init({ duration: 500 })
    }, []);
    return (
        <>
            <div className="HelloWorld" >
                <h2>Vamos Maradonar colocar mau na massa</h2>
                <div className="school-container3" data-aos="zoom-in-down">
                    <div className="div-icons">
                        <YouTube sx={{ fontSize: 30 }} className="icons" />
                        Vídeos
                    </div>
                    <div className="div-icons">
                        <School className="icons" sx={{ fontSize: 30 }} />
                        <p>Formações</p>
                    </div>
                    <div className="div-icons">
                        <MenuBook sx={{ fontSize: 30 }} className="icons" />
                        <p> Cursos</p>
                    </div>
                    <div className="div-icons">
                        <Mic sx={{ fontSize: 30 }} className="icons" />
                        <p>Conversas</p>
                    </div>

                </div>
                <div className="sectino-text" data-aos="zoom-in-up">
                    <p>
                        As formações são trilhas de cursos e
                        conteúdos que vão te desafiar a aprender,
                        praticar e desenvolver sistemas em back-end
                        em diversas linguagens. Confira algumas
                        delas:
                    </p>
                </div>
                <div className="contacte" data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="500">
                    <div className="div-card">
                        <div className="div-info">
                            <img src={Quizito} alt="" />
                        </div>
                        <div className="div-info-text">
                            <h2>
                                Iformaçãpo do programador
                            </h2>
                            <h3>Vaomos começar a nossa carreira na progrmação</h3>

                            <div className="div-info-icons-star">
                                <StarRateIcon className="info-star" />
                                <StarRateIcon className="info-star" />
                                <StarRateIcon className="info-star" />
                                <StarBorderIcon className="info-star" />
                            </div>
                            <div className="info-text-p">
                                <p>Aproveite a ser um dos melhores programadores
                                    desenrolado com melhores professor do Brasil</p>
                            </div>
                        </div>
                    </div>


                    <div className="div-card" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                        <div className="div-info">
                            <img src={Quizito} alt="" />
                        </div>
                        <div className="div-info-text">
                            <h2>
                                Iformaçãpo do programador
                            </h2>
                            <h3>Vaomos começar a nossa carreira na progrmação</h3>

                            <div className="div-info-icons-star">
                                <StarRateIcon className="info-star" />
                                <StarRateIcon className="info-star" />
                                <StarRateIcon className="info-star" />
                                <StarBorderIcon className="info-star" />
                            </div>
                            <div className="info-text-p">
                                <p>Aproveite a ser um dos melhores programadores
                                    desenrolado com melhores professor do Brasil</p>
                            </div>
                        </div>
                    </div>


                    <div className="div-card" data-aos="fade-left">
                        <div className="div-info">
                            <img src={Quizito} alt="" />
                        </div>
                        <div className="div-info-text">
                            <h2>
                                Iformaçãpo do programador
                            </h2>
                            <h3>Vaomos começar a nossa carreira na progrmação</h3>

                            <div className="div-info-icons-star">
                                <StarRateIcon className="info-star" />
                                <StarRateIcon className="info-star" />
                                <StarRateIcon className="info-star" />
                                <StarBorderIcon className="info-star" />
                            </div>
                            <div className="info-text-p">
                                <p>Aproveite a ser um dos melhores programadores
                                    desenrolado com melhores professor do Brasil</p>
                            </div>
                        </div>
                    </div>

                    <div className="div-card" data-aos="fade-right">
                        <div className="div-info">
                            <img src={Quizito} alt="" />
                        </div>
                        <div className="div-info-text">
                            <h2>
                                Iformaçãpo do programador
                            </h2>
                            <h3>Vaomos começar a nossa carreira na progrmação</h3>

                            <div className="div-info-icons-star">
                                <StarRateIcon className="info-star" />
                                <StarRateIcon className="info-star" />
                                <StarRateIcon className="info-star" />
                                <StarBorderIcon className="info-star" />
                            </div>
                            <div className="info-text-p">
                                <p>Aproveite a ser um dos melhores programadores
                                    desenrolado com melhores professor do Brasil</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}