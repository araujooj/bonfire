import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import Artigos from "./artigo.png";

const useStyles = makeStyles({
  card: {
    maxWidth: "85%",
    marginTop: "15%",
    backgroundColor: "transparent",
    color: "#fff",
    borderStyle: "solid",
    borderColor: "#3c2057",
    borderWidth: "1px",
    fontFamily: 'Lato, sans-serif',
    fontWeight: '800'
  },
  media: {
    height: 140,
    
  }
});

export default function CardArticle() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={Artigos}
          title="Artigos"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Artigos
          </Typography>
          <Typography variant="body2" component="p">
            Leia os artigos escritos pelos usuários de nossa plataforma, ou
            escreva algum
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
