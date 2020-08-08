import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
  },
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Mask"
          height="200"
          src="https://www.danville.ca.gov/ImageRepository/Document?documentID=4395"
          title="Alway wear a mask"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            COVER YOUR FACE
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Wearing a face mask will help prevent the spread of infection and
            prevent the individual from contracting any airborne infectious
            germs.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="primary"
          href="https://www.danville.ca.gov/CivicAlerts.aspx?AID=371"
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
