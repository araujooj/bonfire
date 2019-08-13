import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import Livros from './livors.png'

const useStyles = makeStyles({
  card: {
    maxWidth: "85%",
    marginTop: "15%",
    backgroundColor: "transparent",
    color: "#fff",
    borderStyle: "solid",
    borderColor: "#3c2057",
    borderWidth: "1px"
  },
  media: {
    height: 140
  }
});

export default function CardBooks() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={Livros}
          title="Personagem "
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
        Personagem
          </Typography>
          <Typography variant="body2" component="p">
            Crie seu personagem e customize-o de acordo com sua necessidade!
          </Typography>
        </CardContent>
      </CardActionArea>
    
    </Card>
  );
}
