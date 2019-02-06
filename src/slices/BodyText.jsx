import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import {Global, css} from '@emotion/core';

const Container = styled.div`
  max-width: 600px;
  margin: 56px auto;
`;

const BodyText = ({ input }) => (
  <Container>
    <div dangerouslySetInnerHTML={{ __html: input.bodyNode.childMarkdownRemark.html }} />
  </Container>
) 

export default BodyText;

BodyText.propTypes = {
  input: PropTypes.object.isRequired,
}
