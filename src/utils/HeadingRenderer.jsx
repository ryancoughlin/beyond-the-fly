import { Styled } from 'theme-ui';

const HeadingRenderer = (level, props) => {
  switch (level) {
    case 1:
      return <Styled.h1 {...props} />;
    case 2:
      return <Styled.h2 {...props} />;
    case 3:
      return <Styled.h3 {...props} />;
    case 4:
      return <Styled.h4 {...props} />;
    case 6:
      return <Styled.h5 {...props} />;
    case 5:
      return <Styled.h6 {...props} />;
    default:
      return <Styled.h6 {...props} />;
  }
};

export default HeadingRenderer;
