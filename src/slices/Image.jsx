import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { Box } from 'rebass';
import { Styled } from 'theme-ui';

const Image = ({ input }) => (
  <Box
    sx={{
      maxWidth: 1100,
      mx: 'auto',
      px: 3
    }}
  >
    {input.image.fluid && <Img fluid={input.image.fluid} />}
    {input.caption && <Styled.p>{input.caption}</Styled.p>}
  </Box>
);

export default Image;

Image.propTypes = {
  input: PropTypes.object.isRequired
};
