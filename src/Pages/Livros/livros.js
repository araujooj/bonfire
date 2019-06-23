import React, { Component } from 'react'

import './livros.scss'
import Header from "../../Components/Header/header";
import Footer from "../../Components/Footer/footer";

export default class Livros extends Component {
    render() {
        return (
          <div className="livrosAPP">
            <Header />
            <Footer />
          </div>
        );
    }
}
