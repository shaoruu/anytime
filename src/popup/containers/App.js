import React from 'react';
import { MemoryRouter, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import TopNav from '../components/TopNav';
import Home from './Home';
import Settings from './Settings';

const AppWrapper = styled.div`
  width: 401px;
  height: 521px;
`

export default () => {
  return <AppWrapper>
    <TopNav />
    <MemoryRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/settings">
          <Settings />
        </Route>
      </Switch>
    </MemoryRouter>
  </AppWrapper>
}