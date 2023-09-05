import { useState,useEffect } from 'react';
import {NextPageContext} from 'next';
import {signOut, getSession} from 'next-auth/react';
import Navbar from '../components/Navbar';

import useCurrentUser from '../hooks/useCurrentUser';
import useMovieList from '../hooks/useMovieList';
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
  const { data: movies = [] } = useMovieList();
  const {isOpen, closeModal} = useInfoModal();



  return (
    <>
      <Head>
        <title>Color Studio</title>
      </Head>
      <InfoModal visible={isOpen} onClose={closeModal} />
      <Navbar />
      <div className="pb-20 pt-5">
      <Popular title="New & Popular" data={movies} />
      </div>
    </>
  )
}

export default Home