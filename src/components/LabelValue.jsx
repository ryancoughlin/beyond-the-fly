import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Box, Text } from 'rebass';

export default class LabelValue extends Component {
  render() {
    const { data } = this.props;

    return (
      <Box
        sx={{
          my: 4
        }}
      >
        <Text
          sx={{
            marginBottom: 3,
            textTransform: 'uppercase',
            textAlign: 'center'
          }}
          fontSize={2}
          fontWeight="bold"
        >
          Overview
        </Text>
        <Box
          sx={{
            maxWidth: 700,
            mx: 'auto',
            gridGap: 0,
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))'
          }}
        >
          {data.map(item => {
            return (
              <Box>
                <Text
                  sx={{
                    marginBottom: 0
                  }}
                  fontSize={6}
                  fontWeight={'bold'}
                  color="primary"
                >
                  {item.value}
                </Text>
                <Text fontSize={3}>{item.label}</Text>
              </Box>
            );
          })}
        </Box>
      </Box>
    );
  }
}

LabelValue.propTypes = {
  data: PropTypes.array.isRequired
};
