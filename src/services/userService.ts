import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

export const createUser = async (id: string, email: string, password?: string, username?: string) => {
  // Hash the password if provided
  const hashedPassword = password ? await bcrypt.hash(password, 10) : undefined;

  // Create the user
  const user = await prisma.user.create({
    data: {
      id,
      email,
      password: hashedPassword,
      username,
      status: 'active', // Default status
    },
  });

  return user;
};
