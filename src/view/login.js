export default () => {
    const viewLogin = `
    <h1> InstaPets </h1>
    <figure class="text-center">
        <img  class="image-perfil" src="mascotas.png" alt="conejitos"/>
    </figure>
    <button class="botton" id="botongoogle"> Continuar con Google </button>
    <p>--------------------o--------------------</p>

    <input class="caja" type="email"  placeholder="ingrese el e-mail" required> 
    <br>
    <input class="caja" type="password" placeholder="ingrese su contraseña" required> 
    <br>
    <button class="botton" id="botonIniciar"> Iniciar </button>
    <p class="bajo-btn">¿No tienes cuenta?, </p> <a href="#/register"> Registrate </a>`;    
                
    const divElem = document.createElement('div');
    divElem.classList.add('position')
    divElem.innerHTML= viewLogin;
        
    return divElem;
}