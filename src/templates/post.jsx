import React from 'react'
import styled from '@emotion/styled';
import { graphql } from 'gatsby'
import theme from '../styles/theme';
import Layout from '../components/Layout'
import ModularContent from '../components/ModularContent'

const Hero = styled.div({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column'
})

const Introduction = styled.div({
  maxWidth: 700,
  textAlign: 'center',
  margin: '0 auto',
})

const Metadata = styled.h6({
  margin: '0 24',
})

const Dot = styled.span({
  marginLeft: 8,
  marginRight: 8,
})

const IssueNumber = styled.span({
  color: theme.colors.primary,
  fontWeight: 700,
})

export default ({ data }) => (
  <Layout>
    <Hero>
      <Metadata>
        <IssueNumber>{data.datoCmsStory.issueNumber}</IssueNumber>
        <Dot>·</Dot>
        {data.datoCmsStory.timeOfYear}
      </Metadata> 
      <h1 className="sheet__title">{data.datoCmsStory.title}</h1>
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
          body
        }
        ... on DatoCmsImage {
          model {
            apiKey
          }
          image {
            fluid(maxWidth: 1200, imgixParams: { fm: "jpg", auto: "compress" }) {
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
            fluid(maxWidth: 200, imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    }
  }
`
