import React, { useEffect, useState } from "react";
import {
  Typography,
  Paper,
  Avatar,
  CircularProgress,
  Button
} from "@material-ui/core";
import VerifiedUserOutlined from "@material-ui/icons/VerifiedUserOutlined";
import LoggedHeader from '../../Components/LoggedHeader/loggedheader'
import withStyles from "@material-ui/core/styles/withStyles";
import firebase from "../../firebaseConfig";
import { withRouter } from "react-router-dom";

const styles = theme => ({
  main: {
    width: "auto",
    display: "block", // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main
  },
  submit: {
    marginTop: theme.spacing.unit * 3
  }
});

function Dashboard(props) {
  const { classes } = props;

  if (!firebase.getCurrentUsername()) {
    // not logged in
    alert("Falha na autenticação");
    props.history.replace("/login");
    return null;
  }

  const [quote, setQuote] = useState("");

  useEffect(() => {
    firebase.getCurrentUserQuote().then(setQuote);
  });

  return (
    <div className = 'appSign'>
      <LoggedHeader></LoggedHeader>
    <main className={classes.main}>
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <VerifiedUserOutlined />
        </Avatar>
        <Typography component="h1" variant="h5">
          <center>Olá, bem vindo ao nosso acervo <strong>{firebase.getCurrentUsername()}</strong></center>
        </Typography>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="secondary"
          onClick={logout}
          className={classes.submit}
        >
          Logout
        </Button>
      </Paper>
    </main>
    </div>
  );

  async function logout() {
    await firebase.logout();
    props.history.push("/");
  }
}

export default withRouter(withStyles(styles)(Dashboard));
