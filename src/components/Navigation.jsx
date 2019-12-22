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
          maxWidth: 1100,
          mx: 'auto',
          mt: 3,
          mb: 5
        }}
      >
        <Link to="/">
          <Img fadeIn={false} fixed={data.file.childImageSharp.fixed} />
        </Link>
        <Link to="/about">About</Link>
      </Box>
    )}
  />
);
