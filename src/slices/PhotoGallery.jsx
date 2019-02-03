import React from 'react'
import Slider from "react-slick";
import Img from 'gatsby-image';

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
      <Slider {...settings}>
      {
        this.props.input.gallery.map(image => {
          return <Img fluid={image} />
        })
      }
      </Slider>
    );
  }
}
