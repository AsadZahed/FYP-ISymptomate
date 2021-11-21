import React, { useEffect } from "react";
import "../../styles.css";
import { Button, Alert } from "react-bootstrap";
import { BrowserView, MobileView } from "react-device-detect";
import axios from 'axios';
import Header from "../Navbar/header"
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router";

export default function ForgotPassword() {
  const [email, setEmail] = React.useState("");
  const [token, setToken] = React.useState(null)
  const [user, setUser] = React.useState(null);
  const [msg, setMsg] = React.useState('')
  var history = useHistory();
  var location = useLocation();
  const [showResults, setShowResults] = React.useState(false) ;
  const [error,setError] = React.useState(); 

  function handleSubmit(event) {
    event.preventDefault();
    const data = {
        email: email,
    }
    console.log(email)
    axios.post('http://localhost:9000/users/forgotpassword', data, {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        }
    })
        .then(res => {
            console.log(res)
            if (res.data.success) {
                history.push({
                  pathname: "/login",
                  state: {
                    user: res.data.user,
                    token: res.data.token
                  }
                })
            } else {
                setError(res.data.err)
                setShowResults(true)
            }
        })    
}

  function validateForm() {
    return (
      email.length>0
    );
  }
  return (
    <div>
      {/* <Header token={token} user={user} image={image} /> */}
      <div style={{ paddingBottom: "70px", backgroundColor: "#0047b3", fontFamily: "Arial, Helvetica, sans-serif" }}></div>
    
      <div style={{ backgroundColor: "#F8F8F8" }}>
        <BrowserView>
          <div
            style={{
              paddingLeft: "12%",
              paddingRight: "12%",
              paddingTop: "1%",
              paddingBottom: "5%",
            }}
          >
            <div
              style={{
                border: "1px solid #DCDCDC",
                backgroundColor: "#fff",
                padding: "7%"
              }}
            >

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <h2 style={{ alignContent: "center" }}>Change Password</h2>

                <form onSubmit={handleSubmit}>
                
                  <input
                    type="email"
                    className="fname"
                    name="email"
                    placeholder="your email..."
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <div style={{ alignContent: "center" }}>
                  {showResults && <Alert variant="danger">{error}</Alert> }

                    <Button size="lg" type="submit" style={{ color: "#0c0530" }}
                      variant="warning" disabled={!validateForm()}>
                      Change
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </BrowserView>
        <MobileView>
          <div
            style={{
              paddingTop: "5%",
              textAlign: "center"
            }}
          >
            <div
              style={{
                border: "1px solid #DCDCDC",
                backgroundColor: "#fff",
                padding: "7%"
              }}
            >
              <h5>Change username</h5>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "left"
                }}
              >
                <form>
                  <Button
                    href="/editprofile"
                    className="bsubmit"
                    variant="warning"
                    disabled={!validateForm()}
                  >
                    Submit
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </MobileView>
      </div>
    </div>
  );
}
