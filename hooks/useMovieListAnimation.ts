import useSwr from 'swr'
import fetcher from '../libs/fetcher';

const useAnimationMovies = () => {
  const { data, error, isLoading } = useSwr('/api/movies/animation', fetcher, {
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

export default useAnimationMovies;