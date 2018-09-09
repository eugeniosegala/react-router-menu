import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Home';
import Profile from '../Profile';
import Options from '../Options';
import { PageWrapper } from './styles';

const Main = () => (
  <PageWrapper>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/profile" component={Profile} />
      <Route path="/options" component={Options} />
    </Switch>
  </PageWrapper>
);

export default Main;
