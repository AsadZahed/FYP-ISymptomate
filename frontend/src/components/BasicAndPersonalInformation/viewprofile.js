import React, { useEffect } from "react";
import axios from 'axios';
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router";
import Header from "../Navbar/header"
//import scan from "../../../../SBackend/public/images/screenshot.png"
export default function Report() {

    const [token, setToken] = React.useState(null)
    const [user, setUser] = React.useState(null);
    const [name, setName] = React.useState("anonymous");
    const [height, setheight] = React.useState("");
    const [weight, setWeight] = React.useState("");
    const [ages, setages] = React.useState("");
    const [gender, setgender] = React.useState("");
    const [email, setEmail] = React.useState("");
    var history = useHistory();
    var location = useLocation();

    useEffect(() => {
        try {
            if (location.state) {
                console.log(location)
                setUser(location.state.user);
                setToken(location.state.token)
                setName(location.state.user.name)
                setEmail(location.state.user.username)
            } else {
                history.push('/addinfo/viewprofile')
            }

        }
        catch (res) {
            console.log(res.error)

        }
    }, [location, history])


    useEffect(() => {
        if (location.state) {
            setUser(location.state.user);
            setToken(location.state.token);
            axios.get('http://localhost:9000/users/getBAsicInfo', {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                    'Authorization': `Bearer ${location.state.token}`
                }
            })
                .then(res => {
                    console.log(res.data)
                    setages(res.data.age[0].age)

                    console.log("i am in front end", res.data.age[0].age)
                    setgender(res.data.age[0].gender)

                })
        }
    }, [location, token, user]);

    useEffect(() => {
        if (location.state) {
            setUser(location.state.user);
            setToken(location.state.token);
            axios.get('http://localhost:9000/users/getPersonalInfo', {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                    'Authorization': `Bearer ${location.state.token}`
                }
            })
                .then(res => {
                    console.log(res.data)
                    if (res.data.success === false) {
                        setheight(0)
                        setWeight(0)
                    }
                    else {
                        setheight(res.data.personal[0].height)
                        setWeight(res.data.personal[0].weight)
                        console.log("i am in front end", res.data.personal[0].height)
                    }
                })
        }
    }, [location, token, user]);

    const [showResults, setShowResults] = React.useState(false)

    const onClick = () => setShowResults(true)


    return (
        <div style={{
            paddingBottom: "5%"
        }}>
            <Header token={token} user={user} />

            <div id="GFG" style={{ width: "50%", margin: "auto", border: "2px solid black", paddingBottom: "1%" }}>
                <form >
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            backgroundColor: "#0047b3",
                            border: "2px solid black",
                            color: "#fff",
                            padding: "10px",
                        }}
                    >

                        <p style={{ fontSize: "20px", fontWeight: "500" }}>
                            I-Symptomate | An intelligent
                        </p>
                        <p style={{ alignSelf: "center" }}>
                            View Profile
                        </p>
                    </div>
                    <div style={{ backgroundColor: "#ffff", padding: "10px" }}>
                        <div
                            style={{
                                padding: "0px 10px 0px 10px",
                                color: "#282c34",
                                display: "flex",
                            }}
                        >
                            <p
                                style={{
                                    fontSize: "20px",
                                    fontWeight: "500",
                                    textDecoration: "underline",
                                }}
                            >
                                Patient Information:
                            </p>
                        </div>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-around",
                                color: "#282c34",
                                textDecoration: "underline",
                                padding: "10px",
                            }}
                        >
                            <div style={{ marginRight: "-10%" }}>
                                <p>
                                    <strong>Full Name: </strong> {name}
                                </p>
                                <p>
                                    <strong>Gender: </strong> {gender}
                                </p>
                                <p>
                                    <strong>Age: </strong> {ages}
                                </p>
                            </div>
                            <div>
                                <p>
                                    <strong>Email:</strong> {email}
                                </p>
                                <p>
                                    <strong>Height: </strong> {height} feet
                                </p>
                                <p>
                                    <strong>Weight:</strong> {weight} kg
                                </p>
                            </div>
                        </div>
                        <hr />


                    </div>
                </form>

            </div>

        </div>
    );
}

