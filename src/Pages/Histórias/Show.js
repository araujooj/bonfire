import React, { Component } from "react";
import firebase from "../../firebaseConfig";
import { Container, Button , Col } from "reactstrap";
import { Link } from "react-router-dom";
import {Icon} from 'semantic-ui-react'
import axios from "axios";
import LoggedHeader from "../../Components/LoggedHeader/loggedheader";

class ShowHistory extends Component {
  constructor(props) {
    super(props);
    this.auth = firebase.auth;
    this.state = {
      historia: {},
      key: "",
      curtidas:0
    };
  }

  componentDidMount() {
    const id = this.state.key;
    axios
      .get(
        `https://firestore.googleapis.com/v1/projects/bonfire-web/databases/(default)/documents/magias/${id}`
      )
      .then(res => {
        const raridade = res.data;
        console.log(raridade);
      });

    if (!this.auth.currentUser) {
      alert("Sem autorização");
      this.props.history.push("/login");
    }
    const ref = firebase.db
      .collection("historias")
      .doc(this.props.match.params.id);
    ref.get().then(doc => {
      if (doc.exists) {
        this.setState({
          historia: doc.data(),
          key: doc.id,
          isLoading: false,
        });
      } else {
        alert("Item não encontrado");
        this.props.history.push("/historias");
      }
    });
  }

  delete(id) {
    firebase.db
      .collection("historias")
      .doc(id)
      .delete()
      .then(() => {
        console.log("Deletado com sucesso");
        this.props.history.push("/historias");
      })
      .catch(error => {
        alert("Erro ao excluir: ", error);
      });
  }
  onClick (delta) {
    console.log(this.state.curtidas)
      this.setState({curtidas: this.state.curtidas + delta})

      /*  e.preventDefault();

    const {       
    curtidas
    } = this.state;

    this.ref
      .add({
        curtidas
      })
      .then(docRef => {
        this.setState({
          curtidas
        });
        this.props.history.push("/historias");
      })
      .catch(error => {
        alert("Erro ao adicionar: ", error);
      });
 */
  };
  contadorIncrease(delta) {
    this.setState({curtidas: this.state.curtidas + delta})
 }

  render() {
    return (
      <div class="app">
        <LoggedHeader />
        <Container>
          <div class="panel panel-default">
            <div class="section section-typo section section-signup">
              <div className="squares square-1" />
              <div className="squares square-3" />

              <h3>
                <Link to="/historias" className="btn btn-primary">
                  <Icon name = "list" />
                  Lista de histórias
                </Link>
              </h3>
              <h1 className="h1-seo">{this.state.historia.titulo}</h1>
              <h2>Escrito por:{" "}{this.state.historia.nome}</h2>
            </div>
            <div class="panel-body">
              <dl>
                <dt className="d-none d-sm-block">
                  <h2>Descrição:</h2>
                </dt>
                <dd className="d-none d-sm-block">
                  {" "}
                  <h3>{this.state.historia.descricao}</h3>
                </dd>
                <dt className="d-none d-sm-block">
                  {" "}
                  <h2>Conteúdo:</h2>
                </dt>
                <dd className="d-none d-sm-block">
                  {" "}
                  <h3>{this.state.historia.conteudo}</h3>
                </dd>
              </dl>
              <Button
                className="btn btn-primary"
                onClick = {() => this.contadorIncrease(1)}
              >
                <Icon name = 'like'></Icon>Curtir
              </Button>
              <Button
                className="btn btn-primary"
                tag = {Link} 
                to = {`/historias/comments/${this.state.key}`}
              >
                <Icon name = 'comment'></Icon>Discussão
              </Button>
              <br></br>
            <h2>Curtidas: {this.state.curtidas}</h2>  
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default ShowHistory;
