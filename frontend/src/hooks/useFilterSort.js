import { useState, useMemo } from 'react';

export function useFilterSort(
  data,
  initialFilter = '',
  initialSortColumn = null,
  initialSortDirection = 'asc',
  filterColumns = null, // opcional: array con campos para filtrar
) {
  const [filterText, setFilterText] = useState(initialFilter);
  const [sortColumn, setSortColumn] = useState(initialSortColumn);
  const [sortDirection, setSortDirection] = useState(initialSortDirection);

  const filteredAndSortedData = useMemo(() => {
    if (!data) return [];

    const trimmedFilter = filterText.trim().toLowerCase();

    const filtered = trimmedFilter
      ? data.filter(item => {
          const valuesToCheck = filterColumns
            ? filterColumns.map(col => item[col])
            : Object.values(item);

          return valuesToCheck.some(value =>
            value != null &&
            value.toString().toLowerCase().includes(trimmedFilter)
          );
        })
      : data;

    if (!sortColumn) return filtered;

    return [...filtered].sort((a, b) => {
      const aValue = a[sortColumn];
      const bValue = b[sortColumn];

      // Manejo valores nulos: null/undefined al final
      if (aValue == null && bValue == null) return 0;
      if (aValue == null) return 1;
      if (bValue == null) return -1;

      if (typeof aValue === 'number' && typeof bValue === 'number') {
        return sortDirection === 'asc' ? aValue - bValue : bValue - aValue;
      } else {
        const strA = String(aValue).toLowerCase();
        const strB = String(bValue).toLowerCase();
        return sortDirection === 'asc' ? strA.localeCompare(strB) : strB.localeCompare(strA);
      }
    });
  }, [data, filterText, sortColumn, sortDirection, filterColumns]);

  return {
    filterText,
    setFilterText,
    sortColumn,
    setSortColumn,
    sortDirection,
    setSortDirection,
    filteredAndSortedData,
  };
}
