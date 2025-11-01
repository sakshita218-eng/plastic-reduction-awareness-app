import express from 'express';
import { json } from 'body-parser';
import { connectDB } from './db/client';
import routes from './routes/index';
import { config } from './config/index';

const app = express();
const PORT = config.PORT || 5000;

// Middleware
app.use(json());

// Connect to the database
connectDB();

// Routes
app.use('/api', routes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});