import { PubSub } from 'apollo-server';
import store from '../data/data';

const GAME_CHANGED = 'GAME_CHANGED'

const pubsub = new PubSub();
 
const resolvers = {
    Query: {
        games: () => store.data
    },
    Subscription: {
        games: {
            subscribe: () => pubsub.asyncIterator([GAME_CHANGED]),
            resolve: () => store.data
        },
    },
    Mutation: {
        changeGame(root, args, context) {
            pubsub.publish(GAME_CHANGED, { games: args });
            return store.updateData();
        },
    },
}

export default [resolvers]