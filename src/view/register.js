export default () => {
    const viewRegistro =`
    <p>Ingrese su nombre y apellido </p>
    <input class= caja type="text" id="caja-login" required> 
    <p>Ingrese su Correo Electronico </p>
    <input class= caja type="email" id="caja-login" required> 
    <p>Ingrese nombre de Usuario </p>
    <input class= caja type="text" id="caja-login" required> 
    <p>Ingrese contraseña </p>
    <input class= caja type="password" id="caja-login" required> 
    <button class="botton" id="botonRegistrar"> Registrar </button>`;

    const divElem = document.createElement('div')
    divElem.classList.add('position')
    divElem.innerHTML=viewRegistro;

    return divElem;
};
