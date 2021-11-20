import React, { useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import { Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useSelector } from "react-redux";
import { useSnackbar } from "notistack";
import VideoItem from "./VideoItem";
import VideoItemsSkeleton from "./VideoItemsSkeleton";
import settings from "../../../../settings.json";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    backgroundColor: theme.palette.background.default,
    boxShadow: "none",
  },
  hideDiv: {
    visibility: "hidden",
    height: "0",
    width: "366px",
  },
}));

const SectionVideoItems = () => {
  const classes = useStyles();

  const didMountRef = useRef(false);

  const { isLoading, currentData } = useSelector((state) => state.videos);

  const { enqueueSnackbar } = useSnackbar();

  const drawVideoItems = (
    <>
      {currentData.map((item) => (
        <VideoItem
          key={uuidv4()}
          imageURL={item.image_url}
          artist={item.artist}
          title={item.title}
        />
      ))}

      {/*
      Added for flexbox alignment, the design shows maximum 4 square in a row
      and these divs added to show one or two or three last square below of squares of upper row.
      There is a solution to use after pseudo element ::after with content equals to empty, but
      this is not going to work in our design because of fix width, so I come up with this solution.
       */}
      <div className={classes.hideDiv} />
      <div className={classes.hideDiv} />
      <div className={classes.hideDiv} />
    </>
  );

  useEffect(() => {
    if (didMountRef.current) {
      if (!currentData?.length)
        enqueueSnackbar(settings.messages.general.NOT_FOUND, {
          variant: "info",
        });
    } else didMountRef.current = true;
  }, [JSON.stringify(currentData)]);

  const createUI = () => (isLoading ? <VideoItemsSkeleton /> : drawVideoItems);

  return <Card className={classes.container}>{createUI()}</Card>;
};

export default SectionVideoItems;
