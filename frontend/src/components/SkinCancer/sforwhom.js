import React, { useEffect } from "react";

import Myself from "../../components/images/myself.PNG";
import Someone from "../../components/images/someone.PNG";

import { BrowserView, MobileView } from "react-device-detect";
import { Button } from "react-bootstrap";

import { Progress } from "antd";
import "antd/dist/antd.css";

import "../../styles.css";
import Header from "../Navbar/header"


import { useHistory } from "react-router-dom";
import { useLocation } from "react-router";

import { Link } from "react-router-dom";


function SForwhom() {
  const [token, setToken] = React.useState(null)
  const [user, setUser] = React.useState(null);
  var history = useHistory();
  var location = useLocation();
  const [image,setImage] = React.useState('');
  const [someone,setSomeone] = React.useState(null); 
  useEffect(() => {
    if (location.state) {
      console.log(location)
      setUser(location.state.user);
      setToken(location.state.token);
      setImage("http://localhost:9000/"+location.state.user.pathprofilepic)
 
    } else {
      history.push('/skin/skinforwhom')
    }
  }, [location, history])

  return (
    <div>
      <Header token={token} user={user} image={image}/>
      <div style={{ backgroundColor: "#F8F8F8" }}>
        <BrowserView>
          <div
            style={{
              paddingLeft: "12%",
              paddingRight: "12%",
              paddingTop: "5%",
              paddingBottom: "5%"
            }}
          >
            <div>
              <Progress percent={50} status="active" />
            </div>

            <div
              className="float-container"
              style={{
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                border: "1px solid #DCDCDC",
                backgroundColor: "#fff",
                paddingBottom: "25%",
                borderRadius: "5px",
              }}
            >
              <h1>Who is the checkup for?</h1>

              <div style={{ paddingLeft: "30%" }} className="float-child">
                <Button variant="light">

                  <Link
                    to={{
                      pathname: "/skin/skincancer",
                      state: {
                        token: token,
                        user: user,
                      },
                    }}
                  >
                    <img className="img-size-browser" src={Myself} alt="Myself" />
                  </Link>

                </Button>
              </div>
              <div className="float-child">
                <Button variant="light">
                  <Link
                    to={{
                      pathname: "/skin/skincancer",
                      state: {
                        token: token,
                        user: user,
                      },
                    }}
                  >
                    <img className="img-size-browser" src={Someone} alt="someone" />

                  </Link>

                </Button>
              </div>
            </div>
            <div>
              <div
                style={{
                  border: "1px solid #DCDCDC",
                  backgroundColor: "#fff",
                  textAlign: "right",
                  padding: "3%"
                }}
              >
                <div className="btn-toolbar">
                  <div className="left-group">
                    <Button variant="link">
                    <Link
                    to={{
                      pathname: "/skin/skinterms",
                      state: {
                        token: token,
                        user: user,
                      },
                    }}
                  >
                    Back
                  </Link>
                  </Button>
                  </div>
                  <div className="right-group">
                    <p style={{ color: "gray" }}>Select an answer above</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </BrowserView>

        <MobileView>
          <div>
            <div
              style={{
                border: "1px solid #DCDCDC",
                backgroundColor: "#fff",
                padding: "3%"
              }}
            >
              <div>
                <Progress percent={40} status="active" />
              </div>
              <h1>Options</h1>
              <div
                className="float-container option-search-styles"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginLeft: "10%"
                }}
              >
                <div
                  className="float-child"
                  style={{ marginRight: "20px", boder: "1px solid black" }}
                >
                  <Button variant="light" href="/skin/skincheck">
                    <img className="img-size-mobile" src={Myself} alt="Myslef" />
                  </Button>
                </div>
                <div className="float-child">
                  <Button variant="light" href="/skin/skincheck">
                    <img
                      className="img-size-mobile"
                      src={Someone}
                      alt="Someone"
                    />
                  </Button>
                </div>
              </div>
              <div
                style={{
                  // border: "1px solid #DCDCDC",
                  backgroundColor: "#fff",
                  textAlign: "right",
                  padding: "3%"
                }}
              >
                <div className="btn-toolbar">
                  <div className="left-group">
                    <Button href="/skin/skinterms" variant="link">
                      back
                  </Button>
                  </div>
                  <div className="right-group">
                    <p style={{ color: "gray" }}>Select an answer above</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MobileView>
      </div>
    </div>
  );
}
export default SForwhom;
