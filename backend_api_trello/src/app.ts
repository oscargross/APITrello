import express from 'express';
import {config as dotenv} from 'dotenv'
dotenv()

const app = express();

export const InitApp = (routes: any) => {
    app.use(express.json());
    app.use(routes);
    app.listen(process.env.PORT, () => {
        console.info(`Listenning at http://localhost:${process.env.PORT}`);
      })
      .on('error', err => {
        console.info(`Err: Error listen server: ${err}`);
      })
}