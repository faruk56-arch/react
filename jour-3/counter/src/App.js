



// - Les compteurs ne descendront jamais en dessous de 0 et ne monteront jamais au dessus de 100




import React from "react";
import './App.css';
import Counter from './components/Counter';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
      count2: 0


    };

  }

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1
    });


    if (this.state.count > 0) {

      this.setState({
        count2: this.state.count2 + 2
      });
    };
  }


  decrementCount = () => {

    this.setState({
      count: this.state.count - 1
    });
    if (this.state.count < 0) {
      this.setState({
        count2: this.state.count2 + 1
      });
    };

  }

  incrementCount2 = () => {
    this.setState({
      count2: this.state.count2 + 1
    });
    if (this.state.count2 > 0) {

      this.setState({
        count:  this.state.count +1
      });

    };
  }


  decrementCount2 = () => {
    this.setState({
      count2: this.state.count2 - 1
    });
    if (this.state.count2 < 1) {
      this.setState({
        count: this.state.count -1
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
