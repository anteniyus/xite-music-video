import React from "react";
import { Paper } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/styles";
import CustomMultipleSelect from "../../../components/Select/CustomMultipleSelect";
import { updateVideos } from "../../../store/slice/VideoSlice";

const useStyles = makeStyles((theme) => ({
  container: {
    margin: theme.spacing(2),
    backgroundColor: theme.palette.background.default,
    boxShadow: "none",
    display: "flex",
    justifyContent: "space-around",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  },
}));

const SectionSearchForm = () => {
  const classes = useStyles();

  const { genres } = useSelector((state) => state.videos);

  const dispatch = useDispatch();

  const handleGenreChange = (selectedGenres) => {
    dispatch(updateVideos({ genres: selectedGenres }));
  };

  return (
    <Paper className={classes.container}>
      <CustomMultipleSelect
        label="Genres"
        items={genres}
        onChange={handleGenreChange}
      />
    </Paper>
  );
};

export default SectionSearchForm;
