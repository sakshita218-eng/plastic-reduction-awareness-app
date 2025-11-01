import dotenv from 'dotenv';

dotenv.config();

const config = {
  port: process.env.PORT || 3000,
  dbUrl: process.env.DATABASE_URL || 'postgres://localhost:5432/mydb',
  jwtSecret: process.env.JWT_SECRET || 'your_jwt_secret',
  apiPrefix: '/api',
};

export default config;