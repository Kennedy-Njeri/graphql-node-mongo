

const typeDefs = `
    
    type Query {
        users(query: String): [User!]!
        post(query: String): [Post!]!
       
    }


    type Mutation {
        createUser(data: CreateUserInput): User!
        deleteUser(id: ID!): User!
        updateUser(id: ID!, data: UpdateUserInput!): User!
        createPost(data: CreatePostInput): Post!
        deletePost(id: ID!): Post!
        updatePost(id: ID!, data: UpdatePostInput!): Post!
    }


    type Subscription {
        post: PostSubscriptionPayload!
    }


    input CreateUserInput {
        name: String!
        email: String!

    }

    input UpdateUserInput {
        name: String
        email: String
    }


    input CreatePostInput {
        title: String!
        body: String!
        published: Boolean!

    }

    input UpdatePostInput {
        title: String
        body: String
        published: Boolean
    }

    type User {
        _id: ID!
        name: String!
        email: String
    }

    type Post {
        _id: ID!
        title: String!
        body: String!
        published: Boolean!
    }

    enum MutationType {
        CREATED
        UPDATED
        DELETED
    }


    type PostSubscriptionPayload {
        mutation: MutationType!
        data: Post!
    }
    

`


module.exports = typeDefs