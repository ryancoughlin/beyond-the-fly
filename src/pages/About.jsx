import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Navigation from '../components/Navigation';

const About = ({ data: { about } }) => (
  <Layout>
    <Navigation dark />
    <Container
      dangerouslySetInnerHTML={{
        __html: about.aboutUsNode.childMarkdownRemark.html
      }}
    />
  </Layout>
);

export default About;

export const query = graphql`
  query AboutQuery {
    about: datoCmsAbout {
      title
      aboutUsNode {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
