import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Navigation from '../components/Navigation';
import ModularContent from '../components/ModularContent';
import SEO from '../components/SEO';

export default ({ data }) => (
  <Layout>
    <SEO
      title={data.datoCmsStory.title}
      description={data.datoCmsStory.overview || ''}
      image={data.datoCmsStory.featuredImage.fluid.sizes.src}
      pathname={data.datoCmsStory.slug}
      article
    />
    <Navigation dark />
    <Hero data={data.datoCmsStory} />
    <ModularContent data={data.datoCmsStory.content} />
  </Layout>
);

export const query = graphql`
  query StoryQuery($slug: String!) {
    datoCmsStory(slug: { eq: $slug }) {
      title
      overview
      slug
      issueNumber
      timeOfYear
      credits
      featuredImage {
        fluid(maxHeight: 300) {
          ...GatsbyDatoCmsSizes
        }
      }
      content {
        ... on DatoCmsText {
          model {
            apiKey
          }
          bodyNode {
            childMarkdownRemark {
              rawMarkdownBody
            }
          }
        }
        ... on DatoCmsImageAndText {
          model {
            apiKey
          }
          textNode {
            childMarkdownRemark {
              rawMarkdownBody
            }
          }
          image {
            fluid(
              maxWidth: 1100
              maxHeight: 400
              imgixParams: {
                fm: "jpg"
                auto: "compress"
                h: "780"
                fit: "crop"
              }
            ) {
              ...GatsbyDatoCmsSizes
            }
          }
        }
        ... on DatoCmsImageColumn {
          model {
            apiKey
          }
          images {
            fluid(
              maxWidth: 1100
              maxHeight: 400
              imgixParams: {
                fm: "jpg"
                auto: "compress"
                h: "780"
                fit: "crop"
              }
            ) {
              ...GatsbyDatoCmsSizes
            }
          }
        }

        ... on DatoCmsVerticalStatement {
          model {
            apiKey
          }
          bodyNode {
            childMarkdownRemark {
              rawMarkdownBody
            }
          }
          image {
            fluid(
              maxWidth: 1100
              maxHeight: 400
              imgixParams: {
                fm: "jpg"
                auto: "compress"
                h: "780"
                fit: "crop"
              }
            ) {
              ...GatsbyDatoCmsSizes
            }
          }
        }
        ... on DatoCmsImage {
          model {
            apiKey
          }
          images {
            fluid(
              maxWidth: 1100
              maxHeight: 700
              imgixParams: {
                fm: "jpg"
                auto: "compress"
                h: "780"
                fit: "crop"
              }
            ) {
              ...GatsbyDatoCmsSizes
            }
          }
          caption
        }
        ... on DatoCmsImageGallery {
          model {
            apiKey
          }
          images {
            fluid(
              maxWidth: 1100
              maxHeight: 550
              imgixParams: {
                fm: "jpg"
                auto: "compress"
                h: "700"
                fit: "crop"
              }
            ) {
              ...GatsbyDatoCmsSizes
            }
          }
        }
        ... on DatoCmsPhotoGrid {
          model {
            apiKey
          }
          images {
            fluid(
              maxWidth: 1100
              maxHeight: 550
              imgixParams: {
                fm: "jpg"
                auto: "compress"
                h: "700"
                fit: "crop"
              }
            ) {
              ...GatsbyDatoCmsSizes
            }
          }
        }
        ... on DatoCmsQuote {
          quote
          who
          model {
            apiKey
          }
        }
      }
    }
  }
`;
