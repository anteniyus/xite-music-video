import React from "react";
import Box from "@material-ui/core/Box";
import Skeleton from "@material-ui/lab/Skeleton";

const ImgMediaCardSkeleton = () => (
  <Box margin={0.6}>
    <Skeleton variant="rect" width={400} height={250} />

    <Box pt={0.5}>
      <Skeleton />
      <Skeleton width="60%" />
    </Box>
  </Box>
);

export default ImgMediaCardSkeleton;
