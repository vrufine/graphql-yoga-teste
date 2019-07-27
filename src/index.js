require('./db')

const { GraphQLServer } = require('graphql-yoga')

const path = require('path')

const typeDefs = path.join(__dirname, 'schema.graphql')
const resolvers = require('./resolvers')

const server = new GraphQLServer({
  typeDefs,
  resolvers
})

server.start()
