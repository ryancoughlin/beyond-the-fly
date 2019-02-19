import React from 'react'
import Slider from "react-slick";
import Img from 'gatsby-image';
import styled from '@emotion/styled';
import {Global, css} from '@emotion/core'
import {Colors} from '../styles/theme'

const Container = styled.div({
  paddingTop: '1.5rem',
  paddingBottom: '1.5rem',
  width: '94%',
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
         <Global
        styles={css`
        .slick-prev,
        .slick-next {
          background-color: ${Colors.Global.Background};
          width: 60px;
          height: 60px;
        }

        .slick-prev:before,
        .slick-next:before {
          font-size: 16px;
          font-weight: 600;
        }
        
        .slick-next:before {
          color: ${Colors.Global.Highlight};
          content: "⟶";
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
