import {NextPageContext} from 'next';
import {signOut, getSession} from 'next-auth/react';
import Billboard from '../components/Billboard';
import MovieList from '../components/MovieList';
import Navbar from '../components/Navbar';

import useCurrentUser from '../hooks/useCurrentUser';
import useMovieList from '../hooks/useMovieList';
import useMovieListAction from '../hooks/useMovieListAction';
import useMovieListComedy from '../hooks/useMovieListComedy';
import useFavorites from '../hooks/useFavorites';
import InfoModal from '../components/InfoModal';
import useInfoModal from '../hooks/useInfoModal';


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
  const {data: favorites = []} = useFavorites();
  const {isOpen, closeModal} = useInfoModal();
  const { data: actionMovies = [] } = useMovieListAction();
  const { data: comedyMovies = [] } = useMovieListComedy();

  console.log(movies)
  console.log(actionMovies)

  return (
    <>
      <InfoModal visible={isOpen} onClose={closeModal} />
      <Navbar />
      <Billboard />
      <div className="pb-40">
      {/* <MovieList title="My Favorites" data={favorites} /> */}
      <MovieList title="Trending Now" data={movies} />
      <MovieList title="Action" data={actionMovies} />
      <MovieList title="Comedy" data={comedyMovies} />

      </div>
    </>
  )
}

export default Home
