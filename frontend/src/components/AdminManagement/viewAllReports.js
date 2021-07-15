import React, { useEffect } from "react";
import "../Login.css";
import axios from 'axios';

import { useHistory } from "react-router-dom";
import { useLocation } from "react-router";
import Header from "../Navbar/Aheader";

export default function ViewAllReports() {

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
      history.push('/admin/viewallreports')
    }
  }, [location, history])


  useEffect(() => {


    axios.get("http://localhost:9000/users/admin/viewallreports")
      .then((res, i) => {
        const patient = res.data;
        setPatients(patient)

      });


  }, [])

  return (
    <div>
      <div style={{ backgroundColor: "#F8F8F8" }}>
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
            <h1>View Reports</h1>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                textAlign: "left"
              }}
            >
              {patients.map(person =>
                <li className="shome-styles" style={{ fontSize: "20px" }}>
                  Report of {person.name} and taken at {person.time} and you've {person.cancer} </li>)}




            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
