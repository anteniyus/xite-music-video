import React from "react";
import PropTypes from "prop-types";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { SnackbarProvider } from "notistack";
import Slide from "@material-ui/core/Slide";
import { Colors } from "./constants/ColorPalette";

const AppTheme = ({ children }) => {
  const theme = createTheme({
    palette: {
      type: "dark",
      primary: {
        main: Colors.CYAN,
      },
    },

    typography: {
      fontSize: 12,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        TransitionComponent={Slide}
        maxSnack={3}
      >
        {children}
      </SnackbarProvider>
    </ThemeProvider>
  );
};

AppTheme.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppTheme;
