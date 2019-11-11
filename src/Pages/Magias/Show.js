import React, { Component } from "react";
import firebase from "../../firebaseConfig";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import axios from 'axios'
import LoggedHeader from "../../Components/LoggedHeader/loggedheader";

class ShowMagic extends Component {
  constructor(props) {
    super(props);
    this.auth = firebase.auth
    this.state = {
      magia: {},
      key: ""
    };
  }

  componentDidMount() {
    const id = this.state.key
    axios.get(`https://firestore.googleapis.com/v1/projects/bonfire-web/databases/(default)/documents/magias/${id}`)
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
      .collection("magias")
      .doc(this.props.match.params.id);
    ref.get().then(doc => {
      if (doc.exists) {

        this.setState({
          magia: doc.data(),
          key: doc.id,
          isLoading: false
        });
      } else {
        alert("Item não encontrado")
        this.props.history.push("/magias")
      }
    });
  }

  delete(id) {
    firebase.db
      .collection("magias")
      .doc(id)
      .delete()
      .then(() => {
        console.log("Deletado com sucesso");
        this.props.history.push("/magias");
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
                <Link to="/magias" className="btn btn-primary">
                  Lista de magias
                </Link>
              </h3>
              <h1 className="h1-seo">{this.state.magia.nome}</h1>
            </div>
            <div class="panel-body">
              <dl >
                <dt className="d-none d-sm-block">
               
                  <h2 >Descrição:</h2>
                </dt>
                <dd className="d-none d-sm-block"> <h3 >{this.state.magia.descricao}</h3></dd>
                <dt className="d-none d-sm-block"> <h2 >Nível:</h2></dt>
                <dd className="d-none d-sm-block"> <h3 ></h3></dd>
                <dt className="d-none d-sm-block"> <h2 >Material Necessario:</h2></dt>
                <dd className="d-none d-sm-block"> <h3 >{this.state.magia.materialNecessario}</h3></dd>
                <dt className="d-none d-sm-block"> <h2 >Alcance:</h2></dt>
                <dd className="d-none d-sm-block"> <h3 ></h3></dd>
                <dt className="d-none d-sm-block"> <h2 >Dano:</h2></dt>
                <dd className="d-none d-sm-block"> <h3 >{this.state.magia.dano}</h3></dd>
              </dl>
              <Link to={`/magias/edit/${this.state.key}`} class="btn btn-success">
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

export default ShowMagic;
