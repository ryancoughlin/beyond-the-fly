import React from 'react'
import Slider from "react-slick";
import Img from 'gatsby-image';
import styled from '@emotion/styled';

const Container = styled.div({
  paddingTop: '1.5rem',
  paddingBottom: '1.5rem',
  width: '84%',
  marginLeft: 'auto',
  marginRight: 'auto',
})

export default class PhotoGallery extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 275,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <Container>
        <Slider {...settings}>
        {
          this.props.input.gallery.map((image, index) => {
            return <Img key={index} fluid={image.fluid} />
          })
        }
        </Slider>
      </Container>
    );
  }
}
