import React, { Component } from "react";
import firebase from "../../firebaseConfig";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import LoggedHeader from "../../Components/LoggedHeader/loggedheader";
import '../../assets/scss/main.scss'

class CreateHistory extends Component {
  constructor() {
    super();
    this.auth = firebase.auth
    this.ref = firebase.db.collection("historias");
    this.state = {
      nome: this.auth.currentUser.displayName,
      titulo: "",
      descricao: "",
      conteudo: "",
      curtidas: 0,
      comentarios: ""
    };
  }
  componentDidMount () {
    if (!this.auth.currentUser) {
      alert("Sem autorização");
      this.props.history.push("/login")
    }
  }
  onChange = e => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  };

  onSubmit = e => {
    e.preventDefault();

    const {       
      nome,
      titulo,
      descricao,
      conteudo,
      curtidas,
      comentarios
    } = this.state;

    this.ref
      .add({
        nome,
        titulo,
        descricao,
        conteudo,
        curtidas,
        comentarios
      })
      .then(docRef => {
        this.setState({
          nome: this.auth.currentUser.displayName,
          titulo: "",
          descricao: "",
          conteudo: "",
          curtidas: 0,
          comentarios: ""
        });
        this.props.history.push("/historias");
      })
      .catch(error => {
        alert("Erro ao adicionar: ", error);
      });

      
  };

  render() {
    const {       
      nome,
      titulo,
      descricao,
      conteudo,
      } = this.state;
    return (
      <div class="app">
        <LoggedHeader />
        <Container>
          <div class="section section-typo section section-signup">
            <div className="squares square-1" />
            <div className="squares square-2" />
            <h1 class="h1-seo">Crie sua História</h1>
            <div class="panel-body form-group">
              <h4>
                <Link to="/historias" class="btn btn-primary">
                  Histórias
                </Link>
              </h4>
              <form  onSubmit={this.onSubmit}>
                <div className="form-group">
                  <label for="title">
                    <h3>Titulo</h3>
                  </label>
                  <input
                   type="text"
                    className="form"
                    name="titulo"
                    value={titulo}
                    onChange={this.onChange}
                    placeholder="Titulo"
                  />
                </div>
                <div class="form-group">
                  <label for="description">
                    <h3>Descrição</h3>
                  </label>
                  <textArea
                    className="form"
                    name="descricao"
                    onChange={this.onChange}
                    placeholder="Dê uma breve descrição sobre a sua história..."
                    cols="80"
                    rows="3"
                  >
                    {descricao}
                  </textArea>
                </div>
                <div  class="form-group">
                  <label for="description">
                    <h3>Conteúdo</h3>
                  </label>
                  <textArea
                    className="form-great"
                    name="conteudo"
                    onChange={this.onChange}
                    placeholder="Escreva aqui a sua história"
                    cols="80"
                    rows="3"
                  >
                    {conteudo}
                  </textArea>
                </div>
                <button type="submit" class="btn btn-success">
                  Enviar
                </button>
              </form>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default CreateHistory;
