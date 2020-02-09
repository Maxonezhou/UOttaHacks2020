import React from 'react';
import App from './YourPatents';
import messaging from "../Messaging";
import Paho from "paho-mqtt";

export default function subscribe(topic) {
    var app = new App();
    app.messaging.register(this.handleMessage.bind(this));
    app.messaging.connectWithPromise().then(response => {
        console.log("Succesfully connected to Solace Cloud.", response);
        messaging.subscribe(topic);
        this.setState({
            connected: true,
            messages: this.state.messages
        });
    }).catch(error => {
        console.log("Unable to establish connection with Solace Cloud, see above logs for more details.", error);
    });
}