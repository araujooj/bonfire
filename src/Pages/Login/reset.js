import React, { useState } from "react";
import {
  Typography,
  Paper,
  Avatar,
  Button,
  FormControl,
  Input,
  InputLabel
} from "@material-ui/core";
import { Icon } from "semantic-ui-react";
import withStyles from "@material-ui/core/styles/withStyles";
import { Link, withRouter } from "react-router-dom";
import { createMuiTheme } from "@material-ui/core/styles/";
import firebase from "firebase";
import Header from "../../Components/Header/header";
import "../../assets/scss/login.scss";

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
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing.unit
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
    hover: 'inherit'
  }
});

function Reset(props) {
  const { classes } = props;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="appSign">
      
      <Header/>
      <div className = 'section section-typo section section-signup'>
      <main className={classes.main}>
      <div className="squares square-1" />
          <div className="squares square-4" />
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <Icon name = 'mail'/>
          </Avatar>
          <Typography component="h1" variant="h5">
            Entrar
          </Typography>
          <form
            className={classes.form}
            onSubmit={e => e.preventDefault() && false}
          >
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="email">Email</InputLabel>
              <Input
                id="email"
                name="email"
                autoComplete="off"
                autoFocus
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </FormControl>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              onClick={forgotPassword}
              className={classes.submit}
            >
              Enviar
            </Button>
          </form>
          <br/>
          <Link to ='/login'>Voltar</Link>
        </Paper>
      </main>
      </div>
    </div>
  );

  async function forgotPassword() {
    try {
      await firebase.auth().sendPasswordResetEmail(email).then(function(user){
          alert('Cheque seu email.')
          props.history.replace('/login')
      })
    } catch (error) {
      alert(error.message);
    }
  }
}

export default withRouter(withStyles(styles)(Reset));
