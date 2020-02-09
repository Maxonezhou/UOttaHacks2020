import express from "express";
import http from "http";
import bodyParser from "body-parser";
import app from './App';

import { setInterval, clearInterval } from "timers";

const port = 9001;

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

var started = false;
let myInterval1 = setInterval(() => {
    started = app.messageHandler('/start', 'Startup');
    if (started)
    {
        clearInterval(myInterval1);
    }
}, 100);

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
    // New York Stock Exchange
    app.publishMessage('/pharmaceutical/USA/NYSE/Ativan', (Math.floor((Math.random() * 10) + 100).toString())); // Ativan
    app.publishMessage('/pharmaceutical/USA/NYSE/Biaxin', (Math.floor((Math.random() * 10) + 90).toString())); // Biaxin
    app.publishMessage('/pharmaceutical/USA/NYSE/Biotin', (Math.floor((Math.random() * 10) + 80).toString())); // Biotin
    app.publishMessage('/pharmaceutical/USA/NYSE/Flomax', (Math.floor((Math.random() * 10) + 70).toString())); // Flomax
    app.publishMessage('/pharmaceutical/USA/NYSE/Kadian', (Math.floor((Math.random() * 10) + 110).toString())); // Kadian
    app.publishMessage('/pharmaceutical/USA/NYSE/Prozac', (Math.floor((Math.random() * 10) + 60).toString())); // Prozac
    app.publishMessage('/pharmaceutical/USA/NYSE/Robaxin', (Math.floor((Math.random() * 10) + 50).toString())); // Robaxin
    app.publishMessage('/pharmaceutical/USA/NYSE/Reglan', (Math.floor((Math.random() * 10) + 90).toString())); // Reglan
    app.publishMessage('/pharmaceutical/USA/NYSE/Ranexa', (Math.floor((Math.random() * 10) + 100).toString())); // Ranexa
    app.publishMessage('/pharmaceutical/USA/NYSE/Vimovo', (Math.floor((Math.random() * 10) + 10).toString())); // Vimovo
    app.publishMessage('/pharmaceutical/USA/NYSE/VitaminC', (Math.floor((Math.random() * 10) + 200).toString())); // VitaminC

    // // National Association of Securities Dealers Automated Quotation System
    app.publishMessage('/pharmaceutical/USA/Nasdaq/ATI', (Math.floor((Math.random() * 10) + 95).toString())); // Ativan
    app.publishMessage('/pharmaceutical/USA/Nasdaq/BIX', (Math.floor((Math.random() * 10) + 90).toString())); // Biaxin
    app.publishMessage('/pharmaceutical/USA/Nasdaq/BIO', (Math.floor((Math.random() * 10) + 90).toString())); // Biotin
    app.publishMessage('/pharmaceutical/USA/Nasdaq/FMX', (Math.floor((Math.random() * 10) + 70).toString())); // Flomax
    app.publishMessage('/pharmaceutical/USA/Nasdaq/KDN', (Math.floor((Math.random() * 10) + 120).toString())); // Kadian
    app.publishMessage('/pharmaceutical/USA/Nasdaq/PRZ', (Math.floor((Math.random() * 10) + 60).toString())); // Prozac
    app.publishMessage('/pharmaceutical/USA/Nasdaq/Robaxin', (Math.floor((Math.random() * 10) + 50).toString())); // Robaxin
    app.publishMessage('/pharmaceutical/USA/Nasdaq/Reglan', (Math.floor((Math.random() * 10) + 90).toString())); // Reglan
    app.publishMessage('/pharmaceutical/USA/Nasdaq/Ranexa', (Math.floor((Math.random() * 10) + 100).toString())); // Ranexa
    app.publishMessage('/pharmaceutical/USA/Nasdaq/Vimovo', (Math.floor((Math.random() * 10) + 10).toString())); // Vimovo
    app.publishMessage('/pharmaceutical/USA/Nasdaq/VitaminC', (Math.floor((Math.random() * 10) + 200).toString())); // VitaminC

    // American Stock Exchange
    app.publishMessage('/pharmaceutical/USA/AMEX/ATI', (Math.floor((Math.random() * 10) + 96).toString())); // Ativan
    app.publishMessage('/pharmaceutical/USA/AMEX/BIX', (Math.floor((Math.random() * 10) + 90).toString())); // Biaxin
    app.publishMessage('/pharmaceutical/USA/AMEX/BIO', (Math.floor((Math.random() * 10) + 90).toString())); // Biotin
    app.publishMessage('/pharmaceutical/USA/AMEX/FMX', (Math.floor((Math.random() * 10) + 76).toString())); // Flomax
    app.publishMessage('/pharmaceutical/USA/AMEX/KDN', (Math.floor((Math.random() * 10) + 119).toString())); // Kadian
    app.publishMessage('/pharmaceutical/USA/AMEX/PRZ', (Math.floor((Math.random() * 10) + 60).toString())); // Prozac
    app.publishMessage('/pharmaceutical/USA/AMEX/Robaxin', (Math.floor((Math.random() * 10) + 50).toString())); // Robaxin
    app.publishMessage('/pharmaceutical/USA/AMEX/Reglan', (Math.floor((Math.random() * 10) + 90).toString())); // Reglan
    app.publishMessage('/pharmaceutical/USA/AMEX/Ranexa', (Math.floor((Math.random() * 10) + 100).toString())); // Ranexa
    app.publishMessage('/pharmaceutical/USA/AMEX/Vimovo', (Math.floor((Math.random() * 10) + 10).toString())); // Vimovo
    app.publishMessage('/pharmaceutical/USA/AMEX/VitaminC', (Math.floor((Math.random() * 10) + 190).toString())); // VitaminC

}, 500);