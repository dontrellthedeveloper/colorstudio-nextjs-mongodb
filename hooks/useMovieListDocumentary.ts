import useSwr from 'swr'
import fetcher from '../libs/fetcher';

const useDocumentaryMovies = () => {
  const { data, error, isLoading } = useSwr('/api/movies/documentary', fetcher, {
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

export default useDocumentaryMovies;