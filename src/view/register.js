import {createUserWithEmailAndPassword,auth, signInWithPopup, provider,getAuth} from "../firebase/auth.js" 
export default () => {
    const viewRegistro =`
    <h2 class="tit">Unete a esta gran </h2>
    <h2 class="tit">comunidad de </h2>
    <h2 class="tit">PetLovers </h2> 
    <div class="img-conejitos"> 
    <img  class="image-perfil" src="cones.png" alt="conejitos"/>
    </div>
    <p class="resumen"> Crea un perfil, sigue a otros pets,</p>
    <p class="resumen"> sube las fotos y videos de tu </p>
    <p class="resumen"> engreido de 4 patas y hazlo famoso. </p>
    <button class="bottongoogle" id="botongoogle"> <img  class="image-google" src="logoGoogle.png" alt="logogoogle"/> registrarte con Google </button>
    </div>
    <p>--------------------o--------------------</p>
    <div class="cajas">
    <input class= caja id="name" type="text" placeholder="Nombres y Apellidos" required> 
   
    <input class= caja id="correo" type="email" placeholder="Correo Electronico" required> 
    
    <input class= caja id="usuario" type="text" placeholder="Nombre de Usuario" required> 
   
    <input class= caja id="password" type="password" id="caja-login" placeholder="Contraseña" required> 
    <p id="menssage-error"></p>
    <button class="botton" id="botonRegistrar"> Registrar </button>
    
    <div class='last-line'>
    <p class="bajo-btn">¿Tienes una cuenta?, </p> <a href='#/login'> Inicia Sesión </a> </div> 
    </div>
    <img  class="image-perfil" src="cperro.png" alt="perro abajo"/>`;

    const divElem = document.createElement('div')
    divElem.classList.add('position')
    divElem.innerHTML=viewRegistro;

    const registerName = divElem.querySelector('#name');
    const registerEmail = divElem.querySelector ('#correo');
    const registerUsuario = divElem.querySelector('#usuario');
    const registerPass = divElem.querySelector ('#password');
    const registrate = divElem.querySelector('#botonRegistrar')
    const signUpGoogle = divElem.querySelector ('#botongoogle')
    // const errorMenssage = divElem.getElementsById('message-error')

      registrate.addEventListener('click',(e)=> {
        e.preventDefault();
        
        let nameValue = registerName.value;
        let emailregValue = registerEmail.value;
        let usuarioValue = registerUsuario.value;
        let passregValue = registerPass.value; 
        let errorMenssage = 

        console.log(nameValue,emailregValue,usuarioValue,passregValue);
    
        const userRegister = (email, password) => {
          const unaPromesa = createUserWithEmailAndPassword(auth, emailregValue, passregValue)
          return unaPromesa;
        }
        userRegister (emailregValue,passregValue)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user)
          // agregamos el uid para poder agregarlo a la colección de usuarios
          const userId = userCredential.user.uid;
          console.log(userId)
          // trayeyendo la collecion usaurio
          // userCollection (userId, nameValue, emailregValue);
          
          alert(`Registro exitoso ${user.email}`);
          emailVerification().then(() => {
            mensaje.style.display = 'block';
          }).catch((error) => {
            console.log(error);
            mensajeError.style.display = 'block';
          });
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
        }).catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.customData.email;
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error);
          // ...
        });

      
      })

    return divElem;
};
