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
          src="https://www.who.int/images/default-source/infographics/who-emblem.png?sfvrsn=877bb56a_2"
          title="World Health Organization (WHO)"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            World Health Organization (WHO)
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            People and organizations who want to help fight the pandemic and
            support WHO and partners can donate through the COVID-Solidarity
            Response Fund.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="primary"
          href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/donate"
        >
          Donate Now
        </Button>
      </CardActions>
    </Card>
  );
}
