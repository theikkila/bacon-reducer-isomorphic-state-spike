
import React from 'react'
import {Route, IndexRoute} from 'react-router';

import App from './App'
import Wello from './Wello'
import Hello from './Hello'







const Routes = (<Route path="/" component={App}>
  <IndexRoute component={Hello}/>
  <Route path="well" component={Wello}/>
  <Route path="hello" component={Hello}/>
</Route>)

export default Routes;
