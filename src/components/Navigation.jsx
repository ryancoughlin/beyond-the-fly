import React from 'react';
import { graphql } from "gatsby"
import styled from '@emotion/styled';
import Img from 'gatsby-image'

const Container = styled.div({
  display: 'flex',
  backgroundColor: 'red',
})

export default ({data}) => (
  <Container>
  </Container>
)

// export const query = graphql`
//   query {
//     file(relativePath: { eq: "logo-colored.png" }) {
//       childImageSharp { 
//         fixed(width: 125, height: 125) {
//           ...GatsbyImageSharpFixed
//         }
//       }
//     }
//   }
// `