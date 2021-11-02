import React from 'react'
import Signin from './InstaClone/signin'
import Signup from './signup/signup'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';



const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path = "/">
          <Signin/>
        </Route>
        <Route exact path = "/signup">
          <Signup/>
        </Route>
      </Switch>
    </Router>
  )
}


export default App
