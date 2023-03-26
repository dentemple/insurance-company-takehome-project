import { Request, Response } from 'express'

import * as constants from '../constants'
import User from '../../../../databases/models/User'

export async function createQuote(req: Request, res: Response) {
  try {
    const user = await User.create({ ...constants.BASE_QUOTE_DATA })
    user.save()

    const { id } = user

    const url = `${req.protocol}://${req.get('host')}${constants.BASE_QUOTE_URL}/${id}`
    return res.status(201).send({ resume: url })
  } catch (error) {
    console.error(error)
    return res.status(400).json({ error })
  }
}

export default createQuote
