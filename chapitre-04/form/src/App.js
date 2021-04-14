
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {


  constructor() {
    super()
    // this.state = {
    //   input: "",
    //   errors: ""
    // }
    this.state = {
      password: "",
      email: "",
      submit: ""
    }
    this.handlePassword = this.handlePassword.bind(this);
    this.handleValidation = this.handleValidation.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.validEmail = this.validEmail.bind(this);
  }




  handleEmail(e) {
    this.setState({
      email: e.target.value
    })
  }
  validEmail() {
    if (this.state.email.length < 6) {
      return "form-control is-invalid"
    } else {
      return "form-control is-valid"
    }

  }

  handlePassword(e) {
    this.setState({
      password: e.target.value
    })

  }

  handleValidation() {

    if (this.state.password.length < 6) {
      return "form-control is-invalid"
    } else {
      return "form-control is-valid"
    }

  }


  render() {

    return (


      <div className="container col-5">
        <h1 className="text-center mb-5 mt-5 ">Login</h1>
        <form>
          <div className=" mb-3">
            <label for="exampleInputEmail1" className="form-label warning">Email address</label>
            <input id="exampleInputEmail1"
              className={this.validEmail()}
              onChange={this.handleEmail}
              aria-describedby="emailHelp"
              placeholder="john@gmail.com" />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>

            <input type="password"
              className={this.handleValidation()}
              onChange={this.handlePassword}
              id="exampleInputPassword1" value={this.state.password}
              placeholder="Password" />

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
