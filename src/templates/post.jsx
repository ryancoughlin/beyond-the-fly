import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled from '@emotion/styled/macro';
import theme from '../styles/theme';
import { Layout, SliceZone, Navigation } from 'components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


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

const Post = ({ data: { prismicStory, posts }, location }) => {
  const { data } = prismicStory;
  let categories = false;
  if (data.categories[0].category) {
    categories = data.categories.map(c => c.category.document[0].data.name);
  }
  return (
    <Layout>
      <Navigation />

      <Introduction>
        {/* {categories && <Categories categories={categories} />} */}
        <Metadata>
          <IssueNumber>issue 0{data.issue_number}</IssueNumber>
          <Dot>·</Dot>
          {data.time_of_year.text}          
        </Metadata>
        <h1>{data.title.text}</h1>
      </Introduction>
      <SliceZone allSlices={data.body} />
    </Layout>
  );
};

export default Post;

Post.propTypes = {
  data: PropTypes.shape({
    prismicStory: PropTypes.object.isRequired,
  }).isRequired,
  location: PropTypes.object.isRequired,
};

// The typenames come from the slice names
// If this doesn't work for you query for __typename in body {} and GraphiQL will show them to you

export const pageQuery = graphql`
  query PostBySlug($uid: String!) {
    prismicStory(uid: { eq: $uid }) {
      uid
      data {
        title {
          text
        }
        issue_number,
        time_of_year {
          text
        },
        date(formatString: "DD.MM.YYYY")
        categories {
          category {
            document {
              data {
                name
              }
            }
          }
        }
        body {
          ... on PrismicStoryBodyText {
            slice_type
            id
            primary {
              text {
                html
              }
            }
          }
          ... on PrismicStoryBodyQuote {
            slice_type
            id
            primary {
              quote {
                html
                text
              }
            }
          }
          ... on PrismicStoryBodyVideo {
            slice_type
            id
            primary {
              video {
                html
                description
                thumbnail_url
                thumbnail_width

                uri
                embed_url
              }
            }
          }
          ... on PrismicStoryBodyImageGallery {
            slice_type
            id
            items {
              image {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 1200, quality: 90) {
                      sizes
                      src
                      srcSet
                      srcSetWebp
                      srcWebp
                      originalImg
                      aspectRatio
                    }
                  }
                }
              }
            }
          }
          ... on PrismicStoryBodyImage {
            slice_type
            id
            primary {
              image {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 1200, quality: 90) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    posts: allPrismicStory(limit: 2, sort: { fields: [data___date], order: DESC }) {
      edges {
        node {
          uid
          data {
            title {
              text
            }
            date(formatString: "DD.MM.YYYY")
            categories {
              category {
                document {
                  data {
                    name
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
