import React from 'react'
import Img from 'gatsby-image'

const ImageGrid = ({ post }) => (
  <div className="image-grid">
    {post.acf.gallery.map((photo) => {
      const image = photo.localFile.childImageSharp.sizes
      return <Img sizes={image} key={image.src} outerWrapperClassName="image" />
    })}
  </div>
)

export default ImageGrid
