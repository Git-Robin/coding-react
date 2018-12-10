import { makeExecutableSchema } from "graphql-tools";
import typeDefs from "./typedefs";
import resolvers from "./resolvers";

const schema = makeExecutableSchema({ typeDefs, resolvers });

export default schema;

// import {
//     GraphQLInt,
//     GraphQLString,
//     GraphQLList,
//     GraphQLObjectType,
//     GraphQLNonNull,
//     GraphQLSchema
// } from "graphql";

// import GraphQLController from "../controller/GraphQLController";

// const BookType = new GraphQLObjectType({
//     name: "Book",
//     description: "This represent book type.",
//     fields: () => ({
//         id: { type: GraphQLInt },
//         name: { type: GraphQLString },
//         author: { type: GraphQLString },
//         rating: { type: GraphQLString },
//         cover: { type: GraphQLString },
//         isbn: { type: GraphQLInt },
//         cc: { type: GraphQLString },
//         py: { type: GraphQLString },
//         description: { type: GraphQLString }
//     })
// });

// const SearchType = new GraphQLObjectType({
//     name: "Search",
//     description: "This represent book type.",
//     fields: () => ({
//         total: { type: GraphQLInt },
//         start: { type: GraphQLInt },
//         end: { type: GraphQLInt },
//         books: { type: new GraphQLList(BookType) }
//     })
// });

// const schema = new GraphQLSchema({
//     types: [BookType, SearchType],
//     query: new GraphQLObjectType({
//         name: 'RootQueryType',
//         fields: {
//             Books: {
//                 type: SearchType,
//                 args: {
//                     query: {
//                         type: new GraphQLNonNull(GraphQLString)
//                     },
//                     page: {
//                         type: new GraphQLNonNull(GraphQLInt)
//                     }
//                 },
//                 resolve(root, args, context) {
//                     return GraphQLController.getBooks(args.query, args.page, context.key);             
//                 }
//             },
//             Book: {
//                 type: BookType,
//                 args: {
//                     id: {
//                         type: new GraphQLNonNull(GraphQLInt)
//                     }
//                 },
//                 resolve(root, args, context) {
//                     return GraphQLController.getBookById(args.id, context.key); 
//                 }
//             }
//         }
//     })
// });

// module.exports = schema;