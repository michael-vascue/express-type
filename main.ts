import express from "express";

const app = express()

app.get("/", (req: express.Request, res: express.Response) => {
  req.session.user
})
