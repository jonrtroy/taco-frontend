import React from 'react';
import ReactDom from 'react-dom';
import { Route, Router, browserHistory } from 'react-router';


import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login/Login';
import NewUser from './components/NewUser/NewUser';
import LandingPage from './components/LandingPage/LandingPage';
import FavoriteTaco from './components/FavoriteTaco/FavoriteTaco';
import CommunityTaco from './components/CommunityTaco/CommunityTaco';

ReactDom.render(
  <Router history={browserHistory}>
    <Route path='/' component={LandingPage} />
    <Route path='/dashboard' component={Dashboard} />
    <Route path='/login' component={Login} />
    <Route path='/user/new' component={NewUser} />
    <Route path='/user/favorite' component={FavoriteTaco} />
    <Route path='/user/community' component={CommunityTaco} />
  </Router>
, document.getElementById('app'));
