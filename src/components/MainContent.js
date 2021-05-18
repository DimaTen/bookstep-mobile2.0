import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import Home from '../Home';
import Books from './Books';
import Profile from './Profile';
import Player from './Player';
import { Route, Switch, useHistory } from 'react-router-dom';

export default function MainContent() {
  const { currentUser, logout } = useAuth();
  const history = useHistory;

  async function handleLogout() {
    try {
      await logout();
      history.pushState('/');
    } catch {}
  }

  if (currentUser) {
    return (
      <>
        <Route path="/Player" exact component={Player} />
        <Route path="/Profile" exact component={Profile} />
        <Route path="/Books" exact component={Books} />
        <Route path="/" exact component={Home} />
      </>
    );
  } else {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route to="/" component={notAuthorized} />
      </Switch>
    );
  }
}

export function notAuthorized() {
  return <div>Logga in för att se detta</div>;
}
