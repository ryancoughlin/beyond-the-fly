import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Img from 'gatsby-image';
import { Colors } from '../styles/theme';
import { Box } from 'rebass';
import { Styled } from 'theme-ui';

const Metadata = styled.h6({
  margin: '0 24',
  fontSize: 12
});

const Dot = styled.span({
  marginLeft: 8,
  marginRight: 8
});

const IssueNumber = styled.span({
  color: Colors.Global.Primary,
  fontWeight: 700
});

const Credits = styled.div({
  color: Colors.Palette.Text,
  fontWeight: 400,
  fontSize: 14
});

const Hero = ({ data }) => (
  <Box
    sx={{
      pt: 5,
      pb: 5
    }}
  >
    <Box
      sx={{
        mx: 'auto',
        maxWidth: 1100
      }}
    >
      <Box
        sx={{
          mx: 'auto',
          maxWidth: 700,
          textAlign: 'center'
        }}
      >
        <Styled.h1>{data.title}</Styled.h1>
      </Box>
      {data.featuredImage && <Img fluid={data.featuredImage.fluid} />}
      {data.credits && <Credits>{data.credits}</Credits>}
    </Box>
  </Box>
);

export default Hero;

Hero.propTypes = {
  data: PropTypes.object.isRequired
};
