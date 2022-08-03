// eslint-disable-next-line import/no-unresolved}
import {auth, signInWithEmailAndPassword, signInWithPopup, provider, getAuth, GoogleAuthProvider } from "../firebase/auth.js";
export default () => {
    const viewLogin = `
    <h1> InstaPets </h1>
    <figure class="text-center">
        <img  class="image-perfil" src="mascotas.png" alt="conejitos"/>
    </figure>
    <div class="google-btn">
    <button class="bottongoogle" id="botongoogle"> <img  class="image-google" src="logoGoogle.png" alt="logogoogle"/> Continuar con Google </button>
    </div>
    <p>--------------------o--------------------</p>

    <form id="signup-form">
    <input class="caja" type="email"  id="signup-email" placeholder="ingrese el e-mail" required> 
    <br>
    <input class="caja" type="password" id="signup-pass" placeholder="ingrese su contraseña" required> 
    <br>
    <button type="submit" class="botton" id="botonLogin">SignUp </button> 
    </form>
    <div class='last-line'>
    <p class="bajo-btn">¿No tienes cuenta?, </p> <a href="#/register"> Registrate </a>
    </div>`;   

 
    
    // const form = document.createElement('form');
    // const email = document.createElement ()
    // const password = document.createElement ()
    // const button = document.createElement ()

    const divElem = document.createElement('div');
    divElem.classList.add('position')
    divElem.innerHTML= viewLogin;

    const signupForm = divElem.querySelector('#signup-form');

    const signupEmail = divElem.querySelector('#signup-email');
    const signupPassword = divElem.querySelector('#signup-pass');
    const signupLogin = divElem.querySelector ('#botonLogin')
    const signUpGoogle = divElem.querySelector ('#botongoogle')
    
      signupLogin.addEventListener('click',(e)=> {
        e.preventDefault();
        
        let emailValue = signupEmail.value;
        let passwordValue = signupPassword.value;

        // const auth = getAuth();
        signInWithEmailAndPassword(auth, emailValue, passwordValue)
          .then((userCredential) => {
            // Signed in

            console.log('signUp')
            const user = userCredential.user;
            // ...
            window.location.hash = '#/home';
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
          });


      })

      signUpGoogle.addEventListener('click',(e)=> {
        e.preventDefault();
  
        const auth = getAuth();
        signInWithPopup(auth, provider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          // The signed-in user info.
          const user = result.user;       
          // ...
          window.location.hash = '#/home'
          
        }).catch((error) => {
          // Handle Errors here.
          console.log(error.message);
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          // const email = error.customData.email;
          // The AuthCredential type that was used.
          // const credential = GoogleAuthProvider.credentialFromError(error);
          // ...
        });

      
      })

    
    return divElem;

}


     

   
