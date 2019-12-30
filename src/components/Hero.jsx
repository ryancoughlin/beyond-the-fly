import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { Box, Heading, Text } from 'rebass';
import { Styled } from 'theme-ui';

const Hero = ({ data }) => (
  <Box
    sx={{
      pt: 5,
      pb: 5,
      backgroundColor: 'darkBackground'
    }}
  >
    <Box
      sx={{
        maxWidth: 1000,
        mx: 'auto',
        mt: 2,
        mb: 2,
        pr: 1,
        pl: 1
      }}
    >
      <Box
        sx={{
          mx: 'auto',
          textAlign: 'center',
          marginBottom: 4
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: 3
          }}
        >
          {data.timeOfYear && (
            <Text
              color="muted"
              fontSize="1"
              fontWeight="bold"
              style={{ textTransform: 'uppercase' }}
            >
              {data.timeOfYear} ·
            </Text>
          )}
          {data.issueNumber && (
            <Text
              color="primary"
              fontSize="1"
              fontWeight="bold"
              style={{ textTransform: 'uppercase' }}
            >
              &nbsp;Issue 0{data.issueNumber}
            </Text>
          )}
        </Box>
        <Heading
          as="h1"
          fontSize={[6, 9]}
          color="white"
          style={{ textTransform: 'uppercase' }}
        >
          {data.title}
        </Heading>
        {data.credits && (
          <Text color="muted" fontSize="3">
            {data.credits}
          </Text>
        )}
      </Box>
      {data.featuredImage && <Img fluid={data.featuredImage.fluid} />}
    </Box>
  </Box>
);

export default Hero;

Hero.propTypes = {
  data: PropTypes.object.isRequired
};
