export default () => {
    const viewLogin = `
    <p>Ingrese su correo </p>
    <input type="email" required> 
    <p>Ingrese su contraseña </p>
    <input class= caja type="password" id="caja-login" required> 
    <br>
    <button class="botton" id="botonIniciar"> Iniciar </button>
    <p>¿No tienes cuenta?, </p> <a href="Registrate"></a>
    `;    
                
    const divElem = document.createElement('div');
    divElem.classList.add('position')
    divElem.innerHTML= viewLogin;
        
    return divElem;
}