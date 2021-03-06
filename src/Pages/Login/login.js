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
import firebase from "../../firebaseConfig";
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

function SignIn(props) {
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
            <Icon name = 'sign in '/>
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
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">Senha</InputLabel>
              <Input
                name="password"
                type="password"
                id="password"
                autoComplete="off"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </FormControl>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              onClick={login}
              className={classes.submit}
            >
              Login
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              component={Link}
              to="/cadastro"
              className={classes.submit}
            >
              Cadastrar
            </Button>
          </form>
          <br/>
          <Link to ='/reset'>Esqueceu a Senha?</Link>
        </Paper>
      </main>
      </div>
    </div>
  );

  async function login() {
    try {
      await firebase.login(email, password);
      props.history.replace("/dashboard");
    } catch (error) {
      alert(error.message);
    }
  }
}

export default withRouter(withStyles(styles)(SignIn));
