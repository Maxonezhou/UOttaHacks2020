import express from "express";
import http from "http";
import bodyParser from "body-parser";
import app from './App';

import { setInterval, clearInterval } from "timers";

const port = 9002;

function initializeExpress() {
    const expressApp = express();

    expressApp.use(express.static('public'));

    // add & configure middleware
    expressApp.use(bodyParser.urlencoded({
        extended: false
    }))
    expressApp.use(bodyParser.json())

    // Subscription example
    expressApp.post('/subscribe', (req, res) => {
        app.subscribeToTopic("SomeTopic");
        res.status(200).send('{"result":"ok"}');
    });

    // Publish example
    expressApp.post('/publish', (req, res) => {
        let message = JSON.stringify({text: "Hello"});
        let topic = "SomeTopic";
        app.publishMessage(topic, message);
        res.status(200).send('{"result":"ok"}');
    });

    var server = http.createServer(expressApp);

    server.listen(port, () => {
        console.log("server starting on port : " + port)
    });

}

function initializeApplication(){
    app.initialize();
}

// initialize our application code 
initializeApplication();

// initialize the express server
initializeExpress();

app.subscribeToTopic('/start');

// var started = false;
// let myInterval1 = setInterval(() => {
//     started = app.messageHandler('/start', 'Startup');
//     if (started)
//     {
//         clearInterval(myInterval1);
//     }
// }, 100);

//app.messageHandler('/start', 'Startup');
let myInterval2 = setInterval(() => {
    app.publishMessage('/drugs', 'Ativan');
    app.publishMessage('/drugs', 'Biaxin');
    app.publishMessage('/drugs', 'Biotin');
    app.publishMessage('/drugs', 'Flomax');
    app.publishMessage('/drugs', 'Kadian');
    app.publishMessage('/drugs', 'Prozac');
    app.publishMessage('/drugs', 'Robaxin');
    app.publishMessage('/drugs', 'Reglan');
    app.publishMessage('/drugs', 'Ranexa');
    app.publishMessage('/drugs', 'Vimovo');
    app.publishMessage('/drugs', 'VitaminC');
}, 500);