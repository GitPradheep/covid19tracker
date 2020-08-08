import React from "react";
import "./Down.css";

import Button from "@material-ui/core/Button";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import Grid from "@material-ui/core/Grid";

import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [
  {
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSXJ9FZYmy2LAVPpwczaCEwLP0pn1hbCP0RxA&usqp=CAU",
    desc: "Wear a mask when physical distancing is not possible.",
    tit: "Mask",
    url:
      "https://www.today.com/style/how-wear-face-mask-correctly-common-mistakes-avoid-t178177",
  },
  {
    img:
      "https://i.dailymail.co.uk/1s/2020/03/03/02/25459132-0-image-a-47_1583203921789.jpg",
    desc:
      "Clean your hands often. Use soap and water, or an alcohol-based hand rub.",
    tit: "Wash your hands often.",
    url:
      "https://www.dailymail.co.uk/femail/article-8067781/Guide-washing-hands-proves-thousands-people-not-practising-good-hygiene-amid-coronavirus.html",
  },
  {
    img:
      "https://images.theconversation.com/files/334931/original/file-20200514-77255-kbx2n7.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop",
    desc: "Maintain a safe distance from anyone who is coughing or sneezing.",
    tit: "Social Distancing",
    url:
      "https://theconversation.com/coronavirus-and-cognitive-bias-the-surprising-reasons-people-cheat-at-social-distancing-137987",
  },
  {
    img:
      "https://www.lbhf.gov.uk/sites/default/files/styles/lbhf_style_s/public/covid-19-easy-read-houses.png?itok=k2lV6VCW",
    desc: "as much as you can",
    tit: "Stay Home,Stay Safe",
    url:
      "https://www.lbhf.gov.uk/coronavirus-covid-19/coronavirus-covid-19-easy-read/stay-home",
  },
  {
    img:
      "https://www.verywellhealth.com/thmb/fYTLYPLDGFXw0c9tvCkvflxHZRE=/400x250/filters:no_upscale():max_bytes(150000):strip_icc()/hispanic-girl-sneezing-in-classroom-138710775-5aec486f0e23d90037849531.jpg",
    desc:
      "Cover your nose and mouth with your bent elbow or a tissue when you cough or sneeze.",
    tit: "Do it into your elbow or a tissue!",
    url:
      "https://www.verywellhealth.com/why-you-should-cover-your-cough-770726",
  },
  {
    img:
      "https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    desc:
      "If you have a fever, cough and difficulty breathing, seek medical attention.",
    tit: "Seek Medical Attention",
    url:
      "https://news.cgtn.com/news/2020-04-12/How-to-seek-medical-advice-safely-during-the-COVID-19-outbreak--PCMDf9Pyog/index.html",
  },
];

export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <main>
        <div className="header">
          <h2>Precautions for COVID19</h2>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={card.img}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.tit}
                    </Typography>
                    <Typography>{card.desc}</Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary" href={card.url}>
                      Know More
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>

          <CardActions>
            <Button size="small" color="primary" href="https://www.who.int/">
              For more information visit www.who.int
            </Button>
          </CardActions>
        </Container>
      </main>
    </React.Fragment>
  );
}
