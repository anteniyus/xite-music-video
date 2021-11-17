import React from "react";
import { v4 as uuidv4 } from "uuid";
import VideoItem from "./VideoItem";

const SectionVideoItems = () =>
  [...Array(2)].map(() => <VideoItem key={uuidv4()} />);

export default SectionVideoItems;
