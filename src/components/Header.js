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
        <li><a>Playlist</a></li>
        <li><a>Zestful generator</a></li>
      </ul>
    </nav>)

    // return (
    //   <div className={pageClass}>
    //     <h2>Page component</h2>
    //     <span>Go to <Link to="/">Home</Link></span>
    //   </div>
    // )
  }
}

export default Header
