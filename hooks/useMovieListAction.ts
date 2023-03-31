import useSwr from 'swr'
import fetcher from '../libs/fetcher';

const useActionMovies = () => {
  const { data, error, isLoading } = useSwr('/api/movies/action', fetcher, {
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

export default useActionMovies;