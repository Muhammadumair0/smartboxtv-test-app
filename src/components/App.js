import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { Redirect } from 'react-router';
import '../scss/App.scss'

import Home from './Home'
import Footer from './Footer'
import Header from './Header'
import ContentDetail from './Content-detail';
import Counters from './Counters';

class App extends Component {
  render() {

    return (
      <main>
        <Header />
        <Route render={({ location }) => (
              <Switch location={location}>
                <Route exact path="/contents" component={Home} />
                <Route path="/contents/detail/:id" component={ContentDetail} />
                <Route exact path="/counters" component={Counters} />                 
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
