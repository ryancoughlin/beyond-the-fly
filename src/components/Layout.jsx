import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { StaticQuery, graphql } from "gatsby"

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
      <div className="container__body">
        <div className="container__mobile-header">
          <div className="mobile-header">
            <div className="mobile-header__menu">
              <Link to="#" data-js="toggleSidebar" />
            </div>
          </div>
        </div>
        {children}
      </div>
    </div>
    )}
  />
)

TemplateWrapper.propTypes = {
  children: PropTypes.object,
}

export default TemplateWrapper
