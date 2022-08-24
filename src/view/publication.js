import {creaPost} from '../firebase/auth.js'

export default () => {
    const viewPublication = `
      <header class=tit-arriba> InstaPets </header>
      <form id=post-form>
      <input class="caja" type="text" id="publicar-texto" placeholder="¿Que quieres compartir hoy?" required> 
      <br>
      <button type="submit" class="botton" id="boton-publicar">Publicar</button> 
      </form>
       `; 

        const divElem = document.createElement('div');
        divElem.classList.add('position')
        divElem.innerHTML= viewPublication;

        
        


        return divElem;
}