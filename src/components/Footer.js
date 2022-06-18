import React from "react";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";


export default function Footer() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
          ></IconButton>
          <Typography variant="h6" style={{ textAlign: "center" }}>
            &copy; Bushra Dawdyeh 2022
            <br />
            Contacts Us at: support@Bushra.com
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
