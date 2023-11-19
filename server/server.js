// Add a require statements for necessary backend technologies. //
const express = require('express'); 
const path = require('path');
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const { authMiddleware } = require('./utils/auth');

// Add a require statement for the typeDefs and resolvers files handling GraphQL queries. //
const { typeDefs, resolvers } = require('./schemas');

// Add the a Mongoose connection. // 
const db = require('./config/connection');

// Add variables to establish our port, app to initialze our express server, and to set up our Apollo server using our typeDefs and resolvers files. // 
const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Add the Apollo Server using our GraphQL schema as the middleware. Once the Mongoose connection established with 'db' is open,log to the console. //
const startApolloServer = async () => {
    await server.start();
    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());
    app.use('/graphql', expressMiddleware(server, {
      context: authMiddleware
    }));
    if (process.env.NODE_ENV === 'production') {
      app.use(express.static(path.join(__dirname, '../client/dist')));
  
      app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../client/dist/index.html'));
      });
    }
    db.once('open', () => {
      app.listen(PORT, () => {
        console.log(`🛸 API server running on port ${PORT}!`);
        console.log(`🌑 Use GraphQL at http://localhost:${PORT}/graphql`);
      });
    });
  };
  
// Call the function to start the Apollo instance.
startApolloServer();
