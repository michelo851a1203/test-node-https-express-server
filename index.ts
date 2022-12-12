import express, { Request, Response } from "express";
import { createServer } from "https";
import fs from 'fs'

let port = 8080;
if (process.env.PORT) {
  port = Number.isNaN(Number(process.env.PORT)) ? port : Number(process.env.PORT);
}

const app = express()

const server = createServer({
  key: fs.readFileSync('my-cert/key.pem'),
  cert: fs.readFileSync('my-cert/cert.pem')
}, app);

app.get('/', (req: Request, res: Response) => {
  res.type('text/plain');
  res.send('hello world');
})


server.listen(port, () => {
  console.log(`listen on https://localhost:${port}`);
})
