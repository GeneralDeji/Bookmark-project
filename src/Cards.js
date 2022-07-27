import React from 'react'
import chromeimg from './img/logo-chrome.svg'
import firefoximg from './img/logo-firefox.svg'
import operaimg from './img/logo-opera.svg'
import dottedline from './img/bg-dots.svg'

const Cards = () => {
  return (
    <div>
        <div className="threeCards">
            <div class="card">
                <img className='chromeimg' src={chromeimg} alt="" />
                <div>
                    <h2>
                        <b>Add to Chrome</b>
                    </h2>
                    <p>
                        Minimum version 62
                    </p>
                </div>
                <img className='dottedline' src={dottedline} alt="" />
                <button>Add & Install Extension</button>
            </div>

            <div class="card">
                <img className='firefoximg' src={firefoximg} alt="" />
                <div>
                    <h2>
                        <b>Add to Firefox</b>
                    </h2>
                    <p>
                        Minimum version 55
                    </p>
                </div>
                <img className='dottedline' src={dottedline} alt="" />
                <button>Add & Install Extension</button>
            </div>

            <div class="card">
                <img className='operaimg' src={operaimg} alt="" />
                <div>
                    <h2>
                        <b>Add to Opera</b>
                    </h2>
                    <p>
                        Minimum version 46
                    </p>
                </div>
                <img className='dottedline' src={dottedline} alt="" />
                <button>Add & Install Extension</button>
            </div>

        </div>
        
        
    </div>
  )
}

export default Cards