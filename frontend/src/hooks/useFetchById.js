import { useState, useEffect } from 'react';
import { showErrorToast } from '../utils/toast';

export function useFetchById(fetchFunction, id, onErrorBack) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      setLoading(true);
      try {
        const result = await fetchFunction(id);
        setData(result);
      } catch (error) {
        showErrorToast('No se pudo cargar la información');
        if (onErrorBack) onErrorBack();
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return { data, loading, setData };
}
