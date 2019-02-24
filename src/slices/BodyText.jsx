import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import {Global, css} from '@emotion/core';
import hr from '../assets/images/hr.svg';
import {Colors} from '../styles/theme';

const Container = styled.div`
  max-width: 600px;
  margin: 56px auto;
  padding-left: 16px;
  padding-right: 16px;
`

const BodyText = ({ input }) => (
  <Container>
    <Global
      styles={css`
        hr {
          background-image: url(${hr});
          max-width: 100px;
          height: 4px;
          margin: 0 auto;
       }
       blockquote {
        font-family: ff-market-web, sans-serif;
        text-align: center;
        font-size: 46px;
        color: ${Colors.Global.Highlight};
       }
      `}
    />
    <div dangerouslySetInnerHTML={{ __html: input.bodyNode.childMarkdownRemark.html }} />
  </Container>
) 

export default BodyText;

BodyText.propTypes = {
  input: PropTypes.object.isRequired,
}
