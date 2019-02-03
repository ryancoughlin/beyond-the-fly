import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

const About = ({ data: { about } }) => (
  <Layout>
    <div
      dangerouslySetInnerHTML={{
        __html: about.aboutUsNode.childMarkdownRemark.html
      }}
    ></div>
  </Layout>
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
