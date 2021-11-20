import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/styles";
import { Button } from "@material-ui/core";
import RefreshIcon from "@material-ui/icons/Refresh";
import { useSnackbar } from "notistack";
import SectionSearchForm from "./Sections/SectionSearchForm";
import SectionVideoItems from "./Sections/Video/SectionVideoItems";
import SectionPagination from "./Sections/SectionPagination";
import { getVideos } from "../../store/slice/VideoSlice";
import Container from "../../components/Card/Container";
import settings from "../../settings.json";

const useStyles = makeStyles((theme) => ({
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: "2rem",
  },
  button: {
    margin: theme.spacing(1),
  },
}));

const VideoList = () => {
  const classes = useStyles();

  const didMountRef = useRef(false);

  const dispatch = useDispatch();

  const { error } = useSelector((state) => state.videos);

  const { enqueueSnackbar } = useSnackbar();

  const retryButton = (
    <div className={classes.buttonContainer}>
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<RefreshIcon />}
        onClick={() => dispatch(getVideos())}
      >
        {settings.messages.videoList.RETRY_BUTTON}
      </Button>
    </div>
  );

  useEffect(() => {
    dispatch(getVideos());
  }, []);

  useEffect(() => {
    if (didMountRef.current) {
      if (error)
        enqueueSnackbar(error, {
          variant: "error",
        });
    } else didMountRef.current = true;
  }, [error]);

  return (
    <Container>
      <SectionSearchForm />

      {error ? (
        retryButton
      ) : (
        <>
          <SectionVideoItems />
          <SectionPagination />
        </>
      )}
    </Container>
  );
};

export default VideoList;
