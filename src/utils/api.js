import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

// imported environment variables
// it's necessary to create an .env file with a TOKEN and SPACE id before running
const { REACT_APP_ACCESS_TOKEN, REACT_APP_SPACE_ID } = process.env;

export const client = new ApolloClient({
  // ApolloClient will cache each new search for quick retrieval
  cache: new InMemoryCache(),
  uri: `https://graphql.contentful.com/content/v1/spaces/${REACT_APP_SPACE_ID}`,
  headers: {
    Authorization: `Bearer ${REACT_APP_ACCESS_TOKEN}`,
  },
});

// this search accepts one variable and is queried on each course button/card click
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
            sys {
              id
            }
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
        sys {
          id
        }
      }
    }
  }
`;

export default { client, QUERY };

// below is an example of what the above query would return when searching for 'Web Development' projects

// {
//   "data": {
//     "projectCollection": {
//       "items": [
//         {
//           "sys": {
//             "id": "3sStodL4sf2nscErgVBTs5"
//           },
//           "course": "Web Development",
//           "info": {
//             "title": "Ant Robotics",
//             "description": "Landing page website for the company that cakes automated logistics robots from Oakland, CA",
//             "date": "May 2021",
//             "link": "https://antrobotics.co/",
//             "linkText": "Visit website →"
//           },
//           "image": {
//             "image": {
//               "title": "Ant",
//               "fileName": "ant.png",
//               "url": "https://images.ctfassets.net/19t063hvkpxw/5MWTXpjwiI6Yqg5JCd7C5G/abcdd5e81781a2979cd0d13218ba509f/ant.png"
//             }
//           },
//           "reviewsCollection": {
//             "items": [
//               {
//                 "sys": {
//                   "id": "64rKekE1KO0ETThRuPSJxS"
//                 },
//                 "title": "Maxim Antonenko",
//                 "subtitle": "Ant Robotics CEO",
//                 "quote": "“The Data Analytics students have highlighted a few languages which show a growing demand for translation and expanded our list of keywords to detect more translation-related user reviews,” Demid said. “The Data Science students tested a wide range of natural language processing algorithms, including deep machine learning algorithms, to build a robust model that accurately predicts if a review praises, criticizes or requests game translation.”",
//                 "avatarsCollection": {
//                   "items": [
//                     {
//                       "sys": {
//                         "id": "5exs0F1kdeuPmV4kwA9S6J"
//                       },
//                       "title": "review-avatar",
//                       "fileName": "review-avatar.png",
//                       "url": "https://images.ctfassets.net/19t063hvkpxw/5exs0F1kdeuPmV4kwA9S6J/439e32b50abeab1b74e00fe4cfcec097/review-avatar.png"
//                     }
//                   ]
//                 }
//               },
//               {
//                 "sys": {
//                   "id": "3WAJEGQP9BwE6tpX2ZGF4W"
//                 },
//                 "title": "Students team",
//                 "subtitle": "Maria Wright, Maria Wright, Enyel Sequeira",
//                 "quote": "“I learned so much from it,” Xia said. “Not just about new packages and methods of analysis and reporting, but also workflow management, how to clarify task requirements, collaborate with others, and more. Those are the kind of experiences I can put on my resume, and that’s awesome too.”",
//                 "avatarsCollection": {
//                   "items": [
//                     {
//                       "sys": {
//                         "id": "5exs0F1kdeuPmV4kwA9S6J"
//                       },
//                       "title": "review-avatar",
//                       "fileName": "review-avatar.png",
//                       "url": "https://images.ctfassets.net/19t063hvkpxw/5exs0F1kdeuPmV4kwA9S6J/439e32b50abeab1b74e00fe4cfcec097/review-avatar.png"
//                     },
//                     {
//                       "sys": {
//                         "id": "5exs0F1kdeuPmV4kwA9S6J"
//                       },
//                       "title": "review-avatar",
//                       "fileName": "review-avatar.png",
//                       "url": "https://images.ctfassets.net/19t063hvkpxw/5exs0F1kdeuPmV4kwA9S6J/439e32b50abeab1b74e00fe4cfcec097/review-avatar.png"
//                     },
//                     {
//                       "sys": {
//                         "id": "5exs0F1kdeuPmV4kwA9S6J"
//                       },
//                       "title": "review-avatar",
//                       "fileName": "review-avatar.png",
//                       "url": "https://images.ctfassets.net/19t063hvkpxw/5exs0F1kdeuPmV4kwA9S6J/439e32b50abeab1b74e00fe4cfcec097/review-avatar.png"
//                     }
//                   ]
//                 }
//               }
//             ]
//           }
//         },
//         {
//           "sys": {
//             "id": "4RLpTovNLTEP6I0w0dFphL"
//           },
//           "course": "Web Development",
//           "info": {
//             "title": "Stellar Robotica",
//             "description": "Stellar Robotica seeks to automate the cake decoration process so that bakers can focus on what really matters: their accounting process. \n\nLanding page website for the company that automates logistics processes and raises robots in Oakland, CA\n",
//             "date": "May 2021",
//             "link": "https://antrobotics.co/",
//             "linkText": "Visit website →"
//           },
//           "image": {
//             "image": {
//               "title": "Ant",
//               "fileName": "ant.png",
//               "url": "https://images.ctfassets.net/19t063hvkpxw/5MWTXpjwiI6Yqg5JCd7C5G/abcdd5e81781a2979cd0d13218ba509f/ant.png"
//             }
//           },
//           "reviewsCollection": {
//             "items": [
//               {
//                 "sys": {
//                   "id": "64rKekE1KO0ETThRuPSJxS"
//                 },
//                 "title": "Maxim Antonenko",
//                 "subtitle": "Ant Robotics CEO",
//                 "quote": "“The Data Analytics students have highlighted a few languages which show a growing demand for translation and expanded our list of keywords to detect more translation-related user reviews,” Demid said. “The Data Science students tested a wide range of natural language processing algorithms, including deep machine learning algorithms, to build a robust model that accurately predicts if a review praises, criticizes or requests game translation.”",
//                 "avatarsCollection": {
//                   "items": [
//                     {
//                       "sys": {
//                         "id": "5exs0F1kdeuPmV4kwA9S6J"
//                       },
//                       "title": "review-avatar",
//                       "fileName": "review-avatar.png",
//                       "url": "https://images.ctfassets.net/19t063hvkpxw/5exs0F1kdeuPmV4kwA9S6J/439e32b50abeab1b74e00fe4cfcec097/review-avatar.png"
//                     }
//                   ]
//                 }
//               },
//               {
//                 "sys": {
//                   "id": "3WAJEGQP9BwE6tpX2ZGF4W"
//                 },
//                 "title": "Students team",
//                 "subtitle": "Maria Wright, Maria Wright, Enyel Sequeira",
//                 "quote": "“I learned so much from it,” Xia said. “Not just about new packages and methods of analysis and reporting, but also workflow management, how to clarify task requirements, collaborate with others, and more. Those are the kind of experiences I can put on my resume, and that’s awesome too.”",
//                 "avatarsCollection": {
//                   "items": [
//                     {
//                       "sys": {
//                         "id": "5exs0F1kdeuPmV4kwA9S6J"
//                       },
//                       "title": "review-avatar",
//                       "fileName": "review-avatar.png",
//                       "url": "https://images.ctfassets.net/19t063hvkpxw/5exs0F1kdeuPmV4kwA9S6J/439e32b50abeab1b74e00fe4cfcec097/review-avatar.png"
//                     },
//                     {
//                       "sys": {
//                         "id": "5exs0F1kdeuPmV4kwA9S6J"
//                       },
//                       "title": "review-avatar",
//                       "fileName": "review-avatar.png",
//                       "url": "https://images.ctfassets.net/19t063hvkpxw/5exs0F1kdeuPmV4kwA9S6J/439e32b50abeab1b74e00fe4cfcec097/review-avatar.png"
//                     },
//                     {
//                       "sys": {
//                         "id": "5exs0F1kdeuPmV4kwA9S6J"
//                       },
//                       "title": "review-avatar",
//                       "fileName": "review-avatar.png",
//                       "url": "https://images.ctfassets.net/19t063hvkpxw/5exs0F1kdeuPmV4kwA9S6J/439e32b50abeab1b74e00fe4cfcec097/review-avatar.png"
//                     }
//                   ]
//                 }
//               }
//             ]
//           }
//         },
//         {
//           "sys": {
//             "id": "4ROicHHwHAew2QVtAZHAUK"
//           },
//           "course": "Web Development",
//           "info": {
//             "title": "Prim-U",
//             "description": "Main entry page for the first on-demand beauty platform from the South Africa",
//             "date": "May 2021",
//             "link": "https://www.prim-u.com/",
//             "linkText": "Visit website →"
//           },
//           "image": {
//             "image": {
//               "title": "prim-u",
//               "fileName": "prim-u.png",
//               "url": "https://images.ctfassets.net/19t063hvkpxw/GooDxan0CjQW2Smx5xRqr/68399049a3be9700489441e63451ef84/prim-u.png"
//             }
//           },
//           "reviewsCollection": {
//             "items": [
//               {
//                 "sys": {
//                   "id": "64rKekE1KO0ETThRuPSJxS"
//                 },
//                 "title": "Maxim Antonenko",
//                 "subtitle": "Ant Robotics CEO",
//                 "quote": "“The Data Analytics students have highlighted a few languages which show a growing demand for translation and expanded our list of keywords to detect more translation-related user reviews,” Demid said. “The Data Science students tested a wide range of natural language processing algorithms, including deep machine learning algorithms, to build a robust model that accurately predicts if a review praises, criticizes or requests game translation.”",
//                 "avatarsCollection": {
//                   "items": [
//                     {
//                       "sys": {
//                         "id": "5exs0F1kdeuPmV4kwA9S6J"
//                       },
//                       "title": "review-avatar",
//                       "fileName": "review-avatar.png",
//                       "url": "https://images.ctfassets.net/19t063hvkpxw/5exs0F1kdeuPmV4kwA9S6J/439e32b50abeab1b74e00fe4cfcec097/review-avatar.png"
//                     }
//                   ]
//                 }
//               },
//               {
//                 "sys": {
//                   "id": "3WAJEGQP9BwE6tpX2ZGF4W"
//                 },
//                 "title": "Students team",
//                 "subtitle": "Maria Wright, Maria Wright, Enyel Sequeira",
//                 "quote": "“I learned so much from it,” Xia said. “Not just about new packages and methods of analysis and reporting, but also workflow management, how to clarify task requirements, collaborate with others, and more. Those are the kind of experiences I can put on my resume, and that’s awesome too.”",
//                 "avatarsCollection": {
//                   "items": [
//                     {
//                       "sys": {
//                         "id": "5exs0F1kdeuPmV4kwA9S6J"
//                       },
//                       "title": "review-avatar",
//                       "fileName": "review-avatar.png",
//                       "url": "https://images.ctfassets.net/19t063hvkpxw/5exs0F1kdeuPmV4kwA9S6J/439e32b50abeab1b74e00fe4cfcec097/review-avatar.png"
//                     },
//                     {
//                       "sys": {
//                         "id": "5exs0F1kdeuPmV4kwA9S6J"
//                       },
//                       "title": "review-avatar",
//                       "fileName": "review-avatar.png",
//                       "url": "https://images.ctfassets.net/19t063hvkpxw/5exs0F1kdeuPmV4kwA9S6J/439e32b50abeab1b74e00fe4cfcec097/review-avatar.png"
//                     },
//                     {
//                       "sys": {
//                         "id": "5exs0F1kdeuPmV4kwA9S6J"
//                       },
//                       "title": "review-avatar",
//                       "fileName": "review-avatar.png",
//                       "url": "https://images.ctfassets.net/19t063hvkpxw/5exs0F1kdeuPmV4kwA9S6J/439e32b50abeab1b74e00fe4cfcec097/review-avatar.png"
//                     }
//                   ]
//                 }
//               }
//             ]
//           }
//         }
//       ]
//     }
//   }
// }
