import React from "react";
import { Select, MenuItem } from "@mui/material";

import "./DropDown.css";

function DropDown({ label, value, Icon, menuItems, onSelect, ...rest }) {
  return (
    <div className="drop-down">
      <label>{label}</label>
      <Select value={value} fullWidth onChange={onSelect} {...rest}>
        {menuItems.map(({ value, name, Icon }) => (
          <MenuItem key={value} value={value}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Icon />
              <div style={{ display: "flex", alignItems: "center",paddingLeft:"5px" }}>{name}</div>
            </div>
          </MenuItem>
        ))}
      </Select>
    </div>
  );
}
export default DropDown;
