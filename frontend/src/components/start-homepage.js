import React from "react";
import "../styles.css";
import "../components/Symptoms/App.css"
import Header from "./Navbar/sheader";

import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import Image1 from "../components/images/slider_new.jpg";
import Image2 from "../components/images/slider2new.jpg";
import Image3 from "../components/images/slider3new.jpg";
import Image4 from "../components/images/slider4new.jpg";
import Image5 from "../components/images/slider5new.jpg";
import Image6 from "../components/images/slider6new.jpg";
import HomeImage2 from "../components/images/homeimg.PNG";

import { BiArrowFromLeft, BiCheck } from "react-icons/bi";
import { RiLoginBoxLine } from "react-icons/ri";
import { AiFillSecurityScan, AiOutlineScan } from "react-icons/ai";
import { HiOutlineDocumentSearch } from "react-icons/hi";

import CountUp from "react-countup";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BrowserView } from "react-device-detect";
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
        <div style={{ backgroundColor: "#F8F8F8" }}>
            
                <Header />
           
            <div>
            </div>
            <AliceCarousel autoPlay autoPlayInterval="2000" infinite>
                <div>
                    <div
                        style={{paddingLeft:'5%',paddingTop:'1%'}}
                    >
                        <img src={Image1} alt="img1" className="sliderimg" style={{height:'500px',width:'400px' }} />
                        <div style={{padding:'2%',position: 'absolute',top: '50%',left: '62%',border:'1px solid',color:'#0047b3',fontFamily: "Arial, Helvetica, sans-serif",transform: 'translate(-50%, -50%)',fontSize:'60px'}}>Check if your skin Mole is benign or Malignant in simple steps! </div>
                    </div>
                </div>
                <div style={{
                    // paddingLeft: "12%",
                    // paddingRight: "12%",
                    paddingBottom: "0%",
                }}>
                    <div style={{paddingLeft:'5%',paddingTop:'1%'}}>
                        <img src={Image2} alt="img2"  style={{height:'500px',width:'400px' }} />
                        <div style={{padding:'2%',position: 'absolute',top: '50%',left: '62%',border:'1px solid',color:'#0047b3',fontFamily: "Arial, Helvetica, sans-serif",transform: 'translate(-50%, -50%)',fontSize:'60px'}}>Convienient, Easy and simple for poor people! </div>
                    
                    </div>
                </div>
                <div>
                    <div
                        style={{paddingLeft:'5%',paddingTop:'1%'}}
                    >
                        <img src={Image3} alt="img1" className="sliderimg" style={{height:'500px',width:'400px' }} />
                        <div style={{padding:'2%',position: 'absolute',top: '50%',left: '62%',border:'1px solid',color:'#0047b3',fontFamily: "Arial, Helvetica, sans-serif",transform: 'translate(-50%, -50%)',fontSize:'60px'}}>Tell I-Symptomate your symptoms get possible prognosis! </div>
                    </div>
                </div>
                <div>
                    <div
                        style={{paddingLeft:'5%',paddingTop:'1%'}}
                    >
                        <img src={Image4} alt="img1" className="sliderimg" style={{height:'500px',width:'400px' }} />
                        <div style={{padding:'2%',position: 'absolute',top: '50%',left: '62%',border:'1px solid',color:'#0047b3',fontFamily: "Arial, Helvetica, sans-serif",transform: 'translate(-50%, -50%)',fontSize:'60px'}}>Growing with time! Now you can check Respiratory disease through xray image! </div>
                    </div>
                </div>
                <div>
                    <div
                        style={{paddingLeft:'5%',paddingTop:'1%'}}
                    >
                        <img src={Image5} alt="img1" className="sliderimg" style={{height:'500px',width:'400px' }} />
                        <div style={{padding:'2%',position: 'absolute',top: '50%',left: '62%',border:'1px solid',color:'#0047b3',fontFamily: "Arial, Helvetica, sans-serif",transform: 'translate(-50%, -50%)',fontSize:'60px'}}>Keep Record of your Mediciations through I-Symptomate! </div>
                    </div>
                </div>
                <div>
                    <div
                        style={{paddingLeft:'5%',paddingTop:'1%'}}
                    >
                        <img src={Image6} alt="img1" className="sliderimg" style={{border:"1px solid",height:'500px',width:'400px' }} />
                        <div style={{padding:'2%',position: 'absolute',top: '50%',left: '62%',border:'1px solid',color:'#0047b3',fontFamily: "Arial, Helvetica, sans-serif",transform: 'translate(-50%, -50%)',fontSize:'60px'}}>I-Symptomate keep record of your Reports by profiling system! </div>
                    </div>
                </div>
            </AliceCarousel>

            <div>
                <div
                    style={{
                        paddingLeft: "12%",
                        paddingRight: "12%",
                        paddingTop: "2%",
                    }}
                >
                    <div
                        className="float-container"
                        style={{
                            border: "1px solid #DCDCDC",
                            backgroundColor: "#fff",
                            paddingTop: "4%",
                            borderRadius: "5px",
                            borderRadius: "10px"
                        }}
                    >
                        <Button variant="link">
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
                                    <HiOutlineDocumentSearch size="50%" color="#0047b3" />
                                    <br />
                                    <h5 style={{ color: "#0047b3" }}>Online Reports</h5>

                                </Link>
                            </div>
                        </Button>
                        <div style={{ padding: "1%" }}></div>
                        <Button variant="link">
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
                                    <AiOutlineScan size="50%" color="#0047b3" />
                                    <br />
                                    <h5 style={{ color: "#0047b3" }}>Scan Skin Image</h5>
                                </Link>
                            </div>
                        </Button>

                        <div style={{ padding: "1%" }}></div>
                        <Button variant="link">
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
                                    <AiFillSecurityScan size="50%" color="#0047b3" style={{ paddingTop: "3%" }} />
                                    <br />
                                    <h5 style={{ color: "#0047b3" }}>Symptomate Disease Detection</h5>

                                </Link>
                            </div>
                        </Button>

                        <div style={{ padding: "1%" }}></div>
                        <Button variant="link">
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
                                    <RiLoginBoxLine size="50%" style={{ paddingTop: "3%", color: "#0047b3" }} />
                                    <br />
                                    <h5 style={{ color: "#0047b3" }}>Login to symptomate</h5>
                                </Link>
                            </div>
                        </Button>
                    </div>
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
                                backgroundColor: "#0047b3",
                                borderRadius: "10px"
                            }}
                        >

                            <div className="number" >
                                <CountUp duration={10} className="counter button" end={121571} />
                            </div>

                        </div>
                        <h3 style={{ paddingLeft: "32%", fontWeight: "bold", }}>Patients visited I-Symptomate website</h3>

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
                        paddingBottom: "4%",

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
                                paddingBottom: "4%",
                                borderRadius: "10px"
                            }}
                        >
                            <div className="float-child">
                                <h2 style={{ textAlign: "left" }}>
                                    I-Symptomate provides you with a fast and accurate health assessment
                                    {/* <img src={Number} alt="number" /> */}
                                </h2>

                                <h4 style={{ border: "2px solid  #DCDCDC", padding: "3%" }}>
                                    <BiArrowFromLeft size="3rem" style={{ color: "#0047b3", paddingBottom: "2%" }} />
                                    {data[0]}
                                </h4>
                                <h4 style={{ border: "2px solid  #DCDCDC", padding: "3%" }}>
                                    <BiArrowFromLeft size="3rem" style={{ color: "#0047b3", paddingBottom: "2%" }} />
                                    {data[1]}
                                </h4>
                                <h4 style={{ border: "2px solid  #DCDCDC", padding: "3%" }}>
                                    <BiArrowFromLeft size="3rem" style={{ color: "#0047b3", paddingBottom: "2%" }} />
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
                                </div>
                            </div>
                            <div>
                                <img src={HomeImage2} alt="HomeImage2" />
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
