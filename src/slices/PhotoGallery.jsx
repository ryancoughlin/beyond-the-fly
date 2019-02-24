import React from 'react'
import Slider from "react-slick";
import Img from 'gatsby-image';
import styled from '@emotion/styled';
import {Global, css} from '@emotion/core'
import {Colors, Container} from '../styles/theme'
export default class PhotoGallery extends React.Component {
  render() {
    var settings = {
      dots: true,
      speed: 175,
      slidesToShow: 2,
      slidesToScroll: 1
    };

    return (
      <Container>
         <Global
        styles={css`
        .slick-next {
          right: 0;
        }

        .slick-prev {
          left: 0;
        }

        .slick-prev,
        .slick-next {
          background-color: ${Colors.Global.Background};
          width: 40px;
          height: 40px;
          z-index: 10;
        }

        .slick-prev:hover,
        .slick-next:hover {
          background-color: ${Colors.Global.Background};
        }

        .slick-prev:before,
        .slick-next:before {
          font-size: 16px;
          font-weight: 600;
        }
        
        .slick-next:before {
          color: ${Colors.Global.Highlight};
          content: "→";
        }

        .slick-prev:before {
          color: ${Colors.Global.Highlight};
          content: "←";
        }


        .slick-dots li:before {
          display: none;
        }

        .slick-dots li button:before {
          color: ${Colors.Global.Text};
          opacity: 0.5;
          content: '•';
        }
        .slick-dots li.slick-active button:before {
          color: ${Colors.Global.Highlight};
          opacity: 1
        }
        `}
      />
        <Slider {...settings}>
        {
          this.props.input.images.map((image, index) => {
            return <Img key={index} fluid={image.fluid} />
          })
        }
        </Slider>
      </Container>
    );
  }
}
