import { NextApiRequest, NextApiResponse } from "next";
import prismadb from '../../../../libs/prismadb';
import serverAuth from "../../../../libs/serverAuth";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method !== 'GET') {
      return res.status(405).end();
    }

    await serverAuth(req);


    const crimeMovies = await prismadb.movie.findMany({
        where: {
              genre: 'crime'
        },
        orderBy: [
          {
            popularity: 'asc'
          }
        ]
    });

    // console.log(crimeMovies)

    return res.status(200).json(crimeMovies);
  } catch (error) {
    console.log({ error })
    return res.status(500).end();
  }
}