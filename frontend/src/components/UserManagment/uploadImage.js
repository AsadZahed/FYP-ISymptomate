

import React, { useEffect } from "react";
import axios from 'axios';
import Header from "../Navbar/header"
import { Progress } from "antd";
import "antd/dist/antd.css";

import { useHistory } from "react-router-dom";
import { useLocation } from "react-router";

import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Profile() {

    const [token, setToken] = React.useState(null)
    const [user, setUser] = React.useState(null);
    var history = useHistory();
    var location = useLocation();
    const [cancer, setCancer] = React.useState("");
    const [scancer, setSCancer] = React.useState(null);
    const [img, setImg] = React.useState(null);
    const fileInput = React.createRef();
    const [scan, setScan] = React.useState(null)
    const [mess, setMess] = React.useState("")
    const listCancer = [
        ' Actinic keratoses',
        'Basal cell carcinoma',
        'Benign keratosis-like lesions',
        'Dermatofibroma',
        'Melanocytic nevi',
        'Melanoma',
        'Vascular lesions'
    ]
    useEffect(() => {
        if (location.state) {
            console.log(location)
            setUser(location.state.user);
            setToken(location.state.token);
            setCancer(cancer);
            setImg(img);
            console.log("cancer is ", scancer)

        } else {
            history.push('/skin/skincheck')
        }
    }, [location, history])

    const handleChange = event => {
        event.preventDefault();
        const data = new FormData();
        data.append('file', fileInput.current.files[0]);
        axios.post('http://localhost:9000/skin/skincancer', data, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            }
        })
            .then((res) => {
                //alert(JSON.stringify(res.data))
                setScan(res.data)
                console.log(scan)
            });
    }

    return (
        <div>
            <Header token={token} user={user} />

            <div style={{ backgroundColor: "#F8F8F8" }}>
                <div
                    style={{
                        paddingLeft: "12%",
                        paddingRight: "12%",
                        paddingTop: "2%",
                        paddingBottom: "5%",
                        textAlign: "center"
                    }}
                >
                    <div
                        style={{
                            border: "1px solid #DCDCDC",
                            backgroundColor: "#fff",
                            padding: "5%"
                        }}
                    >
                        <h2>Upload yout profile picture Here!</h2>

                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center"
                            }}
                        >

                            {/* <input id='scan' type='file' ref={fileInput} accept="image/*" onChange={handleChange} />
                    <img src={scan ? `http://localhost:9000/${scan.filename}` : ''} alt='Skin Cancer Scan' className='scan' /> */}


                            <form>
                                <div class="form-group">
                                    <input type='file' ref={fileInput} accept="image/*" onChange={handleChange} class="form-control-file" id="exampleFormControlFile1" />
                                    <img src={scan ? `http://localhost:9000/${scan.filename}` : ''} alt='Skin Cancer Scan' style={{ height: "150px", width: "250px" }} />
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
