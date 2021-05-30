import React, { useEffect } from "react";
import axios from 'axios';
import Header from "../Navbar/header"
import { Progress } from "antd";
import "antd/dist/antd.css";

import { useHistory } from "react-router-dom";
import { useLocation } from "react-router";

import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function SkinCheck() {
    const [token, setToken] = React.useState(null)
    const [user, setUser] = React.useState(null);
    var history = useHistory();
    var location = useLocation();
    const [cancer, setCancer] = React.useState(null);
    const [scancer, setSCancer] = React.useState(null);
    const [img, setImg] = React.useState(null);
    

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
            setSCancer(cancer);
            setImg(img);
            console.log("cancer is ", scancer)

        } else {
            history.push('/skin/skincheck')
        }
    }, [location, history])


    const fileInput = React.createRef();
    const [scan, setScan] = React.useState(null)

    const mySubmitHandler = event => {
        event.preventDefault();
        const data = new FormData();
        data.append('file', fileInput.current.files[0]);
        axios.post('http://localhost:5000/classify', data, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            }
        })
            .then((res) => {
                const i = res.data.label[0]
                const t = listCancer[i]
                //alert(JSON.stringify(res.data))
                setCancer(t)
                console.log(listCancer[i])
                console.log("I cant print anything")
                console.log(cancer)
            });



        //     event.preventDefault();
        //     console.log("i came here")
        //     //let image = "http://localhost:9000/images/1.jpg";
        //     const image = document.getElementById('exampleFormControlFile1');
        //     const SKIN_CLASSES = ["nv","bg","d","e","f","h","i"]
        //     const model = await tf.loadLayersModel('http://localhost:9000/tfjs_model/model.json');
        //    // const model = await tf.loadLayersModel('/tfjs_model/model.json');
        //    let tensor = tf.browser.fromPixels(image)
        //     .resizeNearestNeighbor([224,224])
        //     .toFloat();
        //     let offset = tf.scalar(127.5);
        //     tensor = tensor.sub(offset)
        //     .div(offset)
        //     .expandDims();
        //     let predictions = await model.predict(tensor).data();
        // 	let top5 = Array.from(predictions)
        // 	.map(function (p, i) { // this is Array.map
        // 		return {
        // 			probability: p,
        // 			className: SKIN_CLASSES[i] // we are selecting the value from the obj
        // 		};


        // 	}).sort(function (a, b) {
        // 		return b.probability - a.probability;

        // 	}).slice(0, 3);
        //     console.log("Loaded")        
        console.log(scan ? `http://localhost:9000/${scan.filename}` : '')
        var t = scan ? `http://localhost:9000/${scan.filename}` : ''
        setImg(t)
        console.log("submit clicked")
    }
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
                        paddingTop: "5%",
                        paddingBottom: "5%",
                        textAlign: "center"
                    }}
                >
                    <div>
                        <Progress percent={75} status="active" />
                    </div>
                    <div
                        style={{
                            border: "1px solid #DCDCDC",
                            backgroundColor: "#fff",
                            padding: "7%"
                        }}
                    >
                        <h2>Predict Your Disease Here!</h2>

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
                                    <img src={scan ? `http://localhost:9000/${scan.filename}` : ''} alt='Skin Cancer Scan' style={{ height: "60%", width: "60%" }} />
                                </div>
                            </form>
                            <form>

                                <input
                                    type='submit'
                                    onClick={mySubmitHandler}
                                />
                            </form>
                            <div>
                                <h1> {scan ? cancer : ' '} </h1>
                            </div>
                            <Button
                                type='submit'
                                variant="warning"
                                onClick={mySubmitHandler}
                            >
                                <Link
                                    to={{
                                        pathname: "/reports/viewreports",
                                        state: {
                                            token: token,
                                            user: user,
                                            cancer: cancer,
                                            img: img
                                        },
                                    }}
                                >
                                    Get report
                                 </Link>
                            </Button>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );;
}

export default SkinCheck;
