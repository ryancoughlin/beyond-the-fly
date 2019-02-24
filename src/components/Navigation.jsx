import React from 'react';
import { StaticQuery, graphql } from "gatsby"
import styled from '@emotion/styled';
import Img from 'gatsby-image'
import {Link} from 'gatsby'
import {Colors} from '../styles/theme';

const Container = styled.div({
  display: 'flex',
  justifyContent: 'center',
  marginTop: 40,
  marginBottom: 40,
  position: '-webkit-sticky',
  position: 'sticky',
})

const Spread = styled.div({
  justifyContent: 'space-between',
  display: 'flex',
  maxWidth: 360,
  alignItems: 'center',
  flex: 1,
  'a' : {
    color: 'white',
    fontSize: 12,
    textDecoration: 'none',
  },
  'a:hover' : {
    color: Colors.Palette.Cement,
    textDecoration: 'underline',

  }
})

export default ({data}) =>
 (
  <StaticQuery
    query={graphql`
      query LogoQuery {
        file(relativePath: { eq: "logo-colored.png" }) {
          childImageSharp { 
            fixed(height: 26) {
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
        <Link to="/">
          <Img fadeIn={false} fixed={data.file.childImageSharp.fixed} />
        </Link>
        <Link to="/about">About</Link>
      </Spread>
    </Container>
    )}
  />
)
