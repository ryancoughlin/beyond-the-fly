import PropTypes from 'prop-types';
import { Box } from 'rebass';
import { Styled } from 'theme-ui';

const Quote = ({ input }) => (
  <Box
    sx={{
      maxWidth: 960,
      backgroundColor: 'primary',
      mx: 'auto',
      pt: 6,
      pb: 6,
      textAlign: 'center'
    }}
  >
    <Styled.blockquote>{input.quote}</Styled.blockquote>
  </Box>
);

export default Quote;

Quote.propTypes = {
  input: PropTypes.object.isRequired
};
