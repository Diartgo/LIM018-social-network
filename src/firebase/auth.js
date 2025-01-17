import {getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, sendEmailVerification, GoogleAuthProvider} from 'https://www.gstatic.com/firebasejs/9.9.1/firebase-auth.js';
import {app} from './configuration.js'
import { getFirestore, collection, addDoc, getDoc, onSnapshot, query, orderBy, doc, deleteDoc, updateDoc} from 'https://www.gstatic.com/firebasejs/9.9.1/firebase-firestore.js';

export const auth = getAuth(app);
   
export const provider = new GoogleAuthProvider();
// console.log(auth);

export {signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, sendEmailVerification,getAuth, GoogleAuthProvider }

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

export const creaPost = (publi) => {
   addDoc(collection(db,'publi'), {publi}, );
};

export const getPost = (elem) => onSnapshot(collection(db, 'publi'), (elem) );

export const deletePost = (id) => deleteDoc(doc(db, 'publi', id));

export const editPost = (id) => getDoc(doc(db, 'publi', id));

export const updatePost = (idPost, textoDelPost) => {
   updateDoc(doc(db, 'publi', idPost), {
      publi: textoDelPost
   });
 };

//  updatePost("GhAA1UKTIMnxt8iij4EH","Cambiando el textoo");
 

// Likes de Posts
// export const postLikes = async (idPost, dataLikes) => {
//    const docId = doc(dataBase, 'posts', idPost);
//    await updateDoc(docId, {
//      likes: dataLikes,
//    });
//  };
   // getPost((element)=>{
   //    console.log(element);
   //    element.forEach((posts)=>{
   //       console.log(posts.data());
   //    })
   // })

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