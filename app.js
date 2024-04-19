import express from 'express';
import cors from 'cors';
import winston from 'winston';
import session from 'express-session';
import * as dotenv from 'dotenv';
dotenv.config();

import userRouter from './routes/user.route.js';
import bookRouter from './routes/book.route.js';

const app = express();
const PORT = 3001;

const { combine, timestamp, label, printf } = winston.format;
const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level} ${message}`;
});
global.logger = winston.createLogger({
  level: 'silly',
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'catalog.log' }),
  ],
  format: combine(label({ label: 'catalog-api' }), timestamp(), myFormat),
});

const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true, //access-control-allow-credentials:true
  // optionSuccessStatus: 200,
};

// Middlewares
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

app.use('/user', userRouter);
app.use('/catalog', bookRouter);

// Error middleware
app.use((err, req, res, next) => {
  logger.error(`${req.method} ${req.baseUrl} - ${err.message}`);
  res.status(400).send({ error: err.message });
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

export default app;
