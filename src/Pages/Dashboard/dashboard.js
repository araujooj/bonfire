import React, { useEffect, useState } from "react";
import LoggedHeader from '../../Components/LoggedHeader/loggedheader'
import withStyles from "@material-ui/core/styles/withStyles";
import firebase from "../../firebaseConfig";
import { withRouter } from "react-router-dom";
import { Container, Row, Col ,  Button,
} from "reactstrap";
import { Link } from "react-router-dom";

const styles = theme => ({
  main: {
    width: "auto",
    display: "block", // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main
  },
  submit: {
    marginTop: theme.spacing.unit * 3
  }
});

function Dashboard(props) {
  const { classes } = props;

  if (!firebase.getCurrentUsername()) {
    // not logged in
    alert("Falha na autenticação");
    props.history.replace("/login");
    return null;
  }

  const [quote, setQuote] = useState("");

  useEffect(() => {
    firebase.getCurrentUserQuote().then(setQuote);
  });

  return (
    <div className = 'appSign'>
      <LoggedHeader></LoggedHeader>
      <div className="section section-typo section section-signup">
          <div className="squares square-1" />
          <div className="squares square-2" />
          <div className="squares square-4" />
        <Container>
          <div id="images">
            <br/>
            <Row
              style={{
                justifyContent: "center"
              }}
            >
              <Col className="mt-5 mt-sm-0" sm="2" xs="5">
                <center>
                  <h4>Artigos</h4>
                  <br/>
                </center>

                <img
                  alt="..."
                  className="img-fluid rounded-circle shadow-lg"
                  src={require("../../assets/img/artigos.jpg")}
                  style={{ width: "150px" }}
                />
                  <br/>
                <br/>
                 <Button
                  className="nav-link d-none d-lg-block"
                  color="primary"
                  to="artigos" tag={Link}
                >
                  <i className="fas fa-newspaper" style ={{
                    marginRight: '6px'
                  }}/>
                   
                  Criar artigos
                </Button>
              </Col>
              <Col className="mt-5 mt-sm-0" sm="2" xs="5">
                <center>
                  <h4>Personagens</h4>
                  <br/>
                </center>
                <img
                  alt="..."
                  className="img-fluid rounded-circle shadow-lg"
                  src={require("../../assets/img/personagem.jpg")}
                  style={{ width: "150px", }}
                />
                  <br/>
                <br/>
                 <Button
                  className="nav-link d-none d-lg-block"
                  color="primary"
                  to="personagens" tag={Link}
                >
                  <i className="fas fa-id-card" style ={{
                    marginRight: '6px'
                  }} />
                  Criar personagens
                </Button>
              </Col>
              <Col className="mt-5 mt-sm-0" sm="2" xs="5">
                <center>
                  <h4>Itens</h4>
                  <br/>
                </center>

                <img
                  alt="..."
                  className="img-fluid rounded-circle shadow-lg"
                  src={require("../../assets/img/itens.jpg")}
                  style={{ width: "150px" }}
                />
                  <br/>
                <br/>
                 <Button
                  className="nav-link d-none d-lg-block"
                  color="primary"
                  to="itens" tag={Link}
                >
                  <i class="fas fa-ring" style ={{
                    marginRight: '6px'
                  }}/>
                  Criar itens
                </Button>
              </Col>
              <Col className="mt-5 mt-sm-0" sm="2" xs="5">
                <center>
                  <h4>Magias</h4>
                  <br/>
                </center>

                <img
                  alt="..."
                  className="img-fluid rounded-circle shadow-lg"
                  src={require("../../assets/img/magias.jpg")}
                  style={{ width: "150px" }}
                />
                  <br/>
                <br/>
                 <Button
                  className="nav-link d-none d-lg-block"
                  color="primary"
                  to="magias" tag={Link}
                >
                  <i className="fas fa-hat-wizard" style ={{
                    marginRight: '6px'
                  }} />
                  Criar magias
                </Button>
              </Col>
              <Col className="mt-5 mt-sm-0" sm="2" xs="5">
                <center>
                  <h4>Monstros</h4>
                  <br/>
                </center>

                <img
                  alt="..."
                  className="img-fluid rounded-circle shadow-lg"
                  src={require("../../assets/img/monstros.jpg")}
                  style={{ width: "150px" }}
                />
                <br/>
                <br/>
                 <Button
                  className="nav-link d-none d-lg-block"
                  color="primary"
                  to="monstros" tag={Link}
                >
                  <i className="fab fa-optin-monster" style ={{
                    marginRight: '6px'
                  }}/>
                  Criar monstros
                </Button>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </div>
  );

  async function logout() {
    await firebase.logout();
    props.history.push("/");
  }
}

export default withRouter(withStyles(styles)(Dashboard));
