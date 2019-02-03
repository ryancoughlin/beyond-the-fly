import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled/macro';
import {Colors} from '../styles/theme'

const BlockQuote = styled.blockquote({
  backgroundColor: Colors.Global.Highlight,
  fontSize: 80,
  fontWeight: 600,
  color: Colors.Global.Background
});

const Inner = styled.div({
  maxWidth: 800,
  textAlign: 'center',
  margin: '0 auto'
})
const Quote = ({ input }) => (
  <BlockQuote>
    <Inner>
      {input.quote}
    </Inner>
  </BlockQuote>
);

export default Quote;

Quote.propTypes = {
  input: PropTypes.object.isRequired,
};
