import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Styles
import { GlobalStyle } from './styles/Global.style';
// Pages
import Home from './pages/Home';
import Layout from './pages/Layout';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
      </Layout>
    </>
  );
};

export default App;
