import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { client } from './utils/api';

// const { REACT_APP_ACCESS_TOKEN, REACT_APP_SPACE_ID } = process.env;

// const client = new ApolloClient({
//   cache: new InMemoryCache(),
//   uri: `https://graphql.contentful.com/content/v1/spaces/${REACT_APP_SPACE_ID}`,
//   headers: {
//     Authorization: `Bearer ${REACT_APP_ACCESS_TOKEN}`,
//   },
// });

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <HashRouter basename="/apiary">
        <App />
      </HashRouter>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
