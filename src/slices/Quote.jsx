import PropTypes from 'prop-types';
import { Box } from 'rebass';
import { Styled } from 'theme-ui';

const Quote = ({ input }) => (
  <Box
    sx={{
      maxWidth: 1000,
      backgroundColor: '#393f46',
      mx: 'auto',
      pt: 4,
      pb: 4,
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
