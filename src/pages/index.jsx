import { Link, graphql } from 'gatsby';
import { Box } from 'rebass';
import Img from 'gatsby-image';
import { Styled } from 'theme-ui';
import Layout from '../components/Layout';

const Home = ({ data }) => (
  <Layout>
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
              maxWidth: 880,
              mx: 'auto',
              mb: 6,
              textAlign: 'center'
            }}
            key={data.id}
          >
            <Box
              sx={{
                height: 450
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
            <Styled.h3>{data.title}</Styled.h3>
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
