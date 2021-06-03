import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Buy from './screens/Buy'
import Details from './screens/Details'
import Cart from './screens/Cart'

const App = () => {

  return (
      <Router>
        <Route path='/cart' component={Cart} exact />
        <Route path='/details/:id' component={Details}  />
        <Route path='/buy' component={Buy} exact />
        <Route path='/' component={Buy} exact />
      </Router>
    )

}

export default App
