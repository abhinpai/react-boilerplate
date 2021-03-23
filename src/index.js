import React from 'react';
import ReactDOM from 'react-dom';
import './scss/main.scss';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home, About } from './pages/index';
import { AppDataContext } from './state/appContext';
import reducer, { InitialState } from './state/reducer';

ReactDOM.render(
  <React.StrictMode>
    <AppDataContext initialState={InitialState} reducer={reducer}>
      <Router>
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/home'>
            <Home />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
        </Switch>
      </Router>
    </AppDataContext>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
