import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LogIn from '../pages/LogIn';
import SignUp from '../pages/SignUp';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={LogIn} />
    <Route path="/signup" exact component={SignUp} />
  </Switch>
);

export default Routes;
