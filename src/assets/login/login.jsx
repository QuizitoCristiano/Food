import React from "react";
import "./etylelogin.css";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WhereToVoteIcon from '@mui/icons-material/WhereToVote';
import MailLockIcon from '@mui/icons-material/MailLock';
import WifiCalling3Icon from '@mui/icons-material/WifiCalling3';


import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';


import Button from '@mui/material/Button';

import Input from '@mui/material/Input';

export const Login = () => {
    return (<>
        <div className="section-container">
            <div className="login-container">
                tetet
                <div className="container-Info">
                    <div className="div-contato">
                        <h2>Contatos</h2>
                        <ul className="info">
                            <li>
                                <p>
                                    <WhereToVoteIcon className="info-icons" />

                                </p>
                                <p>
                                    Estrada
                                    Avenita
                                    N- 1570
                                </p>
                            </li>
                            <li>
                                <p>

                                    <MailLockIcon className="info-icons" />
                                </p>
                                <p>
                                    e-mail: quizitofelipe@gmali.com
                                </p>
                            </li>
                            <li>
                                <p>

                                    <WifiCalling3Icon className="info-icons" />
                                </p>
                                <p>
                                    +55 41 9978000006
                                </p>
                            </li>
                        </ul>

                        <div className="redes-social" >
                            <WhatsAppIcon className="nossas-redes-social" />
                            <FacebookIcon className="nossas-redes-social" />
                            <InstagramIcon className="nossas-redes-social" />
                            <LinkedInIcon className="nossas-redes-social" />
                            <TwitterIcon className="nossas-redes-social" />
                        </div>
                    </div>
                </div>
                <div className="container-Forme">
                    <h2>Enviar uma Mensagem</h2>
                    <div className="forme-Box w50">

                        <div className="input-Box w50" >
                            <p>Seu Numero do celular</p>
                            <Input />
                        </div>

                        <div className="input-Box w100">
                            <textarea placeholder=""></textarea>
                            <p>Escreva aqui a sua Mensagem</p>
                        </div>
                        <div className="input-Box w100">
                            <Button color="secondary">Primary</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}