import React, { useEffect } from "react";
import Header from "../Navbar/header";
import axios from 'axios';
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router";

export default function View() {

    const [reports, viewReports] = React.useState([]);
    const [name, setName] = React.useState();
    const [age, setAge] = React.useState("12");
    const [date, setDate] = React.useState();
    const [patientid, setpatientID] = React.useState();
    const [reportid, setReportID] = React.useState();
    const [gender, setgender] = React.useState("male");
    const [token, setToken] = React.useState(null)
    const [user, setUser] = React.useState(null);
    const [cancer, setCancer] = React.useState("Cancer");

    var history = useHistory();
    var location = useLocation();

    useEffect(() => {
        if (location.state) {
            console.log(location)
            setUser(location.state.user);
            setToken(location.state.token);
            setCancer(cancer);

        } else {
            history.push('/skin/skincheck')
        }
    }, [location, history])


    useEffect(() => {


        axios.get("http://localhost:9000/users/reports/view")
            .then((res, i) => {
                const Report = res.data;
                viewReports(Report)
                setName(reports.name)
                setpatientID(reports.p_id)
                setReportID(reports.reportID)
                setDate(reports.time)
            });


    })

    return <div> <div style={{ backgroundColor: "#F8F8F8" }}>
        <Header />
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
                <h1>View Reports</h1>
                <ul>
                    {reports.map(person =>
                        <li className="shome-styles" style={{fontSize:"20px"}}>
                            Report of {person.name} and taken at {person.time} and you've {person.cancer}
                            <div style={{paddingTop:"2%",paddingBottom:"2%"}}>
                            <Button variant="success">
                                <Link
                                    to={{
                                        pathname: "/reports/aviewreports",
                                        state: {
                                            token: token,
                                            user: user,
                                            name: person.name,
                                            age: age,
                                            date: person.time,
                                            patientid: person.p_id,
                                            reportid: person.reportID,
                                            gender: gender,
                                            cancer: cancer,
                                        },
                                    }}
                                    style={{
                                        //marginTop:"5%",
                                        //marginBottom:"10%",
                                        color: "black"
                                    }}
                                >
                                    View full report
                                </Link>

                            </Button>
                            </div>

                            <Button variant="danger" href="/reports/view/delete">Delete</Button>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    textAlign: "left"
                                }}
                            >

                            </div>

                        </li>

                    )}

                </ul>

            </div>
        </div>
    </div>
    </div>;
}
