import React from "react";
import { v4 as uuidv4 } from "uuid";
import { Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import VideoItem from "./VideoItem";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    backgroundColor: theme.palette.background.default,
    boxShadow: "none",
  },
}));

const SectionVideoItems = () => {
  const classes = useStyles();

  return (
    <Card className={classes.container}>
      {[...Array(12)].map(() => (
        <VideoItem key={uuidv4()} />
      ))}
    </Card>
  );
};

export default SectionVideoItems;
