import React from "react";
import { Card, Form } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import { errorToast, successToast } from "../services/toast.service";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGoogle,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { useDispatch } from "react-redux";
import { login } from "../slice/authReducer";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("clicked");

    const loginData = {
      email,
      password,
    };

    console.log(loginData);

    axios
      .post("https://backend-mu-pied.vercel.app/users/login", loginData)
      .then((response) => {
        //console.log(response);

        // debugger;
        if (response.data.status) {
          sessionStorage.setItem("isLoggedIn", true);
          //console.log(response.data);
          dispatch(login(response.data.data.jwt));
          successToast(response.data.message);
          navigate("/products");
        }
      })
      .catch((error) => {
        console.log(error.response.data.message);
        errorToast(error.response.data.message);
      });
  };
  return (
    <div className="main-container">
      <Card
        style={{ width: "22rem", height: "28rem" }}
        className="credential-card"
      >
        <h3 className="text-center" style={{ color: "#45aba6" }}>
          Login
        </h3>

        <div className="signup-form mt-4">
          <Form>
            <Form.Group className="form-group mb-3">
              <span className="input-icon">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              <Form.Control
                type="email"
                name="email"
                placeholder="Email"
                className="form-control"
                onChange={(e) => setEmail(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group className="form-group mb-3">
              <span className="input-icon">
                <FontAwesomeIcon icon={faLock} />
              </span>
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                className="form-control"
                onChange={(e) => setPassword(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <button className="signup-btn" onClick={handleLogin}>
              Login
            </button>

            <span className="login-btn">
              Don't Have An Account? <a href="/signup">SignUp</a>
            </span>

            <div className="seperator">
              <b>or</b>
            </div>

            <p>Sign in with Social Media Account</p>
            <div className="social-media-icon">
              <button>
                <FontAwesomeIcon icon={faGoogle} />
              </button>
              <button>
                <FontAwesomeIcon icon={faFacebook} />
              </button>
              <button>
                <FontAwesomeIcon icon={faLinkedin} />
              </button>
            </div>
          </Form>
        </div>
      </Card>
    </div>
  );
};

export default Login;
