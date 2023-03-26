import { Sequelize } from 'sequelize-typescript'

let database: Sequelize

if (process.env.NODE_ENV === 'test') {
  database = {} as Sequelize
} else {
  database = createDatabase()
  database.sync({ force: true })
}

export default database

// --------------------------------------------

export async function authenticateDatabase() {
  try {
    await database.authenticate()
    console.info('Quotes Database (SQLite:Sequelize) connection has been established successfully.')
    return true
  } catch (error) {
    console.error('Unable to connect to the database: Quotes Database (SQLite:Sequelize)', error)
    return false
  }
}

function createDatabase() {
  return new Sequelize({
    dialect: 'sqlite',
    database: 'db',
    storage: ':memory:',
    models: [__dirname + '/models'],
  })
}
