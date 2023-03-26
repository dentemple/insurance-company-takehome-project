import express from 'express'
import * as controllers from './controllers'

const router = express.Router()

/* POST /api/v1/quotes */
router.post('/', controllers.createQuote)

/* GET /api/v1/quotes/:id */
router.get('/:id', controllers.getQuote)

/* PUT /api/v1/quotes/:id */
router.put('/:id', controllers.updateQuote)

/* POST /api/v1/quotes/:id */
router.post('/:id', controllers.submitQuote)

export default router
