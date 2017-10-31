import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
// import LoginForm from './components/LoginForm';
// import MainList from './components/MainList';
import Login from '../Login/Login';
import Feed from '../Tabs/Feed';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key="auth">
        <Scene key="login" component={Login} title="Login" />
      </Scene>
      <Scene key="main">
        <Scene key="feed" component={Feed} title="Feed" />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
