import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Menu from './components/menu'
import Container from './components/container'

import Objetives from './pages/objetives'
import ObjetivesSuccess from './pages/objetives_success'
import CreateObjetive from './pages/create_objetive'
import Profile from './pages/profile';

const Pages = () => (
  <Container>
    <Menu />
    <Switch>
      <Route path="/admin" exact component={Objetives} />
      <Route path="/admin/crear" exact component={CreateObjetive} />
      <Route path="/admin/listos" exact component={ObjetivesSuccess} />
      <Route path="/admin/profile/:id" exact component={Profile} />
    </Switch>
  </Container>
);

export default Pages;
