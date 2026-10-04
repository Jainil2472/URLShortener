import {z} from 'zod'

export const signupPostRequestBody = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string()

})

export const loginPostRequest = z.object({
    email: z.string().email(),
    password: z.string()
})

export const urlPostRequestBody = z.object({
    url: z.url(),
    code: z.string().optional(),
})