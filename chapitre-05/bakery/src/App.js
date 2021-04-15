
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Add from './Components/Add';
import List from './Components/List';
import Pay from './Components/Pay';
import Button from './Components/Button';

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      activeTab: "Add",
      items: []

    }
    // this.onClickAdd = this.onClickAdd.bind(this);
    // this.onClickList = this.onClickList.bind(this);
    // this.onClickAdd = this.onClickAdd.bind(this);
  }


  onClickAdd = () => {
    // console.log("hello","onClick");

    this.setState({
      activeTab: "Add"

    })
  }
  onClickList = () => {

    this.setState({
      activeTab: "List"

    })
  }
  onClickPay = () => {

    this.setState({
      activeTab: "Pay"

    })
  }



  render() {

    return (
      <div className="App">
        <h1>Bakarey</h1>
        <Button
          onClickFunction={this.onClickAdd}
          isSelected={this.state.activeTab == "Add" ? "btn btn-primary" : "btn btn-light"}
        >
          Add
        </Button>

        <Button onClickFunction={this.onClickList}
          isSelected={this.state.activeTab == "List" ? "btn btn-primary" : "btn btn-light"}>
          List

        </Button>
        <Button onClickFunction={this.onClickPay}
          isSelected={this.state.activeTab == "Pay" ? "btn btn-primary" : "btn btn-light"} >
          Pay

        </Button>



      </div>
    );
  }

}



export default App;
