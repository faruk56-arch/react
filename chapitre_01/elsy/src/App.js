import React from "react";
import './styles/global.css';
import Box from './components/Box';


const tempMin = -20;
const tempMax = 40;
const heartMin = 80;
const heartMax = 180;
const stepsMin = 0;
const stepsMax = 50000;

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      water: 1.5,
      heart: 120,
      temearature: -10,
      steps: 3000
    }
    this.onHeartChange = this.onHeartChange.bind(this)
    this.onSteps = this.onSteps.bind(this)
    this.onSun = this.onSun.bind(this)
    this.calculateWater=this.calculateWater.bind(this)

  }

  onHeartChange(e) {
    this.setState({
      heart: e.target.value
    })

  }
  onSteps(e) {
    this.setState({
      steps: e.target.value
    })

  }
  onSun(e) {
    this.setState({
      temearature: e.target.value
    })

  }
  calculateWater() {
    water: e.target.value

  }


  render() {

    return (


      <div className="container-fluid">
        <div className="row">
          <Box icon="local_drink" color="green" value="1.5" unit="L" bar="Water" />

          <Box icon="directions_walk" color="black" onChange={this.onSteps} value={this.state.steps} unit="steps" max={stepsMax} min={stepsMin} />

          <Box icon="favorite" color="red" onChange={this.onHeartChange} value={this.state.heart} unit="bpm" max={heartMax} min={heartMin} />
          <Box icon="wb_sunny" color="yellow" onChange={this.onSun} value={this.state.temearature} unit="°c" max={tempMax} min={tempMin} />

          <p>Heart: {heartMin}</p>
          <p>Temperature: {tempMin}</p>
          <p>Steps: {stepsMin}</p>
        </div>

      </div>
    );
  }
}

export default App;