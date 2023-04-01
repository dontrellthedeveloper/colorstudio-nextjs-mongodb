import React, {useRef} from 'react';

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
  if (isEmpty(data)) {
    return null;
  }



const slider = useRef(null);



  const settings = {
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    adaptiveHeight: true,
  };

  return (
    <div className="px-4 md:px-12 mt-4 pb-10 space-y-8 ">
      <div className='app-scroll'>

      

        <div className='flex mb-4 mt-4'>
           <p className="text-white text-md md:text-xl lg:text-2xl font-semibold">{title}</p>
           <BsArrowLeftCircle className="text-white text-md md:text-xl lg:text-3xl ml-5 font-semibold cursor-pointer" onClick={() => slider?.current?.slickPrev()} />
           <BsArrowRightCircle className="text-white text-md md:text-xl lg:text-3xl ml-5 font-semibold cursor-pointer" onClick={() => slider?.current?.slickNext()} />
        </div>

        <Slider className='grid grid-cols-4 gap-2 hs-scroll full-scroll' ref={slider} {...settings}>
          { data.map((movie) => (
            <MovieCard key={movie.id} data={movie} />
          ))}
         </Slider>

      </div>
    </div>
  );
}

export default MovieList;