import React, { useEffect } from "react";
import "../../styles.css";
import Header from "../Navbar/header"
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router";

import { Button } from "react-bootstrap";

export default function Notification() {
    const [user, setUser] = React.useState(null);
    const [token, setToken] = React.useState(null)
    var history = useHistory();
    var location = useLocation();

    useEffect(() => {
        if (location.state) {
            console.log(location)
            setUser(location.state.user);
            setToken(location.state.token)
        } else {
            history.push('/')
        }
    }, [location, history])


    return (
        <div>
            <Header token={token} user={user} />

            <div style={{ backgroundColor: "#F8F8F8" }}>
                <div
                    style={{
                        paddingLeft: "12%",
                        paddingRight: "12%",
                        paddingTop: "1%",
                        paddingBottom: "5%"
                    }}
                >
                    <div
                        style={{
                            border: "1px solid #DCDCDC",
                            backgroundColor: "#fff",
                            padding: "7%",
                        }}
                    >
                        <h1>Recieved Notifications</h1>
                        <div style={{paddingLeft:"38%"}}>
                        <Button >
                        <a href="/" class="notification">
                            <span>Inbox</span>
                            <span class="badge">99+</span>
                        </a>
                        </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}