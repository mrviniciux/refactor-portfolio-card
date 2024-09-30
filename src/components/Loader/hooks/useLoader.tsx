import { useEffect, useState } from 'react';

function useLoader(showRefresh = false) {
  const [isRefreshVisible, setIsRefreshVisible] = useState(false);

  useEffect(() => {
    if (!showRefresh) return;

    const timer = setTimeout(() => {
      setIsRefreshVisible(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, [showRefresh]);

  return { isRefreshVisible };
}

export default useLoader;
