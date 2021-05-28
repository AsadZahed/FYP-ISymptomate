import React from "react";

import "../../styles.css";
import SymptomsIntroImg from "../../components/images/symptoms-intro-img.PNG";
import { Button } from "react-bootstrap";
import { Progress } from "antd";
import "antd/dist/antd.css";
import { BrowserView, MobileView } from "react-device-detect";
import Header from "../Navbar/header"

function Introduction() {
  return (
    <div>
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
            <Progress percent={0} status="active" />
          </div>
          <div
            className="float-container"
            style={{
              border: "1px solid #DCDCDC",
              backgroundColor: "#fff",
              padding: "7%",
              borderRadius: "5px",
            }}
          >
            <div className="float-child">
              {" "}
              <h3>Hello!</h3>
              <p>
                You’re about to use a short (3 min), safe and anonymous health
                checkup. Your answers will be carefully analyzed and you’ll
                learn about possible causes of your symptoms.
              </p>
            </div>
            <div className="float-child">
              <img src={SymptomsIntroImg} alt="introimage" />
            </div>
          </div>
          <div
            style={{
              border: "1px solid #DCDCDC",
              backgroundColor: "#fff",
              textAlign: "right",
              padding: "3%"
            }}
          >
            <Button href="/symptoms/terms" variant="warning">
              Next
            </Button>{" "}
          </div>
        </div>
      </BrowserView>

      <MobileView>
        <div
          style={{
            padding: "3%"
          }}
        >
          <div>
            <Progress percent={20} status="active" />
          </div>
          <div
            className="float-container-mobile"
            style={{
              border: "1px solid #DCDCDC",
              backgroundColor: "#fff",
              padding: "7%"
            }}
          >
            <div className="float-child">
              {" "}
              <h3>Hello!</h3>
              <p>
                You’re about to use a short (3 min), safe and anonymous health
                checkup. Your answers will be carefully analyzed and you’ll
                learn about possible causes of your symptoms.
              </p>
            </div>
            <div className="float-child">
              <img
                style={{ width: "100%", height: "100%" }}
                src={SymptomsIntroImg}
                alt="introimage"
              />
            </div>
          </div>
          <div
            style={{
              border: "1px solid #DCDCDC",
              backgroundColor: "#fff",
              textAlign: "right",
              padding: "3%"
            }}
          >
            <Button href="/symptoms/terms" variant="warning">
              Next
            </Button>{" "}
          </div>
        </div>
      </MobileView>
    </div>
    </div>
  );
}
export default Introduction;
