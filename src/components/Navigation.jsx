import React from 'react';
import { StaticQuery, graphql } from "gatsby"
import styled from '@emotion/styled';
import Img from 'gatsby-image'
import {Link} from 'gatsby'

const Container = styled.div({
  display: 'flex',
  justifyContent: 'center',
  marginTop: 48,
  marginBottom: 100,
})

const Spread = styled.div({
  justifyContent: 'space-between',
  display: 'flex',
  maxWidth: 800,
  flex: 1,
  'a' : {
    color: 'white',
    fontSize: 12,
    textDecoration: 'none',
  }
})

export default ({data}) =>
 (
  <StaticQuery
    query={graphql`
      query LogoQuery {
        file(relativePath: { eq: "logo-colored.png" }) {
          childImageSharp { 
            fixed(height: 34) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => (
    <Container>
      <Spread>
        <Link to="/">Home</Link>
        <Link to="/"><Img fixed={data.file.childImageSharp.fixed} /></Link>
        <Link to="/">About</Link>
      </Spread>
    </Container>
    )}
  />
)
