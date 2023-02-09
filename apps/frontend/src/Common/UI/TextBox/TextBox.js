import React from "react";
import { TextField } from "@mui/material";

import "./TextBox.css";

function TextBox({ label, ...rest }) {
  return (
    <div className="text-box">
      <label>{label}</label>
      <TextField {...rest} />
    </div>
  );
}
export default TextBox;
