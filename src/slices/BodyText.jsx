import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled/macro';

const Container = styled.div`
  max-width: ${props => props.theme.maxWidthText};
  margin: 56px auto;
`;

const BodyText = ({ input }) => (
  <Container>
    <h3>{input.primary.header.text}</h3>
		{console.log('​input.primary.header', input)}
    <div dangerouslySetInnerHTML={{ __html: input.primary.text.html }} />
  </Container>
) 

export default BodyText;

BodyText.propTypes = {
  input: PropTypes.object.isRequired,
};
