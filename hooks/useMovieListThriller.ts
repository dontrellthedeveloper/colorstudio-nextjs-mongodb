import useSwr from 'swr'
import fetcher from '../libs/fetcher';

const useThrillerMovies = () => {
  const { data, error, isLoading } = useSwr('/api/movies/thriller', fetcher, {
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

export default useThrillerMovies;