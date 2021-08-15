import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const { REACT_APP_ACCESS_TOKEN, REACT_APP_SPACE_ID } = process.env;

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: `https://graphql.contentful.com/content/v1/spaces/${REACT_APP_SPACE_ID}`,
  headers: {
    Authorization: `Bearer ${REACT_APP_ACCESS_TOKEN}`,
  },
});

export const QUERY = gql`
  query courseProjects {
    webDev: projectCollection(where: { course_contains: "Web Development" }) {
      items {
        info {
          title
          description
          date
          link
          linkText
        }
        image {
          image {
            title
            fileName
            url
          }
        }
        companyReview {
          title
          subtitle
          description
          avatar {
            fileName
            url
          }
        }
        studentReview {
          title
          subtitle
          description
          avatarsCollection {
            items {
              fileName
              url
            }
          }
        }
      }
    }
  }
`;

export default { client, QUERY };