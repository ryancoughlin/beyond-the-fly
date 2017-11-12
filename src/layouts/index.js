import React from "react"
import PropTypes from "prop-types"
import Link from "gatsby-link"

import "../assets/styles/main.scss"

class DefaultLayout extends React.Component {
  render() {
    return (
      <div>
        <div>
          <div>
            <h1>
              <Link to="/">BEYOND THE FLY!</Link>
            </h1>
          </div>
        </div>
        <div>{this.props.children()}</div>
      </div>
    )
  }
}

export default DefaultLayout
