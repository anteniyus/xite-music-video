import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import CustomPagination from "../../../components/Pagination/CustomPagination";
import { getVideosByPage, updatePage } from "../../../store/slice/VideoSlice";

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

  const { filteredData, page } = useSelector((state) => state.videos);

  const dispatch = useDispatch();

  const handlePageChange = (currentPage) => {
    dispatch(getVideosByPage({ offset: currentPage - 1 }));
    dispatch(updatePage({ page: currentPage }));
  };

  return (
    <Paper className={classes.paper}>
      <CustomPagination
        onChange={handlePageChange}
        page={page}
        count={
          filteredData.length % 12 === 0
            ? filteredData.length / 12
            : Math.floor(filteredData.length / 12) + 1
        }
      />
    </Paper>
  );
};

export default SectionPagination;
