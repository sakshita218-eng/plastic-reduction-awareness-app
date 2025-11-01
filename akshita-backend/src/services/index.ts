import { User } from '../models'; // Example model import

export const getUserById = async (id: string) => {
    return await User.findById(id);
};

export const createUser = async (userData: any) => {
    const user = new User(userData);
    return await user.save();
};

// Add more service functions as needed for your application.