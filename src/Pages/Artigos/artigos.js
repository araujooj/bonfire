import React, { Component } from 'react'

import './artigos.scss'
import Header from '../../Components/Header/header'
import Footer from '../../Components/Footer/footer'

export default class Artigos extends Component {
    render() {
        return (
          <div className="artigosAPP">
            <Header />
            <div className = 'title'>
              <h3>
                Os ultimos artigos publicados! 
   
              </h3>
            </div>
            <Footer />
          </div>
        );
    }
}
