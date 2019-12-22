import { Link, graphql } from 'gatsby';
import Layout from '../components/Layout';
import styled from '@emotion/styled';

const Home = ({ data }) => (
  <Layout>
    {data.allDatoCmsStory.edges.map(({ node: work }) => (
      <div key={work.id}>
        <h6>
          <Link to={`/story/${work.slug}`}>{work.title}</Link>
        </h6>
      </div>
    ))}
  </Layout>
);

export default Home;

export const query = graphql`
  query IndexQuery {
    allDatoCmsStory {
      edges {
        node {
          id
          title
          slug
        }
      }
    }
  }
`;
