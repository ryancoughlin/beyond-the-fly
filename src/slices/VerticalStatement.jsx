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
      gridGap: [0, 2],
      display: 'grid',
      gridTemplateColumns: 'repeat(12,1fr)',
      gridTemplateRows: '',
      gridTemplateAreas: [
        '"content content content content content content content content content content content content" "image image image image image image image image image image image image"',
        '"content content content content content content image image image image image image"',
        '"content content content content content content image image image image image image"'
      ]
    }}
  >
    <Box
      sx={{
        gridArea: 'content',
        backgroundColor: '#F2F2F2',
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
        gridArea: 'image'
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
