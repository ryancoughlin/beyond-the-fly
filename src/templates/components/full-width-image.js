import React from 'react'
import Img from 'gatsby-image'

const StackedImages = ({ post }) => (
  <div className="stacked-images">
    <h1>Stacked Images</h1>

    {post.acf.stacked_images.map((photo) => {
      const image = photo.localFile.childImageSharp.sizes
      return <Img sizes={image} key={image.src} outerWrapperClassName="image" />
    })}
  </div>
)

export default StackedImages
