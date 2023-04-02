import { NextApiRequest, NextApiResponse } from "next";
import prismadb from '../../../../libs/prismadb';
import serverAuth from "../../../../libs/serverAuth";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method !== 'GET') {
      return res.status(405).end();
    }

    // await serverAuth(req);


    const animationMovies = await prismadb.movie.findMany({
        where: {
              genre: 'animation'
        },
        orderBy: [
          {
            popularity: 'asc'
          }
        ]
    });

    // console.log(animationMovies)

    return res.status(200).json(animationMovies);
  } catch (error) {
    console.log({ error })
    return res.status(500).end();
  }
}