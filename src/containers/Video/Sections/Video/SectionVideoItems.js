import React from "react";
import { v4 as uuidv4 } from "uuid";
import { Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useSelector } from "react-redux";
import VideoItem from "./VideoItem";
import VideoItemsSkeleton from "./VideoItemsSkeleton";

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

  const { isLoading, currentData } = useSelector((state) => state.videos);

  const createUI = () =>
    isLoading ? (
      <VideoItemsSkeleton />
    ) : (
      currentData.map((item) => (
        <VideoItem
          key={uuidv4()}
          imageURL={item.image_url}
          artist={item.artist}
          title={item.title}
        />
      ))
    );

  return <Card className={classes.container}>{createUI()}</Card>;
};

export default SectionVideoItems;
