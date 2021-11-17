import React from "react";
import PropTypes from "prop-types";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";

const AppTheme = ({ children }) => {
  const theme = createTheme({
    palette: {
      type: "dark",
    },
    typography: {
      fontSize: 12,
    },
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

AppTheme.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppTheme;
