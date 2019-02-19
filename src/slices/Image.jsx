import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Img from 'gatsby-image';
import {Colors} from '../styles/theme';

const Caption = styled.div({
  color: Colors.Palette.Cement,
  marginTop: 4,
  fontSize: 11,
})

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
    {input.caption &&
      <Caption>{input.caption}</Caption>
    }

  </ImageContainer>
);

export default Image;

Image.propTypes = {
  input: PropTypes.object.isRequired,
};
