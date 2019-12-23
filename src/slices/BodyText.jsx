import PropTypes from 'prop-types';
import { Box } from 'rebass';
import MarkdownTransform from '../utils/MarkdownTransform';

const BodyText = ({ input }) => (
  <Box
    sx={{
      maxWidth: 600,
      mx: 'auto',
      pt: 2,
      pb: 2
    }}
  >
    <MarkdownTransform
      markdown={input.bodyNode.childMarkdownRemark.rawMarkdownBody}
    />
  </Box>
);

export default BodyText;

BodyText.propTypes = {
  input: PropTypes.object.isRequired
};
