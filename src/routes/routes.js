import React, { Component, lazy, Suspense } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { Icon } from 'antd-mobile'

import { fetchServerTime } from '@/store/actions'

const Homepage = lazy(() => import('@/views/Homepage'))

const SimpleLoading = () => (
  <div className="loadding margin-top10">
    <Icon type="loading" />
    Loading...
  </div>
)

class IndexRoute extends Component {
  state = {
    logged: true,
  }

  componentDidMount() {
    // eslint-disable-next-line react/destructuring-assignment
    Promise.all([this.props.fetchServerTime()])
      .then(() => this.setState({ logged: false }))
      .catch(err => console.error(err))
  }

  render() {
    const { logged } = this.state

    if (logged) {
      return <SimpleLoading />
    }

    return (
      <Suspense fallback={<SimpleLoading />}>
        <Route
          path="/"
          exact
          component={Homepage}
        />
      </Suspense>
    )
  }
}

export default connect(
  null,
  { fetchServerTime },
)(IndexRoute)
