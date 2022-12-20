import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Row,
  Col,
  Container,
  Alert,
  Card,
  CardTitle,
  CardText,
  Media,
} from "reactstrap";

import { GoogleLogin } from "react-google-login";
import config from "../config.js";

import MyImgLogin from "../images/background_mernflixdark.png";

var imgStyle = {
  width: "100%",
  height: "100%",
};

export default function Login() {
  const [loginMessage, setLoginMessage] = useState(null);

  const navigate = useNavigate();

  const onSuccess = (res) => {
    ////////////////////////Lo que debería contener onSucess////////////////////////
    console.log("[Login Success] currentUser:", res.profileObj);
    sessionStorage.setItem('name', res.profileObj.getName());
    sessionStorage.setItem('email', res.profileObj.getEmail());
    navigate("/home");
  };

  const onFailure = (res) => {
    ///////////Modificación para acceder a /home a pesar de fallar la autenticación OAuth/////////////
    sessionStorage.setItem('name', 'Iván González');
    sessionStorage.setItem('email', 'ivan.gzdiaz@gmail.com');
    navigate("/home");

    ////////////////////////Lo que debería contener onFailure////////////////////////
    console.log("[Login Failed] res:", res);
    // setLoginMessage(<Alert color="danger">Wrong login access. Try again</Alert>);

  };

  return (
    <Container>
      <Row>
        <Col>
          <Card
            inverse
            body
            className="text-center"
            style={{ backgroundColor: "#000", borderColor: "#000" }}
          >
            <CardTitle tag="h5">Welcome to MERNFlix</CardTitle>
            <CardText>React-based web project"</CardText>
            <CardText>
              <GoogleLogin
                clientId={config.clientID}
                buttonText="Login"
                theme="dark"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={"single_host_origin"}
                isSignedIn={true}
              />
              {loginMessage}
            </CardText>
            <Media style={imgStyle} object src={MyImgLogin} alt="Login" />
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
