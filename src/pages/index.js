import React, { Component } from 'react'
import Link from 'gatsby-link'

class Home extends Component {
  render() {
    const data = this.props.data

    return (
      <div>
        <h1>Posts</h1>
        {data.allWordpressPost.edges.map(({ node }) => (
          <div key={node.slug}>
            <Link to={node.slug}>
              <h3>{node.title}</h3>
            </Link>
            <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
          </div>
        ))}
      </div>
    )
  }
}

export default Home

export const pageQuery = graphql`
  query homePageQuery {
    allWordpressPost(sort: { fields: [date] }) {
      edges {
        node {
          title
          slug
        }
      }
    }
  }
`
