import React from "react";
import PropTypes from "prop-types";
import ImgMediaCard from "../../../../components/Card/ImgMediaCard";

const VideoItem = ({ imageURL, artist, title }) => (
  <ImgMediaCard imageURL={imageURL} title={artist} body={title} />
);

VideoItem.propTypes = {
  imageURL: PropTypes.string.isRequired,
  artist: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default VideoItem;
