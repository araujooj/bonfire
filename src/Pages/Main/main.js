import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import { Image } from "semantic-ui-react";
import ParallaxComponent from "react-parallax-component";
import { BrowserRouter as Router, Link } from "react-router-dom";

import "./main.scss";

import CardArticle from "./cardArticle";
import CardBooks from "./cardBooks";
import CardSignUp from "./cardSignUp";
import Header from "../../Components/Header/header";
import Footer from "../../Components/Footer/footer";
import Artigos from "./artigo.png";
import Livros from "./livors.png";
import Cadastrar from "./cadastrar.png";
import VetorLogo from "./vetor logo.png";

function Main(props) {
  return (
    <div className="app">
      <Header />
      <div className="title">
        <h3>Nós somos o kit de ferramentas digital que você jogador de RPG precisa</h3>
        <hr />
        <h4>Você aventureiro, aqui poderá descansar em nossa fogueira</h4>
      </div>
      <br />
      <br />
      <br />
      <Router>
        <center>
          <Grid container>
            <Grid item md={4} xs={12} sm={15}>
              <Link
                to="/cadastro"
                onClick={() => {
                  window.location.href = "/cadastro";
                }}
                className="linkMain"
              >
                <CardSignUp />
              </Link>
            </Grid>
            <Grid item md={4} xs={12} sm={15}>
              <Link
                to="/personagem"
                onClick={() => {
                  window.location.href = "/personagem";
                }}
                className="linkMain"
              >
                <CardBooks />
              </Link>
            </Grid>
            <Grid item md={4} xs={12} sm={15}>
              <Link
                to="/artigos"
                onClick={() => {
                  window.location.href = "/artigos";
                }}
                className="linkMain"
              >
                <CardArticle />
              </Link>
            </Grid>
          </Grid>
        </center>
        <center>
         
        </center>

        <Footer />
      </Router>
    </div>
  );
}

export default Main;
