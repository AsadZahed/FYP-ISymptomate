import React, { useEffect } from "react";
import "../../styles.css";
import { Button, Alert } from "react-bootstrap";
import { BrowserView, MobileView } from "react-device-detect";
import axios from 'axios';

import { useHistory } from "react-router-dom";
import { useLocation } from "react-router";

import Header from "../Navbar/header"

export default function AddPersonalInfo() {
  const [height, setheight] = React.useState("");
  const [weight, setWeight] = React.useState("");
  const [showResults, setShowResults] = React.useState(false);
  const [user, setUser] = React.useState(null);
  const [token, setToken] = React.useState(null)
  var history = useHistory();
  var location = useLocation();
  const [image,setImage] = React.useState('')

  useEffect(() => {
    if (location.state) {
      console.log(location)
      setUser(location.state.user);
      setToken(location.state.token)
      setheight(location.state.user.height + " feet")
      setWeight(location.state.user.weight + " kg")
      setImage("http://localhost:9000/"+location.state.user.pathprofilepic)
 
    } else {
      history.push('/')
    }
  }, [location, history])


  function handleSubmit(event) {
    event.preventDefault();
    const data = {
      height: height,
      weight: weight,
    };

    axios.post('http://localhost:9000/addinfo/personalinfo', data, {
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
              token: token
            }
          });
        }

      }).catch((res) => setShowResults(true));
  }
  function validateForm() {
    return (
      height.length > 0 && height > 3.0 && height < 8.0 ||
      weight.length > 0 && weight > 0 && weight < 350
    );
  }
  return (
    <div>
      <Header user={user} token={token} image={image}/>

      <div style={{ backgroundColor: "#F8F8F8" }}>
        <BrowserView>
          <div
            style={{
              paddingLeft: "12%",
              paddingRight: "12%",
              paddingTop: "5%",
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
              <h5>Add personal Information</h5>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <form onSubmit={handleSubmit}>
                  <label className="f-label" for="gender">
                    Body height in feet
                  </label>

                  <input
                    type="Float"
                    className="fname"
                    name="height"
                    placeholder={height}
                    onChange={(e) => setheight(e.target.value)}
                  />

                  <label className="f-label" for="gender">
                    Body weight in kg
                  </label>

                  <input
                    type="Float"
                    className="fname"
                    name="weight"
                    placeholder={weight}
                    onChange={(e) => setWeight(e.target.value)}
                  />

                  {showResults ? <Alert variant="danger">Incoorect username or password</Alert> : ""}


                  <Button
                    block
                    size="lg"
                    type="submit"
                    style={{ color: "#0c0530" }}
                    variant="warning"
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
              <h5>Personal Information</h5>

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
                  <label className="f-label" for="gender">
                    Body height in cm
                  </label>
                  <input
                    type="Number"
                    className="fname"
                    name="height"
                    onChange={(e) => setheight(e.target.value)}
                  />
                  <label className="f-label" for="gender">
                    Body weight in kg
                  </label>
                  <input
                    type="Number"
                    className="fname"
                    name="weight"
                    onChange={(e) => setWeight(e.target.value)}
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
