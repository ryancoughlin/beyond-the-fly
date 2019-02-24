import React from 'react'
import styled from '@emotion/styled';
import { graphql } from 'gatsby'
import {Colors} from '../styles/theme';
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import ModularContent from '../components/ModularContent'

export default ({ data }) => (
  <Layout>
    <Hero data={data.datoCmsStory} />
    <ModularContent data={data.datoCmsStory.content} />
  </Layout>
)

export const query = graphql`
  query StoryQuery($slug: String!) {
    datoCmsStory(slug: { eq: $slug }) {
      title
      issueNumber
      timeOfYear
      credits
      featuredImage {
        fluid(maxWidth: 1100, maxHeight: 550, imgixParams: { fm: "jpg", auto: "compress", h: "900", fit: "crop" }) {
          ...GatsbyDatoCmsFluid
        }
      }
      content {
        ... on DatoCmsText {
          model {
            apiKey
          }
          bodyNode {
            childMarkdownRemark {
              html
            }
          }
        }
        ... on DatoCmsImage {
          model {
            apiKey
          }
          image {
            fluid(maxWidth: 1100, maxHeight: 550, imgixParams: { fm: "jpg", auto: "compress", h: "700", fit: "crop" }) {
              ...GatsbyDatoCmsFluid
            }
          }
          caption
        }
        ... on DatoCmsImageGallery {
          model {
            apiKey
          }
          images {
            fluid(maxWidth: 1100, maxHeight: 550, imgixParams: { fm: "jpg", auto: "compress", h: "700", fit: "crop" }) {
              ...GatsbyDatoCmsFluid
            }
          }
        }
        ... on DatoCmsPhotoGrid {
          model {
            apiKey
          }
          images {
            fluid(maxWidth: 1100, maxHeight: 550, imgixParams: { fm: "jpg", auto: "compress", h: "700", fit: "crop" }) {
              ...GatsbyDatoCmsFluid
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
`
