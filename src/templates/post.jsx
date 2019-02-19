import React from 'react'
import styled from '@emotion/styled';
import { graphql } from 'gatsby'
import {Colors} from '../styles/theme';
import Layout from '../components/Layout'
import ModularContent from '../components/ModularContent'
import facepaint from 'facepaint'

const breakpoints = [576, 768, 992]
const mq = facepaint(
  breakpoints.map(bp => `@media (min-width: ${bp}px)`)
)

const Hero = styled.div({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  maxWidth: 740,
  margin: '0 auto'
})

const Introduction = styled.div({
  maxWidth: 700,
  textAlign: 'center',
  margin: '48px auto 48px auto',
})

const Metadata = styled.h6({
  margin: '0 24',
  fontSize: 12,
})

const Dot = styled.span({
  marginLeft: 8,
  marginRight: 8,
})

const IssueNumber = styled.span({
  color: Colors.Global.Primary,
  fontWeight: 700,
  
})

const CreditContainer = styled.div({
  marginBottom: 40,
  marginTop: 24,
})

const Credits = styled.div({
  textAlign: 'center',
  color: Colors.Palette.Text,
  fontWeight: 500,
  fontSize: 14,
})

const Title = styled.h1(
  mq({fontSize: ['1.5rem', '2.8rem']}), {
  color: Colors.Global.Text,
  textTransform: 'uppercase',
  textAlign: 'center',
  marginBottom: 0,
  paddingLeft: 16,
  paddingRight: 16,
})

export default ({ data }) => (
  <Layout>
    <Hero>
    <Metadata>
        {data.datoCmsStory.issueNumber &&
          <IssueNumber> Issue {data.datoCmsStory.issueNumber}</IssueNumber>
        }
        <Dot>·</Dot>
        {data.datoCmsStory.timeOfYear}
      </Metadata> 
      <Title>{data.datoCmsStory.title}</Title>
      <CreditContainer>
        {data.datoCmsStory.author &&
          <Credits>Text by {data.datoCmsStory.author}</Credits>
        }
        {data.datoCmsStory.photographer &&
          <Credits>Images by {data.datoCmsStory.photographer}</Credits>
        }
      </CreditContainer>
      {data.datoCmsStory.introduction &&
        <Introduction><p>{data.datoCmsStory.introduction}</p></Introduction>
      }
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
      author
      photographer
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
