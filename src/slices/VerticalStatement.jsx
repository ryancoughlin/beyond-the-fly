import PropTypes from 'prop-types';
import { Box } from 'rebass';
import { Styled } from 'theme-ui';
import Img from 'gatsby-image';

const BodyText = ({ input }) => (
  <Box
    sx={{
      maxWidth: 1100,
      mx: 'auto',
      mt: 6,
      mb: 6,
      gridGap: 3,
      display: 'grid',
      gridTemplateColumns: 'repeat(12,1fr)',
      gridTemplateRows: '',
      gridTemplateAreas:
        '"Content Content Content Content Content Content Content Image Image Image Image Image"'
    }}
  >
    <Box
      sx={{
        gridArea: 'Content'
      }}
    >
      {input.bodyNode.childMarkdownRemark.rawMarkdownBody}
    </Box>
    <Box
      sx={{
        gridArea: 'Image'
      }}
    >
      <Img fluid={input.image.fluid} />
    </Box>
  </Box>
);

export default BodyText;

BodyText.propTypes = {
  input: PropTypes.object.isRequired
};
