export default () => {
    const viewPerfil = `
        <figure class="text-center">
        <img  class="image-perfil" src="coby.jpg" alt="perfil gato"/>
        </figure>
        <h2 class="text-center">Mocca</h2>
        <h4 class="text-center">Lima - Barranco</h4>`; 

        const divElem = document.createElement('div');
        divElem.classList.add('position')
        divElem.innerHTML= viewPerfil;
        return divElem;
}