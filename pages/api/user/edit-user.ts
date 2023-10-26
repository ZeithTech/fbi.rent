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

        const { name, bio, image } = req.body;

        if (!name || !bio || !image) {
            return res.status(400);
        }

        const updatedUser = await prismadb.User.update({
            where: {
                id: currentUser.id
            },
            data: {
                name: name,
                bio: bio,
                image: image
            }
        });

        return res.status(200).json(updatedUser);
    } catch (error) {
        console.log(error);
        return res.status(500).end();
    }
}