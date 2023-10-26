import useSwr from 'swr'
import fetcher from '@/libs/fetcher';

const useUser= (username?: string) => {
  const { data, error, isLoading } = useSwr(username ? `/api/user/${username}` : null, fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });
  return {
    data,
    error,
    isLoading
  }
};

export default useUser;
