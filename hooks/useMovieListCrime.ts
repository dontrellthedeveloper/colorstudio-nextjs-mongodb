import useSwr from 'swr'
import fetcher from '../libs/fetcher';

const useCrimeMovies = () => {
  const { data, error, isLoading } = useSwr('/api/movies/crime', fetcher, {
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

export default useCrimeMovies;