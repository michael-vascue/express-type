import express from "express";
import expressSession from "express-session";

const app = express()
app.use(expressSession())

app.get("/", (req: express.Request, res: express.Response) => {
  req.session.user
})

app.listen(8080, ()=> {

})
