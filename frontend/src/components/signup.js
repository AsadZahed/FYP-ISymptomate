import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";

// import { BrowserView, MobileView } from "react-device-detect";
import axios from 'axios';
import { useHistory } from "react-router-dom";
import Header from "../components/Navbar/LSheader";
import Image from "../components/images/logo2.jpeg";

import { GoogleLogin, GoogleLogout } from 'react-google-login';

import { Link } from "react-router-dom";

const clientId = "117443239646-ni8sjfvdadef3m2h6iju1hkgoeu3vqbs.apps.googleusercontent.com";


export default function Signup() {
  const [fname, setFname] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [cpassword, setCPassword] = React.useState("");
  const [error, setError] = React.useState("");
  var history = useHistory();

  const [gdata, setDData] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const data = {
      name: fname,
      username: email,
      password: password,
      isAdmin: false
    };


    // const googleData = {
    //   name: fname,
    //   username: email,
    // }
    console.log(data)
    axios.post('http://localhost:9000/users/signup', data, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      }
    })
      .then((res) => {
        // if (res.data.success) {
        //   history.push("/login");
        // }
        if (res.data.user.isAdmin)
          history.push({
            pathname: "/login",
            state: {
              user: res.data.user,
              token: res.data.token
            }
          })
        else
          history.push({
            pathname: "/login",
            state: {
              user: res.data.user,
              token: res.data.token
            }
          })

      }).catch(err => console.log(err))
    // .catch((res) => setError("Sign up error"))

    // axios.post('http://localhost:9000/users/signup', googleData, {
    //   headers: {
    //     'Access-Control-Allow-Origin': '*',
    //     'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    //   }
    // })
    //   .then((res) => {
    //     if (res.data.success) {
    //       history.push("/login");
    //     }

    //   }).catch((res) => setError("Sign up error"))

    // axios.post('http://localhost:9000/users/auth/google/', data, {
    //   headers: {
    //     'Access-Control-Allow-Origin': '*',
    //     'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    //   }
    // })
    //   .then((res) => {
    //     if (res.data.success) {
    //       history.push("/");
    //     }

    //   });
  }

  const [showResults, setShowResults] = React.useState(false)

  const onClick = () => setShowResults(true)

  const [showloginButton, setShowloginButton] = React.useState(true);
  const [showlogoutButton, setShowlogoutButton] = React.useState(false);
  const onLoginSuccess = (res) => {
    console.log('Login Success:', res.profileObj);
    setFname(res.profileObj.name)
    setEmail(res.profileObj.email)
    setPassword("1234")
    console.log(fname + "       " + email)

    // setEmail(res.profileObj.email)
    // history.push({
    //   pathname: "/login",
    //   state: {
    //     user: res.profileObj,
    //   }
    // })

    setShowloginButton(false);
    setShowlogoutButton(true);
  };

  const onLoginFailure = (res) => {
    console.log('Login Failed:', res);
  };

  const onSignoutSuccess = () => {
    alert("You have been logged out successfully");
    console.clear();
    setShowloginButton(true);
    setShowlogoutButton(false);
  };


  function validateForm() {
    return (
      email.length > 0 &&
      password.length > 0 &&
      fname.length > 0 &&
      cpassword.length > 0 &&
      password === cpassword
    );
  }
  function validatePassword() {
    if (password !== cpassword) {
      setError("Password Doesnot match");
    }
  }
  return (
    <div>
      <Header />
      <div style={{ backgroundColor: "#F8F8F8" }}>
        <div className="btn-toolbar" style={{ paddingBottom: "3%", paddingLeft: "5%", paddingRight: "5%" }}>

          <div style={{
            display: "flex",
            flex: "1",
            width: "30%",
            justifyContent: "flex-start"
          }}>
            <img src={Image} alt="img" />
          </div>

          <div style={{
            display: "flex",
            flex: "4",
            justifyContent: "flex-start"
          }}>

            <div style={{
              width: '100%',
              backgroundColor: "#F8F8F8",
              padding: "5%"
            }}>

              <div className="main-div"
                style={{
                  border: "1px solid #DCDCDC",
                  //paddingTop:"5%",
                  backgroundColor: "white",
                  paddingRight: "50%"
                }}>

                <h1 style={{ color: "black" }}>Registration</h1>
                <div className="Login">
                  <Form onSubmit={handleSubmit} style={{ color: "black" }}>
                    <Form.Group size="lg" controlId="fname">
                      <Form.Label style={{ color: "black" }}>Full Name</Form.Label>
                      <Form.Control
                        autoFocus
                        type="text"
                        value={fname}
                        onChange={(e) => setFname(e.target.value)}
                      />
                    </Form.Group>

                    <Form.Group size="lg" controlId="email">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group size="lg" controlId="password">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group size="lg" controlId="password"
                      style={{ paddingBottom: "5%" }}>
                      <Form.Label>Confrim Password</Form.Label>
                      <Form.Control
                        type="password"
                        value={cpassword}
                        onChange={(e) => setCPassword(e.target.value)}
                      />
                    </Form.Group>
                    {showResults ?
                      <div className="validation ">

                        {error} </div> : <div></div>}

                    <div style={{ textAlign: "center", paddingTop: "3%" }}>
                      <div>
                        <Button
                          variant="warning"
                          onClick={validatePassword}
                          size="lg"
                          type="submit"
                          onClick={onClick}
                          disabled={!validateForm()}
                        >
                          Register
                        </Button>

                      </div>

                      <div style={{ paddingTop: "3%" }}>
                        <Button variant="light" size="md" type="submit" href="/login">
                          Have an acount? Login
                        </Button>
                      </div>

                      <div>
                        <Button variant="light" size="md" type="submit" href="/login">

                          {showloginButton ?
                            <GoogleLogin
                              clientId={clientId}
                              buttonText="Sign In"
                              onSuccess={onLoginSuccess}
                              onFailure={onLoginFailure}
                              cookiePolicy={'single_host_origin'}
                              isSignedIn={true}
                              href="/login"
                            /> : null}
                        </Button>


                        {showlogoutButton ?
                          <GoogleLogout
                            clientId={clientId}
                            buttonText="Sign Out"
                            onLogoutSuccess={onSignoutSuccess}
                          >
                          </GoogleLogout> : null
                        }
                      </div>

                      {/* <div class="col-sm-4">
      <div class="card">
        <div class="card-body">
          <a class="btn btn-block  btn-social btn-google" href="/users/auth/google" role="button">
            <i class="fab fa-google"></i>
            Sign In with Google
          </a>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <a class="btn btn-block  btn-social btn-facebook" href="/auth/google" role="button">
            <i class="fab fa-facebook"></i>
            Sign In with Facebook
          </a>
        </div>
      </div>
    </div> */}
                    </div>

                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}