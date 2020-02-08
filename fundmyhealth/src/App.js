import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import YourProfile from './Components/YourProfile';
import YourPatents from './Components/YourPatents';
import AllPatents from './Components/AllPatents';

export default function App(props) {
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={YourProfile}>
          </Route>

          <Route exact path="/yourpatents" component={YourPatents}>
          </Route>

          <Route exact path="/allpatents" component={AllPatents}>
          </Route>
        </Switch>
      </BrowserRouter>
  );
}