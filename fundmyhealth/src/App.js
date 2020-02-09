import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import YourProfile from './Components/YourProfile';
import YourPatents from './Components/YourPatents';
import AllPatents from './Components/AllPatents';

import YourPatentsRegion from './Components/YourPatentsRegion';
import YourPatentsRegionMarket from './Components/YourPatentsRegionMarket';
import YourPatentsRegionMarketDrug from './Components/YourPatentsRegionMarketDrug';

import messaging from "./Messaging";
import Paho from "paho-mqtt";



class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			connected: false,
			messages: []
		};
		messaging.register(this.handleMessage.bind(this));
	}

	render() {
		const connected = this.state.connected;
    const sendButton = <button onClick={() => this.handleSendClick()}>Send</button>;

		return (

      <div>

        <BrowserRouter>
         <Switch>
           <Route exact path="/" component={YourProfile}>
           </Route>
           <Route exact path="/yourpatents" component={YourPatents}>
           </Route>
           <Route exact path="/allpatents" component={AllPatents}>
           </Route>

           <Route exact path="/yourpatentsregion" component={YourPatentsRegion}>
           </Route>
           <Route exact path="/yourpatentsregionmarket" component={YourPatentsRegionMarket}>
           </Route>
           <Route exact path="/yourpatentsregionmarketdrug" component={YourPatentsRegionMarketDrug}>
           </Route>
         </Switch>
        </BrowserRouter>

          {/* <div className="App">
            <div class="buttons">
              <button onClick={() => this.handleConnectClick()}>{connected ? 'Disconnect' : 'Connect'}</button>
              {sendButton}
            </div>
            <ol>
              {this.state.messages.map((message, index) => {
                return <li key={index}>{message}</li>
              })}
            </ol>
          </div> */}
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
    // let message = new Paho.Message(JSON.stringify({text: "Hello"}));
    let message = new Paho.Message("Startup");
		message.destinationName = "/start";
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



// export default function App(props) {
//   return (
//     <div>
//       <BrowserRouter>
//         <Switch>
//           <Route exact path="/" component={YourProfile}>
//           </Route>

//           <Route exact path="/yourpatents" component={YourPatents}>
//           </Route>

//           <Route exact path="/allpatents" component={AllPatents}>
//           </Route>
//         </Switch>
//       </BrowserRouter>


//     </div>

      
//   );
// }

