import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import CustomPagination from "../../../components/Pagination/CustomPagination";
import { updateCurrentDataByOffset } from "../../../store/slice/VideoSlice";
import settings from "../../../settings.json";

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
    dispatch(updateCurrentDataByOffset({ offset: currentPage - 1 }));
  };

  return (
    <Paper className={classes.paper}>
      <CustomPagination
        onChange={handlePageChange}
        page={page}
        count={
          filteredData.length % settings.configs.ITEM_PER_PAGE === 0
            ? filteredData.length / settings.configs.ITEM_PER_PAGE
            : Math.floor(filteredData.length / settings.configs.ITEM_PER_PAGE) +
              1
        }
      />
    </Paper>
  );
};

export default SectionPagination;
