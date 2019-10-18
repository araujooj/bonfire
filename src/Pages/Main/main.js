import React from "react";
import { Container, Row, Col } from "reactstrap";

import "./main.scss";
import Register from '../Cadastro/cadastro'
import Header from "../../Components/Header/header";
import Footer from "../../Components/Footer/footer";

import '../../assets/css/blk-design-system-react.css'

function Main(props) {
  return (
    <div className="appLanding">
      <Header />
        <Container>
          <div className="section section-typo section section-signup">
          <div className="squares square-1" />
          <div className="squares square-2" />
          <div className="squares square-3" />
          <div className="squares square-4" />
            <h1 className="h1-seo">B O N F I R E</h1>
            <h2 className="d-none d-sm-block" >
            Uma plataforma simples e fácil para os jogadores de RPG. <br/>Sente em nossa fogueira e aprecie nossas funcionalidades
            </h2>
          </div>
        </Container>

      <div className="section section-typo section section-signup">
          <div className="squares square-1" />
          <div className="squares square-2" />
          <div className="squares square-3" />
        <Container>
          <div id="images">
            <br/>
            <h3 >Aqui você pode criar:</h3>
            <center />
            <Row
              style={{
                justifyContent: "center"
              }}
            >
              <Col className="mt-5 mt-sm-0" sm="2" xs="3">
                <center>
                  <h4>Artigos</h4>
                  <br/>
                </center>

                <img
                  alt="..."
                  className="img-fluid rounded-circle shadow-lg"
                  src={require("../../assets/img/artigos.jpg")}
                  style={{ width: "150px" }}
                />
              </Col>
              <Col className="mt-5 mt-sm-0" sm="2" xs="3">
                <center>
                  <h4>Personagens</h4>
                  <br/>
                </center>
                <img
                  alt="..."
                  className="img-fluid rounded-circle shadow-lg"
                  src={require("../../assets/img/personagem.jpg")}
                  style={{ width: "150px", }}
                />
              </Col>
              <Col className="mt-5 mt-sm-0" sm="2" xs="3">
                <center>
                  <h4>Itens</h4>
                  <br/>
                </center>

                <img
                  alt="..."
                  className="img-fluid rounded-circle shadow-lg"
                  src={require("../../assets/img/itens.jpg")}
                  style={{ width: "150px" }}
                />
              </Col>
              <Col className="mt-5 mt-sm-0" sm="2" xs="3">
                <center>
                  <h4>Magias</h4>
                  <br/>
                </center>

                <img
                  alt="..."
                  className="img-fluid rounded-circle shadow-lg"
                  src={require("../../assets/img/magias.jpg")}
                  style={{ width: "150px" }}
                />
              </Col>
              <Col className="mt-5 mt-sm-0" sm="2" xs="3">
                <center>
                  <h4>Monstros</h4>
                  <br/>
                </center>

                <img
                  alt="..."
                  className="img-fluid rounded-circle shadow-lg"
                  src={require("../../assets/img/monstros.jpg")}
                  style={{ width: "150px" }}
                />
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      <Footer/>
    </div>
  );
}

export default Main;
