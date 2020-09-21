import React from 'react';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';

// Styles
import { GlobalStyle } from './styles/Global.style';
// Pages
import Home from './pages/Home';
import Layout from './pages/Layout';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Register from './pages/Register';
import Login from './pages/Login';

const App: React.FC = () => {
  return (
    <Router>
      <GlobalStyle />
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/register' component={Register} />
          <Route path='/login' component={Login} />
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/profile' component={Profile} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
