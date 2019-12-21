import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from "gatsby"
import Navigation from '../components/Navigation'
import ChangeTheme from '../components/ChangeTheme'
import {Colors} from '../styles/theme'
import {Global, css} from '@emotion/core'
import { ThemeProvider, ColorMode } from 'theme-ui'
import theme from '../gatsby-plugin-theme-ui/index'
import "../../node_modules/slick-carousel/slick/slick.css"
import "../../node_modules/slick-carousel/slick/slick-theme.css"

const TemplateWrapper = ({ children }) => (
  <ThemeProvider theme={theme}>
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
      <>
        <Global
          styles={css`
            * {
              box-sizing: border-box;
            }
            body {
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
              background-color: ${Colors.Global.Background};
              color: ${Colors.Global.Text};
            }
            ul {
              margin-left: 0;
            }
            li {
              list-style-type: none;
              position: relative;
            }
            li:before {
              position: absolute;
              content: "";
              background-color: ${Colors.Global.Highlight};
              width: 4px;
              height: 4px;
              top: 9px;
              left: -16px;
            }
          `}
        />
        <Navigation />
        <ChangeTheme />
        {children}
      </>
      )}
    />
  </ThemeProvider>
)

TemplateWrapper.propTypes = {
  children: PropTypes.object,
}

export default TemplateWrapper
