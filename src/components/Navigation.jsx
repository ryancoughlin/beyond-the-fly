import React from 'react';
import { StaticQuery, graphql } from "gatsby"
import styled from '@emotion/styled';
import Img from 'gatsby-image'
import {Link} from 'gatsby'

const Container = styled.div({
  display: 'flex',
  justifyContent: 'center',
  marginTop: 48,
  marginBottom: 64,
})

export default ({data}) => (
  <StaticQuery
    query={graphql`
      query LogoQuery {
        file(relativePath: { eq: "logo-colored.png" }) {
          childImageSharp { 
            fixed(width: 180) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => (
    <Container>
      <Link to="/"><Img fixed={data.file.childImageSharp.fixed} /></Link>
    </Container>
    )}
  />
)
