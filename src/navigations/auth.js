import {AsyncStorage} from 'react-native';

export const KEY = 'rickyfiguresitout';

export const onSignIn = () => AsyncStorage.setItem(KEY, 'true');

export const setStorage = data =>
  AsyncStorage.setItem('data', JSON.stringify(data));

export const onSignOut = () => AsyncStorage.removeItem(KEY);

export const isSignedIn = () => {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem(KEY)
      .then(res => {
        if (res !== null) {
          resolve(true);
        } else {
          resolve(false);
        }
      })
      .catch(err => reject(err));
  });
};
