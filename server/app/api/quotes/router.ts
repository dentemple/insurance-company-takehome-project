import express from "express";

import * as controllers from "./controllers";
import { QUOTES_BASE_URL } from "./constants";

const router = express.Router();

router.post(`${QUOTES_BASE_URL}/`, controllers.createQuote);

export default router;
