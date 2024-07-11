import { auth } from "@clerk/nextjs/server";

export const isAdmin = () => {
  const { userId } = auth();
  const adminIds = (process.env.CLERK_ADMIN_IDS!) // stored in .env.local file as string separated by comma(,) and space( )

  if (!userId) return false;

  return adminIds.indexOf(userId) !== -1;
};