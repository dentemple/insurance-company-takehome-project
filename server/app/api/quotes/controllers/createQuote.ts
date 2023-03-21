import { Request, Response } from "express";
import User from "../../../services/user/models/User";

export async function createQuote(req: Request, res: Response) {
  const { firstName, lastName } = req.body;
  console.log({ firstName, lastName });
  try {
    await User.create({ firstName, lastName });
    // console.log(user)
    res.send(200);
  } catch (error) {
    console.log("createQuote error", error);
    return res.status(400).json({ error });
  }
}

export default createQuote;
