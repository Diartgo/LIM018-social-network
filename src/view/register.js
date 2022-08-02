import {createUserWithEmailAndPassword,auth} from "../firebase/auth.js" 
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
    <div class="cajas">
    <input class= caja id="name" type="text" placeholder="Nombres y Apellidos" required> 
   
    <input class= caja id="correo" type="email" placeholder="Correo Electronico" required> 
    
    <input class= caja id="usuario" type="text" placeholder="Nombre de Usuario" required> 
   
    <input class= caja id="password" type="password" id="caja-login" placeholder="Contraseña" required> 
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
    

      registrate.addEventListener('click',(e)=> {
        e.preventDefault();
        
        let nameValue = registerName.value;
        let emailregValue = registerEmail.value;
        let usuarioValue = registerUsuario.value;
        let passregValue = registerPass.value; 

        console.log(nameValue,emailregValue,usuarioValue,passregValue);
    
        createUserWithEmailAndPassword(auth, emailregValue, passregValue)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
      })

      


    return divElem;
};
