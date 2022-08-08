import {creaPost} from '../firebase/auth'

export default () => {
    const viewPublication = `
      <input class="caja" type="text" id="publicar-texto" placeholder="¿Que quieres compartir hoy?" required> 
      <br>
      <button type="submit" class="botton" id="boton-publicar">Publicar</button> 
      </form>
          `; 

        const divElem = document.createElement('div');
        divElem.classList.add('position')
        divElem.innerHTML= viewPublication;

        
        const botPublicar = divElem.querySelector ('#boton-publicar');
        const textoPublicar = divElem.querySelector('#publicar-texto');
        
          botPublicar.addEventListener('click',(e)=> {
            e.preventDefault();
            
            // creaPost(textoPublicar.value);
            // textoPublicar.reset
                  
          })
         

        return divElem;
}