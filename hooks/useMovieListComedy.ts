import useSwr from 'swr'
import fetcher from '../libs/fetcher';

const useComedyMovies = () => {
  const { data, error, isLoading } = useSwr('/api/movies/comedy', fetcher, {
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

export default useComedyMovies;