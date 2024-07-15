import { z } from 'zod';

export const signInFormSchema = z.object({
  email: z.string().trim().email(),
  password: z.string().trim().min(6, 'Password must be at least 4 characters.'),
});

export const signUpFormSchema = z
  .object({
    firstName: z.string().trim().min(4, 'Minimum 4 characters.'),
    lastName: z.string().trim().min(4, 'Minimum 4 characters.'),
    email: z.string().trim().email(),
    confirmEmail: z.string().trim(),
    password: z
      .string()
      .trim()
      .min(6, 'Password must be at least 4 characters.'),
    confirmPassword: z.string().trim(),
  })
  .refine((data) => data.email === data.confirmEmail, {
    message: 'Emails not match',
    path: ['confirmEmail'],
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords not match',
    path: ['confirmPassword'],
  });
