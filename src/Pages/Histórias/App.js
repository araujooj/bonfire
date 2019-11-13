import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import firebase from "../../firebaseConfig";
import LoggedHeader from "../../Components/LoggedHeader/loggedheader";

class Historias extends Component {
  constructor(props) {
    super(props);
    this.auth = firebase.auth;
    this.ref = firebase.db.collection("historias");
    this.unsubscribe = null;
    this.state = {
      historias: []
    };
  }

  onCollectionUpdate = querySnapshot => {
    if (!this.auth.currentUser) {
      alert("Sem autorização");
      this.props.history.push("/login");
    }
    const historias = [];
    querySnapshot.forEach(doc => {
      const {
        nome,
        titulo,
        descricao,
        conteudo,
        curtidas,
        comentarios
      } = doc.data();
      historias.push({
        key: doc.id,
        doc, // DocumentSnapshot
        nome,
        titulo,
        descricao,
        conteudo,
        curtidas,
        comentarios,
      });
    });
    this.setState({
      historias
    });
  };

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }

  render() {
    return (
      <div class="appSign">
        <LoggedHeader />
        <div class="panel form-group panel-default">
          <Container>
            <div className="section section-typo section section-signup">
              <div className="squares square-2" />
              <div className="squares square-4" />
              <h1 className="h1-seo">Histórias</h1>
              <h2 className="d-none d-sm-block">
               Compartilhe ou veja as<br /> últimas histórias de campanhas de RPG. 
              </h2>
            </div>
            <div className="panel-body">
              <h4>
                <Link to="/historias/create" className="btn btn-primary">
                  Crie sua história
                </Link>
              </h4>
              <table className="table table-stripe">
                <thead>
                  <tr>
                    <th>História</th>
                    <th>Descrição</th>
                    <th>Autor</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.historias.map(historia => (
                    <tr>
                      <td>
                        <Link to={`/historias/show/${historia.key}`}>
                          {historia.titulo}
                        </Link>
                      </td>
                      <td>{historia.descricao}</td>
                      <td>{historia.nome}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Container>
        </div>
      </div>
    );
  }
}

export default Historias;
