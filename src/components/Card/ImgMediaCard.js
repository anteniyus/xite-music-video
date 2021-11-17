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
    width: 400,
    margin: ".5rem",
    boxShadow: "none",
  },
  image: {
    objectFit: "contain",
    objectPosition: "top",
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

        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
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
