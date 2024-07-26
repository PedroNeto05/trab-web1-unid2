'use server';
import db from '@/lib/db';
import { signUpFormSchema } from '@/lib/zod';
import { hashSync } from 'bcrypt-ts';

export default async function signUp(data: FormData) {
  const formData = Object.fromEntries(data);

  const parsedData = signUpFormSchema.safeParse(formData);

  if (!parsedData.success) {
    return {
      error: 'Invalid form data',
    };
  }

  const userExist = await db.user.findUnique({
    where: {
      email: parsedData.data.email,
    },
  });

  if (userExist) {
    return {
      error: 'User Already Exist',
    };
  }

  await db.user.create({
    data: {
      firstName: parsedData.data.firstName,
      lastName: parsedData.data.lastName,
      email: parsedData.data.email,
      password: hashSync(parsedData.data.password),
    },
  });

  return {
    error: null,
  };
}
