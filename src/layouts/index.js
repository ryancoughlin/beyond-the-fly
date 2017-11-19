import React from 'react'
import Link from 'gatsby-link'

import '../assets/styles/main.scss'

const Layout = ({ children }) => (
  <div>
    <h1>
      <Link to="/">BEYOND THE FLY!</Link>
    </h1>
    <div>{children()}</div>
  </div>
)

export default Layout
