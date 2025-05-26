import Toast from 'react-native-toast-message';

export function showErrorToast(message = 'Ocurrió un error') {
  Toast.show({
    type: 'error',
    text1: 'Error',
    text2: message,
  });
}

export function showSuccessToast(title, message) {
  Toast.show({
    type: 'success',
    text1: title,
    text2: message,
  });
}