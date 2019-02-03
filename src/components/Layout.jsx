import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from "gatsby"
import Navigation from '../components/Navigation'
import {Colors} from '../styles/theme'
import {Global, css} from '@emotion/core'
import styled from '@emotion/styled'

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
            color: ${Colors.Global.Text}
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
