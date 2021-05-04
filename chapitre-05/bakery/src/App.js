
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Add from './Components/Add';
import List from './Components/List';
import Pay from './Components/Pay';
import Button from './Components/Button';
import Card from './Components/Card';

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      activeTab: "Add",
      items: []

    }

  }

  addItem = (name, price) => {

    this.setState({
      items: [...this.state.items, { name: name, price: price }],
    })

  }

  onClickAdd = () => {

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

  ActiveRender() {
    if (this.state.activeTab === "Add") {
      return <Add addItem={this.addItem} />
    }
    if (this.state.activeTab === "List") {
      return <List toto={this.state.items} />
    }
    if (this.state.activeTab === "Pay") {
      return <Pay
        items={this.state.items}

      />

    }
  }



  render() {
    console.log(this.state.items);

    return (


      <div className="container  ">
        <h1 className=" text-center">Bakarey</h1>
        <div className=" d-flex justify-content-center">
          <Button
            onClickFunction={this.onClickAdd}
            isSelected={this.state.activeTab === "Add" ? "btn btn-primary" : "btn btn-light"}
          >
            Add
        </Button>

          <Button onClickFunction={this.onClickList}
            isSelected={this.state.activeTab === "List" ? "btn btn-primary" : "btn btn-light"}>
            List

        </Button>
          <Button onClickFunction={this.onClickPay}

            isSelected={this.state.activeTab === "Pay" ? "btn btn-primary" : "btn btn-light"}  >
            Pay

        </Button>

        </div>

        <div className="text-center ">
          {this.ActiveRender()}
        </div>





      </div>
    );
  }

}



export default App;
