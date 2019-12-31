import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Box, Link } from 'rebass';

export default ({ dark }) => {
  const { darkLogo, lightLogo } = useStaticQuery(graphql`
    query LogoQuery {
      darkLogo: file(relativePath: { eq: "logotype.png" }) {
        childImageSharp {
          fixed(height: 16) {
            base64
            width
            height
            src
            srcSet
          }
        }
      }
      lightLogo: file(relativePath: { eq: "logotype-white.png" }) {
        childImageSharp {
          fixed(height: 16) {
            base64
            width
            height
            src
            srcSet
          }
        }
      }
    }
  `);

  return (
    <Box
      sx={{
        pt: 4,
        pb: 2,
        backgroundColor: dark ? 'darkBackground' : 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Box
        sx={{
          maxWidth: 800,
          mx: 'auto'
        }}
      >
        <Link
          href="/"
          sx={{
            textDecoration: 'none',
            fontSize: 2,
            color: dark ? 'muted' : 'text'
          }}
        >
          Stories
        </Link>

        <Link href="/" sx={{ mx: 4 }}>
          <Img
            fadeIn={false}
            fixed={
              dark
                ? lightLogo.childImageSharp.fixed
                : darkLogo.childImageSharp.fixed
            }
          />
        </Link>
        <Link
          sx={{
            textDecoration: 'none',
            fontSize: 2,
            color: dark ? 'muted' : 'text'
          }}
          href="/about"
        >
          About
        </Link>
      </Box>
    </Box>
  );
};
