import React from 'react'
import Slider from 'react-slick'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import ModularContent from '../components/ModularContent'

export default ({ data }) => (
  <Layout>
    <article className="sheet">
      <div className="sheet__inner">
        <h1 className="sheet__title">{data.datoCmsStory.title}</h1>
				{console.log('TCL: data.dataCmsStory', data.datoCmsStory.content)}

        <ModularContent data={data.datoCmsStory.content} />

        <div className="sheet__slider">
          {/* <Slider infinite={true} slidesToShow={2} arrows>
            {data.datoCmsStory.gallery.map(({ fluid }) => (
              <img alt={data.datoCmsStory.title} key={fluid.src} src={fluid.src} />
            ))}
          </Slider> */}
        </div>
      </div>
    </article>
  </Layout>
)

export const query = graphql`
  query StoryQuery($slug: String!) {
    datoCmsStory(slug: { eq: $slug }) {
      title
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
