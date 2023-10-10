import { Card, Form } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import { errorToast, successToast } from "../services/toast.service";
import { useNavigate } from "react-router-dom";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGoogle,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
const Signup = () => {
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  // const getValue = (e) => {
  //   //console.log(e.target.value);

  //   if (e.target.name === "fullname") {
  //     setFullName(e.target.value);
  //   } else if (e.target.name === "email") {
  //     setEmail(e.target.value);
  //   } else if (e.target.name === "password") {
  //     setPassword(e.target.value);
  //   }

  //   console.log(
  //     `fullname: ${fullname}, email: ${email}, password: ${password}`
  //   );
  // };

  const handleSignup = async (e) => {
    e.preventDefault();
    //console.log("clicked");

    const signupData = {
      fullname,
      email,
      password,
    };

    //console.log(signupData);

    try {
      const response = await axios.post(
        "https://backend-mu-pied.vercel.app/users/register",
        signupData
      );
      //console.log(response);

      if (response.data.status) {
        successToast(response.data.message);
        navigate("/");
      }
    } catch (error) {
      console.log(error.response.data.message);
      errorToast(error.response.data.message);
    }
  };
  return (
    <div className="main-container">
      <Card style={{ width: "22rem", height: "30rem" }}>
        <h3 className="text-center" style={{ color: "#45aba6" }}>
          SignUp
        </h3>

        <div className="signup-form mt-3">
          <Form>
            <Form.Group className="form-group mb-3">
              <span className="input-icon">
                <FontAwesomeIcon icon={faUser} />
              </span>
              <Form.Control
                type="text"
                name="fullname"
                placeholder="Full Name"
                className="form-control"
                onChange={(e) => setFullName(e.target.value)}
              />
            </Form.Group>

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
              />
            </Form.Group>

            <Form.Group className="form-group mb-4">
              <span className="input-icon">
                <FontAwesomeIcon icon={faLock} />
              </span>
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                className="form-control"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <button className="signup-btn" onClick={(e) => handleSignup(e)}>
              SignUp
            </button>

            <span className="login-btn">
              Already Have an Account? <a href="/">Login</a>
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

export default Signup;
