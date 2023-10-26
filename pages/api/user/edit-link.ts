import { NextApiRequest, NextApiResponse } from "next";
import prismadb from '@/libs/prismadb';
import serverAuth from "@/libs/serverAuth";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method !== 'PUT') {
      return res.status(405).end();
    }

    const { currentUser } = await serverAuth(req, res);

    if (!currentUser) {
      return res.status(401).end();
    }
    
    const { action, link, name, description } = req.body;

    if (!action || !link) {
      return res.status(400);
    }

    if (action === 'add') {
      const newLink = await prismadb.Link.create({
        data: {
          url: link,
          title: name,
          description: description,
          user: {
            connect: {
              id: currentUser.id
            }
          }
        }
      });
      return res.status(200).json(newLink);
    }	
    else if (action === 'edit') {
      const updatedLink = await prismadb.Link.update({
        where: {
          id: link.id
        },
        data: {
          url: link,
          title: name,
          description: description,
        }
      });
      return res.status(200).json(updatedLink);
    } else if (action === 'delete') {
      const deletedLink = await prismadb.Link.delete({
        where: {
          id: link.id
        }
      });
      return res.status(200).json(deletedLink);
    }
    else {
      return res.status(400);
    }
  } catch (error) {
    console.log(error);
    return res.status(500).end();
  }
}