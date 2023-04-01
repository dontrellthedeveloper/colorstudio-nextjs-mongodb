import useSwr from 'swr'
import fetcher from '../libs/fetcher';

const useDramaMovies = () => {
  const { data, error, isLoading } = useSwr('/api/movies/drama', fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });
//   console.log(data)
  return {
    data,
    error,
    isLoading
  }
};

export default useDramaMovies;