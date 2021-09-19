import React from 'react';
import App from '../App'
import { ApolloClient, InMemoryCache, createHttpLink, ApolloProvider } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';


const httpLink = createHttpLink({
    uri: 'http://api.centralmarket.com.ar/graphql'
});

const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = localStorage.getItem('token');
    console.log('headers: ->');
    console.log(headers);
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,

        authorization: token ? `Bearer ${token}` : "JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6Imdlcm1hbi5kb3ZhbEBnbWFpbC5jb20iLCJleHAiOjE2MjY2NDMwNzgsIm9yaWdJYXQiOjE2MjY2NDI3Nzh9.MsuvqBdk9eBG2vuENDVTUHfhb8o1q6OfRqbALcX1KLY",
      }
    }
  });

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
});

export default (
    <ApolloProvider client={ client }>
        <App />
    </ApolloProvider>
)

