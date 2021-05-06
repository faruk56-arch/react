import './App.css';
import Movieinfo from './Movieinfo'
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (

    <BrowserRouter>
      <nav>
        {movies.map(element => {
          var movie = element.title
          var titrId = element.id
          return <li key={element.title}> <Link to={"/" + titrId}>{movie}{titrId}</Link></li>

        })}
      </nav>




      <div className="App">
        <Switch>
          <Route exact path="/" component={Movieinfo} />

        </Switch>


      </div>
    </BrowserRouter>
  );
}

export default App;
