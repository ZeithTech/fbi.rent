import { NextApiRequest, NextApiResponse } from "next";
import prismadb from '@/libs/prismadb';
import serverAuth from "@/libs/serverAuth";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method !== 'GET') {
      return res.status(405).end();
    }

    await serverAuth(req, res);

    const { username } = req.query;

    if (typeof username !== 'string') {
      throw new Error('Invalid username');
    }

    if (!username) {
      throw new Error('Missing username');
    }

    const usernamee = await prismadb.User.findUnique({
      where: {
        username: username
      }
    });

    return res.status(200).json(usernamee);
  } catch (error) {
    console.log(error);
    return res.status(500).end();
  }
}
