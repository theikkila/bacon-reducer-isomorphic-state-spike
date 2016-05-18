import React from 'react'
import ReactDOM from 'react-dom';
import { Router, match } from 'react-router';
import Routes from './routes';
import {appState} from './store'

import { browserHistory } from 'react-router'

window.onload = function() {
  setInterval(() => {
    appState.dispatch({type: 'CHANGE', color: Math.random()});
  }, 1000);

  match({history: browserHistory, routes: Routes}, (error, redirectLocation, renderProps) => {
    ReactDOM.render(
       <Router {...renderProps} />,
       document.getElementById('root'));
  })
}
