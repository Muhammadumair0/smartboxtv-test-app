import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import '../scss/Footer.scss'

class Footer extends Component {
  render() {
    return (
      
      // <div className={"footer"}>
      //   <span>Footer</span>
      //   <Link to="/about">About</Link>
      // </div>
      <footer>
      <div id="footer" style={{backgroundColor: "#fff"}}>
      
    <div id="newsletter-social">  
        <div id="newsletter">
        <h3 class="center">Get More Deals!</h3>
        <p class="deals">Weekly ad, new store openings, store events, and more.</p>
        <form>
        <input type="text" placeholder="Enter email address" />
        <input type="submit" value="Sign Up" />
        </form>
    </div>  
        
        
     <div id="social">
        <a href="https://facebook.com/academy" target="_blank">
        <img width="34" height="34" src="https://res.cloudinary.com/cloudinary-account/image/upload/v1469457641/facebook_khedl5.svg" /></a>
    
        <a href="https://twitter.com/academy" target="_blank">
        <img width="34" height="34" src="https://res.cloudinary.com/cloudinary-account/image/upload/v1469457641/twitter_fu5ejk.svg" /></a>
    
        <a href="hhttps://pinterest.com/academy/" target="_blank">
        <img width="34" height="34" src="https://res.cloudinary.com/cloudinary-account/image/upload/v1469457641/pinterest_kahh1i.svg" /></a>
    
        <a href="https://www.youtube.com/user/academydotcom" target="_blank">
        <img width="34" height="34" src="https://res.cloudinary.com/cloudinary-account/image/upload/v1469457641/youtube_xrntt3.svg" /></a>
    
        <a href="http://instagram.com/academy" target="_blank">
        <img width="34" height="34" src="https://res.cloudinary.com/cloudinary-account/image/upload/v1469457641/instagram_ugek0w.svg" /></a>
    
      </div>  
    </div>  
         
    <div class="rectangle-horiz"></div>
    
    <div id="copyright">
    <ul>
      <li class="copy">© 2016 Academy Sports + Outdoors. All Rights Reserved.</li>
    
      <li class="copy">Privacy Policy | Terms + Conditions | Sitemap</li>
    
      <li class="copy">California Proposition 65 | California Transparency in Supply Chains Act (SB 657)</li>
      </ul>
    </div>
    
       </div>
    
    </footer>)
  }
}

const mapStateToProps = state => ({
  initialized: state.app.initialized,
})

export default connect(mapStateToProps)(Footer)
