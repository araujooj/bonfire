import React from "react";
import { Button, Image } from "semantic-ui-react";
import "./footer.scss";
import logo from "./3.png";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="stylea">
      <div className="social">
        Se conecte conosco nas redes sociais!
        <p />
        <center>
          <Router>
            <Link to="www.facebook.com">
              <Button circular color="purple" icon="facebook" size="huge" />
            </Link>
            <Button circular color="purple" icon="instagram" size="huge" />
            <Button circular color="purple" icon="github" size="huge" />
            <p />
            Desenvolvido por:
            <p />
            {/*eslint-disable-next-line*/}
            <Image src={logo} size="small" />
          </Router>
        </center>
      </div>
    </div>
  );
};

export default Footer;
