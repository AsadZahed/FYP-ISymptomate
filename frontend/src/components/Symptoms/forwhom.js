import React from "react";

import Myself from "../../components/images/myself.PNG";
import Someone from "../../components/images/someone.PNG";

import { BrowserView, MobileView } from "react-device-detect";
import { Button } from "react-bootstrap";

import { Progress } from "antd";
import "antd/dist/antd.css";

import "../../styles.css";
import Header from "../Navbar/header"

function Forwhom() {
  return (
    <div>
    <Header/>
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
            <Progress percent={40} status="active" />
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
              <Button href="/symptoms/questions" variant="light">
                <img className="img-size-browser" src={Myself} alt="Myself" />
              </Button>
            </div>
            <div className="float-child">
              <Button href="/symptoms/questions" variant="light">
                <img className="img-size-browser" src={Someone} alt="someone" />
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
                  <Button href="/symptoms/terms" variant="link">
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
                <Button variant="light" href="/symptoms/questions">
                  <img className="img-size-mobile" src={Myself} alt="Myslef" />
                </Button>
              </div>
              <div className="float-child">
                <Button variant="light" href="/symptoms/questions">
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
                  <Button href="/symptoms/terms" variant="link">
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
export default Forwhom;
