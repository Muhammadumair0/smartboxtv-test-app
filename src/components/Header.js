import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import '../scss/Header.scss'


class Header extends Component {
  render() {
    const pageClass = classNames('Page', {
      someStyle: true,
    })

    return (<nav>
      <p class="logo">SMARTBOX<span>TV</span></p>
      <ul>
        <li><Link to={{ pathname: '/contents'}}>Playlist</Link></li>
        <li><Link to={{ pathname: '/counters'}}>Zestful meter</Link></li>
      </ul>
    </nav>)
  }
}

export default Header
