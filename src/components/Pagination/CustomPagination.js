import React from "react";
import PropTypes from "prop-types";
import { useMediaQuery, useTheme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

const CustomPagination = ({ onChange, count }) => {
  const classes = useStyles();
  const [page, setPage] = React.useState(1);

  const theme = useTheme();
  const downSM = useMediaQuery(theme.breakpoints.down("sm"));

  const handleChange = (event, value) => {
    setPage(value);

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });

    onChange({ offset: value - 1 });
  };

  return (
    <div className={classes.root}>
      <Pagination
        count={count}
        page={page}
        onChange={handleChange}
        siblingCount={downSM ? 0 : 2}
        boundaryCount={1}
      />
    </div>
  );
};

CustomPagination.propTypes = {
  onChange: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
};

export default CustomPagination;
