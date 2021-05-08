import React from 'react';
import Header from '../components/Header';
import Landing from '../components/pages/Landing';
import Experiences from '../components/pages/Experiences';
import Projects from '../components/pages/Projects';
import About from '../components/pages/About';
import { Route, Switch, HashRouter } from 'react-router-dom';

function App() {
  return (
    <HashRouter basename="">
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/experiences" component={Experiences} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/about" component={About} />
      </Switch>
    </HashRouter>
  );
}

export default App;
