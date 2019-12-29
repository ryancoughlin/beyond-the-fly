import PropTypes from 'prop-types';
import { Box } from 'rebass';
import MarkdownTransform from '../utils/MarkdownTransform';
import Img from 'gatsby-image';

const BodyText = ({ input }) => (
  <Box
    sx={{
      maxWidth: 1000,
      mx: 'auto',
      mt: 2,
      mb: 2,
      gridGap: 2,
      display: 'grid',
      gridTemplateColumns: 'repeat(12,1fr)',
      gridTemplateRows: '',
      gridTemplateAreas:
        '"Content Content Content Content Content Content Image Image Image Image Image Image"'
    }}
  >
    <Box
      sx={{
        gridArea: 'Content',
        backgroundColor: 'darkBackground',
        padding: 4,
        color: 'white'
      }}
    >
      <MarkdownTransform
        markdown={input.bodyNode.childMarkdownRemark.rawMarkdownBody}
        type="dark"
      />
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
