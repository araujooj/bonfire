import React, { Component } from 'react'

import './artigos.scss'
import Header from '../../Components/Header/header'
import Footer from '../../Components/Footer/footer'

export default class Artigos extends Component {
    render() {
        return (
          <div className="artigosAPP">
            <Header />
            <Footer />
          </div>
        );
    }
}
