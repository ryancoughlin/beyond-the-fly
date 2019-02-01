import React from 'react'
import { graphql } from 'gatsby'

const About = ({ data: { about } }) => (
  <div
    dangerouslySetInnerHTML={{
      __html: about.aboutUsNode.childMarkdownRemark.html
    }}
  ></div>
)

export default About

export const query = graphql`
  query AboutQuery {
    about: datoCmsAbout {
      title
      aboutUsNode {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
