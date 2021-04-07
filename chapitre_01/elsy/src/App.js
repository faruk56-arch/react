import React from "react";
import './styles/global.css';
import Box from "./components/Box";

const tempMin = -20;
const tempMax = 40;
const heartMin = 80;
const heartMax = 180;
const stepsMin = 0;
const stepsMax = 50000;

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">

        <div className="row">

          <Box icon="local_drink" color="red" value="1.5" unit="L" />
          <Box icon="directions_walk" color="black" value="3000" unit="steps" />
          <Box icon="favorite" color="red" value="120" unit="bpm" />
          <Box icon="wb_sunny" color="yellow" value="-10" unit="°c" />

          <h1>Heart : {heartMin}</h1>
          <h1>Temperature : {tempMin}</h1>
          <h1>Steps : {stepsMin}</h1>

        </div>


      </div>
    );
  }
}

export default App;
