import React from "react";
import countries from "./Diseases";
import "./App.css";
import "../../styles.css";
import { Button } from "react-bootstrap";

import { Progress } from "antd";
import "antd/dist/antd.css";
import Header from "../Navbar/header"

import { BrowserView, MobileView } from "react-device-detect";

export default function AutoCompletedText() {
  // super(props);
  const [state, setState] = React.useState({
    suggestions: [],
    text: ""
  });
  const [data, setData] = React.useState("");
  const [items, setItems] = React.useState([]);
  
  const onTextChange = (e) => {
    const value = e.target.value;
    let suggestions = [];
    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, "i");
      suggestions = countries.sort().filter((v) => regex.test(v));
      console.log(suggestions);
    }
    setState(() => ({
      suggestions,
      text: value
    }));
    setData(suggestions);
  };

  function selectedText(value) {
      if(items.find(function(element){
        return value == element
      })){ 
        console.log("Item already in list")
      }
      else{
        console.log("Item not in list")
      setItems([...items,value])
      }
    
    setState(() => ({
      text: value,
      suggestions: []
    }));
  }

  function addItem(value) {
 
  }

  function deleteItem(id) {
   console.log("id===>")
   console.log(id)
    const updatedList = items.filter((item,idi) => idi !== id);
    setItems([...updatedList])
    console.log(updatedList)
  }
 

  const renderSuggestions = () => {
    let { suggestions } = state;
    if (suggestions.length === 0) {
      return null;
    }
    return (
      <ul>
        {suggestions.map((item, index) => (
          <li key={index} onClick={() => selectedText(item)}>
            {item} 
          </li>
        ))}
      </ul>
    );
  };

  const { text, suggestions } = state;
  return (
    <div>
      <Header />
      <div style={{ backgroundColor: "#F8F8F8" }}>
        <BrowserView>
          <div
            style={{
              paddingLeft: "12%",
              paddingRight: "12%",
              paddingTop: "5%",
              paddingBottom: "5%"
            }}
          >
            {" "}
            <div>
              <Progress percent={80} status="active" />
            </div>
            <div
              className="float-container-mobile "
              style={{
                border: "1px solid #DCDCDC",
                backgroundColor: "#fff",
                padding: "7%"
              }}
            >
              <div classsName="float-child block-example border-bottom border-dark">
                <div id="notebooks" style={{ padding: "5%" }}>
                  <h2>Search Diseases</h2>
                  <input
                    id="query"
                    type="text"
                    onChange={onTextChange}
                    value={text}
                  />
                  <div>
                    <Button onClick={addItem} variant="warning">
                      Add
                  </Button>




                    {renderSuggestions()}




                    <Button>Suggestions: {suggestions.length}</Button>
                  </div>
                </div>
              </div>
              <div classsName="float-child" style={{ paddingTop: "50%" }}>
                <h1>Selected Diseases are</h1>
                <div
                  style={{
                    border: "1px solid #DCDCDC",
                    backgroundColor: "#f8f8f8",
                    padding: "7%"
                  }}
                >

                {/* item mapping */} 

                  {items.map((item,index) => {



                    return (
                      <div
                        className="btn-toolbar"
                        style={{ backgroundColor: "#fff" }}
                      >
                        <div className="left-group">

                          {/* displaying selected disease here */}
                          <p style={{ fontSize: "30px" }}>
                            
                            {item}
                            
                          </p>



                          <div className="right-group">
                            <Button variant="danger" onClick={() => deleteItem(index)} >
                              Delete
                          </Button>
                          </div>



                        </div>


                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="right-group">
                <Button href="/results" variant="warning">
                  Next
              </Button>
              </div>

            </div>
          </div>
        </BrowserView>

        <MobileView>
        <div
          style={{
            padding: "3%"
          }}
        >
          <div
            className="float-container-mobile "
            style={{
              border: "1px solid #DCDCDC",
              backgroundColor: "#fff"
            }}
          >
            <div classsName="float-child block-example border-bottom border-dark">
              <div id="notebooks-mobile" style={{ padding: "5%" }}>
                <h2>Search Diseases</h2>
                <input
                  id="query"
                  type="text"
                  onChange={onTextChange}
                  value={text}
                />
                <div>
                  <Button onClick={addItem} variant="warning">
                    Add
                  </Button>
                  {renderSuggestions()}
                  <Button>Suggestions: {suggestions.length}</Button>
                </div>
              </div>
            </div>
            <div classsName="float-child" style={{ paddingTop: "50%" }}>
              <div>
                {items.map((data) => {
                  return (
                    <div>
                      <h1>Selected Diseases are</h1>
                      <h1>{data}</h1>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="right-group">
              <Button href="/results" variant="warning">
                Next
              </Button>
            </div>
          </div>
        </div>
      </MobileView>
      </div>
    </div>
  );
}
