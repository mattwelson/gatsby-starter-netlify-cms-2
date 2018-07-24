import React from 'react'
import Link from 'gatsby-link'

import aperture from '../img/aperture.png'
import user from '../img/user.png'

const Navbar = () => (
  <header className="header" role="banner">
    <div className="wrapper">
      <a href="/" className="font--logo">
        <h1 className="header__title">CODIE WESTPHALL</h1>
      </a>

      <div className="header__right">
        <a href="/gear/" className="header__icon">
          <img src={aperture} alt="gear" style={{ width: 30, height: 30 }} />
          <div className="header__tooltip">
            <div>My Gear</div>
          </div>
        </a>
        <a href="/about/" className="header__icon">
          <img src={user} alt="about me" style={{ width: 30, height: 30 }} />
          <div className="header__tooltip">
            <div>About Me</div>
          </div>
        </a>
      </div>
    </div>
  </header>
)

export default Navbar
