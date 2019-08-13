import React, { Component } from 'react'
 

import Header from "../../Components/Header/header";
import Footer from "../../Components/Footer/footer";
import './personagem.scss'

export default class Personagem extends Component {
    render() {
        return (
          <div className="personagem">
            <Header />
            <div className="title">
              <h3>
                Crie seu personagem para sua mesa !
              </h3>
            </div>
            <Footer />
          </div>
        );
    }
}
