import React from "react";
import SideMenuYourPatents from './SideMenuYourPatents';
import Apex from './ApexCharts';
import ContainedButtons from './Buttons';


import messaging from "../Messaging";
import Paho from "paho-mqtt";

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			connected: false,
			messages: []
        };
        

        
        messaging.register(this.handleMessage.bind(this));

        messaging.connectWithPromise().then(response => {
            console.log("Succesfully connected to Solace Cloud.", response);
            messaging.subscribe("/pharmaceutical/#");
            this.setState({
                connected: true,
                messages: this.state.messages
            });

            let message = new Paho.Message("Startup");
            message.destinationName = "/start";
            messaging.send(message);
        }).catch(error => {
            console.log("Unable to establish connection with Solace Cloud, see above logs for more details.", error);
        });


	}

	render() {

		return (

      <div>
        <SideMenuYourPatents></SideMenuYourPatents>
        <ContainedButtons></ContainedButtons>
        <h4>Current Filters: None</h4>
        <h4>Showing all results</h4>
        <Apex/>

        <div className="App">
            {/* <div class="buttons">
              <button onClick={() => this.handleConnectClick()}>{connected ? 'Disconnect' : 'Connect'}</button>
              {sendButton}
            </div> */}
            <ol>
              {this.state.messages.map((message, index) => {
                return <li key={index}>{message}</li>
              })}
            </ol>
          </div>

      </div>
		  );
	}

	handleMessage(message) {
		this.setState(state => {


			const messages = state.messages.concat(message.payloadString);
			return {
				messages,
				connected: state.connected,
			};
		  });
    }
    

	handleSendClick() {
		let message = new Paho.Message(JSON.stringify({text: "Hello"}));
		message.destinationName = "exampletopic";
		messaging.send(message);
	}

	handleConnectClick() {
		if (this.state.connected) {
			messaging.disconnect();
			this.setState({
				connected: false,
				messages: this.state.messages
			});
		} else {
			messaging.connectWithPromise().then(response => {
				console.log("Succesfully connected to Solace Cloud.", response);
				messaging.subscribe("exampletopic");
				this.setState({
					connected: true,
					messages: this.state.messages
				});
			}).catch(error => {
				console.log("Unable to establish connection with Solace Cloud, see above logs for more details.", error);
			});
		}
	}

}

export default App;


// export default function YourPatents(props) {
//     return (
//         <div>
//             <SideMenuYourPatents></SideMenuYourPatents>
//         </div>
//     );
//   }