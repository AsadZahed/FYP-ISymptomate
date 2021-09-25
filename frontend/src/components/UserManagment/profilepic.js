import React, { useEffect } from "react";
import "../../styles.css";
import { Button, Alert } from "react-bootstrap";
import { BrowserView, MobileView } from "react-device-detect";
import axios from 'axios';
import Header from "../Navbar/header"
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router";

export default function ProfilePic() {
    const [img, setImg] = React.useState();
    const fileInput = React.createRef();
    const [user, setUser] = React.useState(null);
    const [token, setToken] = React.useState(null);
    const [image,setImage] = React.useState('')
    var history = useHistory();
    var location = useLocation();
    const [showResults, setShowResults] = React.useState(false);

    useEffect(() => {
        if (location.state) {
            console.log(location)
            setUser(location.state.user);
            setToken(location.state.token);
            setImage("http://localhost:9000/"+location.state.user.pathprofilepic)
 
        } else {
            history.push('/users/editprofile/profilepic')
        }
    }, [location, history])


    const handleChange = event => {
        event.preventDefault();
        const data = new FormData();
        data.append('file', fileInput.current.files[0]);
        axios.post('http://localhost:9000/users/uploadprofilepicture', data, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                'Authorization': `Bearer ${token}`
            }
        })
            .then((res) => {
                //alert(JSON.stringify(res.data))
                setImg(res.data)
                console.log("image is", img)
            });
    }
    return (
        <div>
            <Header token={token} user={user} image={image}/>

            <div style={{ backgroundColor: "#F8F8F8" }}>
                <BrowserView>
                    <div
                        style={{
                            paddingLeft: "12%",
                            paddingRight: "12%",
                            paddingTop: "5%",
                            paddingBottom: "5%",
                            alignItems: "center"
                        }}
                    >
                        <div
                            style={{
                                border: "1px solid #DCDCDC",
                                backgroundColor: "#fff",
                                padding: "7%",
                                textAlign: "center"
                            }}
                        >
                            <h5>Change Profile PIcture</h5>
                            {/* <p>{msg}</p> */}

                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    alignItems: "center"
                                }}
                            >
                                <form>
                                    <div class="form-group">
                                        <input type='file' ref={fileInput} accept="image/*" onChange={handleChange} class="form-control-file" id="exampleFormControlFile1" />
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </BrowserView>
                <MobileView>
                    <div
                        style={{
                            paddingTop: "5%",
                            textAlign: "center"
                        }}
                    >
                        <div
                            style={{
                                border: "1px solid #DCDCDC",
                                backgroundColor: "#fff",
                                padding: "7%"
                            }}
                        >
                            <h5>Change name</h5>

                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    textAlign: "left"
                                }}
                            >
                                <form>
                                    <div class="form-group">
                                        <input type='file' ref={fileInput} accept="image/*" onChange={handleChange} class="form-control-file" id="exampleFormControlFile1" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </MobileView>
            </div>
        </div>
    );
}
