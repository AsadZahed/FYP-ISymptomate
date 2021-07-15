import React, { useEffect } from "react";
import "../Login.css";
import axios from 'axios';

import { useHistory } from "react-router-dom";
import { useLocation } from "react-router";

import Header from "../Navbar/Aheader"

export default function ViewName() {

  const [patients, setPatients] = React.useState([]);
  const [user, setUser] = React.useState(null);
  const [token, setToken] = React.useState(null)
  var history = useHistory();
  var location = useLocation();

  React.useEffect(() => {
    if (location.state) {
      console.log(location)
      setUser(location.state.user);
      setToken(location.state.token)
    } else {
      history.push('/users/admin/viewusersname')
    }
  }, [location, history])


  useEffect(() => {


    axios.get("http://localhost:9000/users/admin/viewusers")
      .then((res, i) => {
        const patient = res.data;
        setPatients(patient)

      });


  }, [])

  return <div> <div style={{ backgroundColor: "#F8F8F8" }}>
  <Header token={token} user={user} />
    <div
      style={{
        paddingLeft: "12%",
        paddingRight: "12%",
        paddingTop: "5%",
        paddingBottom: "5%"
      }}
    >
      <div
        style={{
          border: "1px solid #DCDCDC",
          backgroundColor: "#fff",
          padding: "7%"
        }}
      >
        <h1>View Users</h1>
        <ul>
          {patients.map(person => <li>{person.name}</li>)}
        </ul>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "left"
          }}
        >

        </div>
      </div>
    </div>
  </div>
  </div>;
}
