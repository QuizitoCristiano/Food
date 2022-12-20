import React from "react";
import "./input.css";
import { TextField as MuiInput } from '@mui/material/';

export const Input = (props) => {
    return (<>

        <div className="section-cantainer">

            <MuiInput {...props} />
        </div>

    </>)
}