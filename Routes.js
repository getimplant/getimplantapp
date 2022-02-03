import React from 'react';
import { Switch, Route } from 'react-router';
import Home from './src/pages/Home.jsx';
const Routes = () => {
  return (
    <Switch>
      
      <Route path='/' component={Home}/>
    </Switch>

  )
}
export default Routes