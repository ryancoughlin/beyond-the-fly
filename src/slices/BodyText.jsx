import PropTypes from 'prop-types';
import { Box } from 'rebass';
import { MDXProvider } from '@mdx-js/react';
import { Styled } from 'theme-ui';
import bodyMarkdown from '../utils/body-markdown';

const components = {
  h1: Styled.h1,
  h2: Styled.h2,
  h3: Styled.h3,
  h4: Styled.h4,
  p: Styled.p,
  code: Styled.pre
};

const BodyText = ({ input }) => (
  <Box
    sx={{
      maxWidth: 1100,
      mx: 'auto',
      px: 3
    }}
  >
    <bodyMarkdown>
      {input.bodyNode.childMarkdownRemark.rawMarkdownBody}
    </bodyMarkdown>
  </Box>
);

export default BodyText;

BodyText.propTypes = {
  input: PropTypes.object.isRequired
};
