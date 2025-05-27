import { StyleSheet, Platform } from 'react-native';

export const tableStyles = StyleSheet.create({
  tableContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#fff',
  },
  addButton: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  searchInput: {
    backgroundColor: '#fff',
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 8,
    fontSize: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#007bff',
    paddingVertical: 10,
    borderRadius: 8,
    marginBottom: 8,
  },
  columnHeader: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  columnHeaderText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 14,
  },
  idColumn: {
    flex: 0.7,
  },
  nameColumn: {
    flex: 2.5,
    alignItems: 'flex-start',
    paddingLeft: 12,
  },
  priceColumn: {
    flex: 1,
  },
  tableRow: {
    flexDirection: 'row',
    backgroundColor: '#fafafa',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginVertical: 6,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  tableCell: {
    color: '#333',
    fontSize: 16,
  },
  idCell: {
    flex: 0.7,
    textAlign: 'center',
  },
  nameCell: {
    flex: 2.5,
    paddingLeft: 12,
    textAlign: 'left',
  },
  priceCell: {
    flex: 1,
    textAlign: 'center',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  emptyText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 12,
  },
  errorText: {
    fontSize: 16,
    color: '#dc3545',
  },
  paginationContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
    paddingHorizontal: 8,
  },
  pagesWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  paginationButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginHorizontal: 2,
    backgroundColor: '#007bff',
    borderRadius: 5,
  },
  paginationButtonDisabled: {
    backgroundColor: '#a0c4ff',
  },
  paginationButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  paginationPageNumber: {
    marginHorizontal: 3,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 5,
    backgroundColor: '#eee',
  },
  paginationPageNumberActive: {
    backgroundColor: '#007bff',
  },
  paginationPageNumberText: {
    color: '#333',
    fontWeight: '600',
  },
  paginationPageNumberTextActive: {
    color: '#fff',
  },
  paginationDots: {
    marginHorizontal: 6,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#666',
  },
  paginationFecha: {
    marginLeft: 'auto',
    fontSize: 14,
    fontWeight: '600',
    color: '#555',
  },
  itemsPerPageWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    justifyContent: 'center',
    gap: 4,
  },
  itemsPerPageLabel: {
    fontSize: 14,
    color: '#333',
    marginRight: 4,
  },
  picker: {
    height: 32,
    width: 100,
    color: '#000',
    backgroundColor: '#f5f5f5',
    borderRadius: 6,
  },
});
