    // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js";
    import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-analytics.js";
    
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries
  
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
      apiKey: "AIzaSyCeRLaECIe-a6l_o_4HhPI-3pMjgLf2iAA",
      authDomain: "insta-pets-lim018.firebaseapp.com",
      projectId: "insta-pets-lim018",
      storageBucket: "insta-pets-lim018.appspot.com",
      messagingSenderId: "452067683490",
      appId: "1:452067683490:web:875986de75255470bb7bfb",
      measurementId: "G-RDJ84BWP8B"
    };
  
    // Initialize Firebase
    export const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);

