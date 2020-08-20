import express from 'express';
import cors from 'cors';
import router from './routes';

const app = express();

app.listen(3333);

app.use(cors());
app.use(express.json());
app.use(router);
