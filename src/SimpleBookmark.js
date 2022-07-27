import React from 'react'

const SimpleBookmark = () => {
  return (
    <div>
        <main className='SimpleBookmark'>
            <h1><b>A Simple Bookmark Manager</b></h1>
            <p>A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free</p>

            <div className='btn'>
                <button className='btn-chrome'>Get it on Chrome</button>
                <button className='btn-firefox'>Get it on Firefox</button>
            </div>
        </main>
    </div>
  )
}

export default SimpleBookmark