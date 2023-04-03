import { useState,useEffect } from 'react';
import {NextPageContext} from 'next';
import {signOut, getSession} from 'next-auth/react';
import GenreList from '../components/GenreList';
import Navbar from '../components/Navbar';

import useCurrentUser from '../hooks/useCurrentUser';
import useMovieListExplore from '../hooks/useMovieListExplore';
// import useFavorites from '../hooks/useFavorites';
import InfoModal from '../components/InfoModal';
import useInfoModal from '../hooks/useInfoModal';
import Head from 'next/head';
import Popular from '../components/Popular';


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
  // const {data: favorites = []} = useFavorites();
  const {isOpen, closeModal} = useInfoModal();
  const { data: exploreMovies = [] } = useMovieListExplore();


  return (
    <>
      <Head>
        <title>Netflix Clone</title>
      </Head>
      <InfoModal visible={isOpen} onClose={closeModal} />
      <Navbar />
      <div className="pb-20 pt-5">
      <GenreList title="Browse" data={exploreMovies} />
      </div>
    </>
  )
}

export default Home