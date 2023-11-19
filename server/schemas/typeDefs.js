const typeDefs = `
    type User {
        _id: ID!
        username: String!
        password: String!
        highscore: Int
    }

    type Game {
        _id: ID!
        rating: Int!
        image: String!
        age_rating: String!
        cover: String!
        url: String!
        videos: [String]!
    }

    type Compare {
        _id: ID!
        game1: String!
        game2: String!
        game1Rating: Int!
        game2Rating: Int!
    }

    type Query {
        users: [User]
        user(username: String!): User
        games: [Game]
        game(name: String!): Game
        compare(game1: String!, game2: String!): Compare
        me: User
    }

    type Mutation {
        addUser(username: String!, password: String!): Auth
        login(username: String!, password: String!): Auth
        updateScore(username: String!, highscore: Int!): User
    }

    `;

module.exports = typeDefs;