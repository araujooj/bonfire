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
import Header from '../../Components/Header/header'
import {Icon} from 'semantic-ui-react'
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import withStyles from "@material-ui/core/styles/withStyles";
import { Link, withRouter } from "react-router-dom";
import firebase from "../../firebaseConfig";
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
    marginTop: theme.spacing.unit * 3
  }
});

function Register(props) {
  const { classes } = props;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [quote, setQuote] = useState("");

  return (
    <div className="app">
      <Header/>
      <div className = 'section section-typo section section-signup'>
      <main className={classes.main}>
      <div className="squares square-1" />
          <div className="squares square-2" />
          <div className="squares square-4" />
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <Icon name="sign in " />
          </Avatar>
          <Typography component="h1" variant="h5">
            Cadastrar
          </Typography>
          <form
            className={classes.form}
            onSubmit={e => e.preventDefault() && false}
          >
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="name">Nome de usuário</InputLabel>
              <Input
                id="name"
                name="name"
                autoComplete="off"
                autoFocus
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="email">Email</InputLabel>
              <Input
                id="email"
                name="email"
                autoComplete="off"
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
              onClick={onRegister}
              className={classes.submit}
            >
              Cadastrar
            </Button>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              component={Link}
              to="/login"
              className={classes.submit}
            >
              Voltar
            </Button>
          </form>
        </Paper>
      </main>
      </div>
    </div>
  );

  async function onRegister() {
    try {
      await firebase.register(name, email, password);
      await firebase.addQuote(quote);
      props.history.replace("/dashboard");
    } catch (error) {
      alert(error.message);
    }
  }
}

export default withRouter(withStyles(styles)(Register));
