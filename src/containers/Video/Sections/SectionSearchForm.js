import React, { useRef } from "react";
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

const years = Array.from(
  new Array(72),
  (val, index) => new Date().getFullYear() - index
).map((year) => ({ id: year, name: year }));

const SectionSearchForm = () => {
  const classes = useStyles();

  const genreRef = useRef();
  const yearRef = useRef();

  const { genres } = useSelector((state) => state.videos);

  const dispatch = useDispatch();

  const handleGenreChange = (selectedGenres) => {
    dispatch(
      updateVideos({
        genres: selectedGenres,
        years: yearRef.current.getValues(),
      })
    );
  };

  const handleYearChange = (selectedGenres) => {
    dispatch(
      updateVideos({
        genres: genreRef.current.getValues(),
        years: selectedGenres,
      })
    );
  };

  return (
    <Paper className={classes.container}>
      <CustomMultipleSelect
        label="Genres"
        items={genres}
        onChange={handleGenreChange}
        ref={genreRef}
      />

      <CustomMultipleSelect
        label="Years"
        items={years}
        onChange={handleYearChange}
        ref={yearRef}
      />
    </Paper>
  );
};

export default SectionSearchForm;
