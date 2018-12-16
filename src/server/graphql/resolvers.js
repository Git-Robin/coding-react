import GraphQLController from "../controller/GraphQLController";

const resolvers = {
    Query: {
        Book: (root, args, context) => GraphQLController.getBookById(args.id, context.key),
        Books: (root, args, context) => GraphQLController.getBooks(args.query, args.page, context.key),
        Description: (root, args, context) => GraphQLController.getDescription(args.id, context.key)
    }
};

export default resolvers;