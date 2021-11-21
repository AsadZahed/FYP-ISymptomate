import ChatBot from 'react-simple-chatbot';
import { useHistory, useLocation } from "react-router";

import React, { useEffect } from "react";
import { ThemeProvider } from "styled-components";


export default function ChatBotHelper() {

    const CHATBOT_THEME = {
        background: "#FFFEFC",
        fontFamily: "Roboto",
        headerBgColor: "#FFDB58",
        headerFontColor: "black",
        headerFontSize: "150%",
        botBubbleColor: "#0047b3",
        botFontColor: "white",
        userBubbleColor: "#ffcc00",
        userFontColor: "white",
    };


    const BotRedirect = ({ url, message }) => {
        return (
            <div>
                <a href={url} target="_blank">
                    {message}
                </a>
            </div>
        );
    };

    const mess = "Hello! "
    console.log("------------")
    console.log("------------")
    console.log()
    console.log(mess)
    console.log()
    console.log("------------")
    console.log("------------")
    const [steps, setSteps] = React.useState([

        {
            id: '1',
            message: mess,
            trigger: '2',
        },

        {
            id: '2',
            message: 'How can I help you? ',
            trigger: '3',
        },
        {
            id: '3',
            options: [
                { value: 1, label: 'Want to know about disease detection?', trigger: '4' },
                { value: 2, label: 'Want to detect skin cancer', trigger: '5' },
            ]
        },
        {
            id: '4',
            component: (
                <BotRedirect
                    message="Here click on it you can find about that!"
                    url="http://localhost:3000/addinfo/conditionlibrary"
                />
            ),
            trigger: '2'
        },
        {
            id: '5',
            component: (
                <BotRedirect
                    message="Click here to see!"
                    url=""
                />
            ),
            trigger: '2'
        },	// 

    ])
    return (
        // speechSynthesis={{ enable: true, lang: 'en' }}
        <>
            <ThemeProvider theme={CHATBOT_THEME}>
                <ChatBot headerTitle="Speech Synthesis"
                    recognitionEnable={false}
                     steps={steps} floating={true} />
            </ThemeProvider>
        </>
    )
}
