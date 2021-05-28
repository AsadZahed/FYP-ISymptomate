import React, { useEffect } from "react";
import Header from "../Navbar/header";
import Disease from "./DiseasesOutput.json";

export default function Library() {
  const [error, setError] = React.useState(null);
  const [isLoaded, setIsLoad] = React.useState(false);
  const [post, setPost] = React.useState([]);





  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(
        // handle the result
        (result) => { setPost(result) });
  },

    // Handle error 
    (error) => {
      setIsLoad(true)

    },
  )




  return (
    <div>
      <Header />
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
                paddingBottom: "5%",
                alignItems: "center"
              }}
            >

              <h1>Youre in Condition Library</h1>
              <p>Here you can see all the diseases with it descrption</p>
            
                {
                  post.map(post => (
                    <li key={post.id} align="start">
                      <div>
                        <h3>Title</h3>
                        <p>{post.title}</p>
                        <h3>Description</h3>
                        <p>{post.body}</p>
                      </div>
                    </li>
                  ))
                }

            </div>
          </div>
        </div>
      </div>
  );
}


