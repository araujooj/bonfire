import React from "react";
import { Card , Image, Button, Icon} from "semantic-ui-react";
import { BrowserRouter as Router, Link } from "react-router-dom";

import "./main.scss";

import Header from "../../Components/Header/header";
import Footer from '../../Components/Footer/footer'
import CadastroIcon from './Game Analysis.png'
import AcervoIcon from './Quest.png'
import StoryIcon from './Story.png'

function Main(props) {
  return (
    <div className="app">
      <Header />
      <div className="title">
        <h3>Nós somos o acervo que você jogador de RPG precisa</h3>
        <hr />
        <h4>Você aventureiro, aqui poderá descansar em nossa fogueira</h4>
      </div>
      <br />
      <br />
      <br />
      <Router>
        <Card.Group
          itemsPerRow={2}
          style={{ margin: "20px", textAlign: "center" }}
        >
          <Card color="red">
            <center>
              <Image src={CadastroIcon} size="tiny" />
            </center>
            <Card.Content>
              <Card.Header>Cadastro</Card.Header>
              <Card.Description>
                Se cadastre em nossa plataforma !
              </Card.Description>
            </Card.Content>
            <Card.Content extra align="center">
              <Link
                to="/cadastro"
                onClick={() => {
                  window.location.href = "/cadastro";
                }}
              >
                <Button color="yellow">
                  <Icon name="list" />
                  Clique e descubra
                </Button>
              </Link>
            </Card.Content>
          </Card>
          <Card color="red">
            <center>
              <Image src={AcervoIcon} size="tiny" />
            </center>
            <Card.Content>
              <Card.Header>Acervo</Card.Header>
              <Card.Description>Veja nosso acervo...</Card.Description>
            </Card.Content>
            <Card.Content extra align="center">
              <Link
                to="/livros"
                onClick={() => {
                  window.location.href = "/livros";
                }}
              >
              <Button color="yellow">
                <Icon name="list" />
                Clique e descubra
              </Button>
              </Link>
            </Card.Content>
          </Card>
        </Card.Group>
        <Card.Group
          itemsPerRow={1}
          style={{ margin: "25px", textAlign: "center" }}
        >
          <Card color="red">
            <center>
              <Image src={StoryIcon} size="tiny" />
            </center>

            <Card.Content>
              <Card.Header>Artigos</Card.Header>
              <Card.Description>Leia algum artigo...</Card.Description>
            </Card.Content>
            <Card.Content extra align="center">
              <Link
                to="/artigos"
                onClick={() => {
                  window.location.href = "/artigos";
                }}
              >
                <Button color="yellow">
                  <Icon name="list" />
                  Clique e descubra
                </Button>
              </Link>
            </Card.Content>
          </Card>
        </Card.Group>
      <Footer/>
      </Router>
    </div>
  );
}
export default Main;
