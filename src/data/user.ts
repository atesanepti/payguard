import { db } from "../../prisma";

export const getUserByEmail = async (email: string) => {
  const user = await db.users.findUnique({ where: { email } });

  if (!user) return;
  return user;
};
