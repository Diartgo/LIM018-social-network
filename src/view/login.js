// eslint-disable-next-line import/no-unresolved}
import {auth, signInWithEmailAndPassword} from "../firebase/auth.js";
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
    

      signupLogin.addEventListener('click',(e)=> {
        e.preventDefault();
        
        let emailValue = signupEmail.value;
        let passwordValue = signupPassword.value;

        console.log(emailValue,passwordValue);

        signInWithEmailAndPassword(auth,emailValue,passwordValue)
        then(userCredential => {
              console.log(userCredential)
            })


      })
    
    return divElem;



}


     

   
