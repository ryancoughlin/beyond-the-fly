/* eslint no-unused-expressions: 0 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { injectGlobal } from 'emotion/macro';
import { ThemeProvider } from 'emotion-theming';
import { Footer } from 'components';
import { theme, reset } from 'styles';
import styled from '@emotion/styled/macro';

injectGlobal`
  ${reset}
  h1, h2, h3, h4, h5, h6 {
    color: ${theme.colors.black};
  }

  h1 {
    font-style: normal;
    font-weight: 900;
    font-size: 42px;
    text-transform: uppercase;
  }

  p {
    color: ${theme.colors.textColor};
    font-size: 14px;
  }

  a {
    color: ${theme.colors.primary};
    transition: all 0.4s ease-in-out;
    text-decoration: none;
    font-weight: 700;
    font-style: italic;
    &:hover, &:focus {
      text-decoration: underline;
    }
  }
  @media (max-width: ${theme.breakpoints.m}) {
    html {
      font-size: 16px !important;
    }
  }
  @media (max-width: ${theme.breakpoints.s}) {
    h1 {
      font-size: 2.369rem !important;
    }
    h2 {
      font-size: 1.777rem !important;
    }
    h3 {
      font-size: 1.333rem !important;
    }
    h4 {
      font-size: 1rem !important;
    }
    h5 {
      font-size: 0.75rem !important;
    }
    h6 {
      font-size: 0.563rem !important;
    }
  }
`;

const Container = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
`;

const PureLayout = ({ children, data }) => (
  <ThemeProvider theme={theme}>
    <Container>
      {children}
    </Container>
    <Footer>
      <div dangerouslySetInnerHTML={{ __html: data.prismicHomepage.data.footer.html }} />
    </Footer>
  </ThemeProvider>
);

class Layout extends Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query LayoutQuery {
            prismicHomepage {
              data {
                footer {
                  html
                }
              }
            }
          }
        `}
        render={data => <PureLayout {...this.props} data={data} />}
      />
    );
  }
}

export default Layout;

PureLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
  data: PropTypes.object.isRequired,
};
