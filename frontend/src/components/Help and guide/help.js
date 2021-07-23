import React from "react";
import Button from "react-bootstrap/Button";
import "../Login.css";
import Header from "../Navbar/header"

import { useHistory } from "react-router-dom";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

import { AiFillSecurityScan, AiOutlineScan, AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import { FaUserEdit } from "react-icons/fa";
import { HiOutlineDocumentSearch, HiInformationCircle } from "react-icons/hi";

export default function Help() {

    const [user, setUser] = React.useState(null);
    const [token, setToken] = React.useState(null);
    const [check, setCheck] = React.useState(false);

    const [check1, setCheck1] = React.useState(false);
    const [check2, setCheck2] = React.useState(false);
    const [check3, setCheck3] = React.useState(false);
    const [check4, setCheck4] = React.useState(false);
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

    function status() {
        setCheck(true);
    }
    function hide() {
        setCheck(false);
    }
    function status1() {
        setCheck1(true);
    }
    function hide1() {
        setCheck1(false);
    }
    function status2() {
        setCheck2(true);
    }
    function hide2() {
        setCheck2(false);
    }
    function status3() {
        setCheck3(true);
    }
    function hide3() {
        setCheck3(false);
    }
    function status4() {
        setCheck4(true);
    }
    function hide4() {
        setCheck4(false);
    }

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
                        <h1>Help</h1>

                        <div
                            style={{
                                textAlign: "center",
                                border: "1px solid #DCDCDC"
                            }}
                        >
                            <div style={{ padding: "3%" }}>

                                {check === false ?
                                    <Button style={{ color: "#0047b3", textDecoration: "none", }} variant="outline-light" onClick={status}>
                                        <h5 style={{ color: "#0047b3", textDecoration: "none" }}>
                                            If you wanted to go for <b>SYMPTOMATE DISEASE DIAGNOSER</b>,
                                            <br />

                                        </h5>
                                    </Button> :
                                    <Button style={{ color: "#0047b3", textDecoration: "none" }} variant="outline-light" onClick={hide}>
                                        <h5 style={{ color: "#0047b3", textDecoration: "none" }}>
                                            If you wanted to go for <b>SYMPTOMATE DISEASE DIAGNOSER</b>,
                                            <br />

                                        </h5>
                                    </Button>
                                }
                                <br />

                                {check &&
                                    <Button variant="link" style={{ textDecoration: "none" }}>
                                        <Link
                                            style={{ color: "#0c0530" }}
                                            to={{
                                                pathname: "/symptoms/introduction",
                                                state: {
                                                    token: token,
                                                    user: user,
                                                },
                                            }}
                                        >
                                            <AiFillSecurityScan size="40%" color="#0047b3" style={{ paddingTop: "3%" }} />
                                            <br />
                                        </Link>
                                    </Button>
                                }

                            </div>

                            <div style={{ padding: "3%" }}>
                                {check1 === false ?
                                    <Button style={{ color: "#0047b3", textDecoration: "none" }} variant="outline-light" onClick={status1}>
                                        <h5 style={{ color: "#0047b3", textDecoration: "none" }}>
                                            If you wanted to go for <b>SKIN CANCER DIAGNOSER</b>,
                                        </h5>
                                    </Button> :
                                    <Button style={{ color: "#0047b3", textDecoration: "none" }} variant="outline-light" onClick={hide1}>
                                        <h5 style={{ color: "#0047b3", textDecoration: "none" }}>
                                            If you wanted to go for <b>SKIN CANCER DIAGNOSER</b>,
                                        </h5>
                                    </Button>
                                }
                                <br />
                                {check1 &&
                                    <Button variant="link" style={{ textDecoration: "none" }}>

                                        <Link
                                            style={{ color: "#0c0530" }}
                                            to={{
                                                pathname: "/skin/skinintroduction",
                                                state: {
                                                    token: token,
                                                    user: user,
                                                },
                                            }}
                                        >
                                            <AiOutlineScan size="40%" color="#0047b3" />
                                            <br />
                                    
                                        </Link>

                                    </Button>
                                }

                            </div>
                            <div style={{ paddingTop: "1%", padding: "3%" }}>
                                {check2 === false ?
                                    <Button style={{ color: "#0047b3", textDecoration: "none" }} variant="outline-light" onClick={status2}>
                                        <h5 style={{ color: "#0047b3", textDecoration: "none" }}>
                                            If you wanted to see your <b>REPORTS</b>,
                                        </h5>

                                    </Button> :
                                    <Button style={{ color: "#0047b3", textDecoration: "none" }} variant="outline-light" onClick={hide2}>
                                        <h5 style={{ color: "#0047b3", textDecoration: "none" }}>
                                            If you wanted to see your <b>REPORTS</b>,
                                        </h5>

                                    </Button>
                                }
                                <br />
                                {check2 &&
                                    <Button variant="link" style={{ textDecoration: "none" }} onClick={hide2}>
                                        <Link
                                            style={{ color: "#0c0530" }}
                                            to={{
                                                pathname: "/reports/view",
                                                state: {
                                                    token: token,
                                                    user: user,
                                                },
                                            }}
                                        >
                                            <HiOutlineDocumentSearch size="40%" color="#0047b3" />
                                            <br />
                                        </Link>
                                    </Button>
                                }
                            </div>
                            <div style={{ paddingTop: "1%", padding: "3%" }}>
                                {check3 === false ?
                                    <Button style={{ color: "#0047b3", textDecoration: "none" }} variant="outline-light" onClick={status3}>
                                        <h5 style={{ color: "#0047b3", textDecoration: "none" }}>
                                            If you wanted to see <b>information of all DISEASES</b>,
                                        </h5>
                                    </Button> :
                                    <Button style={{ color: "#0047b3", textDecoration: "none" }} variant="outline-light" onClick={hide3}>
                                        <h5 style={{ color: "#0047b3", textDecoration: "none" }}>
                                            If you wanted to see <b>information of all DISEASES</b>,
                                        </h5>
                                    </Button>
                                }
                                <br />
                                {check3 &&
                                    <Button variant="link" style={{ textDecoration: "none" }} onClick={hide3}>
                                        <Link
                                            style={{ color: "#0c0530" }}
                                            to={{
                                                pathname: "/addinfo/conditionlibrary",
                                                state: {
                                                    token: token,
                                                    user: user,
                                                },
                                            }}
                                        >
                                            <HiInformationCircle size="40%" color="#0047b3" text="Scam" />
                                            <br />
                                    
                                        </Link>

                                    </Button>
                                }
                            </div>
                            <div style={{ paddingTop: "1%", padding: "3%" }}>
                                {check4 === false ?
                                    <Button style={{ color: "#0047b3", textDecoration: "none" }} variant="outline-light" onClick={status4}>
                                        <h5 style={{ color: "#0047b3", textDecoration: "none" }}>
                                            If you wanted to <b>EDIT YOUR PROFILE</b>,
                                        </h5>
                                    </Button> :
                                    <Button style={{ color: "#0047b3", textDecoration: "none" }} variant="outline-light" onClick={hide4}>
                                        <h5 style={{ color: "#0047b3", textDecoration: "none" }}>
                                            If you wanted to <b>EDIT YOUR PROFILE</b>,
                                        </h5>
                                    </Button>
                                }
                                <br />
                                {check4 &&
                                    <Button variant="link" style={{ textDecoration: "none" }} onCLick={hide4}>
                                        <Link
                                            style={{ color: "#0c0530" }}
                                            to={{
                                                pathname: "/editprofile",
                                                state: {
                                                    token: token,
                                                    user: user,
                                                },
                                            }}
                                        >
                                            <FaUserEdit size="40%" color="#0047b3" text="Scam" />
                                            <br />
                                        </Link>
                                    </Button>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
}
