import React from 'react'
import { useState } from 'react'
import bookmarkLogo from './img/logo-bookmark.svg'

const Navbar = () => {
    //const [eachBurger, setBurger] = useState('defaultBurger')
    // const [defaultList, setdefaultList] = useState('lits')
    // const [oneBurger, setoneBurger] = useState('eco1')
    // const [twoBurger, settwoBurger] = useState('eco2')
    // const [threeBurger, setthreeBurger] = useState('eco3')

    // const hamburgerToggle = ()=>{
    //     setdefaultList('mnu2')
    //     setoneBurger('cor1')
    //     settwoBurger('cor2')
    //     setthreeBurger('cor3')
    // }

    // const [burgerClass, setburgerClass] = useState('burgerBar unclicked')
    // const [menuClass, setmenuClass] = useState('menu hidden')
    // const [isMenuClicked, setIsMenuClicked] = useState(false)


  return (
    <div>
        {/* <nav> 
            <img className='bookmarkLogo' src={bookmarkLogo} alt="" />

            <div className='hamburger' onClick={hamburgerToggle} >
                <div className={oneBurger}></div>
                <div className={twoBurger}></div>
                <div className={threeBurger}></div>
            </div>

            <div className={menuClass}>
                <ul>
                    <li><a href="#"> FEATURES</a></li>
                    <li><a href="#">PRICING</a></li>
                    <li><a href="#">CONTACT</a></li>
                    <li><a href="#">LOGIN</a></li>
                </ul>
            </div>
            
        </nav> */}



    {/* <nav className="navbar navbar-expand-lg navbar-light bg-light ">
      <div className="container bg-success" >
        <img className='bookmarkLogo' src={bookmarkLogo} alt="logo" />
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarSupportedContent" >
          <div className='navbar-bootstrap'>
            <ul className="navbar-nav me-auto mb-4 mb-lg-0">
              <li className="nav-item  me-auto mb-4 mb-lg-0">
                <a className="nav-link active" aria-current="page" href="#">FEATURES</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">PRICING</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">CONTACT</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">LOGIN</a>
              </li>
              
            </ul>
          </div>
          
        </div>
      </div>


      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    </nav> */}


        {/* <nav className="navbar navbar-expand-sm bg-light w-75 m-auto">
          <div className="container ">
            <img src={bookmarkLogo} alt="" />
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavbarDropdown" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">FEATURES</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">PRICING</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">CONTACT</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">LOGIN</a>
                </li>
                
              </ul>
            </div>
          </div>
        </nav> */}


<nav className="navbar navbar-expand-sm " >
  <div className="container">
    <img src={bookmarkLogo} alt="" />
    {/* <a className="navbar-brand" href="#">BOOKMARK</a> */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarNav">
      <ul className="navbar-nav ms-auto mb-4 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="">FEATURES</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="">PRICING</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="">CONTACT</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active">LOGIN</a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>





    </div>
  )
}

export default Navbar