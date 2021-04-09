
import React from "react";
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0

    };
    
  }

  incrementCount =() => {
      this.setState({
        count: this.state.count + 1
      });
      console.log(this.state.count,"+");
    };


    decrementCount =() => {
      this.setState({
        count: this.state.count - 1
      });
      console.log(this.state.count,"-");

    };

 
  
  render() {
     return (
      <div className="App">
        <h1>Counter</h1>
        <h2>{this.state.count}</h2>
        <button onClick={ this.decrementCount} style={{backgroundColor: "green", margin: "10px"}}>-</button>

        <button onClick= { this.incrementCount} style={{backgroundColor: "red"}}>+</button>
      </div>
    );
  }

  }
  

export default App;
