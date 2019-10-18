
import React, {useState} from "react";
import classnames from "classnames";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardImg,
  CardTitle,
  Label,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";
import { createBrowserHistory } from 'history'
import firebase from '../../firebaseConfig'

function Signup(props) {
  const history = createBrowserHistory({
    forceRefresh: true
  })
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [quote, setQuote] = useState("");

  async function onRegister() {
    try {
      await firebase.register(name, email, password)
      await firebase.addQuote(quote)
      history.push("/dashboard");
    } catch (error) {
      alert(error.message);
    }
  }
    return (
      
      <div className="section section-signup">
        <Container>
          <div className="squares square-1" />
          <div className="squares square-2" />
          <div className="squares square-3" />
          <div className="squares square-4" />
          <Row className="row-grid justify-content-between align-items-center">
            <Col lg="6">
              <h3 className="display-3 text-white">
                Registre-se em nossa plataforma{" "}
              </h3>
              <p className="text-white mb-3">
                A plataforma perfeita para você jogador de RPG, que deseja automatizar seus processos 
                para sua mesa, e descobrir e divulgar seus conhecimentos sobre RPG.
              </p>
              <div className="btn-wrapper">
              <p className="text-white mb-3">
                Já é usuário? Faça Login
              </p>
                <Button color="primary" to="login" tag={Link}>
                 Login
                </Button>
              </div>
            </Col>
            <Col className="mb-lg-auto" lg="6">
              <Card className="card-register">
             
                <CardBody>
                  <Form className="form">
                    <InputGroup
                
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="tim-icons icon-single-02" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Nome de Usuário"
                        type="text"
                        value={quote}
                        onChange={e => setQuote(e.target.value)}
                      />
                    </InputGroup>
                    <InputGroup
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="tim-icons icon-email-85" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Email"
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                      
                      />
                    </InputGroup>
                    <InputGroup
                    
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="tim-icons icon-lock-circle" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Senha"
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
            
                      />
                    </InputGroup>
                    <FormGroup check className="text-left">
                      <Label check>
                        <Input type="checkbox" />
                        <span className="form-check-sign" />Eu aceito os {" "}
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          Termos e Condições
                        </a>
                        .
                      </Label>
                    </FormGroup>
                  </Form>
                </CardBody>
                <CardFooter>
                  <Button className="btn-round" color="primary" size="lg"    onClick={onRegister}>
                    Cadastrar
                  </Button>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }




export default Signup;
