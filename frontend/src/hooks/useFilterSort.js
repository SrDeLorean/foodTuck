import { useState, useMemo } from 'react';

export function useFilterSort(data, initialFilter = '', initialSortColumn = null, initialSortDirection = 'asc') {
  const [filterText, setFilterText] = useState(initialFilter);
  const [sortColumn, setSortColumn] = useState(initialSortColumn);
  const [sortDirection, setSortDirection] = useState(initialSortDirection);

  const filteredAndSortedData = useMemo(() => {
    if (!data) return [];

    const filtered = data.filter((item) => {
      if (!filterText) return true;
      const lowerFilter = filterText.toLowerCase();

      // Aquí puedes generalizar el filtrado con base en todas las propiedades de item
      return Object.values(item).some(value =>
        value !== null &&
        value !== undefined &&
        value.toString().toLowerCase().includes(lowerFilter)
      );
    });

    if (!sortColumn) return filtered;

    return [...filtered].sort((a, b) => {
      const aValue = a[sortColumn];
      const bValue = b[sortColumn];

      if (typeof aValue === 'number' && typeof bValue === 'number') {
        return sortDirection === 'asc' ? aValue - bValue : bValue - aValue;
      } else {
        const strA = String(aValue ?? '').toLowerCase();
        const strB = String(bValue ?? '').toLowerCase();
        return sortDirection === 'asc' ? strA.localeCompare(strB) : strB.localeCompare(strA);
      }
    });
  }, [data, filterText, sortColumn, sortDirection]);

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