import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Login} from './Login.jsx';
import {Register} from './Register.jsx';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
