import React, {useMemo} from 'react';
import { Route, Switch } from 'react-router-dom';
import 'reset-css';
import './app.css';

import Profile from './profile/index.jsx';
import Admin from './admin';

function App (){

  return (
    <Switch>
      <Route path="/profile/:id" component={Profile} />
      <Route path="/Admin" component={Admin} />
    </Switch>
  )
}

export default App;
