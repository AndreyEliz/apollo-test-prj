import { GraphQLServer } from 'graphql-yoga'
import statistics from './data/data';

 
const resolvers = {
    Query: {
        games: () => statistics
    },
}

const graphQLServer = new GraphQLServer({
  typeDefs: 'src/schema/schema.graphql',
  resolvers,
})

export default graphQLServer;
