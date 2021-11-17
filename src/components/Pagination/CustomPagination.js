import React from "react";
import PropTypes from "prop-types";
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
      <Pagination count={count} page={page} onChange={handleChange} />
    </div>
  );
};

CustomPagination.propTypes = {
  onChange: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
};

export default CustomPagination;
