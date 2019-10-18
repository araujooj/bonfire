import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <Container>
          <Row>
            <Col md="3">
              <h1 className="title">
                <center>Bonfire</center></h1>
            </Col>
            <Col md="3">
              <Nav>
                <NavItem>
                  <NavLink to="/" tag={Link}>
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/landing-page" tag={Link}>
                    Artigos
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/login-page" tag={Link}>
                    Login
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
            <Col md="3">
              <Nav>
                <NavItem>
                  <NavLink href="https://creative-tim.com/contact-us?ref=blkdsr-footer">
                   Monstros
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://creative-tim.com/about-us?ref=blkdsr-footer">
                    Magias
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://creative-tim.com/blog?ref=blkdsr-footer">
                    Itens
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://opensource.org/licenses/MIT">
                    Personagens
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
            <Col md="3">
              <h3 className="title ">
                <center>
                Siga-nos
                </center>
            
              </h3>
          <center>
          <div className="btn-wrapper profile">
                <Button
                  className="btn-icon btn-neutral btn-round btn-simple"
                  color="default"
                  href="https://instagram.com/agenciasouls"
                  id="tooltip622135962"
                  target="_blank"
                >
                  <i className="fab fa-instagram" />
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip622135962">
                  Siga-nos
                </UncontrolledTooltip>
                <Button
                  className="btn-icon btn-neutral btn-round btn-simple"
                  color="default"
                  href="https://www.facebook.com/agenciasouls"
                  id="tooltip230450801"
                  target="_blank"
                >
                  <i className="fab fa-facebook-square" />
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip230450801">
                  Curta nossa página
                </UncontrolledTooltip>
                <Button
                  className="btn-icon btn-neutral btn-round btn-simple"
                  color="default"
                  href="https://agenciasouls.com.br"
                  id="tooltip318450378"
                  target="_blank"
                >
                  <i className="fab fa-dribbble" />
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip318450378">
                  Agência Souls
                </UncontrolledTooltip>
              </div>
          </center>
            
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
}

export default Footer;
