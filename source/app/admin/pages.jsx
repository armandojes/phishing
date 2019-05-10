import React, {memo} from 'react';
import { Switch, Route } from 'react-router-dom';

import Menu from './components/menu'
import Container from './components/container'

import Objetives from './pages/objetives'
import ObjetivesSuccess from './pages/objetives_success'
import CreateObjetive from './pages/create_objetive'

const Pages = () => (
  <Container>
    <Menu />
    <Switch>
      <Route path="/admin" exact component={Objetives} />
      <Route path="/admin/crear" exact component={CreateObjetive} />
      <Route path="/admin/listos" exact component={ObjetivesSuccess} />
    </Switch>
  </Container>
);

export default memo(Pages);
