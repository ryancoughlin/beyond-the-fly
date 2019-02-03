import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { StaticQuery, graphql } from "gatsby"
import Navigation from '../components/Navigation'
import '../styles'

const TemplateWrapper = ({ children }) => (
  <StaticQuery query={graphql`
    {
      datoCmsAbout {
        title
        aboutUsNode {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  `}
  render={data => (
    <div className="container">
        <Navigation />
        {children}
    </div>
    )}
  />
)

TemplateWrapper.propTypes = {
  children: PropTypes.object,
}

export default TemplateWrapper
