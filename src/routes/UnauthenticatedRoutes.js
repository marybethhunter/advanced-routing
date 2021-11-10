import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from '../views/About';
import ContactUs from '../views/ContactUs';

export default function UnauthenticatedRoutes() {
  return (
    <div>
      <Switch>
        <Route exact path="/about" component={About} />
        <Route exact path="/contact-us" component={ContactUs} />
      </Switch>
    </div>
  );
}
