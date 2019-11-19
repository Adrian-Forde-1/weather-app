import React from "react";
import EnterLoaction from "./components/EnterLoaction";
import WeatherForecast from "./components/WeatherForecast";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={EnterLoaction} />
          <Route path="/weather" component={WeatherForecast} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
