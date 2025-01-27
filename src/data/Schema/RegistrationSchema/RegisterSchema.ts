import { z } from 'zod';

const RegistrationSchema = z.object({
  name: z.string().min(2, { message: 'Please enter your name' }),
  username: z.string().email({ message: 'Please enter valid email' }),
  password: z.string().min(8, { message: 'Password must be at least 8 characters' }),
});
type RegisterFormData = z.infer<typeof RegistrationSchema>

export type { RegisterFormData };
export { RegistrationSchema };
