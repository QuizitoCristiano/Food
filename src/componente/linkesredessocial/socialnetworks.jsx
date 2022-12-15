import React, { useEffect } from "react";
import "./socialnetworks.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import AppleIcon from '@mui/icons-material/Apple';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import aos from "aos"
import "aos/dist/aos.css"

export const Socialnetworks = () => {
    useEffect(() => {
        aos.init({ duration: 500 })
    }, []);

    return (
        <>
            <div className="footer">
                <div className="container-footer">
                    <div className="container-redes-socias" data-aos="fade-down">
                        <h2>Timo</h2 >
                        <h3>Nossas redes socias</h3>
                        <div className="footer-info-redes-socias">
                            <FacebookIcon className="redes-social-icons" />
                            <AppleIcon className="redes-social-icons" />
                            <YouTubeIcon className="redes-social-icons" />
                            <PlayArrowIcon className="redes-social-icons" />
                            <InstagramIcon className="redes-social-icons" />
                        </div>
                    </div>
                    <div className="footer-logos">
                        <div className="info-footer-logo-final">
                            <div className="Institucional" data-aos="fade-right">
                                <h2>Institucional</h2>
                                <p>Sobre nós</p>
                                <p>Trabalhe conosco</p>
                                <p>Para Empresas</p>

                                <p>Todos os cursos</p>
                                <p>Depoimentos</p>
                                <p>Compromisso de Integridade</p>
                            </div>
                            <div className="info-Conteudos" data-aos="fade-left">
                                <h2>Timo</h2>
                                <p>Como Funciona</p>

                                <p>Professores(as)</p>
                                <p>Front-end</p>
                                <p>back-end</p>

                            </div>
                            <div className="info-faleconosco" data-aos="fade-up-right">
                                <h2>Fale Conosco</h2>
                                <p>Email e telefone</p>
                                <p>WhatsApp</p>
                                <p>Perguntas frequentes</p>
                            </div>
                        </div>
                        <div className="div-final-input" >
                            <h4>Sua mensagem é muito inportande</h4>
                            <div className="info-mensagem">
                                <input type="text" placeholder="Mensagem" data-aos="fade-up-left" />
                                <div className="info-botao-sapan" data-aos="fade-up-right">
                                    <button className="info-botao-loader"  >Enviar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}