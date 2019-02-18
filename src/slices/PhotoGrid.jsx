import React from 'react'
import Img from 'gatsby-image';
import styled from '@emotion/styled';
import {Global, css} from '@emotion/core'
import {Colors} from '../styles/theme'

const gridItem01 = css`
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 3;
`;

const gridItem02 = css({
  gridColumnStart: 3,
  gridColumnEnd: 5,
  gridRowStart: 1,
  gridRowEnd: 3,
})

const gridItem03 = css({
  gridColumnStart: 5,
  gridColumnEnd: 9,
  gridRowStart: 1,
  gridRowEnd: 6,
})

const gridItem04 = css({
  gridColumnStart: 1,
  gridColumnEnd: 5,
  gridRowStart: 3,
  gridRowEnd: 6,
})

const gridItem05 = css({
  gridColumnStart: 1,
  gridColumnEnd: 5,
  gridRowStart: 6,
  gridRowEnd: 9,
})

const gridItem06 = css({
  gridColumnStart: 5,
  gridColumnEnd: 9,
  gridRowStart: 6,
  gridRowEnd: 9,
})

const Container = styled.div({
  display: 'grid',
  gridTemplateColumns: 'repeat(8, 1fr)',
  gridTemplateRows: 'repeat(8, 5vw)',
  gridGap: 16,
  width: '94%',
  marginLeft: 'auto',
  marginRight: 'auto',
})

export default class PhotoGrid extends React.Component {
  render() {
    return (
      <Container>
        {
          this.props.input.images.map((image, index) => {
            var gridClass = "";
            if (index === 0) {
              gridClass = gridItem01;
            } else if(index === 1) {
              gridClass = gridItem02;
            } else if(index === 2) {
              gridClass = gridItem03;
            } else if(index === 3) {
              gridClass = gridItem04;
            } else if(index === 4) {
              gridClass = gridItem05;
            } else if(index === 5) {
              gridClass = gridItem06;
            }

            return (
              <div css={gridClass}>
              <Img
                key={index}
                fluid={image.fluid}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </div>
            )
          })
        }
      </Container>
    );
  }
}
