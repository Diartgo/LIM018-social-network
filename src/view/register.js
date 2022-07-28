export default () => {
    const viewRegistro =`
    <h2 class="tit">Unete a esta gran </h2>
    <h2 class="tit">comunidad de </h2>
    <h2 class="tit">PetLovers </h2> 
    <img  class="image-perfil" src="cones.png" alt="conejitos"/>
    <p class="resumen"> Crea un perfil, sigue a otros pets,</p>
    <p class="resumen"> sube las fotos y videos de tu </p>
    <p class="resumen"> engreido de 4 patas y hazlo famoso. </p>
    <div class="cajas">
    <input class= caja type="text" placeholder="Nombres y Apellidos" required> 
   
    <input class= caja type="email" placeholder="Correo Electronico" required> 
    
    <input class= caja type="text" placeholder="Nombre de Usuario" required> 
   
    <input class= caja type="password" id="caja-login" placeholder="Contraseña" required> 
    <button class="botton" id="botonRegistrar"> Registrar </button>
    
    <div class='last-line'>
    <p class="bajo-btn">¿Tienes una cuenta?, </p> <a href='#/login'> Inicia Sesión </a> </div> 
    </div>
    <img  class="image-perfil" src="cperro.png" alt="perro abajo"/>`;

    const divElem = document.createElement('div')
    divElem.classList.add('position')
    divElem.innerHTML=viewRegistro;

    return divElem;
};
