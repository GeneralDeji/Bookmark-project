import React from 'react'
import firstimg from './img/illustration-hero.svg'

const Firstpage = () => {
  return (
    <div>
        <div className='firstpage'>
            <div className='behindFirstimg'></div>
            <img className='firstimg' src={firstimg} alt="" />
        </div>
        
    </div>
  )
}

export default Firstpage