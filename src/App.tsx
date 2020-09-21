import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';

// Styles
import { GlobalStyle } from './styles/Global.style';
// Pages
import Home from './pages/Home';
import Layout from './pages/Layout';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';

const App: React.FC = () => {
  return (
    <Router>
      <GlobalStyle />
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/profile' component={Profile} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
