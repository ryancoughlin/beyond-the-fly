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
      gridGap: [0, 2],
      display: 'grid',
      gridTemplateColumns: 'repeat(12,1fr)',
      gridTemplateRows: '',
      gridTemplateAreas: [
        '"content content content content content content content content content content content content" "image image image image image image image image image image image image"',
        '"content content content image image image image image image image image image"'
      ]
    }}
  >
    <Box
      sx={{
        gridArea: 'content',
        backgroundColor: '#e8e8e8',
        padding: 4,
        display: 'flex'
      }}
    >
      <Box
        sx={{
          alignSelf: 'flex-end'
        }}
      >
        <MarkdownTransform
          markdown={input.textNode.childMarkdownRemark.rawMarkdownBody}
        />
      </Box>
    </Box>
    <Box
      sx={{
        gridArea: 'image'
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
