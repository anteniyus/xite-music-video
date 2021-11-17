import React from "react";
import PropTypes from "prop-types";
import ImgMediaCard from "../../../../components/Card/ImgMediaCard";

const VideoItem = ({ imageURL, artist, title }) => (
  <ImgMediaCard imageURL={imageURL} title={artist} body={title} />
);

VideoItem.propTypes = {
  imageURL: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default VideoItem;
