
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {


  constructor() {
    super()
    this.state = {
      input: "",
      errors: ""
    }

  }



  handleValidation() {
    const input = {};
    const errors = {};
    if(input){
      return " form-control is-valid"
    } else {
      return "form-control is-invalid"
    }


  }


  render() {

    return (

      <div className="container col-5">
        <h1 className="text-center mb-5 mt-5 ">Login</h1>
        <form>
          <div className=" mb-3">
            <label for="exampleInputEmail1" className="form-label warning">Email address</label>
            <input  type="email" className={this.handleValidation()}  id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="john@gmail.com" />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" className={this.handleValidation()} id="exampleInputPassword1" placeholder="Password" />
          </div>
          <div class="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
          </div>
          <button type="submit" className="btn btn-primary ">Submit</button>
        </form>

      </div>



    );

  }


}

export default App;
