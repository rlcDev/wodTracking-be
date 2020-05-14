import express from 'express';
import { PORT } from './config/constants';
import { wodRouter } from './routes';
import cors from 'cors';
import { connectWithRetry } from './database/connection';
import bodyParser from 'body-parser'

const app = express();

connectWithRetry();

app.use(bodyParser.json());
app.use('/wod', wodRouter);
app.use(cors());

app.listen(PORT, () => {
    console.log(`Sever listennig on port ${PORT}`)
}) 