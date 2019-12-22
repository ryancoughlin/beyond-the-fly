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
      maxWidth: 700,
      mx: 'auto',
      pt: 4,
      pb: 4
    }}
  >
    <div
      dangerouslySetInnerHTML={{
        __html: input.bodyNode.childMarkdownRemark.html
      }}
    />
  </Box>
);

export default BodyText;

BodyText.propTypes = {
  input: PropTypes.object.isRequired
};
