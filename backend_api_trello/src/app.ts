import express from 'express';
// import cors from 'cors';
import { config as dotenv } from 'dotenv'
dotenv()

const app = express();

export const InitApp = (routes: any) => {
  app.use(express.json());
  app.use(routes);

  app.use((req, res, next) => {

    res.header('Access-Control-Allow-Origin', '*');
    res.header(
      'Access-Control-Allow-Header',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    )
    if (req.method === 'OPTIONS') {
      res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
      return res.status(200).send({})
    }
    next();
  });

  app.listen(process.env.PORT || 3333, () => {
    console.info(`Listenning server`);
  })
    .on('error', err => {
      console.info(`Err: Error listen server: ${err}`);
    })
}