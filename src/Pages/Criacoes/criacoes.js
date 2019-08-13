import React, { Component } from "react";
import { Image } from "semantic-ui-react";

import Header from "../../Components/Header/header";
import Footer from "../../Components/Footer/footer";
import "./criacoes.scss";
import Vetor from "./vetor logo.png";

export default class Criacoes extends Component {
  render() {
    return (
      <div className="criacoes">
        <Header />
        <div className="title">
          <h3>Crie monstros, magias e muito mais!</h3>
        </div>
        <Footer />
      </div>
    );
  }
}
