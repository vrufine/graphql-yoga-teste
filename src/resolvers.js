const User = require('./db/models/user')

module.exports = {
  User: {
    name: user => user.name.toUpperCase(),
    createdAt: user => new Date(user.createdAt).toLocaleString(),
    updatedAt: user => new Date(user.updatedAt).toLocaleString()
  },
  Query: {
    users: () => User.find(),
    user: (_, { id }) => User.findById(id)
  },
  Mutation: {
    createUser: (_, { input }) => User.create(input),
    editUser: (_, { id, input }) =>
      User.findByIdAndUpdate(id, input, { new: true }),
    deleteUser: (_, { id }) =>
      User.findByIdAndRemove(id).then(user => !!user)
  }
}
