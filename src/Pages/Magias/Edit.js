import React, { Component } from "react";
import firebase from "../../firebaseConfig";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import LoggedHeader from "../../Components/LoggedHeader/loggedheader";
import Select from "react-select";

const options = [
  {label: "Pessoal" },
  {label: "Toque" },
  {label: "Metros"},
  {label: "Ilimitado"},
];
const niveis = [
  {label: "0"},
  {label: "1"},
  {label: "2"},
  {label: "3"},
  {label: "4"},
  {label: "5"},
  {label: "6"},
  {label: "7"},
  {label: "8"},
  {label: "9"},

];

class EditMagic extends Component {
  constructor(props) {
    super(props);
    this.auth = firebase.auth
    this.state = {
      key: "",
      nome: "",
      descricao: "",
      dano: "",
      nivel: "",
      alcance: "",
      materialNecessario: ""
    };
  }

  
  componentDidMount() {
    if (!this.auth.currentUser) {
      alert("Sem autorização");
      this.props.history.push("/login")
    }
    const ref = firebase.db.collection("magias").doc(this.props.match.params.id);
    ref.get().then(doc => {
      if (doc.exists) {
        const magias = doc.data();
        this.setState({
          key: doc.id,
          nome: magias.nome,
          descricao: magias.descricao,
          dano: magias.dano,
          nivel: magias.nivel.label,
          alcance: magias.alcance.label,
          materialNecessario: magias.materialNecessario
        });
      } else {
        alert("Item não encontrado");
        this.props.history.push("/magias");
      }
    });
  }

  handleChange = alcance => {
    this.setState({ alcance }, () => this.state.alcance.toString()
    );
  };
  
  
  handleChange2 = nivel => {
    this.setState({ nivel }, () => this.state.nivel.toString()
    );
  };
  onChange = e => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState({ magias: state });
  };

  onSubmit = e => {
    e.preventDefault();

    const {  
      nome,
      descricao,
      dano,
      nivel,
      alcance,
      materialNecessario } = this.state;

    const updateRef = firebase.db.collection("magias").doc(this.state.key);
    updateRef
      .set({
        nome,
        descricao,
        dano,
        nivel,
        alcance,
        materialNecessario
      })
      .then(docRef => {
        this.setState({
          key: "",
          nome: "",
          descricao: "",
          dano: "",
          nivel: "",
          alcance: "",
          materialNecessario: ""
        });
        this.props.history.push("/magias/show/" + this.props.match.params.id);
      })
      .catch(error => {
        console.error("Error adding document: ", error);
      });
  };

  render() {
    const {  
      nome,
      descricao,
      dano,
      nivel,
      alcance,
      materialNecessario } = this.state;
    return (
      <div class="app">
        <LoggedHeader />
        <Container>
          <div class="section section-typo section section-signup">
            <div className="squares square-1" />
            <div className="squares square-2" />
            <h1 class="h1-seo">Editar magia</h1>
            <div class="panel-body form-group">
              <h4>
                <Link to="/magias" class="btn btn-primary">
                  Lista de magias
                </Link>
              </h4>
              <form  onSubmit={this.onSubmit}>
                <div className="form-group">
                  <label for="title">
                    <h3>Nome</h3>
                  </label>
                  <input
                    type="text"
                    className="form"
                    name="nome"
                    value={nome}
                    onChange={this.onChange}
                    placeholder="Nome"
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
                    placeholder="O que a magia faz"
                    cols="80"
                    rows="3"
                  >
                    {descricao}
                  </textArea>
                </div>
                <div class="form-group">
                  <label for="description">
                    <h3>Material Necessário</h3>
                  </label>
                  <textArea
                    className="form"
                    name="materialNecessario"
                    onChange={this.onChange}
                    placeholder="Material necessário"
                    cols="80"
                    rows="3"
                  >
                    {materialNecessario}
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
                    
                  />
                </div>
                <div class="form-group">
                  <label for="author">
                    <h3>Alcance</h3>
                  </label>
                  <Select
                    placeholder = 'Selecione..'
                    value={alcance}
                    onChange={this.handleChange}
                    options={options}
                    name="alcance"
                  
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

export default EditMagic;
