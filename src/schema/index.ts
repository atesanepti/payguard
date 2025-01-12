import zod from "zod";

export const signupSchema = zod
  .object({
    email: zod.string().email("Invalid email address"),
    password: zod
      .string()
      .min(6, { message: "Password must be at least 6 characters long." }),
    confirmPassword: zod.string(),
  })
  .refine(
    (data) => {
      if (data.password) {
        if (data.password !== data.confirmPassword) {
          return false;
        }
      }
      return true;
    },
    { path: ["confirmPassword"], message: "Confirm password didn't match" }
  );

export const signinSchema = zod.object({
  email: zod.string().email("Invalid email address"),
  password: zod.string().min(1, { message: "Password required" }),
});

export const paymentSchema = zod.object({
  title: zod
    .string()
    .min(8, { message: "Title must be at least 8 characters long" })
    .max(40, { message: "Title must not exceed 40 chearacters" }),

  amount: zod.number().min(1, { message: "Amount must be at least 1$ " }),
});

export const documentSchema = zod.object({
  fileUrl: zod.string().min(1, { message: "File Url is required" }),
});
