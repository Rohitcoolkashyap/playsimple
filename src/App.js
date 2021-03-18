import './App.scss';
import Homepage from './screens/homepage/Homepage';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Games from './screens/homepage/games/Games';
import Header from './components/Header/Header';
import Hayday from './screens/hayday/Hayday';
import Footer from './components/footer/Footer';
import CookieBox from './components/footer/CookieBox';

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
          <Route path="/hayday" exact>
            <Hayday />
          </Route>
          <Route
            path="/careers"
            component={() => {
              window.location.href = 'https://supercell.com/en/careers/';
              return null;
            }}
          />
          <Route
            path="/support"
            component={() => {
              window.location.href = 'https://supercell.com/en/support/';
              return null;
            }}
          />
        </Switch>
        <Footer />
        <CookieBox />
      </Router>
    </div>
  );
}

export default App;
