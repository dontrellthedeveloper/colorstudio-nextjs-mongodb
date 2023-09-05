import { useState,useEffect } from 'react';
import {NextPageContext} from 'next';
import {signOut, getSession} from 'next-auth/react';
import Billboard from '../../components/Billboard';
import MovieList from '../../components/MovieList';
import GenreList from '../../components/GenreList';
import Navbar from '../../components/Navbar';

import useCurrentUser from '../../hooks/useCurrentUser';
import useMovieList from '../../hooks/useMovieList';
import useMovieListAction from '../../hooks/useMovieListAction';
import useMovieListComedy from '../../hooks/useMovieListComedy';
import useMovieListDrama from '../../hooks/useMovieListDrama';
import useMovieListHorror from '../../hooks/useMovieListHorror';
import useMovieListThriller from '../../hooks/useMovieListThriller';
import useMovieListAnimation from '../../hooks/useMovieListAnimation';
import useMovieListCrime from '../../hooks/useMovieListCrime';
import useMovieListDocumentary from '../../hooks/useMovieListDocumentary';
// import useFavorites from '../hooks/useFavorites';
import InfoModal from '../../components/InfoModal';
import useInfoModal from '../../hooks/useInfoModal';
import Head from 'next/head';


export async function getServerSideProps(context: NextPageContext) {

  


  // const session = await getSession(context);

  // if (!session) {
  //   return {
  //     redirect: {
  //       destination: '/auth',
  //       permanent: false,
  //     }
  //   }
  // }

  return {
    props: {}
  }
}

const Home = () => {

  
  const {data: user} = useCurrentUser();
  const { data: movies = [] } = useMovieList();
  // const {data: favorites = []} = useFavorites();
  const {isOpen, closeModal} = useInfoModal();
  const { data: actionMovies = [] } = useMovieListAction();
  const { data: comedyMovies = [] } = useMovieListComedy();
  const { data: dramaMovies = [] } = useMovieListDrama();
  const { data: horrorMovies = [] } = useMovieListHorror();
  const { data: thrillerMovies = [] } = useMovieListThriller();
  const { data: animationMovies = [] } = useMovieListAnimation();
  const { data: crimeMovies = [] } = useMovieListCrime();
  const { data: documentaryMovies = [] } = useMovieListDocumentary();



  return (
    <>
      <Head>
        <title>Color Studio</title>
      </Head>
      <InfoModal visible={isOpen} onClose={closeModal} />
      <Navbar />
      {/* <Billboard /> */}
      <div className="pb-20 pt-5">
      {/* <MovieList title="My Favorites" data={favorites} /> */}
      {/* <MovieList title="Trending Now" data={movies} /> */}
      {/* <GenreList title="Action" data={actionMovies} />
      <MovieList title="Comedy" data={comedyMovies} />
      <MovieList title="Drama" data={dramaMovies} /> */}
      <GenreList title="Horror" data={horrorMovies} />
      {/* <MovieList title="Thriller" data={thrillerMovies} />
      <MovieList title="Animation" data={animationMovies} />
      <MovieList title="Crime" data={crimeMovies} />
      <MovieList title="Documentary" data={documentaryMovies} />  */}
      </div>
    </>
  )
}

export default Home
