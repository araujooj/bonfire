import React, { Component } from "react";

import Header from "../../Components/Header/header";
import Footer from "../../Components/Footer/footer";
import "./sobre.scss";

export default class Sobre extends Component {
  render() {
    return (
      <div className="sobre">
        <Header />
        <div className="title">
          <h3>Sobre a plataforma Bonfire</h3>
        </div>
        <Footer />
      </div>
    );
  }
}
