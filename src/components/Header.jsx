import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../scss/Header.scss';


class Header extends Component {
  render() {

    return (<nav>
      <p className={"logo"}>SMARTBOX<span>TV</span></p>
      <ul>
        <li><Link to={{ pathname: '/contents'}}>Playlist</Link></li>
        <li><Link to={{ pathname: '/counters'}}>Zestful meter</Link></li>
      </ul>
    </nav>)
  }
}

export default Header
