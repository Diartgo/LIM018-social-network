import {getPost, deletePost, creaPost, editPost, updatePost} from '../firebase/auth.js'
export default () => {
    const viewHome = `
    <header class=tit-arriba> InstaPets </header>
    
    <form id=post-form>
      <input class="caja" type="text" id="publicar-texto" placeholder="¿Que quieres compartir hoy?" required> 
      <br>
      <button type="submit" class="botton" id="boton-publicar">Publicar</button> 
    </form>

    <section class="secc-descripcion" id="publicaciones">
    </section>
   
    <footer class="menu-abajo">
    <a class="iconos" href="#/home"><img  class="img-home" src="home.png" alt="perfil"/> </a> 
    <a class="iconos" href="#/publication"> <img  class="img-home" src="publicar.png" alt="publicar"/>  </a>
    <a class="iconos" href="#/buscar"> <img  class="img-home" src="buscar.png" alt="buscar"/>  </a>
    <a class="iconos" href="#/perfil"> <img  class="img-home" src="perfil.png" alt="publicar"/></a>
    </footer>` 

    const divElem = document.createElement('div')
    divElem.innerHTML= viewHome;

    const botPublicar = divElem.querySelector('#boton-publicar');
    const textoPublicar = divElem.querySelector('#publicar-texto');
    const formPubli = divElem.querySelector('#post-form') ;
    
      botPublicar.addEventListener('click',(e)=> {
        e.preventDefault();
        
        creaPost(textoPublicar.value);
         formPubli.reset()
                    
      })

    return divElem;
    
};

  
    // function mostrar los post

    getPost((callback)=>{
      const mostrarPublis = document.querySelector("#publicaciones");
        callback.forEach(element => {
            // console.log(element.data())
            const divPost = `
          <div class="datos-usuario">
            <img  class="perfil-post" src="coby.jpg" alt="perfil gato"/>
            <p> <b>  Mochi Miau </b> </p>
            <p class="tiempo">Hace 1 dia</p>
          </div>
            <div class="post-nuevo">
              <p id="${element.id}" class="texto-post"> ${element.data().publi} </p> 
              <button id="button${element.id}" style="display:none"> Guardar </button>   
              <div class="iconos-edit">
                  <img class="editar-post" data-post-id="${element.id}" src="editar.png" "alt=post editar"/> 
                  <img class="borrar-post" data-post-id="${element.id}" src="eliminar.png" "alt=tachito"/>              
              </div>
            </div>
            <p class="cantidad-likes">
                <span>23</span> 
                <img class="huellilikes" src="huellilike.png" "alt=huella"/> 
                Huellilikes
            </p>
            `;      
        
        
        mostrarPublis.innerHTML+=divPost;
        });

        // borrando post

        document.querySelectorAll('.borrar-post').forEach(btn => {
          btn.addEventListener('click', (event) => {
            // debugger
            const postId = event.target.dataset.postId
            deletePost(postId).then(() => {
              console.log('se ha borrado el post con el id: ', postId)
            })
          })
        })

        //editando post

        document.querySelectorAll('.editar-post').forEach(btn => {
          btn.addEventListener('click', (e) => {
            console.log(e.target.dataset.postId)
            // editPost(e.target.dataset.postId).then((doc)=>{
      
            const traerEditPost=document.querySelector(`#${e.target.dataset.postId}`)
            // const task = doc.data()
            console.log(traerEditPost)
            traerEditPost.contentEditable = 'true';
            traerEditPost.focus();

            const btnGuardarPost=document.querySelector(`#button${e.target.dataset.postId}`)
         
            btnGuardarPost.style.display="block";
            btnGuardarPost.addEventListener('click',()=>{
              updatePost(e.target.dataset.postId,traerEditPost.textContent);
              btnGuardarPost.style.display="none";
            })
            // traerEditPost.addEventListener('keyup',(e)=>{
            //   updatePost('e.target.dataset.postId', 'keyup')
            // })

            // postform['caja'].value = doc.caja

            console.log('estas editando el post')
          //  const postId = event.target.dataset.postId
            // editPost(postId).then(() => {
            //   console.log('se ha editadoel post con el id: ', postId)
            // })
            })
          })
        

    })


// }

    
