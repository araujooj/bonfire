import React, { Component } from "react";
import firebase from "../../firebaseConfig";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import LoggedHeader from "../../Components/LoggedHeader/loggedheader";

import Select from "react-select";

const options = [
  {  label: "Ínfimo" },
  { label: "Mínimo" },
  {label: "Pequeno"},
  {label: "Médio"},
  {label: "Grande"},
  {label: "Enorme"},
  {label: "Descomunal"},
  {label: "Colossal"}
];

const niveis = [
  {  label: "1" },
  { label: "2" },
  {label: "3"},
  {label: "4"},
  {label: "5"},
  {label: "6"},
  {label: "7"},
  {label: "8"},
  {label: "9"},
  {label: "10"},
  {label: "11"},
  {label: "12"},
  {label: "13"},
  {label: "14"},
  {label: "15"},
  {label: "16"},
  {label: "17"},
  {label: "18"},
  {label: "19"},
  {label: "20"},
  {label: "20+"}

];


class CreateMonster extends Component {
  constructor() {
    super();
    this.auth = firebase.auth
    this.ref = firebase.db.collection("monstros");
    this.state = {
      nome: "",
      descricao: "",
      nivel: "",
      tamanho: "",
      tipo: "",
      habilidades: ""
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
      descricao,
      nivel,
      tamanho,
      tipo,
      habilidades } = this.state;

    this.ref
      .add({
        nome,
        descricao,
        nivel,
        tamanho,
        tipo,
        habilidades
      })
      .then(docRef => {
        this.setState({
          nome: "",
          descricao: "",
          nivel: "",
          tamanho: "",
          tipo: "",
          habilidades: ""
        });
        this.props.history.push("/monstros");
      })
      .catch(error => {
        alert("Erro ao adicionar: ", error);
      });

      
  };

  handleChange = tamanho => {
    this.setState({ tamanho }, () => this.state.tamanho.toString()
    );
  };

  
  handleChange2 = nivel => {
    this.setState({ nivel }, () => this.state.nivel.toString()
    );
  };


  render() {
    const {    
      nome,
      descricao,
      nivel,
      tamanho,
      tipo,
      habilidades  } = this.state;
    return (
      <div class="app">
        <LoggedHeader />
        <Container>
          <div class="section section-typo section section-signup">
            <div className="squares square-1" />
            <div className="squares square-2" />
            <h1 class="h1-seo">Adicionar Monstro</h1>
            <div class="panel-body">
              <h4>
                <Link to="/monstros" class="btn btn-primary">
                  Lista de monstros
                </Link>
              </h4>
              <form onSubmit={this.onSubmit}>
                <div class="form-group">
                  <label for="title">
                    <h3>Nome</h3>
                  </label>
                  <input
                    type="text"
                    class="form"
                    name="nome"
                    value={nome}
                    onChange={this.onChange}
                    placeholder="Nome"
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
                    <h3>Nivel</h3>
                  </label>
                  <Select
                    placeholder = 'Selecione..'
                    value={nivel}
                    onChange={this.handleChange2}
                    options={niveis}
                    name="nivel"
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="author">
                    <h3>Tamanho</h3>
                  </label>
                  <Select
                    placeholder = 'Selecione..'
                    value={tamanho}
                    onChange={this.handleChange}
                    options={options}
                    name="tamanho"
                    required
                  />
                </div>
          
           
                <div class="form-group">
                  <label for="author">
                    <h3>Habilidades</h3>
                  </label>
                  <input
                    type="text"
                    class="form"
                    name="habilidades"
                    value={habilidades}
                    onChange={this.onChange}
                    placeholder="Habilidades"
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

export default CreateMonster;
