import {getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, sendEmailVerification, GoogleAuthProvider} from 'https://www.gstatic.com/firebasejs/9.9.1/firebase-auth.js';
import {app} from './configuration.js'
import { getFirestore, collection, addDoc, getDocs, onSnapshot, query, orderBy } from 'https://www.gstatic.com/firebasejs/9.9.1/firebase-firestore.js';

export const auth = getAuth(app);
   
export const provider = new GoogleAuthProvider();
// console.log(auth);

export {signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, sendEmailVerification,getAuth, GoogleAuthProvider }

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

export const creaPost = (publi) => {
   addDoc(collection(db,'publi'), {publi: publi});
};

export const getPost = () => {
   const queryPost = query(collection(db, 'publi'), orderBy('datePost', 'desc'));
   
   onSnapshot(queryPost, (doc) => {
      console.log("Current data: ", doc);
  });

};

// export const onGetPost = (querySnapshot) => {
//    const queryPost = query(collection(db, 'publication'), orderBy('datePost', 'desc'));
//    onSnapshot(queryPost, querySnapshot);
//  };
 

/*function getPost(){ 
   getDocs(collection(db, 'publi'))
}*/


// export const onGetTasks = () => console.log('onGetTask')

// export {
//    onSnapshot
// }