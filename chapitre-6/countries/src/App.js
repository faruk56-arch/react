
import React from 'react';
import './App.css';
import 'bootstrap/dist//css/bootstrap.min.css';
import Button from './Button'
import Card from './Card'
import Search from './Search.jsx'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      name: " ",
      capital: "",
      flag: "",
      population: "",
      region: "",
      search: ""

    }
    this.findCountry = this.findCountry.bind(this)
  }
  componentDidMount = () => {
    fetch("https://restcountries.eu/rest/v2/name/france")
      .then(response => response.json())
      .then(result => {
        this.setState({
          name: result[0].name,
          capital: result[0].capital,
          flag: result[0].flag,
          population: result[0].population,
          region: result[0].region

        })

      })
      .catch(err => console.error("fetch error", err))

  }

  getCountry = (country) => {
    fetch("https://restcountries.eu/rest/v2/name/" + country)
      .then(response => response.json())
      .then(reslut => {
        this.setState({
          name: reslut[0].name,
          capital: reslut[0].capital,
          flag: reslut[0].flag,
          population: reslut[0].population,
          region: reslut[0].region

        })

      })
      .catch(err => console.error("fetch error", err))

  }

  oneCountry = () => {
    fetch("http://localhost:8000/countries/" + this.state.search)
      .then(response => response.json())
      .then(result => {
        console.log(result.villInfo.name);

        this.setState({
          name: result.villInfo.name,
          capital: result.villInfo.capital,
          flag: result.villInfo.flag,
          population: result.villInfo.population,
          region: result.villInfo.region,

        })
        console.log(this.setState);

      })
      .catch(err => console.error("fetch error", err))

  }
  findCountry(event) {
    this.setState({
      search: event.target.value
    })

  }



  render() {

    return (


      <div>
        {/* <div className="container   d-flex justify-content-center  mt-4    ">
          <Button onClickButton={() => this.getCountry("france")} children="France"></Button>
          <Button onClickButton={() => this.getCountry("brazil")} children="Brazil"></Button>
          <Button onClickButton={() => this.getCountry("croatia")} children="Croatia"></Button>


        </div> */}
        <div>
          <Search
            findCountry={this.findCountry}
            oneCountry={this.oneCountry}
          />
        </div>


        <div className="container col-3 text-center mt-4 shadow p-4  bg-light rounded font-weight-bold text-secondary ">
          <Card
            flag={this.state.flag}
            name={this.state.name}
            capital={this.state.capital}
            population={this.state.population}
            region={this.state.region}
          />
        </div>





      </div>
    )
  }


}

export default App;
