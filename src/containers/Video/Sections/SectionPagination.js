import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import CustomPagination from "../../../components/Pagination/CustomPagination";
import { updateVideos } from "../../../store/slice/VideoSlice";

const useStyles = makeStyles((theme) => ({
  paper: {
    display: "flex",
    justifyContent: "center",
    padding: ".5rem",
    backgroundColor: theme.palette.background.default,
    boxShadow: "none",
  },
}));

const SectionPagination = () => {
  const classes = useStyles();

  const { data } = useSelector((state) => state.videos);

  const dispatch = useDispatch();

  const handlePageChange = (offset) => dispatch(updateVideos(offset));

  return (
    <Paper className={classes.paper}>
      <CustomPagination
        onChange={handlePageChange}
        count={
          data.length % 12 === 0
            ? data.length / 12
            : Math.floor(data.length / 12) + 1
        }
      />
    </Paper>
  );
};

export default SectionPagination;
