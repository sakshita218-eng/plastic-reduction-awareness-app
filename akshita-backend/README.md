# Akshita Backend

This is the backend for the Akshita project, which supports the frontend application located in the `/akshita` directory. The backend is built using TypeScript and Express, providing a RESTful API for the frontend to interact with.

## Project Structure

The project is organized as follows:

- **src/**: Contains the source code for the backend application.
  - **server.ts**: Entry point of the application, initializes the server.
  - **app.ts**: Sets up the Express application, including middleware and routes.
  - **controllers/**: Contains controller functions that handle incoming requests.
  - **routes/**: Defines the API routes and connects them to the appropriate controllers.
  - **services/**: Contains business logic and interacts with models.
  - **models/**: Defines data models representing the structure of the data.
  - **middlewares/**: Contains middleware functions for authentication and other purposes.
  - **config/**: Configuration settings for the application.
  - **db/**: Sets up the database client connection.
  - **utils/**: Utility functions for common tasks.
  - **types/**: TypeScript types and interfaces for type safety.

- **prisma/**: Contains the Prisma schema file that defines the database schema.

- **.env.example**: Example environment variables needed for the application.

- **.gitignore**: Specifies files and directories to be ignored by version control.

- **package.json**: Configuration file for npm, listing dependencies and scripts.

- **tsconfig.json**: TypeScript configuration file.

- **Dockerfile**: Instructions for building a Docker image for the application.

## Getting Started

To get started with the Akshita backend, follow these steps:

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd akshita-backend
   ```

2. **Install dependencies**:
   ```
   npm install
   ```

3. **Set up environment variables**:
   Copy the `.env.example` file to `.env` and fill in the required values.

4. **Run the application**:
   ```
   npm run dev
   ```

5. **Access the API**:
   The API will be available at `http://localhost:3000` (or the port specified in your configuration).

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.