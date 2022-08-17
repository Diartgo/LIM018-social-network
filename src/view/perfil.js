export default () => {
    const viewPerfil = `
        <header class=tit-arriba> InstaPets </header>
        <figure class="text-center">
        <img  class="image-perfil" src="coby.jpg" alt="perfil gato"/>
        </figure>
        <h2 class="text-center">Mocca</h2>
        <h4 class="text-center">Lima - Barranco</h4>
        <footer class="menu-abajo">
        <a class="iconos" href="#/home"><img  class="img-home" src="home.png" alt="perfil"/> Home </a> 
        <a class="iconos" href="#/publicar"> <img  class="img-home" src="publicar.png" alt="publicar"/> Publicar </a>
        <a class="iconos" href="#/buscar"> <img  class="img-home" src="buscar.png" alt="buscar"/> Buscar </a>
        <a class="iconos" href="#/perfil"> <img  class="img-home" src="perfil.png" alt="publicar"/> Perfil </a>
        </footer>
        `; 

        const divElem = document.createElement('div');
        divElem.classList.add('position')
        divElem.innerHTML= viewPerfil;
        return divElem;
}