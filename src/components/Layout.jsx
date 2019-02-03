import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from "gatsby"
import Navigation from '../components/Navigation'
import {Colors} from '../styles/theme'
import {Global, css} from '@emotion/core'
import styled from '@emotion/styled'
import "../../node_modules/slick-carousel/slick/slick.css"
import "../../node_modules/slick-carousel/slick/slick-theme.css"

const Container = styled.div({
  backgroundColor: Colors.Global.Background
});

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
    <Container>
      <Global
        styles={css`
          body {
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
      {children}
    </Container>
    )}
  />
)

TemplateWrapper.propTypes = {
  children: PropTypes.object,
}

export default TemplateWrapper
