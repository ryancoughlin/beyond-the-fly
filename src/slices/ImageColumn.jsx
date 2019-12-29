import PropTypes from 'prop-types';
import { Component } from 'react';
import { Box } from 'rebass';
import Img from 'gatsby-image';

export default class ImageColumn extends Component {
  render() {
    const { input } = this.props;

    return (
      <Box
        sx={{
          maxWidth: 1000,
          mx: 'auto',
          mt: 2,
          mb: 2,
          pr: 1,
          pl: 1,
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
    );
  }
}

ImageColumn.propTypes = {
  input: PropTypes.object.isRequired
};
