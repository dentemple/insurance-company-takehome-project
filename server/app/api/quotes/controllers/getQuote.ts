import { Request, Response } from 'express'
import User from '../../../../databases/models/User'

export async function getQuote(req: Request, res: Response) {
  try {
    const { id } = req.params
    const user = await User.findByPk(id)

    return res.send(user)
  } catch (error) {
    console.error(error)
    return res.status(400).json({ error })
  }
}

export default getQuote
