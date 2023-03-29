import {NextPageContext} from 'next';
import {signOut, getSession} from 'next-auth/react';
import Billboard from '../components/Billboard';
import MovieList from '../components/MovieList';
import Navbar from '../components/Navbar';

import useCurrentUser from '../hooks/useCurrentUser';
import useMovieList from '../hooks/useMovieList';


export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      }
    }
  }

  return {
    props: {}
  }
}

const Home = () => {
  const {data: user} = useCurrentUser();
  const { data: movies = [] } = useMovieList();

  return (
    <>
      <Navbar />
      <Billboard />
      <div className="pb-40">
        <MovieList title="Trending Now" data={movies} />
        {/* <MovieList title="My List" data={favorites} /> */}
      </div>
    </>
  )
}

export default Home
