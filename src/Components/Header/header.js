import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
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
              src="https://i.pinimg.com/originals/9d/6a/2c/9d6a2c220c8433b9f2bd12e74d0194ff.png"
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
              <MDBNavItem>
                <Link
                  to="/criacoes"
                  onClick={() => {
                    window.location.href = "/criacoes";
                  }}
                  className="link"
                >
                  {" "}
                  <Icon name="pencil" />
                  Criações
                </Link>
              </MDBNavItem>

              <MDBNavItem>
                <Link
                  to="/personagem"
                  onClick={() => {
                    window.location.href = "/personagem";
                  }}
                  className="link"
                >
                  {" "}
                  <Icon name="user" />
                  Personagem
                </Link>
              </MDBNavItem>

              <MDBNavItem>
                <Link
                  to="/sobre"
                  onClick={() => {
                    window.location.href = "/sobre";
                  }}
                  className="link"
                >
                  {" "}
                  <Icon name="users" />
                  Sobre nós
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
              <MDBNavItem>
                <Link
                  to="cadastro"
                  onClick={() => {
                    window.location.href = "/cadastro";
                  }}
                  className="link"
                >
                  <Icon name="signup" />
                  Cadastrar
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
