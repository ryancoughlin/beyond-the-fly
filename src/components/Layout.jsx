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
