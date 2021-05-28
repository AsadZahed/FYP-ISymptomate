import React, { useEffect } from "react";
import "../../styles.css";
import { Button } from "react-bootstrap";
import axios from 'axios';
import { BrowserView, MobileView } from "react-device-detect";

import { useHistory } from "react-router-dom";
import { useLocation } from "react-router";
import Header from "../Navbar/header"

export default function AddMedication() {
  const [medcine, setMedcine] = React.useState("");
  const [user, setUser] = React.useState(null);
  const [token, setToken] = React.useState(null)
  var history = useHistory();
  var location = useLocation();
  const [msg, setMSG] = React.useState("")

  useEffect(() => {
    if (location.state) {
      console.log(location)
      setUser(location.state.user);
      setToken(location.state.token)
    } else {
      history.push('/')
    }
  }, [location, history])

  function handleSubmit(event) {
    event.preventDefault();
    const data = {
      drug: medcine,
    };

    axios.post('http://localhost:9000/addinfo/addmedication', data, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        'Authorization': `Bearer ${token}`
      }
    })
      .then((res) => {
        console.log(res)
        if (res.status === 200) {
          history.push({
            pathname: '/',
            state: {
              user: user,
              token: token,

            },
          });
        }


      })
      .catch(res => setMSG(res.message));
  }
  function validateForm() {
    return medcine.length > 0;
  }
  const [showResults, setShowResults] = React.useState(false)

  const onClick = () => setShowResults(true)
  return (
    <div>
      <Header user={user} token={token} />

      <div style={{ backgroundColor: "#F8F8F8" }}>
        <BrowserView>
          <div
            style={{
              paddingLeft: "12%",
              paddingRight: "12%",
              paddingTop: "1%",
              paddingBottom: "5%",
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
              <h5>Add Medication Information</h5>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <form onSubmit={handleSubmit}>
                  <label className="f-label" for="medicine">
                    Add medcine
                </label>

                  <input
                    type="text"
                    className="fname"
                    name="medcine"
                    onChange={(e) => setMedcine(e.target.value)}
                  />
                  {showResults ?
                    <div className="validation ">
                      {msg} </div> : <div></div>}

                  <Button
                    onClick={onClick}
                    block
                    size="lg"
                    type="submit"
                    disabled={!validateForm()}
                  >
                    Add
                </Button>
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
                padding: "7%",
                alignItems: "center"
              }}
            >
              <h5>Add medication</h5>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "5%",

                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <form onSubmit={handleSubmit}>
                  <label className="f-label" for="medicine">
                    Add medcine
                </label>

                  <input
                    type="text"
                    className="fname"
                    name="DOB"
                    onChange={(e) => setMedcine(e.target.value)}
                  />

                  <Button
                    block
                    size="lg"
                    type="submit"
                    disabled={!validateForm()}
                  >
                    Add
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
