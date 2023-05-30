import React from "react";
import "./etylelogin.css";
import { Button, TextField, IconButton } from "@mui/material/";

import { Input } from "./Inputs/input";
import VisibilityOffRoundedIcon from "@mui/icons-material/VisibilityOffRounded";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import { useState } from "react";

export const Login = () => {
  const [abreIcon, setAbrirIcon] = useState(false);
  const IconAberto = () => {
    setAbrirIcon(true);
  };
  const FecharIcon = () => {
    setAbrirIcon(false);
  };

  const handleToggleViewPassword = () => {
    setAbrirIcon(!abreIcon);
  };
  return (
    <>
      <div className="section-container">
        <div className="container-lubi">
          <div className="container-text">
            <div className="wrepper-login-title">
              <h2>Faça login no momento</h2>
            </div>
            <div className="wrepper-login-input">
              <div className="wrappr-inputs">
                <div className="input-logal-email">
                  <Input
                    name="email"
                    label="E-mail"
                    variant="standard"
                    fullWidth={true}
                  />
                </div>
                {/* <div className="input-Visibilit">

                                <Input fullWidth={true} password='password' label="password" variant="standard"

                                />
                                <VisibilityRoundedIcon onClick={IconAberto} />
                            </div> */}

                <div className="input-Visibilit">
                  <TextField
                    fullWidth={true}
                    password="password"
                    label="password"
                    variant="standard"
                    type={abreIcon ? "text" : "password"}
                  />
                  <IconButton
                    className="Iconbutton"
                    onClick={handleToggleViewPassword}
                  >
                    {abreIcon ? (
                      <VisibilityRoundedIcon />
                    ) : (
                      <VisibilityOffRoundedIcon />
                    )}
                  </IconButton>
                </div>
              </div>

              <div className="div-button-login">
                <Button
                  sx={{ backgroundColor: "#00FFD1 " }}
                  variant="contained"
                  color="success"
                  disableElevation
                >
                  Cadastrar
                </Button>

                <Button
                  className="button-login-logar"
                  variant="container-button"
                  disableElevation
                >
                  logar
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
