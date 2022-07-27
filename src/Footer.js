import React from 'react'
import bookmarkLogobtm from './img/logo-bookmark.svg'
import facebookLogo from './img/icon-facebook.svg'
import twitterLogo from './img/icon-twitter.svg'

const Footer = () => {
  return (
    <div className='footer-footer'>
        <div className='foot'>
        <div className='footer-top'>
            <img className='bookmarkLogobtm' src={bookmarkLogobtm} alt="" />
        </div>

        <div className='footer-mid'>
            <ul>
                <li>FEATURES</li>
                <li>PRICING</li>
                <li>CONTACT</li>
            </ul>
        </div>

        <div className='footer-btm'>
            <img className='facebookLogo' src={facebookLogo} alt="" />
            <img className='twitterLogo' src={twitterLogo} alt="" />
        </div>

        {/* <div className='stupid'></div> */}
        </div>

        <div class="btm-line">
            <div></div>
        </div>
    </div>

            
  )
}

export default Footer