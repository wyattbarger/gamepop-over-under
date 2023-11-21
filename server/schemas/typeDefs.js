const typeDefs = `
    type User {
        _id: ID!
        username: String!
        password: String!
        highscore: Int
    }

    type Game {
        _id: ID!
        name: String!
        total_rating: Float!
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
    type Auth {
        token: ID!
        user: User
    }

    type Query {
        users: [User]
        user(username: String!): User
        fetchAllGames: [Game]
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