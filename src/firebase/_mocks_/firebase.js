/* eslint-disable no-else-return */
/* eslint-disable prefer-promise-reject-errors */

export const loginExistent = (gmail, pass) => {
    if (gmail === 'email@gmail.com' && pass === '123456') {
      return Promise.resolve({
        user: {
          uid: '49wfRdokn4Rd5agIKyb0Fa5B9PR2',
        },
      });
    } else if (gmail === 'disabled@gmail.com') {
      return Promise.reject({
        code: 'auth/user-disabled',
      });
    } else if (gmail === 'wrongpas@gmail.com') {
      return Promise.reject({
        code: 'auth/wrong-password',
      });
    } return Promise.reject({
      code: 'auth/user-not-found',
    });
  };
  
  
  export const signOut = jest.fn();
  export const GoogleAuthProvider = jest.fn();
  export const signInWithPopup = jest.fn();
  
  export const collection = jest.fn();
  export const doc = jest.fn();
  export const addDoc = jest.fn();
  export const getDoc = jest.fn();
  export const setDoc = jest.fn();
  export const getDocs = jest.fn();
  export const onSnapshot = jest.fn();
  export const orderBy = jest.fn();
  export const query = jest.fn();
  export const where = jest.fn();
  export const deleteDoc = jest.fn();
  export const updateDoc = jest.fn();
  