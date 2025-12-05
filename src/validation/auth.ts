import { z } from "zod";

const baseUserSchema = z
  .object({
    firstName: z.string().min(2, "First name must be at least 2 characters."),
    lastName: z.string().min(2, "Last name must be at least 2 characters."),
    gender: z.string().min(1, "Please specify your gender."),
    location: z.string().min(1, "Location is required."),
    address: z.string().min(5, "A detailed address is required."),
    email: z.email("Invalid email address."),
    password: z.string().min(8, "Password must be at least 8 characters."),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match.",
    path: ["confirmPassword"],
  });

export const consumerSignUpSchema = baseUserSchema;
export type ConsumerFormValues = z.infer<typeof consumerSignUpSchema>;

export const farmerSignUpSchema = baseUserSchema.safeExtend({
  age: z
    .number()
    .min(1, "Age is required.")
    .refine((v) => v > 18 && v < 100, "Please enter a valid age."),
  farmName: z.string().min(2, "Farm name is required."),
  farmProduce: z.string().min(3, "Please list at least one produce type."),
});
export type FarmerFormValues = z.infer<typeof farmerSignUpSchema>;

export const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});

export type LoginFormValues = z.infer<typeof loginSchema>;
