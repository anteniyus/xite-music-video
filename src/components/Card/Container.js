import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(7),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(2),
    },
    maxWidth: "1800px",
  },
}));

const Container = ({ children }) => {
  const classes = useStyles();

  return <div className={classes.container}>{children}</div>;
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
