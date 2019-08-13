import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavbarToggler,
  MDBCollapse
} from "mdbreact";
import { Icon, Image } from "semantic-ui-react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "../Header/header.scss";
import firebase from "../../firebaseConfig";

class LoggedHeader extends Component {
  state = {
    isOpen: false
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render(props) {
      if (!firebase.getCurrentUsername()) {
        // not logged in
        alert("Faça login antes");
        props.history.replace("/login");
        return null;
      }

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
                  to="/dashboard"
                  onClick={() => {
                    window.location.href = "/dashboard";
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
                  to="/creations"
                  onClick={() => {
                    window.location.href = "/creations";
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
                  to="/character"
                  onClick={() => {
                    window.location.href = "/character";
                  }}
                  className="link"
                >
                  {" "}
                  <Icon name="user" />
                  Personagem
                </Link>
              </MDBNavItem>
            </MDBNavbarNav>
            <MDBNavbarNav right>
              <MDBNavItem>
                <Link
                  to="/perfil"
                  onClick={() => {
                    window.location.href = "/perfil";
                  }}
                  className="link"
                >
                  <strong>{firebase.getCurrentUsername()}</strong>
                </Link>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
      </Router>
    );
  }
}

export default LoggedHeader;
