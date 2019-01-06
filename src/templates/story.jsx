import React from "react"
import { graphql } from "gatsby"

const Story = ({ data: { prismicStory } }) => {
  const { data } = prismicStory
  return (
    <React.Fragment>
      <h1>{data.title.text}</h1>
      <div dangerouslySetInnerHTML={{ __html: data.content.html }} />
    </React.Fragment>
  )
}

export default Story

export const pageQuery = graphql`
  query StoryBySlug($uid: String!) {
    prismicStory(uid: { eq: $uid }) {
      uid
      data {
        title {
          text
        }
        content {
          html
        }
      }
    }
  }