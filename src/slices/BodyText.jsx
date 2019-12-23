import PropTypes from 'prop-types';
import { Box } from 'rebass';
import MarkdownTransform from '../utils/MarkdownTransform';

const BodyText = ({ input }) => (
  <Box
    sx={{
      maxWidth: 700,
      mx: 'auto',
      pt: 4,
      pb: 4
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
