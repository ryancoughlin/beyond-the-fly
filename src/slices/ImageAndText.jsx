import PropTypes from 'prop-types';
import { Box } from 'rebass';
import MarkdownTransform from '../utils/MarkdownTransform';
import Img from 'gatsby-image';

const ImageAndText = ({ input }) => (
  <Box
    sx={{
      maxWidth: 1000,
      mx: 'auto',
      mt: 2,
      mb: 2,
      pr: 1,
      pl: 1,
      gridGap: 2,
      display: 'grid',
      gridTemplateColumns: 'repeat(12,1fr)',
      gridTemplateRows: '',
      gridTemplateAreas:
        '"Content Content Content Content Image Image Image Image Image Image Image Image"'
    }}
  >
    <Box
      sx={{
        gridArea: 'Content',
        backgroundColor: '#e8e8e8',
        padding: 3
      }}
    >
      <MarkdownTransform
        markdown={input.textNode.childMarkdownRemark.rawMarkdownBody}
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

export default ImageAndText;

ImageAndText.propTypes = {
  input: PropTypes.object.isRequired
};
