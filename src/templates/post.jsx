import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled from '@emotion/styled/macro';
import { Layout, SliceZone, Navigation } from 'components';
import Categories from '../components/Listing/Categories';

const Title = styled.h1({
  maxWidth: 700,
  textAlign: 'center',
  margin: '0 auto',
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
      {data.date} — {categories && <Categories categories={categories} />}
      <Title>{data.title.text}</Title>
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
