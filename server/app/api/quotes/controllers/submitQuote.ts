import { Request, Response } from 'express'
import User from '../../../../databases/models/User'

import * as utils from '../utils'

export async function submitQuote(req: Request, res: Response) {
  try {
    const { id } = req.params
    const quote = utils.whitelistQuote(req.body)
    const quotePrice = utils.calculateQuote(quote)

    await User.update({ ...quote, quotePrice }, { where: { id } })
    const user = await User.findByPk(id)

    if (!user) {
      return res.status(404).json({
        error:
          'Quote not found. ' +
          '(Note: Because this project is just using in-memory storage, ' +
          'a server restart will wipe all data. Therefore, you may need to ' +
          'recreate the quote if the server restarts for any reason.)',
      })
    }

    return res.send({ value: quotePrice, currency: 'USD' })
  } catch (error) {
    console.error(error)
    return res.status(400).json({ error })
  }
}

export default submitQuote
