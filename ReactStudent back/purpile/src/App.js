
import { useState, useEffect } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
// recuperer la valeur de input//
//creer la methode qui va envoyer la requete

//Appuyer sur boutton et je declanche un avenement de
// Excutez la methode qui va envoyer les noms des etudiant au server en utilisiant une requete 

function App() {
  
    const [name, setName] = useState("");
    console.log("nom:",name);
    
    


    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Simple form</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </div>
            </div>
          </div>
        </nav>
        <div className="row ">
          <div className="container col-6">
            <h1>Student List</h1>
          </div>
          <div className="container col-6">
            <h1>Added Student  </h1>
            <label className="m-3">Student Name </label>
            <input  onChange={e => setName(e.target.value)}  type="text" />
            <div>
              <button className="btn btn-outline-primary mt-4" type="submit" for="btn-check-outlined">Send</button><br />
            </div>
          </div>
        </div>
      </div>
    );

  }


export default App;
