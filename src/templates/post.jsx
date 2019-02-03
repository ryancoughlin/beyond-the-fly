import React from 'react'
import styled from '@emotion/styled';
import { graphql } from 'gatsby'
import {Colors} from '../styles/theme';
import Layout from '../components/Layout'
import ModularContent from '../components/ModularContent'

const Hero = styled.div({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  maxWidth: 760,
  margin: '0 auto'
})

const Introduction = styled.div({
  maxWidth: 700,
  textAlign: 'center',
  margin: '48px auto 48px auto',
})

const Metadata = styled.h6({
  margin: '0 24',
})

const Dot = styled.span({
  marginLeft: 8,
  marginRight: 8,
})

const IssueNumber = styled.span({
  color: Colors.Global.Primary,
  fontWeight: 700,
})

const Title = styled.h1({
  textAlign: 'center',
  marginBottom: 0
})

export default ({ data }) => (
  <Layout>
    <Hero>
      <Metadata>
        <IssueNumber> Issue {data.datoCmsStory.issueNumber}</IssueNumber>
        <Dot>·</Dot>
        {data.datoCmsStory.timeOfYear}
      </Metadata> 
      <Title>{data.datoCmsStory.title}</Title>
      <Introduction><p>{data.datoCmsStory.introduction}</p></Introduction>
    </Hero>

    <ModularContent data={data.datoCmsStory.content} />
  </Layout>
)

export const query = graphql`
  query StoryQuery($slug: String!) {
    datoCmsStory(slug: { eq: $slug }) {
      title
      issueNumber
      timeOfYear
      introduction
      content {
        ... on DatoCmsText {
          model {
            apiKey
          }
          header
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
        ... on DatoCmsGallery {
          model {
            apiKey
          }
          gallery {
            fluid(maxWidth: 1100, maxHeight: 550, imgixParams: { fm: "jpg", auto: "compress", h: "700", fit: "crop" }) {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    }
  }
`
