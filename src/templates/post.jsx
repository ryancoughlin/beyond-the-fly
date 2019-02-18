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
  marginBottom: 80,
  marginTop: 24,
})

const Credits = styled.div({
  textAlign: 'center',
  color: Colors.Palette.Text,
  fontWeight: 500,
  fontSize: 14,
})

const Title = styled.h1({
  color: Colors.Global.Text,
  textTransform: 'uppercase',
  textAlign: 'center',
  marginBottom: 0,
})

export default ({ data }) => (
  <Layout>
    <Hero>
      <Metadata>
        {data.datoCmsPost.issueNumber &&
          <IssueNumber> Issue {data.datoCmsPost.issueNumber}</IssueNumber>
        }
        <Dot>·</Dot>
        {data.datoCmsPost.timeOfYear}
      </Metadata> 
      <Title>{data.datoCmsPost.title}</Title>
      <CreditContainer>
        {data.datoCmsPost.author &&
          <Credits>Text by {data.datoCmsPost.author}</Credits>
        }
        {data.datoCmsPost.photographer &&
          <Credits>Images by {data.datoCmsPost.photographer}</Credits>
        }
      </CreditContainer>
      {data.datoCmsPost.introduction &&
        <Introduction><p>{data.datoCmsPost.introduction}</p></Introduction>
      }
    </Hero>

    <ModularContent data={data.datoCmsPost.content} />
  </Layout>
)

export const query = graphql`
  query PostQuery($slug: String!) {
    datoCmsPost(slug: { eq: $slug }) {
      title
      issueNumber
      timeOfYear
      introduction
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
