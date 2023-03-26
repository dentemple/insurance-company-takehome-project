import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import morgan from 'morgan'

import * as constants from './constants'
import { router as quotesRouter } from './api/quotes'

const app = express()

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

app.use(cors())

app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

/* GET / */
app.get('/', (req, res) => res.send({ status: 'ok', route: req.path }))

/* /api/v1/quotes/* */
app.use(`${constants.BASE_URL}/quotes`, quotesRouter)

export default app
