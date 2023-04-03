import React, {useRef, useEffect, useState} from 'react';

import { MovieInterface } from '../types';
// import MovieCard from './components/MovieCard';
import { isEmpty } from 'lodash';
import MovieCard from './MovieCard';
import { BsArrowLeftShort, BsArrowRightShort, BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill, BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs';

import Slider from "react-slick";

import "../node_modules/slick-carousel/slick/slick.css"; 
import "../node_modules/slick-carousel/slick/slick-theme.css";

interface MovieListProps {
  data: MovieInterface[];
  title: string;
}





const MovieList: React.FC<MovieListProps> = ({ data, title }) => {

  // if (isEmpty(data)) {
  //   return null;
  // }

  const [videoLg, setVideoLg] = useState<boolean>(false)
  const [videoMd, setVideoMd] = useState<boolean>(false)
  const [videoSm, setVideoSm] = useState<boolean>(false)
  const [videoDesktop, setVideoDesktop] = useState<boolean>(false)

//   useEffect(() => {
//     const resolution = window.innerWidth;

//     if (resolution > 1023 ) {
//         setVideoDesktop(true)
//     }
//   }, [])

  useEffect(() => {
    const resolution = window.innerWidth;

    if (resolution > 767) {
        setVideoLg(true)
    }
  }, [])

  useEffect(() => {
    const resolution = window.innerWidth;

    if (resolution < 768 && resolution > 639) {
        setVideoMd(true)
    }
  }, [])

  useEffect(() => {
    const resolution = window.innerWidth;

    if (resolution < 640) {
        setVideoSm(true)
    }
  }, [])

  

const slider = useRef<any>(null);



  const settings = {
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    adaptiveHeight: true,
  };

  return (
    <div className="px-4 md:px-12 mt-4 pb-10 pt-14 space-y-8 ">

      {/* {videoDesktop && (
        <>
          <div className='app-scroll'>
            <div className='flex mb-4 mt-4'>
              <p className="text-white text-center lg:text-left text-xl lg:text-md md:text-xl lg:text-2xl font-semibold">{title}</p>
              <BsArrowLeftCircle className="text-white text-md md:text-xl lg:text-3xl ml-5 font-semibold cursor-pointer" onClick={() => slider?.current?.slickPrev()} />
              <BsArrowRightCircle className="text-white text-md md:text-xl lg:text-3xl ml-5 font-semibold cursor-pointer" onClick={() => slider?.current?.slickNext()} />
            </div>

            <Slider className='grid grid-cols-4 gap-2 hs-scroll full-scroll' ref={slider} {...settings}>
              { data.map((movie) => (
                <MovieCard key={movie.id} data={movie} />
              ))}
            </Slider>

          </div>
        </>
      )} */}
      {videoLg && (
        <>
          <div>
            <p className="text-white text-center lg:text-left text-xl lg:text-md md:text-xl lg:text-2xl font-semibold mb-4">{title}</p>
            <div className="grid  sm:grid-cols-3 md:grid-cols-4 gap-2">
              {data.map((movie) => (
                <MovieCard key={movie.id} data={movie} />
              ))}
            </div>
          </div>
        </>
      )}

      {videoMd && (
        <>
          <div>
            <p className="text-white text-center lg:text-left text-xl lg:text-md md:text-xl lg:text-2xl font-semibold mb-4">{title}</p>
            <div className="grid  sm:grid-cols-3 md:grid-cols-4 gap-2">
              {data.map((movie) => (
                <MovieCard key={movie.id} data={movie} />
              ))}
            </div>
          </div>
        </>
      )}

      {videoSm && (
        <>
          <div>
            <p className="text-white text-center lg:text-left text-xl lg:text-md md:text-xl lg:text-2xl font-semibold mb-4">{title}</p>
            <div className="grid  sm:grid-cols-3 md:grid-cols-4 gap-2">
              {data.map((movie) => (
                <MovieCard key={movie.id} data={movie} />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default MovieList;