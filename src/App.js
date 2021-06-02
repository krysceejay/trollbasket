import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Buy from './screens/Buy'
import Details from './screens/Details'
import Tabs from './components/Tabs'

const App = () => {

  return (
      <Router>
        <Tabs />
        <Route path='/details/:id' component={Details}  />
        <Route path='/buy' component={Buy} exact />
        <Route path='/' component={Buy} exact />
      </Router>
    )

}

export default App
