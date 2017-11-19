import React from 'react'
import Introduction from './components/introduction'
import ImageGrid from './components/image-grid'
import StackedImages from './components/full-width-image'

const PostTemplate = ({ data }) => (
  <div>
    <div className="container">
      <h1 dangerouslySetInnerHTML={{ __html: data.wordpressPost.title }} />
      <Introduction text={data.wordpressPost.acf.introduction} />

      <ImageGrid post={data.wordpressPost} />
      <StackedImages post={data.wordpressPost} />
    </div>
  </div>
)

export default PostTemplate

export const pageQuery = graphql`
  query currentPostQuery($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      acf {
        introduction
        hero_image {
          localFile {
            size
            childImageSharp {
              id
              sizes {
                aspectRatio
                src
                srcSet
                srcWebp
                srcSetWebp
                sizes
              }
            }
          }
        }
        photo_grid_masonry {
          localFile {
            size
            childImageSharp {
              id
              sizes {
                aspectRatio
                src
                srcSet
                srcWebp
                srcSetWebp
                sizes
              }
            }
          }
        }
        stacked_images {
          localFile {
            size
            childImageSharp {
              id
              sizes {
                aspectRatio
                src
                srcSet
                srcWebp
                srcSetWebp
                sizes
              }
            }
          }
        }
      }
    }
  }
`
