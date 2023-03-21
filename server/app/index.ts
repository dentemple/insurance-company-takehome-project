import express from "express";
import bodyParser from "body-parser";

import { BASE_URL } from "./constants";
import { router as quotesRouter } from "./api/quotes";

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => res.send({ status: "ok", route: req.path }));
app.get(`${BASE_URL}`, (req, res) =>
  res.send({ status: "ok", route: req.path })
);

app.use(quotesRouter);

export default app;
