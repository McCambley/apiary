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
  query courseProjects($classList: String!) {
    projectCollection(where: { course_contains: $classList }, limit: 10) {
      items {
        course
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
        reviewsCollection(limit: 2) {
          items {
            title
            subtitle
            quote
            avatarsCollection(limit: 3) {
              items {
                title
                fileName
                url
              }
            }
          }
        }
      }
    }
  }
`;

// APP LEVEL QUERY

// const [currentCourse, setCurrentCourse] = React.useState('Web');
// const [currentCourseData, setCurrentCourseData] = React.useState({});
// const { data, loading, error } = useQuery(QUERY, {
//   variables: { classList: currentCourse },
// });

// console.log(!loading && data.projectCollection.items[0].info.title);

// BUTTON ACTIONS

// <button
// type="button"
// onClick={() => {
//   console.log('Fetching?');
//   setCurrentCourse('web');
// }}
// >
// Web
// </button>
// <button
// type="button"
// onClick={() => {
//   console.log('Fetching?');
//   setCurrentCourse('science');
// }}
// >
// Science
// </button>
// <button
// type="button"
// onClick={() => {
//   console.log('Fetching?');
//   setCurrentCourse('analysis');
// }}
// >
// analysis
// </button>

// const [currentCourseData, setCurrentCourseData] = React.useState({});
// const { data: web, loading: webLoad } = useQuery(createQuery('webDevelopment'));
// const { data: analy, loading: analLoad } = useQuery(createQuery('dataAnalysis'));
// const { data: sci, loading: sciLoad } = useQuery(createQuery('dataScience'));
// console.log(web, analy, sci);

// // function getCourseProjects(course) {
// //   ({ data, loading, error } = useQuery(createQuery(course)));
// // }

export default { client, QUERY };
