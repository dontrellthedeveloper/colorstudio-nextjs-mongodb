import useSwr from 'swr'
import fetcher from '../libs/fetcher';

const useHorrorMovies = () => {
  const { data, error, isLoading } = useSwr('/api/movies/horror', fetcher, {
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

export default useHorrorMovies;