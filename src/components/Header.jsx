import React, { useEffect, useState } from 'react'
import './styles/Header.scss'
import Nav from './Nav'
import Util from './Util'
const Header = ({isScrolled,modalOpenClick}) => {
  return (
    <header className={isScrolled ? 'scroll' : ''}>
      <div className="inner">
        <div className="mob_btn" onClick={modalOpenClick}>
          <img src="./img/crazy_hamburger.png" alt="nav" />
        </div>
        <Nav />

        <a className="logo" href="#">
          <img src="./img/TIFFANY&CO.svg" alt="logo" />
        </a>

        <Util />
      </div>
    </header>
  )
}

export default Header