import express from 'express';
import { json } from 'body-parser';
import routes from './routes';
import { connectDB } from './db/client';
import { errorHandler } from './middlewares/auth';

const app = express();

// Middleware
app.use(json());
app.use(routes);
app.use(errorHandler);

// Connect to the database
connectDB();

// Export the app for use in the server
export default app;