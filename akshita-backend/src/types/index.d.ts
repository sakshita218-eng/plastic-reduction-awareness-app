// This file defines TypeScript types and interfaces used in the application to ensure type safety.

export interface User {
    id: string;
    username: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface AuthPayload {
    userId: string;
    token: string;
}

export interface ApiResponse<T> {
    success: boolean;
    data?: T;
    error?: string;
}

export interface CreateUserInput {
    username: string;
    email: string;
    password: string;
}

export interface UpdateUserInput {
    id: string;
    username?: string;
    email?: string;
    password?: string;
}