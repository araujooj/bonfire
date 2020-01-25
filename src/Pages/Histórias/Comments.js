import React, { Component } from "react";
import firebase from "../../firebaseConfig";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import LoggedHeader from "../../Components/LoggedHeader/loggedheader";

class Comments extends Component {
  constructor() {
    super();
    this.auth = firebase.auth;
    this.ref = firebase.db.collection("comentarios");
    this.state = {
      autor: this.auth.currentUser.displayName,
      comentario: "",
      comentarios: []

    };
  }
  onChange = e => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  };

  onSubmit = e => {
    e.preventDefault();

    const { autor, comentario } = this.state;

    this.ref
      .add({
        autor,
        comentario
      })
      .then(docRef => {
        this.setState({
          autor: this.auth.currentUser.displayName,
          comentario: ""
        });

      })
      .catch(error => {
        alert("Erro ao adicionar: ", error);
      });
  };
  onCollectionUpdate = querySnapshot => {
    if (!this.auth.currentUser) {
      alert("Sem autorização");
      this.props.history.push("/login");
    }
    const comentarios = [];
    querySnapshot.forEach(doc => {
      const {
       autor,
       comentario
      } = doc.data();
      comentarios.push({
        key: doc.id,
        doc, // DocumentSnapshot
        autor,
        comentario
      });
    });
    this.setState({
      comentarios
    });
  };

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }

  render() {
    const {
      comentario,
      comentarios,
    } = this.state;
    return (
      <div class="app">
        <LoggedHeader />
        <Container>
          <div class="section section-typo section section-signup">
            <div className="squares square-1" />
            <div className="squares square-2" />
            <h1 class="h1-seo">Discussão</h1>
            <div class="panel-body form-group">
              <h4>
                <Link to="/historias" class="btn btn-primary">
                  Voltar
                </Link>
              </h4>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <label for="title">
                    <h3>Comentário</h3>
                  </label>
                  <input
                    type="text"
                    className="form"
                    name="comentario"
                    value={comentario}
                    onChange={this.onChange}
                    placeholder="Escreva seu comentário"
                    required
                    autoComplete="off"
                  />
                </div>

                <button type="submit" class="btn btn-success">
                  Enviar
                </button>
              </form>
              <table className="table table-stripe">
                <thead>
                  <tr>
                    <th>Usuário</th>
                    <th>Comentário</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.comentarios.map(comentarios => (
                    <tr>
                      <td>{comentarios.autor}</td>
                      <td>{comentarios.comentario}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default Comments;
