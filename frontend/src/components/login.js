import React from "react";
import Form from "react-bootstrap/Form";
import { Button, Alert } from "react-bootstrap";
import "./Login.css";
import axios from 'axios';
import { useHistory } from "react-router-dom";
import Header from "../components/Navbar/LSheader";
import Image from "../components/images/logo2.jpeg"
import { GoogleLogin, GoogleLogout } from 'react-google-login';

import { Link } from "react-router-dom";

const clientId = "117443239646-ni8sjfvdadef3m2h6iju1hkgoeu3vqbs.apps.googleusercontent.com";


export default function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [gdata, setDData] = React.useState("");
  const [showResults, setShowResults] = React.useState(false)
  const history = useHistory();

  function handleSubmit(event) {
    event.preventDefault();
    const data = {
      username: email,
      password: password,
    };

    axios.post('http://localhost:9000/users/login', data, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      }
    })
      .then((res) => {
        if (res.data.user.isAdmin)
          history.push({
            pathname: "/admin/privlages",
            state: {
              user: res.data.user,
              token: res.data.token
            }
          })
        else
          history.push({
            pathname: "/",
            state: {
              user: res.data.user,
              token: res.data.token
            }
          })

      }).catch((res) => setShowResults(true))


  }
  function validateForm() {
    return email.length > 0 && password.length > 0;
  }
  const [showloginButton, setShowloginButton] = React.useState(true);
  const [showlogoutButton, setShowlogoutButton] = React.useState(false);
  const onLoginSuccess = (res) => {
    console.log('Login Success:', res.profileObj);
    setDData(res.profileObj)
    // setEmail(res.profileObj.email)
    history.push({
      pathname: "/",
      state: {
        user: res.profileObj,
        token: res.data.token
      }
    })

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
            <img height="90%" src={Image} alt="img" />
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
                  paddingRight: "50%",
                  paddingTop: "10%",
                  paddingBottom: "10%"
                }}>
                <h1>Login</h1>

                <div className="Login">
                  <Form onSubmit={handleSubmit}>
                    <Form.Group size="lg" controlId="email">
                      <Form.Label style={{ textAlign: "left ", paddingRight: "40%", fontSize: "19px", color: "black" }}>Email</Form.Label>
                      <Form.Control
                        autoFocus
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group size="lg" style={{ paddingBottom: "5%", width: "100%", fontSize: "19px", color: "black" }} controlId="password">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </Form.Group>

                    {showResults ? <Alert variant="danger">Incoorect username or password</Alert> : ""}


                    <div style={{ textAlign: "center" }}>
                      <div style={{ color: "#ffff" }}>
                        <Button style={{ color: "#0047b3" }} size="lg" variant="warning" type="submit" disabled={!validateForm()}>
                          Login
                        </Button>
                      </div>
                      <div>
                        {/* <GoogleLogin 
              clientId={CID}
              buttonText="Login"
              onSuccess={onSuccess}
              onFailure={onFailure}
              isSignedIn={true}
            /> */}
                      </div>

                      <div style={{ paddingTop: "3%" }}>
                        <Button variant="light" size="md" type="submit" href="/signup">
                          Don't have account? Register now
                        </Button>
                      </div>
                      {/* <div style={{ paddingTop: "3%" }}>
                      <Button variant="light" size="md" type="submit" href="/admin/login">
                        Admin Login
                      </Button>
                    </div>  */}
                      {/* <div>
                        <Link
                          to={{
                            pathname: "/",
                          }}
                        >

                          {showloginButton ?
                            <GoogleLogin
                              clientId={clientId}
                              buttonText="Sign In"
                              onSuccess={onLoginSuccess}
                              onFailure={onLoginFailure}
                              cookiePolicy={'single_host_origin'}
                              isSignedIn={true}
                            /> : null}
                        </Link>


                        {showlogoutButton ?
                          <GoogleLogout
                            clientId={clientId}
                            buttonText="Sign Out"
                            onLogoutSuccess={onSignoutSuccess}
                          >
                          </GoogleLogout> : null
                        }
                      </div>
 */}

                    </div>

                  </Form>



                </div>

              </div>
            </div>
          </div>

        </div>

      </div>

    </div >

  );
}
