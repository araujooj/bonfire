import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import firebase from "../../firebaseConfig";
import LoggedHeader from "../../Components/LoggedHeader/loggedheader";

class Magias extends Component {
  constructor(props) {
    super(props);
    this.auth = firebase.auth;
    this.ref = firebase.db.collection("magias");
    this.unsubscribe = null;
    this.state = {
      magias: []
    };
  }

  onCollectionUpdate = querySnapshot => {
    if (!this.auth.currentUser) {
      alert("Sem autorização");
      this.props.history.push("/login");
    }
    const magias = [];
    querySnapshot.forEach(doc => {
      const {
        nome,
        descricao,
        dano,
        nivel,
        alcance,
        materialNecessario
      } = doc.data();
      magias.push({
        key: doc.id,
        doc, // DocumentSnapshot
        nome,
        descricao,
        dano: dano.label,
        nivel: nivel.label,
        alcance,
        materialNecessario
      });
    });
    this.setState({
      magias
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
              <h1 className="h1-seo">CRIAÇÃO DE MAGIAS</h1>
              <h2 className="d-none d-sm-block">
                Crie seu magias para sua campanha de RPG. <br />
              </h2>
            </div>
            <div className="panel-body">
              <h4>
                <Link to="/magias/create" className="btn btn-primary">
                  Adicionar magia
                </Link>
              </h4>
              <table className="table table-stripe">
                <thead>
                  <tr>
                    <th>Nome</th>
                    <th>Descrição</th>
                    <th>Nível</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.magias.map(magia => (
                    <tr>
                      <td>
                        <Link to={`/magias/show/${magia.key}`}>
                          {magia.nome}
                        </Link>
                      </td>
                      <td>{magia.descricao}</td>
                      <td>{magia.nivel}</td>
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

export default Magias;
