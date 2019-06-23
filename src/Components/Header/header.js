import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
} from "mdbreact";
import {Icon, Image } from 'semantic-ui-react'
import { BrowserRouter as Router, Link } from "react-router-dom";
import './header.scss'


class Header extends Component {
  state = {
    isOpen: false
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <Router>
        <MDBNavbar
          color="default-color"
          className="header"
          dark
          expand="md"
        >
          <MDBNavbarBrand>
            <Image
              src="https://i.pinimg.com/originals/f5/af/43/f5af4306c06a720865ac7664d377448d.png"
              size="tiny"
              
            />
          </MDBNavbarBrand>
          <MDBNavbarToggler
            className="togglerBtn"
            onClick={this.toggleCollapse}
          />
          <MDBCollapse
            id="navbarCollapse3"
            isOpen={this.state.isOpen}
            navbar
          >
            <MDBNavbarNav left>
              <MDBNavItem>
                <Link
                  to="/"
                  onClick={() => {
                    window.location.href = "/";
                  }}
                  className="link"
                >
                  {" "}
                  <Icon name="home" />
                  Home
                </Link>
              </MDBNavItem>
              <MDBNavItem>
                <Link
                  to="/livros"
                  onClick={() => {
                    window.location.href = "/livros";
                  }}
                  className="link"
                >
                  {" "}
                  <Icon name="book" />
                  Livros
                </Link>
              </MDBNavItem>
              <MDBNavItem>
                <Link
                  to="/artigos"
                  onClick={() => {
                    window.location.href = "/artigos";
                  }}
                  className="link"
                >
                  {" "}
                  <Icon name="file text" />
                  Artigos
                </Link>
              </MDBNavItem>
            </MDBNavbarNav>
            <MDBNavbarNav right>
              <MDBNavItem>
                <Link
                  to="login"
                  onClick={() => {
                    window.location.href = "/login";
                  }}
                  className="link"
                >
                  <Icon name="sign in" />
                  Login
                </Link>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
      </Router>
    );
  }
}

export default Header;
