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

app.subscribeToTopic('/pharmaceutical/USA/NYSE/#');
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
    // New York Stock Exchange
    app.publishMessage('/pharmaceutical/USA/NYSE/Ativan', ); // Ativan
    app.publishMessage('/pharmaceutical/USA/NYSE/Biaxin', ); // Biaxin
    app.publishMessage('/pharmaceutical/USA/NYSE/Biotin', ); // Biotin
    app.publishMessage('/pharmaceutical/USA/NYSE/Flomax', ); // Flomax
    app.publishMessage('/pharmaceutical/USA/NYSE/Kadian', ); // Kadian
    app.publishMessage('/pharmaceutical/USA/NYSE/Prozac', ); // Prozac
    app.publishMessage('/pharmaceutical/USA/NYSE/Robaxin', ); // Robaxin
    app.publishMessage('/pharmaceutical/USA/NYSE/Reglan', ); // Reglan
    app.publishMessage('/pharmaceutical/USA/NYSE/Ranexa', ); // Ranexa
    app.publishMessage('/pharmaceutical/USA/NYSE/Vimovo', ); // Vimovo
    app.publishMessage('/pharmaceutical/USA/NYSE/VitaminC', ); // VitaminC

    // National Association of Securities Dealers Automated Quotation System
    app.publishMessage('/pharmaceutical/USA/Nasdaq/ATI', ); // Ativan
    app.publishMessage('/pharmaceutical/USA/Nasdaq/BIX', ); // Biaxin
    app.publishMessage('/pharmaceutical/USA/Nasdaq/BIO', ); // Biotin
    app.publishMessage('/pharmaceutical/USA/Nasdaq/FMX', ); // Flomax
    app.publishMessage('/pharmaceutical/USA/Nasdaq/KDN', ); // Kadian
    app.publishMessage('/pharmaceutical/USA/Nasdaq/PRZ', ); // Prozac
    app.publishMessage('/pharmaceutical/USA/Nasdaq/Robaxin', ); // Robaxin
    app.publishMessage('/pharmaceutical/USA/Nasdaq/Reglan', ); // Reglan
    app.publishMessage('/pharmaceutical/USA/Nasdaq/Ranexa', ); // Ranexa
    app.publishMessage('/pharmaceutical/USA/Nasdaq/Vimovo', ); // Vimovo
    app.publishMessage('/pharmaceutical/USA/Nasdaq/VitaminC', ); // VitaminC

    // American Stock Exchange
    app.publishMessage('/pharmaceutical/USA/AMEX/ATI', ); // Ativan
    app.publishMessage('/pharmaceutical/USA/AMEX/BIX', ); // Biaxin
    app.publishMessage('/pharmaceutical/USA/AMEX/BIO', ); // Biotin
    app.publishMessage('/pharmaceutical/USA/AMEX/FMX', ); // Flomax
    app.publishMessage('/pharmaceutical/USA/AMEX/KDN', ); // Kadian
    app.publishMessage('/pharmaceutical/USA/AMEX/PRZ', ); // Prozac
    app.publishMessage('/pharmaceutical/USA/AMEX/Robaxin', ); // Robaxin
    app.publishMessage('/pharmaceutical/USA/AMEX/Reglan', ); // Reglan
    app.publishMessage('/pharmaceutical/USA/AMEX/Ranexa', ); // Ranexa
    app.publishMessage('/pharmaceutical/USA/AMEX/Vimovo', ); // Vimovo
    app.publishMessage('/pharmaceutical/USA/AMEX/VitaminC', ); // VitaminC

}, 500);