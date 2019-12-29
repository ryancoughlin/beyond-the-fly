import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { Box, Link, Heading, Button, Text } from 'rebass';
import { Styled } from 'theme-ui';

function email() {
  window.location.href = 'mailto:ryan@ryancoughlin.com';
}

const Collaborate = () => (
  <Box
    sx={{
      maxWidth: 1000,
      backgroundColor: 'primary',
      mx: 'auto',
      mt: 2,
      mb: 2,
      pr: 2,
      pl: 2,
      padding: 4
    }}
  >
    <Box
      sx={{
        textAlign: 'center'
      }}
    >
      <Heading fontSize={[6]} marginBottom={2}>
        Fish, hunt, surf, & write
      </Heading>
      <Text fontSize={[3]}>
        Love the outdoors? Looking for folks to shoot and write.
      </Text>
      <Button marginTop={4} variant="dark" onClick={email}>
        Email Us
      </Button>
    </Box>
  </Box>
);

export default Collaborate;
``;
