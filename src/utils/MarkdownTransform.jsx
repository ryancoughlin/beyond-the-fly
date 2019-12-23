import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import { Styled } from 'theme-ui';
import HeadingRenderer from '../utils/HeadingRenderer';

const MarkdownTransform = ({ markdown }) => {
  return (
    <ReactMarkdown
      source={markdown}
      renderers={{
        paragraph: props => <Styled.p {...props} />,
        heading: props => HeadingRenderer(props.level, props)
      }}
    />
  );
};

export default MarkdownTransform;

MarkdownTransform.propTypes = {
  markdown: PropTypes.object.isRequired
};
