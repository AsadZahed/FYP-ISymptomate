import React from "react";
import Button from "react-bootstrap/Button";
import "../Login.css";
import Header from "../Navbar/header"

import { useHistory } from "react-router-dom";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

import { AiFillSecurityScan, AiOutlineScan } from "react-icons/ai";
import { FaUserEdit } from "react-icons/fa";
import { HiOutlineDocumentSearch, HiInformationCircle } from "react-icons/hi";

export default function Help() {

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
                <h1>Help</h1>

                <div
                    style={{
                        textAlign: "center",

                    }}
                >
                    <div style={{ border: "1px solid #DCDCDC", padding: "3%" }}>
                        <h3>If you wanted to go for <b>SYMPTOMATE DISEASE DIAGNOSER</b>, click below</h3>
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
                                <h5 style={{ color: "#0047b3" }}>Symptomate Disease Detection</h5>

                            </Link>
                        </Button>


                    </div>
                    <br />

                    <div style={{ border: "1px solid #DCDCDC", padding: "3%" }}>
                        <h3>If you wanted to go for <b>SKIN CANCER DIAGNOSER</b>, click below</h3>

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
                                <h5 style={{ color: "#0047b3" }}>Scan Skin Image</h5>

                            </Link>

                        </Button>

                    </div>
                    <br />
                    <div style={{ border: "1px solid #DCDCDC", paddingTop: "1%", padding: "3%" }}>
                        <h3>If you wanted to see your <b>REPORTS</b>, click below</h3>

                        <Button variant="link" style={{ textDecoration: "none" }}>
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
                                <h5 style={{ color: "#0047b3" }}>View Reports</h5>
                            </Link>
                        </Button>
                    </div>
                    <br />
                    <div style={{ border: "1px solid #DCDCDC", paddingTop: "1%", padding: "3%" }}>
                        <h3>If you wanted to see <b>information of all DISEASES</b>, click below</h3>

                        <Button variant="link" style={{ textDecoration: "none" }}>
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
                                <h5 style={{ color: "#0047b3" }}>Know about disease</h5>

                            </Link>
                        </Button>
                    </div>
                    <br />
                    <div style={{ border: "1px solid #DCDCDC", paddingTop: "1%", padding: "3%" }}>
                        <h3>If you wanted to <b>EDIT YOUR PROFILE</b>, click below</h3>

                        <Button variant="link" style={{ textDecoration: "none" }}>
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
                                <h5 style={{ color: "#0047b3" }}>Edit profile</h5>

                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>;
}
