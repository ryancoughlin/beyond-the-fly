import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled/macro';

const Container = styled.div`
  max-width: ${props => props.theme.maxWidthText};
  margin: 56px auto;
`;

const BodyText = ({ input }) => (
  <Container>
    { 
      input.header &&
        <h3>{input.header}</h3>
    }
    <div dangerouslySetInnerHTML={{ __html: input.body }} />
  </Container>
) 

export default BodyText;

BodyText.propTypes = {
  input: PropTypes.object.isRequired,
};
