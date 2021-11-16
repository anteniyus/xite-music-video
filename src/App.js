import React from "react";
import "./App.css";
import { CssBaseline } from "@mui/material";
import AppTheme from "./AppTheme";
import ScreensRoot from "./screens/Root";

function App() {
  return (
    <AppTheme>
      <CssBaseline />

      <ScreensRoot />
    </AppTheme>
  );
}

export default App;
