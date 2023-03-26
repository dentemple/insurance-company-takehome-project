import app from './app'
import { authenticateDatabase as quotesDatabase } from './databases'

const PORT = process.env.PORT || 5000

quotesDatabase()

app.listen(PORT, () => `We are rocking on port ${PORT}!`)
