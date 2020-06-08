/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react'

import { HashRouter as Router, Switch } from 'react-router-dom'

import IndexRoute from './routes'

class RouteView extends Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <IndexRoute />
          </Switch>
        </Router>
      </>
    )
  }
}

export default RouteView
