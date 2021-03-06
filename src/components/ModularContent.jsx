import { Component } from 'react';
import PropTypes from 'prop-types';
import {
  BodyText,
  Image,
  Quote,
  PhotoGallery,
  PhotoGrid,
  VerticalStatement,
  ImageAndText,
  ImageColumn
} from '../slices';

export default class ModularContent extends Component {
  render() {
    const { data } = this.props;
    if (data != null) {
      const content = data.map((s, index) => {
        switch (s.model.apiKey) {
          case 'text':
            return <BodyText key={index} input={s} />;
          case 'image':
            return <Image key={index} input={s} />;
          case 'quote':
            return <Quote key={index} input={s} />;
          case 'image_gallery':
            return <PhotoGallery key={index} input={s} />;
          case 'photo_grid':
            return <PhotoGrid key={index} input={s} />;
          case 'vertical_statement':
            return <VerticalStatement key={index} input={s} />;
          case 'image_and_text':
            return <ImageAndText key={index} input={s} />;
          case 'image_column':
            return <ImageColumn key={index} input={s} />;
          default:
            return null;
        }
      });
      return <div>{content}</div>;
    } else {
      return <div>No content to display</div>;
    }
  }
}

ModularContent.propTypes = {
  data: PropTypes.array.isRequired
};
