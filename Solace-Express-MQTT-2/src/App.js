
import messagingClient from './Messaging';

class App {

    constructor(){
    }

    initialize(){
        // First, connect to the Solace Message Broker
        messagingClient.connectWithPromise().then(response => {
            console.log("Succesfully connected to Solace Cloud.", response);

            // Now that we are successfully connected, register our message handler
            messagingClient.registerMessageHandler(app.messageHandler.bind(this));
        }).catch(error => {
            console.log("Unable to establish connection with Solace Cloud", error);
        });
    }

    messageHandler(topicString, messageString){
        console.log("New message on topic:", topicString, "::", messageString);
        var start = false;
        // Here is where you add code to handle the message
        switch (topicString) {
            case 'SomeTopic': {
                const message = JSON.parse(messageString);
                console.log("Message as object", message);
                break;
            }
            case '/start': {
                console.log('Host Has requested connection');
                start = true;
                break;
            }
            case '/pharmaceutical/USA/NYSE/#': {
                console.log(messageString);
                break;
            }
            default: {
                console.warn("Unexpected topic", topicString);
                break;
            }
        }
        if (start)
        {
            return true;
        }
    }

    publishMessage(topic, message) {
        messagingClient.publish(topic, message);
    }

    subscribeToTopic(topic){
        messagingClient.subscribe(topic);
    }
}

const app = new App();
export default app;