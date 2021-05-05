import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Router, Switch, Link } from "react-router-dom"
import Home from './Compnents/Home';
import Popular from './Compnents/Popular';
import Favorites from './Compnents/Favorites';
import PopularBattle from './Compnents/PopularBattle';
import Weekly from './Compnents/Weekly';
import WeeklyBattle from './Compnents/WeeklyBattle';

function App() {
  return (
      <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li><Link to='/Home'>Home</Link></li>
            <li><Link to='/Popular'>Popular</Link></li>
            <li><Link to='/Favorites'>Favorites</Link></li>
            <li><Link to='/PopularBattle'>PopularBattle</Link></li>
            <li><Link to='/Weekly'>Weekly</Link></li>
            <li><Link to='/WeeklyBattle'>WeeklyBattle</Link></li>
          </ul>
        </nav>


        <Switch>

        </Switch>
      </div>
        





      </BrowserRouter>

  );
}

export default App;
