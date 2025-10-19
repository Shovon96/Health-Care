import z from 'zod';

const createUserZodSchema = z.object({
    password: z.string().min(6, 'Password must be at least 6 characters long'),
    patient: z.object({
        name: z.string({ error: 'Name is required' }),
        email: z.string({ error: 'Email is required' }).email('Invalid email address'),
        address: z.string().optional(),
        contactNumber: z.string().optional()
    })
})


export const UserValidation = {
    createUserZodSchema
}