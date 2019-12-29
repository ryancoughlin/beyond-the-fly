import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import Navigation from '../components/Navigation';
import Collaborate from '../components/Collaborate';

// import ChangeTheme from '../components/ChangeTheme';
import { ThemeProvider, Styled } from 'theme-ui';
import theme from '../theme';
import '../../node_modules/slick-carousel/slick/slick.css';
import '../../node_modules/slick-carousel/slick/slick-theme.css';
import '../assets/css/layout.css';

const TemplateWrapper = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Styled.root>
      <StaticQuery
        query={graphql`
          {
            datoCmsAbout {
              title
              aboutUsNode {
                childMarkdownRemark {
                  html
                }
              }
            }
          }
        `}
        render={data => (
          <>
            <Navigation />
            {/* <ChangeTheme /> */}
            {children}
            <Collaborate />
          </>
        )}
      />
    </Styled.root>
  </ThemeProvider>
);

TemplateWrapper.propTypes = {
  children: PropTypes.object
};

export default TemplateWrapper;
