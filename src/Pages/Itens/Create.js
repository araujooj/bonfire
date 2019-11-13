import React, { Component } from "react";
import firebase from "../../firebaseConfig";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import LoggedHeader from "../../Components/LoggedHeader/loggedheader";

import Select from "react-select";

const options = [
  {  label: "Comum" },
  { label: "Incomum" },
  {label: "Raro"},
  {label: "Muito raro"},
  {label: "Lendário"}
];


class Create extends Component {
  constructor() {
    super();
    this.auth = firebase.auth
    this.ref = firebase.db.collection("itens");
    this.state = {
      titulo: "",
      descricao: "",
      raridade: "",
      tipo: "",
      dano: ""
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

    const { titulo, descricao, raridade, tipo, dano } = this.state;

    this.ref
      .add({
        titulo,
        descricao,
        raridade,
        tipo,
        dano
      })
      .then(docRef => {
        this.setState({
          titulo: "",
          descricao: "",
          raridade: "",
          tipo: "",
          dano: ""
        });
        this.props.history.push("/itens");
      })
      .catch(error => {
        alert("Erro ao adicionar: ", error);
      });

      
  };

  handleChange = raridade => {
    this.setState({ raridade }, () => this.state.raridade.toString()
    );
  };

  render() {
    const { titulo, descricao, raridade, tipo, dano } = this.state;
    return (
      <div class="app">
        <LoggedHeader />
        <Container>
          <div class="section section-typo section section-signup">
            <div className="squares square-1" />
            <div className="squares square-2" />
            <h1 class="h1-seo">Adicionar item</h1>
            <div class="panel-body">
              <h4>
                <Link to="/itens" class="btn btn-primary">
                  Lista de itens
                </Link>
              </h4>
              <form onSubmit={this.onSubmit}>
                <div class="form-group">
                  <label for="title">
                    <h3>Titulo</h3>
                  </label>
                  <input
                    type="text"
                    class="form"
                    name="titulo"
                    value={titulo}
                    onChange={this.onChange}
                    placeholder="Titulo"
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="description">
                    <h3>Descrição</h3>
                  </label>
                  <textArea
                    class="form"
                    name="descricao"
                    onChange={this.onChange}
                    placeholder="Descrição"
                    cols="80"
                    rows="3"
                    required
                  >
                    {descricao}
                  </textArea>
                </div>
                <div class="form-group">
                  <label for="author">
                    <h3>Raridade</h3>
                  </label>
                  <Select
                    placeholder = 'Selecione..'
                    value={raridade}
                    onChange={this.handleChange}
                    options={options}
                    name="raridade"
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="author">
                    <h3>Tipo</h3>
                  </label>
                  <input
                    type="text"
                    class="form"
                    name="tipo"
                    value={tipo}
                    onChange={this.onChange}
                    placeholder="Tipo"
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="author">
                    <h3>Dano</h3>
                  </label>
                  <input
                    type="text"
                    class="form"
                    name="dano"
                    value={dano}
                    onChange={this.onChange}
                    placeholder="Dano"
                    required
                  />
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

export default Create;
