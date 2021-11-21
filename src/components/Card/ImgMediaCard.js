import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    width: 350,
    margin: ".5rem",
    boxShadow: "none",
    boxSizing: "border-box",
  },
  image: {
    objectFit: "contain",
    objectPosition: "top",
  },
  multiLineEllipsis: {
    display: "-webkit-box",
    overflow: "hidden",
    textOverflow: "ellipsis",
    "-webkit-line-clamp": 2,
    "-webkit-box-orient": "vertical",
    whiteSpace: "normal",
  },
});

const ImgMediaCard = ({ imageURL, title, body }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={title}
          height="230"
          image={imageURL}
          title={title}
          className={classes.image}
        />
        {/* Here it could be possible to use styled-component to create
            a styled Ellipsis Typography component instead of passing class
        */}
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            className={classes.multiLineEllipsis}
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.multiLineEllipsis}
          >
            {body}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

ImgMediaCard.propTypes = {
  imageURL: PropTypes.string.isRequired,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  body: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default ImgMediaCard;
