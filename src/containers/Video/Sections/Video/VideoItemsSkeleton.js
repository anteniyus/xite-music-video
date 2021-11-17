import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/styles";
import { useMediaQuery, useTheme } from "@material-ui/core";
import ImgMediaCardSkeleton from "../../../../components/Loading/ImgMediaCardSkeleton";

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
}));

const VideoItemsSkeleton = () => {
  const classes = useStyles();

  const theme = useTheme();
  const upLG = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <Grid container wrap="nowrap" className={classes.container}>
      <ImgMediaCardSkeleton />
      <ImgMediaCardSkeleton />
      {upLG && <ImgMediaCardSkeleton />}
    </Grid>
  );
};

export default VideoItemsSkeleton;
