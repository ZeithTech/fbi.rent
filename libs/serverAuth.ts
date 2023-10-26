import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";

import prismadb from '@/libs/prismadb';
import { authOptions } from "@/pages/api/auth/[...nextauth]";

const serverAuth = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getServerSession(req, res, authOptions);

  if (!session?.user?.name) {
    throw new Error('Not signed in');
  }

  const currentUser = await prismadb.User.findUnique({
    where: {
      username: session.user.name,
    }
  });
  
  if (!currentUser) {
    throw new Error('Not signed in');
  }

  return { currentUser };
}

export default serverAuth;
