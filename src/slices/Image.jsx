import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Box, Text } from 'rebass';
import Img from 'gatsby-image';
import { Styled } from 'theme-ui';

export default class Image extends Component {
  render() {
    const { input } = this.props;

    return (
      <>
        <Box
          sx={{
            maxWidth: 1000,
            mx: 'auto',
            mt: 2,
            mb: 2,
            gridGap: 2,
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(128px, 1fr))'
          }}
        >
          {input.images.map(image => {
            return (
              <Box sx={{}}>
                <Img fluid={image.fluid} />
              </Box>
            );
          })}
        </Box>
        {input.caption && (
          <Text
            sx={{
              maxWidth: 1000,
              mx: 'auto',
              marginBottom: 2,
              textAlign: 'center'
            }}
            fontSize={2}
            color="muted"
          >
            {input.caption}
          </Text>
        )}
      </>
    );
  }
}

Image.propTypes = {
  input: PropTypes.object.isRequired
};
