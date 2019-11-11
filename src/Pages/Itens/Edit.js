import React, { Component } from "react";
import firebase from "../../firebaseConfig";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import LoggedHeader from "../../Components/LoggedHeader/loggedheader";
import Select from "react-select";

const options = [
  { label: "Comum" },
  { label: "Incomum" },
  { label: "Raro" },
  { label: "Muito raro" },
  { label: "Lendário" }
];

class Edit extends Component {
  constructor(props) {
    super(props);
    this.auth = firebase.auth
    this.state = {
      key: "",
      titulo: "",
      descricao: "",
      raridade: "",
      tipo: "",
      dano: ""
    };
  }

  
  componentDidMount() {
    if (!this.auth.currentUser) {
      alert("Sem autorização");
      this.props.history.push("/login")
    }
    const ref = firebase.db.collection("itens").doc(this.props.match.params.id);
    ref.get().then(doc => {
      if (doc.exists) {
        const item = doc.data();
        this.setState({
          key: doc.id,
          titulo: item.titulo,
          descricao: item.descricao,
          raridade: item.raridade,
          tipo: item.tipo,
          dano: item.dano
        });
      } else {
        alert("Item não encontrado");
        this.props.history.push("/itens");
      }
    });
  }

  handleChange = raridade => {
    this.setState({ raridade }, () => this.state.raridade.toString());
  };
  onChange = e => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState({ item: state });
  };

  onSubmit = e => {
    e.preventDefault();

    const { titulo, descricao, raridade, tipo, dano } = this.state;

    const updateRef = firebase.db.collection("itens").doc(this.state.key);
    updateRef
      .set({
        titulo,
        descricao,
        raridade,
        tipo,
        dano
      })
      .then(docRef => {
        this.setState({
          key: "",
          titulo: "",
          descricao: "",
          raridade: "",
          tipo: "",
          dano: ""
        });
        this.props.history.push("/itens/show/" + this.props.match.params.id);
      })
      .catch(error => {
        console.error("Error adding document: ", error);
      });
  };

  render() {
    return (
      <div class="app">
        <LoggedHeader />
        <Container>
          <div class="section section-typo section section-signup">
            <div className="squares square-1" />
            <div className="squares square-2" />
            <div className="squares square-4" />
            <h1 class="h1-seo">Editar item</h1>
            <div class="panel-body">
              <h4>
                <Link to={`/itens/show/${this.state.key}`} class="btn btn-primary">
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
                    class="form-control"
                    name="titulo"
                    value={this.state.titulo}
                    onChange={this.onChange}
                    placeholder="Title"
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="description">
                    <h3>Descrição</h3>
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    name="descricao"
                    value={this.state.descricao}
                    onChange={this.onChange}
                    placeholder="Description"
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="author">
                    <h3>Raridade</h3>
                  </label>
                  <Select
                    placeholder = 'Selecione..'
                    value={this.state.raridade}
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
                    class="form-control"
                    name="tipo"
                    value={this.state.tipo}
                    onChange={this.onChange}
                    placeholder="Author"
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="author">
                    <h3>Dano</h3>
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    name="dano"
                    value={this.state.dano}
                    onChange={this.onChange}
                    placeholder="Author"
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

export default Edit;
