import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Img from 'gatsby-image';

const ImageContainer = styled.div`
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  width: 94%;
  margin-left: auto;
  margin-right: auto;
`;

const Image = ({ input }) => (
  <ImageContainer>
    <Img fluid={input.image.fluid} />
  </ImageContainer>
);

export default Image;

Image.propTypes = {
  input: PropTypes.object.isRequired,
};
