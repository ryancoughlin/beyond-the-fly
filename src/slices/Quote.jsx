import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled/macro';
import {Colors} from '../styles/theme'
import facepaint from 'facepaint'

const breakpoints = [576, 768, 992]
const mq = facepaint(
  breakpoints.map(bp => `@media (min-width: ${bp}px)`)
)

const BlockQuote = styled.blockquote(
  mq({fontSize: [32, 64]}), {
  backgroundColor: Colors.Global.Highlight,
  fontWeight: 600,
  textTransform: 'uppercase',
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
