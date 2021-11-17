import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import SectionSearchForm from "./Sections/SectionSearchForm";
import SectionVideoItems from "./Sections/Video/SectionVideoItems";
import SectionPagination from "./Sections/SectionPagination";
import { getVideos } from "../../store/slice/VideoSlice";

const VideoList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVideos());
  }, []);

  return (
    <>
      <SectionSearchForm />
      <SectionVideoItems />
      <SectionPagination />
    </>
  );
};

export default VideoList;
