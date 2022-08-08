import { components } from '../view/index.js';

export const changeView = (ruta) => {
  const container = document.getElementById('container');
  container.innerHTML = '';
  switch (ruta) {
    case '': 
    case '#/login':
    { return container.appendChild(components.login()); }
    break;
    case '#/register':
    { return container.appendChild(components.register()); }
    break
    case '#/home':
    { return container.appendChild(components.home()); }
    break;
    case '#/publication':
    { return container.appendChild(components.publication()); }
    break;
    case '#/perfil':
    { return container.appendChild(components.perfil()); }
    break;
    
  };
};
