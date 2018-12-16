const typeDefs = `
  type Book {
    id: Int!
    name: String,
    author: String,
    authorId: Int,
    rating: String,
    cover: String,
    reviews: Int,
    cc: String,
    py: String,
    description: String
  }

  type Author {
    id: Int!,
    description: String
  }

  type Search {
    total: Int,
    start: Int,
    end: Int,
    books: [Book]
  }

  # the schema allows the following query:
  type Query {
    Book(id: Int!): Book
    Books(query: String!, page: Int!): Search
    Description(id: Int!): Author
  }
`;

export default typeDefs;