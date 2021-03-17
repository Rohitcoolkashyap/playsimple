import './App.scss';
import Homepage from './screens/homepage/Homepage';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Games from './screens/homepage/games/Games';
import Header from './components/Header/Header';
function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Switch>
          <Route path="/" exact>
            <Homepage />
          </Route>
          <Route path="/games" exact>
            <Games />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
