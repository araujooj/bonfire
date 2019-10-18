import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from "reactstrap";
import firebase from '../../firebaseConfig';
import LoggedHeader from '../../Components/LoggedHeader/loggedheader'

class Itens extends Component {
  constructor(props) {
    super(props);
    this.auth = firebase.auth
    this.ref = firebase.db.collection('itens');
    this.unsubscribe = null;
    this.state = {
      itens: []
    };
  }

  onCollectionUpdate = (querySnapshot) => {
    if (!this.auth.currentUser) {
      alert("Sem autorização");
      this.props.history.push("/login")
    }
    const itens = [];
    querySnapshot.forEach((doc) => {
      const { titulo, descricao, raridade, tipo, dano} = doc.data();
      itens.push({
        key: doc.id,
        doc, // DocumentSnapshot
        titulo,
        descricao,
        raridade: raridade.label,
        tipo,
        dano
      });
    });
    this.setState({
      itens
   });
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }

  render() {
    return (
      <div class="app">
        <LoggedHeader/>
        <div class="panel panel-default">
        <Container>
          <div className="section section-typo section section-signup">
          <div className="squares square-3" />
          <div className="squares square-4" />
            <h1 className="h1-seo">CRIAÇÃO DE ITENS</h1>
            <h2 className="d-none d-sm-block" >
            Crie seu itens para sua campanha de RPG. <br/>
            </h2>
          </div>
          <div className="panel-body">
            <h4><Link to="/itens/create" className="btn btn-primary">Adicionar item</Link></h4>
            <table className="table table-stripe">
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Descrição</th>
                  <th>Raridade</th>
                </tr>
              </thead>
              <tbody>
                {this.state.itens.map(item =>
                  <tr>
                    <td><Link to={`/itens/show/${item.key}`}>{item.titulo}</Link></td>
                    <td>{item.descricao}</td>
                    <td>{item.raridade}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </Container>

   
        </div>
      </div>
    );
  }
}

export default Itens;
