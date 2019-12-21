import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import Navigation from '../components/Navigation';
import ChangeTheme from '../components/ChangeTheme';
import { Global, css } from '@emotion/core';
import { ThemeProvider, ColorMode } from 'theme-ui';
import theme from '../theme';
import '../../node_modules/slick-carousel/slick/slick.css';
import '../../node_modules/slick-carousel/slick/slick-theme.css';

const TemplateWrapper = ({ children }) => (
  <ThemeProvider theme={theme}>
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
          <ChangeTheme />
          {children}
        </>
      )}
    />
  </ThemeProvider>
);

TemplateWrapper.propTypes = {
  children: PropTypes.object
};

export default TemplateWrapper;
