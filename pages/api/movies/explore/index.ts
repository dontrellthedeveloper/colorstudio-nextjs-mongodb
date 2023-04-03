import { NextApiRequest, NextApiResponse } from "next";
import prismadb from '../../../../libs/prismadb';
import serverAuth from "../../../../libs/serverAuth";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method !== 'GET') {
      return res.status(405).end();
    }

    // await serverAuth(req);


    const exploreMovies = await prismadb.movie.findMany({
        orderBy: [
          {
            title: 'asc'
          }
        ]
    });

    // console.log(dramaMovies)

    return res.status(200).json(exploreMovies);
  } catch (error) {
    console.log({ error })
    return res.status(500).end();
  }
}