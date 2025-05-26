import { useState, useEffect } from 'react';
import { showErrorToast } from '../utils/toast';

export function useFetch(fetchFunction, dependencies = [], onErrorBack) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    try {
      const result = await fetchFunction();
      setData(result);
    } catch (error) {
      showErrorToast('Ocurrió un error al obtener los datos');
      if (onErrorBack) onErrorBack();
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, dependencies);

  return { data, loading, refetch: fetchData };
}