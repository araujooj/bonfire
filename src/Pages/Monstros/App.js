import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from "reactstrap";
import firebase from '../../firebaseConfig';
import LoggedHeader from '../../Components/LoggedHeader/loggedheader'

class Monstros extends Component {
  constructor(props) {
    super(props);
    this.auth = firebase.auth
    this.ref = firebase.db.collection('monstros');
    this.unsubscribe = null;
    this.state = {
      monstros: []
    };
  }

  onCollectionUpdate = (querySnapshot) => {
    if (!this.auth.currentUser) {
      alert("Sem autorização");
      this.props.history.push("/login")
    }
    const monstros = [];
    querySnapshot.forEach((doc) => {
      const {  
        nome,
        descricao,
        nivel,
        tamanho,
        tipo,} = doc.data();
      monstros.push({
        key: doc.id,
        doc, // DocumentSnapshot
        nome,
        descricao,
        nivel: nivel.label,
        tamanho: tamanho.label,
        tipo,
      });
    });
    this.setState({
      monstros
   });
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }

  render() {
    return (
      <div className="appSign">
        <LoggedHeader/>
        <div class="panel panel-default">
        <Container>
          <div className="section section-typo section section-signup">
          <div className="squares square-2" />
          <div className="squares square-4" />
            <h1 className="h1-seo">CRIAÇÃO DE MONSTROS</h1>
            <h2 className="d-none d-sm-block" >
            Crie seus monstros para sua campanha de RPG. <br/>
            </h2>
          </div>
          <div className="panel-body">
            <h4><Link to="/monstros/create" className="btn btn-primary">Adicionar monstro</Link></h4>
            <table className="table table-stripe">
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Descrição</th>
                  <th>Nivel</th>
                </tr>
              </thead>
              <tbody>
                {this.state.monstros.map(monstro =>
                  <tr>
                    <td><Link to={`/monstros/show/${monstro.key}`}>{monstro.nome}</Link></td>
                    <td>{monstro.descricao}</td>
                    <td>{monstro.nivel}</td>
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

export default Monstros;
