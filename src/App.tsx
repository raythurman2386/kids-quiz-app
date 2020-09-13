import React from 'react'
import { Route, Switch } from 'react-router-dom'

// Styles
import { GlobalStyle } from './styles/Global.style'
// Pages
import Home from './pages/Home'

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </>
  )
}

export default App
