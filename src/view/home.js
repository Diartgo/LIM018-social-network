export default () => {
    const viewHome = `
    <figure class="text-center">
    <img  class="image-perfil" src="coby.jpg" alt="perfil gato"/>
    </figure>
    <h2 class="text-center">Mocca</h2>` 

    const divElem = document.createElement('div')
    divElem.innerHTML= viewHome;
    return divElem;
};