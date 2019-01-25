import React, { Component } from 'react';
import styled from '@emotion/styled/macro';
import { graphql } from 'gatsby';
import { Layout, Navigation } from 'components';

class About extends Component {
  render() {
    const {
      data: { about, },
    } = this.props;
    return (
      <Layout>
        <Navigation />
        <h1>{about.data.about_us.text}</h1>
        <p>{about.data.summary.text}</p>
      </Layout>
    );
  }
}

export default About;

export const pageQuery = graphql`
  query AboutQuery {
    about: prismicAbout {
      data {
        about_us {
          text
        }
        summary {
          text
        }
      }
    }
  }
`;
