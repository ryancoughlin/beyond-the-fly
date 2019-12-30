import PropTypes from 'prop-types';
import { Box, Text } from 'rebass';
import { Styled } from 'theme-ui';

const Quote = ({ input }) => (
  <Box
    sx={{
      maxWidth: 1000,
      backgroundColor: 'darkBackground',
      mx: 'auto',
      pt: 4,
      pr: 5,
      pl: 5,
      pb: 4,
      textAlign: 'center'
    }}
  >
    <Text as="blockquote" fontSize={[4, 6]} fontWeight="bold" color="white">
      {input.quote}
    </Text>
  </Box>
);

export default Quote;

Quote.propTypes = {
  input: PropTypes.object.isRequired
};
