import React from 'react';
import { ApolloClient, InMemoryCache, split, HttpLink  } from '@apollo/client';
import { ApolloProvider } from '@apollo/client';
import GamesList from 'components/GamesList/GamesList';
import { WebSocketLink } from '@apollo/client/link/ws';
import { getMainDefinition } from '@apollo/client/utilities';
import Container from '@material-ui/core/Container';

const wsLink = new WebSocketLink({
    uri: `ws://localhost:3030/graphql`,
    options: {
        reconnect: true
    }
});

const httpLink = new HttpLink({
    uri: 'http://localhost:3030/'
});

const link = split(
    ({ query }) => {
        const definition = getMainDefinition(query);
        return (
            definition.kind === 'OperationDefinition' &&
            definition.operation === 'subscription'
        );
    },
    wsLink,
    httpLink,
);

const client = new ApolloClient({
    // uri: `ws://localhost:3030/`,
    link,
    cache: new InMemoryCache()
});


function App() {
    return (
        <ApolloProvider client={client}>
            <Container>
                <GamesList/>
            </Container>
        </ApolloProvider>
    );
}

export default App;
