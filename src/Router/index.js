// @External Dependencies
import React from 'react'
import { Route, Switch } from 'react-router-dom'

// @Dependencies
import App from '../App'
import Master from '../Views/Master'
import DetailView from '../Views/DetailView'

// @Component
const AppRoutes = () => (
  <App>
    <Switch>
      <Route exact path="/" component={Master} />
      <Route exact path="/detail-view/:id" component={DetailView} />
      <Route component={Master} />
    </Switch>
  </App>
)

// @Export Component
export default AppRoutes
