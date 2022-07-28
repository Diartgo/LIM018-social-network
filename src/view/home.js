export default () => {
    const viewHome = `
    <figure class="text-center">
    <img  class="image-perfil" src="coby.jpg" alt="perfil gato"/>
    </figure>
    <h2 class="text-center">Mocca</h2>
    
    <nav>
      <ul>
        <li>
          <a href="#/home">Home</a>
        </li>
        <li>
          <a href="#/perfil"> Perfil </a>
        </li>
        <li>
          <a href="#/buscar"> Buscar amigos</a>
        </li>
      </ul>
    </nav>` 

    const divElem = document.createElement('div')
    divElem.innerHTML= viewHome;
    return divElem;
};