import React, { Component } from "react";
import firebase from "../../firebaseConfig";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import axios from 'axios'
import LoggedHeader from "../../Components/LoggedHeader/loggedheader";

class Show extends Component {
  constructor(props) {
    super(props);
    this.auth = firebase.auth
    this.state = {
      item: {},
      key: ""
    };
  }

  componentDidMount() {
    const id = this.state.key
    axios.get(`https://firestore.googleapis.com/v1/projects/bonfire-web/databases/(default)/documents/itens/${id}`)
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
      .collection("itens")
      .doc(this.props.match.params.id);
    ref.get().then(doc => {
      if (doc.exists) {

        this.setState({
          item: doc.data(),
          key: doc.id,
          isLoading: false
        });
      } else {
        alert("Item não encontrado")
        this.props.history.push("/itens")
      }
    });
  }

  delete(id) {
    firebase.db
      .collection("itens")
      .doc(id)
      .delete()
      .then(() => {
        console.log("Deletado com sucesso");
        this.props.history.push("/itens");
      })
      .catch(error => {
        alert("Erro ao excluir: ", error);
      });
  }

  render() {
    return (
      <div class="app">
        <LoggedHeader />
        <Container>
          <div class="panel panel-default">
            <div class="section section-typo section section-signup">
              <div className="squares square-1" />
              <div className="squares square-2" />

              <h3>
                <Link to="/itens" className="btn btn-primary">
                  Lista de itens
                </Link>
              </h3>
              <h1 className="h1-seo">{this.state.item.titulo}</h1>
            </div>
            <div class="panel-body">
              <dl >
                <dt className="d-none d-sm-block">
               
                  <h2 >Descrição:</h2>
                </dt>
                <dd className="d-none d-sm-block"> <h3 >{this.state.item.descricao}</h3></dd>
                <dt className="d-none d-sm-block"> <h2 >Tipo:</h2></dt>
                <dd className="d-none d-sm-block"> <h3 >{this.state.item.tipo}</h3></dd>
                <dt className="d-none d-sm-block"> <h2 >Raridade:</h2></dt>
                <dd className="d-none d-sm-block"> <h3 ></h3></dd>
                <dt className="d-none d-sm-block"> <h2 >Dano:</h2></dt>
                <dd className="d-none d-sm-block"> <h3 >{this.state.item.dano}</h3></dd>
              </dl>
              <Link to={`/itens/edit/${this.state.key}`} class="btn btn-success">
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

export default Show;
