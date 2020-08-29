import apolloServer from './apolloServer'
const graphQLPort = 3030


void apolloServer.listen({port: graphQLPort}).then(({ url, subscriptionsUrl }) => {
    console.log(`🚀 Server ready at ${url}`);
    console.log(`🚀 Subscriptions ready at ${subscriptionsUrl}`);
});

//emulate data updates
const mutation = `mutation {
    changeGame {
        id
    }
}`

setInterval(() => apolloServer.executeOperation({query: mutation}), 500)
