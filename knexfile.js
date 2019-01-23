// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/authenticate.db'
    }
  },
  useNullAsDefault: true,
  migrations: {
    directory: './data/migrations'
  }


};
