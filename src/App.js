import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import ToastMessge from './shared/toaster';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/register">
          <ToastMessge/>
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
