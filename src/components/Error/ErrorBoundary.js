import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import errorPoster from "../../assets/images/error-poster-min.jpg";
import { Colors } from "../../constants/ColorPalette";

const styles = () => ({
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    position: "relative",
  },
  button: {
    position: "absolute",
    bottom: "10%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: Colors.CYAN,
  },
});

/*
 * Because there is no Error Boundaries in hook yet,
 * this component is implemented using class based component
 * */
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      throwsError: false,
    };
  }

  static getDerivedStateFromError() {
    return {
      throwsError: true,
    };
  }

  /*
   * Here we can also send error and info, the first and second parameters of componentDidCatch,
   * to the reporting server
   * */
  componentDidCatch() {
    console.group("Error details:");
    console.error("Internal Error!");
    console.groupEnd();
  }

  render() {
    const { throwsError } = this.state;
    const { children, classes } = this.props;
    const classesShadow = classes; // For ignoring classes props type checking

    if (throwsError) {
      return (
        <div className={classesShadow.container}>
          <img
            src={errorPoster}
            style={{ objectFit: "contain" }}
            alt="Error Poster"
          />
          <Button
            className={classesShadow.button}
            variant="contained"
            onClick={() => {
              window.location.href = "/";
            }}
          >
            Go Home
          </Button>
        </div>
      );
    }

    return children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.shape({}).isRequired,
};

export default withStyles(styles)(ErrorBoundary);
