import { z } from 'zod';

const LoginSchema = z.object({
  username: z.string().email({ message: 'please enter valid email address' }).trim().nonempty({ message: 'Email is required' }),
  password: z.string().min(8, { message: 'Password must be at least 8 characters long' }).trim(),
});

type LoginFormData = z.infer<typeof LoginSchema>;

export type { LoginFormData };
export { LoginSchema };