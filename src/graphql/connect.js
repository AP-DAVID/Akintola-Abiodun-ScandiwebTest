import { GraphQLClient } from "graphql-request";

// connect to graphql client from port 4000
export const connect = new GraphQLClient("http://localhost:4000/");
