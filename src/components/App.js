import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { Redirect } from 'react-router';
import classNames from 'classnames'
import '../scss/App.scss'

import Home from './Home'
import Footer from './Footer'
import Header from './Header'

class App extends Component {
  render() {
    const appClass = classNames('App', {})

    return (
      <main>
        <Header />
        <Route render={({ location }) => (
              <Switch location={location}>
                <Route exact path="/contents" component={Home} />
                <Route exact path="/contents/detail/:id" component={Home} />
                <Route exact path="/counters" component={Home} />                 
                <Redirect from="/" to="contents" />
              </Switch>
        )}
        />
        <Footer/>
      </main>
    )
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(App)
