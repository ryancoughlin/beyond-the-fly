import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import { Box } from 'rebass';

export default ({ data }) => (
  <StaticQuery
    query={graphql`
      query LogoQuery {
        file(relativePath: { eq: "logotype.png" }) {
          childImageSharp {
            fixed(height: 14) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => (
      <Box
        sx={{
          backgroundColor: 'darkBackground',
          pt: 5,
          pb: 5
        }}
      >
        <Box
          sx={{
            maxWidth: 1100,
            mx: 'auto'
          }}
        >
          <Link to="/">
            <Img fadeIn={false} fixed={data.file.childImageSharp.fixed} />
          </Link>
          <Link to="/about">About</Link>
        </Box>
      </Box>
    )}
  />
);
