import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom'
import LayoutContainer from "./containers/layoutcontainer";
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const client = new ApolloClient({
    link: new HttpLink({ uri: 'graphql', fetch: fetch }),
    opts: {
        mode: 'no-cors',
    },
    cache: new InMemoryCache()
});

ReactDOM.render(
    <BrowserRouter>
        <ApolloProvider client={client}>
            <LayoutContainer client={client}/>
        </ApolloProvider>
    </BrowserRouter>,
    document.getElementById("container")
);