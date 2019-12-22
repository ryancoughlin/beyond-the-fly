import PropTypes from 'prop-types';
import { Box } from 'rebass';
import { Styled } from 'theme-ui';

const Quote = ({ input }) => (
  <Box
    sx={{
      pt: '4',
      pb: '4',
      backgroundColor: 'primary',
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
