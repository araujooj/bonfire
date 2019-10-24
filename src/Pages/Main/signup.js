import React, { useState } from "react";
import {
  Typography,
  Paper,
  Avatar,
  FormControl,
  Input,
  InputLabel
} from "@material-ui/core";
import {Container, Button} from 'reactstrap';
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
    marginTop: theme.spacing.unit * 3,
    width: '85%',

  }
});

function Signup(props) {
  const { classes } = props;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Container>
         <div className = 'section section-typo section section-signup'>
         <h1 className="h1-seo">Cadastre-se</h1>
            <h2 className="d-none d-sm-block" >
         Cadastre-se em nossa plataforma <br/>Já é usuário? Faça login. <br/>
         <Link
         to = '/login'
         >
         <Button 
               className='btn btn-primary'>Login</Button></Link>
            </h2>
      <main className={classes.main}>
      <div className="squares square-1" />
          <div className="squares square-2" />
          <div className="squares square-4" />
          
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <Icon name="sign in " />
          </Avatar>
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
            <center>    
              <Button
              type="submit"
              fullWidth
              variant="contained"
              onClick={onRegister}
              className={classes.submit}
              color = 'secondary'
            >
              Cadastrar
            </Button></center>
        

          </form>
        </Paper>
      </main>
      </div>  
    </Container>
   
  );

  async function onRegister() {
    try {
      await firebase.register(name, email, password);
      props.history.replace("/dashboard");
    } catch (error) {
      alert(error.message);
    }
  }
}

export default withRouter(withStyles(styles)(Signup));
