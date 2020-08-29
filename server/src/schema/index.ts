import {
	addMockFunctionsToSchema,
} from "apollo-server";
import { loadSchemaSync } from '@graphql-tools/load';
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';

const schema =  loadSchemaSync('src/schema/schema.graphql', { loaders: [new GraphQLFileLoader()] });
addMockFunctionsToSchema({ schema });

const schemas = [schema]

export default schemas;