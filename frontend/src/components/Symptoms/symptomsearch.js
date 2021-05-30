import React,{ useEffect } from "react";
import countries from "./Diseases";
import axios from 'axios';
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router";
import diseasesList from "./diseasesList.js";
import symptomsList from "./symptomsList.js";
import { Link } from "react-router-dom";
import listCancer from "./symptomsList.js"
//import countrie from "D:/CU 7th Semester/FYP-I/Updated Project Docs/Updated-28-may/Intelligent-Symptomate/frontend/src/components/BasicAndPersonalInformation/medicine.js";
import "./App.css";
import "../../styles.css";
import { Button } from "react-bootstrap";

import { Progress } from "antd";
import "antd/dist/antd.css";
import Header from "../Navbar/header"

import { BrowserView, MobileView } from "react-device-detect";

export default function AutoCompletedText() {
  var th=""
  const symptomList=['itching', 'skin_rash', 'nodal_skin_eruptions', 'continuous_sneezing', 'shivering', 'chills', 'joint_pain', 'stomach_pain', 'acidity', 'ulcers_on_tongue', 'muscle_wasting', 'vomiting', 'burning_micturition', 'spotting_ urination', 'fatigue', 'weight_gain', 'anxiety', 'cold_hands_and_feets', 'mood_swings', 'weight_loss', 'restlessness', 'lethargy', 'patches_in_throat', 'irregular_sugar_level', 'cough', 'high_fever', 'sunken_eyes', 'breathlessness', 'sweating', 'dehydration', 'indigestion', 'headache', 'yellowish_skin', 'dark_urine', 'nausea', 'loss_of_appetite', 'pain_behind_the_eyes', 'back_pain', 'constipation', 'abdominal_pain', 'diarrhoea', 'mild_fever', 'yellow_urine', 'yellowing_of_eyes', 'acute_liver_failure', 'fluid_overload', 'swelling_of_stomach', 'swelled_lymph_nodes', 'malaise', 'blurred_and_distorted_vision', 'phlegm', 'throat_irritation', 'redness_of_eyes', 'sinus_pressure', 'runny_nose', 'congestion', 'chest_pain', 'weakness_in_limbs', 'fast_heart_rate', 'pain_during_bowel_movements', 'pain_in_anal_region', 'bloody_stool', 'irritation_in_anus', 'neck_pain', 'dizziness', 'cramps', 'bruising', 'obesity', 'swollen_legs', 'swollen_blood_vessels', 'puffy_face_and_eyes', 'enlarged_thyroid', 'brittle_nails', 'swollen_extremeties', 'excessive_hunger', 'extra_marital_contacts', 'drying_and_tingling_lips', 'slurred_speech', 'knee_pain', 'hip_joint_pain', 'muscle_weakness', 'stiff_neck', 'swelling_joints', 'movement_stiffness', 'spinning_movements', 'loss_of_balance', 'unsteadiness', 'weakness_of_one_body_side', 'loss_of_smell', 'bladder_discomfort', 'foul_smell_of urine', 'continuous_feel_of_urine', 'passage_of_gases', 'internal_itching', 'toxic_look_(typhos)', 'depression', 'irritability', 'muscle_pain', 'altered_sensorium', 'red_spots_over_body', 'belly_pain', 'abnormal_menstruation', 'dischromic _patches', 'watering_from_eyes', 'increased_appetite', 'polyuria', 'family_history', 'mucoid_sputum', 'rusty_sputum', 'lack_of_concentration', 'visual_disturbances', 'receiving_blood_transfusion', 'receiving_unsterile_injections', 'coma', 'stomach_bleeding', 'distention_of_abdomen', 'history_of_alcohol_consumption', 'fluid_overload.1', 'blood_in_sputum', 'prominent_veins_on_calf', 'palpitations', 'painful_walking', 'pus_filled_pimples', 'blackheads', 'scurring', 'skin_peeling', 'silver_like_dusting', 'small_dents_in_nails', 'inflammatory_nails', 'blister', 'red_sore_around_nose', 'yellow_crust_ooze']
  const diseaseList = ['Fungal infection' ,'Allergy' ,'GERD', 'Chronic cholestasis', 'Drug Reaction',
'Peptic ulcer diseae', 'AIDS', 'Diabetes' ,'Gastroenteritis',
'Bronchial Asthma' ,'Hypertension' ,'Migraine' ,'Cervical spondylosis',
'Paralysis (brain hemorrhage)' ,'Jaundice' ,'Malaria', 'Chicken pox',
'Dengue', 'Typhoid' ,'hepatitis A', 'Hepatitis B' ,'Hepatitis C',
'Hepatitis D' ,'Hepatitis E', 'Alcoholic hepatitis', 'Tuberculosis',
'Common Cold', 'Pneumonia' ,'Dimorphic hemmorhoids(piles)', 'Heart attack',
'Varicose veins' ,'Hypothyroidism' ,'Hyperthyroidism' ,'Hypoglycemia',
'Osteoarthristis', 'Arthritis', '(vertigo) Paroymsal  Positional Vertigo',
'Acne', 'Urinary tract infection', 'Psoriasis' ,'Impetigo',
'Fungal infection']
  // super(props);
  //var countries = Object.keys(countrie[0])
  const [state, setState] = React.useState({
    suggestions: [],
    text: ""
  });
  const [token, setToken] = React.useState(null)
  const [user, setUser] = React.useState(null);
  var history = useHistory();
  var location = useLocation();
  const [data, setData] = React.useState("");
  const [items, setItems] = React.useState([]);
  const [cancer, setCancer] = React.useState("");
  const [id,setId] =React.useState([]);
  useEffect(() => {
    if (location.state) {
        console.log(location)
        setUser(location.state.user);
        setToken(location.state.token);
        //setCancer(cancer);
        // console.log(";;;;;;;;;")
        // console.log("cancer is ", cancer)
        // console.log(";;;;;;;;;")
        // setImg(img);
    } else {
        history.push('/symptoms/symptomsearch')
    }
}, [location, history])
  const onTextChange = (e) => {
    const value = e.target.value;
    let suggestions = [];
    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, "i");
      suggestions = symptomsList.sort().filter((v) => regex.test(v));
      console.log(suggestions);
    }
    setState(() => ({
      suggestions,
      text: value
    }));
    setData(suggestions);
  };

  const mySubmitHandler = event => {
    event.preventDefault();
    console.log("LILILILILILIK")
    console.log(id)
    console.log("LILILILILILIK")
    var li = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    id.map((item,index) => {
        li[item]=1;
    })
    const data = {symptoms:li};
    // console.log("LILILILILILIK")
     console.log(li)
    // 
    // data.append('file', fileInput.current.files[0]);
    axios.post('http://localhost:5000/classifysymptoms', data, {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        }
    })
        .then((res) => {


                const i = res.data.label[0]
                const t = diseaseList[i]               
                setCancer(t)
                // console.log(listCancer[i])
                // console.log("I cant print anything")
                // console.log(cancer)



          // console.log(res.data.label[0])
          // const i = res.data.label[0]
          // const t = diseasesList[i]
          // th = diseasesList[i]
          console.log("ttttt")
          console.log(diseasesList[i])
          console.log("ttttt")
          // //alert(JSON.stringify(res.data))
          // setCancer(diseasesList[i])
          // console.log(";;;;;;;;; cancer is")
          // console.log(th)
          // setCancer(th)
          // console.log(";;;;;;;;;")
            // const i = res.data.label[0]
            // const t = listCancer[i]
            // alert(JSON.stringify(res.data))
            // setCancer(t)
            // console.log(listCancer[i])
            // console.log("I cant print anything")
            // console.log(cancer)
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
    // console.log(scan ? `http://localhost:9000/${scan.filename}` : '')
    // var t = scan ? `http://localhost:9000/${scan.filename}` : ''
    // setImg(t)
    // console.log("submit clicked")
}
  function selectedText(value,index) {
      if(items.find(function(element){
        return value == element
      })){ 
        console.log("Item already in list")
      }
      else{
        console.log("Item not in list")
      setItems([...items,value])
    
        console.log("idddd")
   
        //console.log(item)
        //console.log(symptomList.indexOf(item))
        setId([...id,symptomList.indexOf(value)])
        console.log(id)
       //console.log(symptomList[symptomList.indexOf(item)])
      console.log("idddd")
      
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

    // console.log("----countries----")
    // // var t = Object.keys(medicine[0])
    
    //  console.log(countries)
    // console.log("----countries----")
    // console.log(counties)

    let { suggestions } = state;
    if (suggestions.length === 0) {
      return null;
    }
    return (
      <ul style={{marginLeft:"10%", height:"30vh"}}>
        {suggestions.map((item, index) => (
          <li key={index} onClick={() => selectedText(item,index)} >
            {item} 
            <Button onClick={addItem} variant="warning"  style={{marginLeft:"10%"}}>
                      Add
                  </Button>
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
                //padding: "7%"
              }}
            >
              <div classsName="float-child block-example border-bottom border-dark">
                <div id="notebooks" style={{ padding: "5%",margin:"5%" }}>
                  <h2>Search Symptoms</h2>
                  <input
                    id="query"
                    type="text"
                    onChange={onTextChange}
                    value={text}
                  />
                  <div>
                    




                    {renderSuggestions()}




                    {/* <Button>Suggestions: {suggestions.length}</Button> */}
                  </div>
                </div>
              </div>
              <div classsName="float-child" style={{ paddingTop: "35%" }}>
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
              <div>
                                <h1> {cancer} </h1>
                            </div>
              <div className="right-group">
              <Button
                                type='submit'
                                variant="warning"
                                onClick={mySubmitHandler}
                            >
                                {/* <Link
                                    to={{
                                        pathname: "/reports/aviewreports",
                                        state: {
                                          token: token,
                                          user: user,
                                          cancer:cancer,
                                          img: "AsadFaheem"
                                        },
                                    }}
                                > */}
                                    Get result
                                 {/* </Link> */}
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
