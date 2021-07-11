import React,{useEffect} from "react";
import "../../styles.css";
import { BrowserView, MobileView } from "react-device-detect";
import Aboutus from "../about";
import Header from "../Navbar/header"
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router";


export default function About() {
    var history = useHistory();
    var location = useLocation();
    const [user, setUser] = React.useState(null);
    const [token, setToken] = React.useState(null)
  
  
    useEffect(() => {
      if (location.state) {
        console.log(location)
        setUser(location.state.user);
        setToken(location.state.token)
      } else {
        history.push('/addinfo/conditionlibrary')
      }
    }, [location, history])
  
   
  
    return (
       <div style={{ backgroundColor: "#F8F8F8" }}>
           <Header token={token} user={user}/>  
            <BrowserView>
                <div
                    style={{
                        paddingLeft: "12%",
                        paddingRight: "12%",
                        paddingTop: "5%",
                        paddingBottom: "5%",
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
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "left",
                                alignItems: "left"
                            }}
                        >
                           <Aboutus />

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
                            padding: "7%",
                            alignItems: "center"
                        }}
                    >
                        <h5>About us</h5>

                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                padding: "5%",

                                justifyContent: "center",
                                alignItems: "center"
                            }}
                        >
                            <p>Welcome to Intelligent Symptomate, your number one source for all things [product].
                            We're dedicated to providing you the very best of [product], with an emphasis on [store characteristic 1],
                            [store characteristic 2], [store characteristic 3].Founded in [year] by [founder name], Intelligent
                            Symptomate has come a long way from its beginnings in [starting location]. When [founder name] first
                            started out, [his/her/their] passion for [brand message - e.g. "eco-friendly cleaning products"]drove
                            them to start their own business.We hope you enjoy our products as much as we enjoy offering them to
                            you. If you have any questions or comments, please don't hesitate to contact us.

                            Sincerely,
                            [founder name]
</p>
                        </div>
                    </div>
                </div>
            </MobileView>
        </div>
    );
}
