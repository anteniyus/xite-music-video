import React from "react";
import "./App.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Provider } from "react-redux";
import AppTheme from "./AppTheme";
import ScreensRoot from "./screens/Root";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <AppTheme>
        <CssBaseline />

        <ScreensRoot />
      </AppTheme>
    </Provider>
  );
}

export default App;
