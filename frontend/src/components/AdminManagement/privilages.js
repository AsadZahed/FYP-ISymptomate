import React from "react";
import Button from "react-bootstrap/Button";
import "../Login.css";
import Header from "../Navbar/Aheader"

import { useHistory } from "react-router-dom";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

export default function Privilages() {
  
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
      history.push('/admin/privlages')
    }
  }, [location, history])
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
        <h1>Privilages</h1>

        <div
          style={{
            // display: "flex",
            // flexDirection: "column",
            textAlign: "left"
          }}
        >
              <Button variant="warning"  style = {{margin: "5px"}}>
                <Link
                style = {{color: "#0c0530"}}
                  to={{
                    pathname: "/users/admin/viewusers",
                    state: {
                      token: token,
                      user: user,
                    },
                  }}
                >
                  View Users by email
                </Link>
                
            </Button>

            <Button variant="warning"  style = {{margin: "5px"}}>
                <Link
                style = {{color: "#0c0530"}}
                  to={{
                    pathname: "/users/admin/viewusersname",
                    state: {
                      token: token,
                      user: user,
                    },
                  }}
                >
                  View Users by name
                </Link>

                
            </Button>
            <Button variant="warning"  style = {{margin: "5px"}}>
                <Link
                style = {{color: "#0c0530"}}
                  to={{
                    pathname: "/users/admin/viewallreports",
                    state: {
                      token: token,
                      user: user,
                    },
                  }}
                >
                  View Reports
                </Link>
            </Button>
        </div>
      </div>
    </div>
  </div>
  </div>;
}
