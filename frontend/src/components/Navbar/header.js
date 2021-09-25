import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../images/logo.jpg";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

import { GrUserManager } from "react-icons/gr";
import Button from "react-bootstrap/Button";

function Header(props) {

  return (
    <div>
      <div style={{ paddingBottom: "70px", backgroundColor: "#0047b3", fontFamily: "Arial, Helvetica, sans-serif" }}>
      </div>

      <Navbar style={{ paddingLeft: "10%", paddingRight: "10%", fontSize: "22px", color: "#0c0530" }} bg="light" expand="lg">
        <Navbar.Brand style={{ fontSize: "30px" }}>

          {props.image === null ? <img src={props.image} alt='Profile Picture' style={{ paddingRight: "1%", width: "25%", borderRadius: "40px" }} /> :
            <GrUserManager size="15%"  style={{ borderRadius:"10%",paddingRight:"1%" ,color:"gray"}} />
          }



          {/* <img src={Logo} alt="logo.png" /> */}
          {/* <SiAddthis style={{ width:"10px",height:"10px",paddingRight: "10px", paddingBottom: "9px" }} /> */}

          <Link
            style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
            to={{
              pathname: '/',
              state: {
                token: props.token,
                user: props.user,
              },
            }}
          >
            I-SYMPTOMATE
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ color: "#0c0530" }} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" >

            <NavDropdown title="Account" id="basic-nav-dropdown" style={{ color: "#0c0530" }}>
              <NavDropdown.Item>
                <Link
                  to={{
                    pathname: "/editprofile",
                    state: {
                      token: props.token,
                      user: props.user,
                    },
                  }}
                >
                  Edit account
                </Link>
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Profile" id="basic-nav-dropdown" style={{ color: "#0c0530" }}>

              <NavDropdown.Item>
                <Link
                  to={{
                    pathname: "/addinfo/viewprofile",
                    state: {
                      token: props.token,
                      user: props.user,
                    },
                  }}
                >
                  View Profile
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link
                  to={{
                    pathname: "/addinfo/basicinfo",
                    state: {
                      token: props.token,
                      user: props.user,
                    },
                  }}
                >
                  Basic information
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link
                  to={{
                    pathname: "/addinfo/personalinfo",
                    state: {
                      token: props.token,
                      user: props.user,
                    },
                  }}
                >
                  Personal Information
                </Link>
              </NavDropdown.Item>

              <NavDropdown.Item>
                <Link
                  to={{
                    pathname: "/addinfo/allergy",
                    state: {
                      token: props.token,
                      user: props.user,
                    },
                  }}
                >
                  Allergies
                </Link>
              </NavDropdown.Item>
              {/* <NavDropdown.Item>
                <Link
                  to={{
                    pathname: "/addinfo/background",
                    state: {
                      token: props.token,
                      user: props.user,
                    },
                  }}
                >
                  Health background
                </Link>
              </NavDropdown.Item> */}
              <NavDropdown.Item>
                <Link
                  to={{
                    pathname: "/addinfo/addmedication",
                    state: {
                      token: props.token,
                      user: props.user,
                    },
                  }}
                >
                  Add Medication
                </Link>
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Check up" id="basic-nav-dropdown" style={{ color: "#0c0530" }}>
              <NavDropdown.Item>
                <Link
                  to={{
                    pathname: "/symptomatediseasedetection",
                    state: {
                      token: props.token,
                      user: props.user,
                    },
                  }}
                >
                  Symptomate Disease Detection
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link
                  to={{
                    pathname: "/skincancerdetection",
                    state: {
                      token: props.token,
                      user: props.user,
                    },
                  }}
                >
                  Skin Cancer Detection
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link
                  to={{
                    pathname: "/respiratory/respiratoryintroduction",
                    state: {
                      token: props.token,
                      user: props.user,
                    },
                  }}
                >
                  Respiratory Diseases Detection
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
            {/* 
            <NavDropdown title="Reports" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <Link
                  to={{
                    pathname: "/reports/viewreports",
                    state: {
                      token: props.token,
                      user: props.user,
                    },
                  }}
                >
                  View Reports
                </Link>
              </NavDropdown.Item>
            </NavDropdown> */}

            <NavDropdown title="Disease Info" id="basic-nav-dropdown" style={{ color: "#0c0530" }}>
              <NavDropdown.Item>
                <Link
                  to={{
                    pathname: "/addinfo/conditionlibrary",
                    state: {
                      token: props.token,
                      user: props.user,
                    },
                  }}
                >
                  Know about your disease
                </Link>
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Reports" id="basic-nav-dropdown" style={{ color: "#0c0530" }}>


              <NavDropdown.Item>
                <Link to={{
                  pathname: '/reports/view',
                  state: {
                    token: props.token,
                    user: props.user
                  }
                }}>
                  View
                </Link>
              </NavDropdown.Item>

              <NavDropdown.Item>
                <Link to={{
                  pathname: '/reports/analysis',
                  state: {
                    token: props.token,
                    user: props.user,
                    data: "FAHEEM"
                  }
                }}>
                  Analysis
                </Link>
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Settings" id="basic-nav-dropdown" style={{ color: "#0c0530" }}>
              <NavDropdown.Item href="/setting/about">
                <Link
                  to={{
                    pathname: "/setting/about",
                    state: {
                      token: props.token,
                      user: props.user,
                    },
                  }}
                >
                  About
                </Link>

              </NavDropdown.Item>

              {/* dummy */}
              {/* <NavDropdown.Item href="/shomepage">
                <Link
                  to={{
                    pathname: "/shomepage",
                    state: {
                      token: props.token,
                      user: props.user,
                    },
                  }}
                >
                  Homes
                </Link>

              </NavDropdown.Item> */}

              {/* /--------------
             */}
              <NavDropdown.Item >
                <Link to={{
                  pathname: '/setting/accounts',
                  state: {
                    token: props.token,
                    user: props.user
                  }
                }}>
                  Accounts
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to={{
                  pathname: '/setting/feedback',
                  state: {
                    token: props.token,
                    user: props.user
                  }
                }}>
                  Feedback
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="/setting/notifications">
                <Link to={{
                  pathname: '/setting/notifications',
                  state: {
                    token: props.token,
                    user: props.user
                  }
                }}>
                  Notifications
                </Link>
              </NavDropdown.Item>

            </NavDropdown>

            <NavDropdown title="Help and guide" id="basic-nav-dropdown" style={{ color: "#0c0530" }}>
              <NavDropdown.Item>
                <Link
                  to={{
                    pathname: "/help",
                    state: {
                      token: props.token,
                      user: props.user,
                    },
                  }}
                >
                  Help
                </Link>
              </NavDropdown.Item>

              <NavDropdown.Item>
                <Link
                  to={{
                    pathname: "/guide",
                    state: {
                      token: props.token,
                      user: props.user,
                    },
                  }}
                >
                  Guide
                </Link>
              </NavDropdown.Item>

              <NavDropdown.Item>
                <Link
                  to={{
                    pathname: "/tutoiral",
                    state: {
                      token: props.token,
                      user: props.user,
                    },
                  }}
                >
                  Tutoiral
                </Link>
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="/login" >
              <Button variant="warning">
                <Link
                  style={{ color: "#0c0530", fontFamily: "Arial, Helvetica, sans-serif" }}
                  to={{
                    pathname: '/login',
                    state: {
                      token: props.token,
                      user: props.user
                    }
                  }}>
                  Logout
                </Link>
              </Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>


      </Navbar>
    </div>
  );
}

export default Header;
