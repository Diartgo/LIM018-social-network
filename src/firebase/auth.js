// eslint-disable-next-line import/no-unresolved}
import {getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, sendEmailVerification, GoogleAuthProvider} from 'https://www.gstatic.com/firebasejs/9.9.1/firebase-auth.js';
import {app} from './configuration.js'

export const auth = getAuth(app);
   
export const provider = new GoogleAuthProvider();
console.log(auth);

export {signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, sendEmailVerification,getAuth, GoogleAuthProvider }
