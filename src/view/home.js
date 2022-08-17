import {getPost} from '../firebase/auth.js'
export default () => {
    const viewHome = `
    <header class=tit-arriba> InstaPets </header>
    <figure class="text-center">
    <img  class="image-perfil" src="coby.jpg" alt="perfil gato"/>
    </figure>
    <h2 class="text-center">Mocca</h2>
    
    
    <footer class="menu-abajo">
    <a class="iconos" href="#/home"><img  class="img-home" src="home.png" alt="perfil"/> Home </a> 
    <a class="iconos" href="#/publication"> <img  class="img-home" src="publicar.png" alt="publicar"/> Publicar </a>
    <a class="iconos" href="#/buscar"> <img  class="img-home" src="buscar.png" alt="buscar"/> Buscar </a>
    <a class="iconos" href="#/perfil"> <img  class="img-home" src="perfil.png" alt="publicar"/> Perfil</a>
    </footer>` 

    const divElem = document.createElement('div')
    divElem.innerHTML= viewHome;

    const capturarPost = getPost()
    
    return divElem;


};