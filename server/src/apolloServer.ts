import { ApolloServer, PubSub } from "apollo-server";
import { GraphQLSchema } from "graphql";
import { mergeSchemas } from "graphql-tools";
import schemas from "./schema";
import resolvers from "./resolvers";

export const pubsub = new PubSub();

const schema: GraphQLSchema = mergeSchemas({
	schemas,
	resolvers
});

const apolloServer = new ApolloServer({
	schema,
	context: async ({ req }: any) => {
	},
    tracing: true,
    subscriptions: {
        onConnect: (connectionParams, webSocket) => {
            console.log(connectionParams)
        },
    }
});


export default apolloServer
