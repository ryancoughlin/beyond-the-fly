import React from 'react'

import './normalize.css'
import './layout.css'

import logo from '../images/logo.svg'

const Layout = ({ children }) => (
  <div class="container">
    <img src={logo} alt="Beyond the Fly" width={300} />
  </div>
)

export default Layout
