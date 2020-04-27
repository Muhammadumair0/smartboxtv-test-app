import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../scss/Footer.scss';
import facebookIcon from '../assets/facebook.svg';
import instagramIcon from '../assets/instagram.svg';
import twitterIcon from '../assets/twitter.svg';
import youtubeIcon from '../assets/youtube.svg';

class Footer extends Component {
  render() {
    return (
      <div>
        <section class="link">
          <div class="logos">
            <a><img src={facebookIcon} /></a>
            <a><img src={instagramIcon} /></a>
            <a><img src={twitterIcon} /></a>
            <a><img src={youtubeIcon} /></a>
          </div>
          <div class="sub-links">
            <ul>
              <li><a>Audio and Subtitles</a></li>
              <li><a>Audio Description</a></li>
              <li><a>Help Center</a></li>
              <li><a>Gift Cards</a></li>
              <li><a>Media Center</a></li>
              <li><a>Investor Relations</a></li>
              <li><a>Jobs</a></li>
              <li><a>Terms of Use</a></li>
              <li><a>Privacy</a></li>
              <li><a>Legal Notices</a></li>
              <li><a>Corporate Information</a></li>
              <li><a>Contact Us</a></li>
            </ul>
          </div>
        </section>
        <footer>
          <p>{"© Copyright 2020 Nunchee, Inc."}</p>
        </footer>
      </div>)
  }
}

const mapStateToProps = state => ({
  initialized: state.app.initialized,
})

export default connect(mapStateToProps)(Footer)
