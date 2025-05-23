import { StyleSheet } from 'react-native';

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

  columnHeaderText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 14,
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
  },

  emptyText: {
    fontSize: 16,
    color: '#666',
  },

  errorText: {
    fontSize: 16,
    color: '#dc3545',
  },
});
