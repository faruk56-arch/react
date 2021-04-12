
import React from "react";
import './App.css';
import Counter from './components/Counter';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
      count2: 1


    };

  }



  incrementCount = () => {
    this.setState({
      count: this.state.count + 1
    });


    if (this.state.count === 10) {

      this.setState({
        count: 1
      });
    };
  }




  decrementCount = () => {
    if (this.state.count === 0) {
      this.setState({
        count: this.state.count - 1
      });
    };

  }



  incrementCount2 = () => {
    if (this.state.count2 === 1) {


      this.setState({
        count: this.state.count + 2
      });
    };
  }


  decrementCount2 = () => {
    if (this.state.count2 === 2) {
      this.setState({
        count2: this.state.count2 - 2
      });
    }




  };




  render() {
    return (

      <div>
        <Counter muFunc={this.state.count}
          addFunction={this.incrementCount}
          removeFunction={this.decrementCount}


        />


        <Counter muFunc={this.state.count2}
          addFunction={this.incrementCount2}
          removeFunction={this.decrementCount2}
        />


      </div>
    );
  }

}


export default App;
