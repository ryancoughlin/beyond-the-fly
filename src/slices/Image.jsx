import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { Box } from 'rebass';
import { Styled } from 'theme-ui';

const Image = ({ input }) => (
  <Box
    sx={{
      maxWidth: 960,
      mx: 'auto',
      mt: 4,
      mb: 4
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
