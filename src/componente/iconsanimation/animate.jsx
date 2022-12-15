import React, { useState } from "react";
import "./animate.css";
import Lottie from "lottie-react"
import animationData from './animatejson/data 3.json'

import aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react";
export const Iconanimation = () => {
    useEffect(() => {
        aos.init({ duration: 500 })
    }, []);
    const [isLinked, setLikeState] = useState(false)
    const [animationState, setAnimationState] = useState({
        isStopped: true, isPaused: false
    });

    const defaultOptions = {
        loop: false,
        autoplay: false,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };


    return (
        <>
            <div className="div-animate" data-aos="zoom-out-right">
                <div className="div-animation-text">
                    <h2>O que você achou dos nossos couros de programação</h2>
                    <p>Venha até nós e se mergulhe no mundo de programação com
                        novos (as) professores
                        to ano  atual, você vai gostar batalhar conosco.
                    </p>
                    <p>Você vai se dar bem no nosso grupo e não se esqueça
                        que os nossos alunos não perdem vaga no mercado de programação.

                        Se você quer ser um dev um programador desenrolando está aula é para você.
                        Não perca a sua             vaga vamos lá!!!!!
                    </p>
                </div>
                <div className="wrapper-icons">

                    <buttonWrapper className="buttonWrapper" onClick={() => {

                        setAnimationState({
                            ...animationState,
                            isStopped: !animationState.isStopped,
                        });
                        setLikeState(!isLinked);

                    }}>
                        <div className="div-icon-animation">
                            <Lottie className="animate-icon" options={defaultOptions}
                                height={400}
                                width={400}
                                isStopped={animationState.isStopped}
                                isPaused={animationState.isPaused}
                                animationData={animationData}
                            />
                        </div>
                    </buttonWrapper>
                    <span>
                        {isLinked ? 1 : 0}
                    </span>

                </div>

            </div>
        </>
    )
}