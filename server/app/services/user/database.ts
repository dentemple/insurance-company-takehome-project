import { Sequelize } from "sequelize";

export const database =
  process.env.NODE_ENV !== "test" ? createDatabase() : ({} as Sequelize);

export async function authenticateDatabase() {
  try {
    await database.authenticate();
    console.log(
      "Quotes Database (SQLite:Sequelize) connection has been established successfully."
    );
    return true;
  } catch (error) {
    console.error(
      "Unable to connect to the database: Quotes Database (SQLite:Sequelize)",
      error
    );
    return false;
  }
}

export default database;

// --------------------------------------------

function createDatabase() {
  return new Sequelize("sqlite::memory:", { logging: console.log });
}
