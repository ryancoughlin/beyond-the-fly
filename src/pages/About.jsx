import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import styled from '@emotion/styled';

const Container = styled.div({
  maxWidth: 700,
  margin: '0 auto',
})

const About = ({ data: { about } }) => (
  <Layout>
    <Container
    dangerouslySetInnerHTML={{
      __html: about.aboutUsNode.childMarkdownRemark.html
    }}/>

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
