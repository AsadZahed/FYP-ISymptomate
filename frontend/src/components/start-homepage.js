import React from "react";
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import Image1 from "../components/images/slider-1.jpeg";
import Image2 from "../components/images/slider-2.jpeg";
import Image3 from "../components/images/slider-3.jpeg";
import Image4 from "../components/images/slider-4.jpg";
import Image5 from "../components/images/slider-5.jpg";
import Image6 from "../components/images/slider-6.jpg";
import { BiArrowFromLeft } from "react-icons/bi";
import { BiCheck } from "react-icons/bi";

import CountUp from "react-countup";


import { Button } from "react-bootstrap";
import HomeImage2 from "../components/images/homeimg.PNG";
import { Link } from "react-router-dom";
import { BrowserView} from "react-device-detect";

import "../styles.css";
import "../components/Symptoms/App.css"

import Header from "./Navbar/sheader";


export default function Slider() {

    const data = [
        "Enter your symptoms",
        "Answer some simple questions",
        "Done! Your assessment will reveal:"
    ];
    const data1 = [
        "Possible causes of your symptoms",
        "Options for next steps",
        "Suggested lab tests",
        "Suggested lab tests",
        "Suggested lab tests",
        "Suggested lab tests",
        "Suggested lab tests"
    ];

    return (
        <div>
            <div style={{ paddingBottom: "2%" }}>
                <Header />
            </div>
            <div>

            </div>
            <AliceCarousel autoPlay autoPlayInterval="2000">
                <div>
                    <div
                        style={{
                            paddingLeft: "15%",
                            paddingRight: "15%",
                            paddingBottom: "0%"
                        }}
                    >
                        <img src={Image1} alt="img1" className="sliderimg" />
                    </div>
                </div>
                <div>
                    <div
                        style={{ padding: "15%", paddingTop: "0%", paddingBottom: "0%" }}
                    >
                        <img src={Image2} alt="img2" className="sliderimg" />
                    </div>
                </div>
                <div>
                    <div
                        style={{ padding: "15%", paddingTop: "0%", paddingBottom: "0%" }}
                    >
                        <img src={Image3} alt="imgg" className="sliderimg" />
                    </div>
                </div>
                <div>
                    <div
                        style={{ padding: "15%", paddingTop: "0%", paddingBottom: "0%" }}
                    >
                        <img src={Image4} alt="imgg" className="sliderimg" />
                    </div>
                </div>
                <div>
                    <div
                        style={{ padding: "15%", paddingTop: "0%", paddingBottom: "0%" }}
                    >
                        <img src={Image5} alt="imgg" className="sliderimg" />
                    </div>
                </div>
                <div>
                    <div
                        style={{ padding: "15%", paddingTop: "0%", paddingBottom: "0%" }}
                    >
                        <img src={Image6} alt="imgg" className="sliderimg" />
                    </div>
                </div>
            </AliceCarousel>


            <div>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        paddingLeft: "28%",
                        paddingRight: "28%",

                    }}
                >
                    <Button variant="primary" style={{ backgroundColor: "#0047b3" }}>
                        <div
                            style={{
                                padding: "2%",
                                paddingLeft: "8%",
                                paddingRight: "8%"
                            }}
                        >
                            <Link
                                style={{ color: "white" }}
                                to={{
                                    pathname: "/login",
                                }}
                            >
                                Online Reports
                            </Link>
                        </div>
                    </Button>
                    <div style={{ padding: "1%" }}></div>
                    <Button variant="primary" style={{ backgroundColor: "#0047b3" }} >
                        <div
                            style={{
                                padding: "2%",
                                paddingLeft: "8%",
                                paddingRight: "8%"
                            }}
                        >
                            <Link
                                style={{ color: "white" }}
                                to={{
                                    pathname: "/login",
                                }}
                            >
                                Check Skin Cancer
                            </Link>
                        </div>
                    </Button>

                    <div style={{ padding: "1%" }}></div>
                    <Button variant="primary" style={{ backgroundColor: "#0047b3" }}>
                        <div
                            style={{
                                padding: "2%",
                                paddingLeft: "8%",
                                paddingRight: "8%"
                            }}
                        >
                            <Link
                                style={{ color: "white" }}
                                to={{
                                    pathname: "/login",
                                }}
                            >
                                Check Symptomatic Diseases
                            </Link>
                        </div>
                    </Button>

                    <div style={{ padding: "1%" }}></div>
                    <Button variant="primary" style={{ backgroundColor: "#0047b3" }}>
                        <div
                            style={{
                                padding: "2%",
                                paddingLeft: "8%",
                                paddingRight: "8%"
                            }}
                        >
                            <Link
                                style={{ color: "white" }}
                                to={{
                                    pathname: "/login",
                                }}
                            >
                                Login to symptomate
                            </Link>
                        </div>
                    </Button>
                </div>


                <div>
                    <div
                        style={{
                            paddingLeft: "12%",
                            paddingRight: "12%",
                            paddingTop: "5%",
                        }}
                    >
                        <div
                            className="float-container"
                            style={{
                                border: "1px solid #DCDCDC",
                                backgroundColor: "#fff",
                                paddingTop: "4%",
                                borderRadius: "5px",
                                paddingLeft: "37%",
                                backgroundColor: "#0047b3"
                            }}
                        >

                            <div className="number" >
                                <CountUp duration={10} className="counter button" end={121571} />
                            </div>

                        </div>
                        <h3 style={{ paddingLeft: "32%", }}>Patients visted this website</h3>

                    </div>

                </div>

                <div style={{ paddingBottom: "1%" }}></div>
            </div>
            <div>
                <div
                    style={{
                        paddingLeft: "12%",
                        paddingRight: "12%",
                        paddingTop: "5%",
                        paddingBottom: "4%"
                    }}
                >
                    <BrowserView>
                        <div
                            className="float-container"
                            style={{
                                border: "1px solid #DCDCDC",
                                backgroundColor: "#fff",
                                padding: "7%",
                                paddingTop: "4%",
                                borderRadius: "5px",
                                paddingBottom: "4%"
                            }}
                        >
                            <div className="float-child">
                                <h2
                                    style={{
                                        textAlign: "left"
                                    }}
                                >
                                    Symptomate provides you with a fast and accurate health
                                    assessment
                                    {/* <img src={Number} alt="number" /> */}
                                </h2>

                                <h4 style={{ border: "2px solid  #DCDCDC", padding: "3%" }}>
                                    <BiArrowFromLeft size="3rem" style={{ color: "#0047b3", paddingBottom: "2%" }}/>
                                    {data[0]}
                                </h4>
                                <h4 style={{ border: "2px solid  #DCDCDC", padding: "3%" }}>
                                    <BiArrowFromLeft size="3rem" style={{ color: "#0047b3", paddingBottom: "2%" }}/>
                                    {data[1]}
                                </h4>
                                <h4 style={{ border: "2px solid  #DCDCDC", padding: "3%" }}>
                                    <BiArrowFromLeft size="3rem" style={{ color: "#0047b3", paddingBottom: "2%" }}/>
                                    {data[2]}
                                </h4>

                                <div style={{ paddingLeft: "15%", paddingTop: "3%" }}>
                                    <h5 style={{ border: "2px solid  #DCDCDC", padding: "3%" }} >
                                        < BiCheck size="3rem" style={{ color: "#0047b3", paddingBottom: "2%" }} />
                                        {data1[0]}

                                    </h5>
                                    <h5 style={{ border: "2px solid  #DCDCDC", padding: "3%" }}>
                                        < BiCheck size="3rem" style={{ color: "#0047b3", paddingBottom: "2%" }} />
                                        {data1[1]}
                                    </h5>
                                    <h5 style={{ border: "2px solid  #DCDCDC", padding: "3%" }}>
                                        < BiCheck size="3rem" style={{ color: "#0047b3", paddingBottom: "2%" }} />
                                        {data1[2]}
                                    </h5 >
                                    <h5 style={{ border: "2px solid  #DCDCDC", padding: "3%" }}>
                                        < BiCheck size="3rem" style={{ color: "#0047b3", paddingBottom: "2%" }} />
                                        {data1[3]}
                                    </h5 >
                                  
                                </div>


                            </div>
                            <div>
                                <img
                                    src={HomeImage2}
                                    alt="HomeImage2"
                                />
                            </div>
                        </div>
                    </BrowserView>
                </div>

                {/* <MobileView>
                    <div style={{ border: "1px solid #DCDCDC", backgroundColor: "#fff" }}>
                        <div className="float-container-mobile">
                            <div className="float-child">
                                <h1
                                    style={{
                                        paddingLeft: "20px",
                                        textAlign: "left"
                                    }}
                                >
                                    Symptomate provides you with a fast and accurate health
                                    assessment
                                </h1>
                                <h4 style={{ paddingLeft: "5%", paddingBottom: "5%" }}>
                                    <ul className="shome-styles">
                                        {updateData}</ul>
                                </h4>
                                

                                <div className="float-container">
                                    <div className="float-child">
                                    </div>{" "}
                                    <div style={{ paddingLeft: "0px" }} className="float-child">
                                        <p>Possible causes of your symptoms</p>
                                    </div>
                                </div>

                                <div className="float-container">
                                    <div className="float-child  check-padding">
                                    </div>{" "}
                                    <div className="float-child">
                                        <p>Options for next steps</p>
                                    </div>
                                </div>
                                <div className="float-container">
                                    <div className="float-child check-padding">
                                        <Checkmark size="medium" />
                                    </div>{" "}
                                    <div className="float-child check-padding">
                                        <p>Suggested lab tests</p>
                                    </div>
                                </div>
                            </div>
                            <div className="float-child-img ">
                                <img
                                    className="more-info-img-styles-mobile"
                                    src={HomeImage2}
                                    alt="HomeImage2"
                                />
                            </div>
                        </div>
                    </div>
                </MobileView>
 */}
            </div>
        </div >
    );
}
