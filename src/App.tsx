import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';

// Styles
import { GlobalStyle } from './styles/Global.style';
// Pages
import Home from './pages/Home';
import Layout from './pages/Layout';

const App: React.FC = () => {
  return (
    <Router>
      <GlobalStyle />
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
