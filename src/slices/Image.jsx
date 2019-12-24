import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { Box } from 'rebass';
import { Styled } from 'theme-ui';

const Image = ({ input }) => (
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
    {input.image.fluid && <Img fluid={input.image.fluid} />}
    {input.caption && <Styled.h6>{input.caption}</Styled.h6>}
  </Box>
);

export default Image;

Image.propTypes = {
  input: PropTypes.object.isRequired
};
