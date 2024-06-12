import {Dimensions} from 'react-native';

export const appInfo = {
  sizes: {
    WIDTH: Dimensions.get('window').width,
    HEIGHT: Dimensions.get('window').height,
  },
  monthNames: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],

  // BASE_URL: 'http://192.168.1.4:3001',
  BASE_URL: 'http://192.168.1.9:3001',
  // BASE_URL: 'http://192.168.2.33:3001',
};
