import React, { Component } from "react";
import firebase from "../../firebaseConfig";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import axios from 'axios'
import LoggedHeader from "../../Components/LoggedHeader/loggedheader";

class ShowMonster extends Component {
  constructor(props) {
    super(props);
    this.auth = firebase.auth
    this.state = {
      monstro: {},
      key: ""
    };
  }

  componentDidMount() {
    const id = this.state.key
    axios.get(`https://firestore.googleapis.com/v1/projects/bonfire-web/databases/(default)/documents/monstros/${id}`)
    .then(
      res => {
        const raridade = res.data
        console.log(raridade)
      }
    )

    if (!this.auth.currentUser) {
      alert("Sem autorização");
      this.props.history.push("/login")
    }
    const ref = firebase.db
      .collection("monstros")
      .doc(this.props.match.params.id);
    ref.get().then(doc => {
      if (doc.exists) {

        this.setState({
          monstro: doc.data(),
          key: doc.id,
          isLoading: false
        });
      } else {
        alert("Item não encontrado")
        this.props.history.push("/monstros")
      }
    });
  }

  delete(id) {
    firebase.db
      .collection("monstros")
      .doc(id)
      .delete()
      .then(() => {
        console.log("Deletado com sucesso");
        this.props.history.push("/monstros");
      })
      .catch(error => {
        alert("Erro ao excluir: ", error);
      });
  }

  render() {
    return (
      <div class="appSign">
        <LoggedHeader />
        <Container>
          <div class="panel panel-default">
            <div class="section section-typo section section-signup">
              <div className="squares square-1" />
              <div className="squares square-2" />

              <h3>
                <Link to="/monstros" className="btn btn-primary">
                  Lista de monstros
                </Link>
              </h3>
              <h1 className="h1-seo">{this.state.monstro.nome}</h1>
            </div>
            <div class="panel-body">
              <dl >
                <dt className="d-none d-sm-block">
               
                  <h2 >Descrição:</h2>
                  <dd className="d-none d-sm-block"> <h3 >{this.state.monstro.descricao}</h3></dd>
                </dt>
                <dt className="d-none d-sm-block"> <h2 >Habilidades:</h2></dt>
                <dd className="d-none d-sm-block"> <h3 >{this.state.monstro.habilidades}</h3></dd>
                <dt className="d-none d-sm-block"> <h2 >Nivel</h2></dt>
                <dd className="d-none d-sm-block"> <h3 >2</h3></dd>
                <dt className="d-none d-sm-block"> <h2 >Tamanho </h2></dt>
                <dd className="d-none d-sm-block"> <h3 >Pequeno</h3></dd>
              </dl>
              <Link to={`/monstros/edit/${this.state.key}`} class="btn btn-success">
                Editar
              </Link>
              &nbsp;
              <button
                onClick={this.delete.bind(this, this.state.key)}
                class="btn btn-danger"
              >
                Excluir
              </button>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default ShowMonster;
