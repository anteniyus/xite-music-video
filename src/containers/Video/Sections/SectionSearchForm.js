import React, { useEffect, useRef, useState } from "react";
import { Paper, TextField } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/styles";
import CustomMultipleSelect from "../../../components/Select/CustomMultipleSelect";
import { updateVideos } from "../../../store/slice/VideoSlice";
import CustomDecadeSelect from "../../../components/Select/CustomDecadeSelect";

const useStyles = makeStyles((theme) => ({
  formContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    flexWrap: "wrap",
    alignItems: "center",
    alignContent: "center",
  },
  textField: {
    width: "80%",
    [theme.breakpoints.down("md")]: {
      width: "90%",
    },
    "@media (max-width:850px)": {
      width: "98%",
    },
    "@media (max-width:720px)": {
      width: "20rem",
    },
    "@media (max-width:400px)": {
      width: "18rem !important",
    },
    "@media (max-width:300px)": {
      width: "15rem !important",
    },
  },
  paper: {
    width: "100%",
    margin: theme.spacing(2),
    backgroundColor: theme.palette.background.default,
    boxShadow: "none",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignContent: "center",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  },
}));

const SectionSearchForm = () => {
  const classes = useStyles();

  const [query, setQuery] = useState("");

  const genreRef = useRef();
  const yearRef = useRef();

  const { genres } = useSelector((state) => state.videos);

  const dispatch = useDispatch();

  const dispatchUpdateVideos = (filters) => dispatch(updateVideos(filters));

  const handleGenreChange = (selectedGenres) => {
    dispatchUpdateVideos({
      genres: selectedGenres,
      years: yearRef.current.getYears(),
      query,
    });
  };

  const handleYearChange = (selectedYears) => {
    dispatchUpdateVideos({
      genres: genreRef.current.getValues(),
      years: selectedYears,
      query,
    });
  };

  const handleArtistChange = (event) => {
    setQuery(event.target.value);
  };

  useEffect(() => {
    dispatchUpdateVideos({
      genres: genreRef.current.getValues(),
      years: yearRef.current.getYears(),
      query,
    });
  }, [query]);

  return (
    <div className={classes.formContainer}>
      <TextField
        id="query"
        label="Search"
        placeholder="Enter Artist or Track Name"
        className={classes.textField}
        value={query}
        onChange={handleArtistChange}
      />

      <Paper className={classes.paper}>
        <CustomMultipleSelect
          label="Genres"
          items={genres}
          onChange={handleGenreChange}
          ref={genreRef}
        />

        <CustomDecadeSelect onChange={handleYearChange} ref={yearRef} />
      </Paper>
    </div>
  );
};

export default SectionSearchForm;
