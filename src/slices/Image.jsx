import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Img from 'gatsby-image';
import {Colors, Container} from '../styles/theme';

const Caption = styled.div({
  color: Colors.Palette.Cement,
  marginTop: 4,
  fontSize: 13,
})

const Image = ({ input }) => (
  <Container>
    {input.image.fluid &&
      <Img fluid={input.image.fluid} />
    }

    {input.caption &&
      <Caption>{input.caption}</Caption>
    }
  </Container>
)

export default Image;

Image.propTypes = {
  input: PropTypes.object.isRequired,
};
