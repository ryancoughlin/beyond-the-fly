import { Link, graphql } from 'gatsby';
import { Box, Heading } from 'rebass';
import Img from 'gatsby-image';
import { Styled } from 'theme-ui';
import Layout from '../components/Layout';
import Navigation from '../components/Navigation';

const Home = ({ data }) => (
  <Layout>
    <Navigation />
    <Box
      sx={{
        mx: 'auto',
        ml: 2,
        mr: 2,
        mt: 4
      }}
    >
      {data.allDatoCmsStory.edges.map(({ node: data }) => (
        <Link to={`/story/${data.slug}`} style={{ textDecoration: 'none' }}>
          <Box
            sx={{
              maxWidth: 1000,
              mx: 'auto',
              mb: 5,
              textAlign: 'center'
            }}
            key={data.id}
          >
            <Box
              sx={{
                height: [250, 450]
              }}
              key={data.id}
            >
              {data.featuredImage && (
                <Img
                  fluid={data.featuredImage.fluid}
                  style={{ maxHeight: '100%' }}
                />
              )}
            </Box>
            <Heading
              fontSize={5}
              marginTop={3}
              color="black"
              style={{ marginBottom: 0 }}
            >
              {data.title}
            </Heading>
            <Styled.p style={{ marginTop: 2, fontSize: 14 }}>
              {data.overview}
            </Styled.p>
          </Box>
        </Link>
      ))}
    </Box>
  </Layout>
);

export default Home;

export const query = graphql`
  query POSTS {
    allDatoCmsStory {
      edges {
        node {
          slug
          title
          overview
          issueNumber
          timeOfYear
          credits
          featuredImage {
            fluid(
              imgixParams: {
                fit: "crop"
                crop: "top,bottom"
                w: "900"
                maxW: 900
                maxH: 400
              }
            ) {
              ...GatsbyDatoCmsSizes
            }
          }
        }
      }
    }
  }
`;
