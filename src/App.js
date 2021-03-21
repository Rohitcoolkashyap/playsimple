import React, { Suspense } from 'react';

import './App.scss';
import Homepage from './screens/homepage/Homepage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Games from './screens/homepage/games/Games';
import Header from './components/Header/Header';
import Hayday from './screens/hayday/Hayday';
import CookieBox from './components/footer/CookieBox';
const Footer = React.lazy(() => import('./components/footer/Footer'));

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
          <Route path="/games/hayday" exact>
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
            exact
            path="/games/clashOfClan"
            component={() => {
              window.location.href =
                'https://supercell.com/en/games/clashofclans/';
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
          <Route
            path="/games/boomBeach"
            component={() => {
              window.location.href =
                'https://supercell.com/en/games/boombeach/';
              return null;
            }}
          />
        </Switch>
        <Suspense fallback={<div>loading...</div>}>
          <Footer />
        </Suspense>

        <CookieBox />
      </Router>
    </div>
  );
}

export default App;
