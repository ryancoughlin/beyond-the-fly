import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BodyText, Image, Quote, Video, PhotoGallery } from '../slices';

export default class ModularContent extends Component {
  render() {
    const { data } = this.props;
		console.log('TCL: data -> render -> data', data)
    const content = data.map(s => {
      switch (s.model.apiKey) {
        case 'text':
          return <BodyText key={s.id} input={s} />;
        case 'image':
          return <Image key={s.id} input={s} />;
        case 'quote':
          return <Quote key={s.id} input={s} />;
        case 'gallery':
          return <PhotoGallery key={s.id} input={s} />;
        default:
          return null;
      }
    });
    return <div>{content}</div>;
  }
}

ModularContent.propTypes = {
  data: PropTypes.array.isRequired,
};
