// importamos la funcion que vamos a testear
// import { registroFirebase, registroDom } from '../src/componente/registro.js';

import { loginview, loginDom } from '../src/componente/login.js';

jest.mock('../src/firebaseconfig/firebase.js'); // Modulo a mockear

describe('login', () => {
  it('se pinte el formulario de login', () => {
    // DADO - mocks, pintar en el dom que necesitemos
    const mainH = document.createElement('main');
    mainH.id = 'contenedor';
    document.body.appendChild(mainH);

    // CUANDO - ejecutar una funcion especifica para nuestra prueba
    mainH.appendChild(loginview());

    // ENTONCES - los resultados esperados | expects
    expect(document.querySelector('.form.login')).not.toBeNull();
  });
});