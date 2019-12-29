import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import { Styled } from 'theme-ui';
import HeadingRenderer from '../utils/HeadingRenderer';

const MarkdownTransform = props => {
  return (
    <ReactMarkdown
      source={props.markdown}
      renderers={{
        paragraph: props => {
          if (props.type === 'dark') {
            return <Styled.p variant="light" {...props} />;
          }
          return <Styled.p {...props} />;
        },
        heading: props => HeadingRenderer(props.level, props),
        blockquote: props => <Styled.blockquote {...props} />
      }}
    />
  );
};

export default MarkdownTransform;

MarkdownTransform.propTypes = {
  props: PropTypes.object.isRequired
};
