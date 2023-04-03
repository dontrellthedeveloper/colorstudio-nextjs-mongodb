import useSwr from 'swr'
import fetcher from '../libs/fetcher';

const useExploreMovies = () => {
  const { data, error, isLoading } = useSwr('/api/movies/explore', fetcher, {
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

export default useExploreMovies;