import React from "react";
import "./styles.css";
import { Index } from "../../componente/infolink"
import { Indexlogo } from "../../componente/logo/Indexlogo"
import { Logocardets } from "../../componente/logocardets/logocardets"
import { Worldcerdts } from "../../componente/HelloWorld/worldcerdts"
import { Socialnetworks } from "../../componente/linkesredessocial/socialnetworks"
import { Cardestext } from "../../componente/Cardestext/Cardestext"
import { Cardstitle } from "../../componente/infocardsmercado/cardstitle"
import { Iconanimation } from "../../componente/iconsanimation/animate"
export const Home = () => {
    return (
        <>
            <div className="mysection">
                <div className="contate">
                    <div className="header1">
                        <h2>
                            <strong>T</strong>
                            I
                            <strong>M</strong>
                            O
                        </h2>
                    </div>
                    <div className="header2">

                        <h2> COMEÇOU!</h2>
                        <button>Escreve-se </button>
                    </div>

                </div>

                <Index />
                <Indexlogo />
                <Cardstitle />
                <Logocardets />
                <Worldcerdts />
                <Iconanimation />
                <Cardestext />
                <Socialnetworks />
            </div>

        </>
    );
}
