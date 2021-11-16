import React from "react";
import SectionSearch from "./Sections/SectionSearch";
import SectionVideoItems from "./Sections/SectionVideoItems";
import SectionPagination from "./Sections/SectionPagination";

const VideoList = () => (
  <>
    <SectionSearch />
    <SectionVideoItems />
    <SectionPagination />
  </>
);

export default VideoList;
