import {getPost, deletePost, creaPost, editPost, updatePost} from '../firebase/auth.js'

// creando la variable para almacenar los likes
//  let postLikesContar = ['q3l0m6GrlVQHoRXjnwJn5LnxfRr2', 'QFNXzMxf03NWPa1TYuyrhrd5j4e2', 'GilkuJptwvPNfSbTbvWIhM9eLWm1'];


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


  // ocultando iconos para editar
      // function ocultandoIconos (){
      //  const bntEditDelet = document.querySelectorAll('.iconos-edit')
      //  bntEditDelet.forEach(element=> {
      //     if (btnMenu.classList.contains('show-icono')) { // class show.menu
      //       btnMenu.classList.remove('show-icono');
      //     } else {
      //       btnMenu.classList.add('show-icono');
      //     }
      //   })
      //  }
  
  // function mostrar los post

    getPost((postsnapshot)=>{
      const mostrarPublis = document.querySelector("#publicaciones");
      postsnapshot.forEach(element => {
            // console.log(element.data())
            const divPost = `
          <div class="datos-usuario">
            <img  class="perfil-post" src="coby.jpg" alt="perfil gato"/>
            <p> <b>  Mochi Miau </b> </p>
            <p class="tiempo">Hace 2 min</p>
          </div>
            <div class="post-nuevo">
              <p id="${element.id}" class="texto-post"> ${element.data().publi} </p> 
              <button id="button${element.id}" style="display:none"> Guardar </button>   
              <div class="iconos-edit show-iconos" >
                  <img class="editar-post" data-post-id="${element.id}" src="editar.png" "alt=post editar"/> 
                  <img class="borrar-post" data-post-id="${element.id}" src="eliminar.png" "alt=tachito"/>              
              </div>
            </div>
            <p class="cantidad-likes">
                
                <img class="huellilikes" data-post-id="${element.id}" src="huellilike.png" "alt=huella"/> 
                Huellilikes
            </p>
            `;      
        
         
        mostrarPublis.innerHTML+=divPost;
        postEliminar()
        editarPost()
        // ocultandoIconos()

        });

        //creando la vari

      // Creando colección de usuarios, falta jalar name


        // borrando post
        function postEliminar(){
          document.querySelectorAll('.borrar-post').forEach(btn => {
            btn.addEventListener('click', (event) => {
              // debugger
              const postId = event.target.dataset.postId
              deletePost(postId)
            })
          })
        }
        
        //editando post
        function editarPost (){
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
        }
        
          //Likes en la publicación
          const btnLikePost=document.querySelectorAll(`#button${e.target.dataset.postId}`)


          // function counterLike() {
          //   const btnLikes = document.querySelectorAll('.btn-likes');
          //   btnLikes.forEach((btnLike) => {
          //     btnLike.addEventListener('click', async (event) => {
          //       const elementBtnLike = event.target.closest('.btn-likes'); // elemento al que se le hace click
          //       const idPost = elementBtnLike.dataset.id;
          //       const docPost = await getPost(idPost); // recibe como argumento 1 id
          //       const publication = docPost.data(); // convertirlo en 1 obj de Js
          //       const likes = publication.likes; // array de usuarios que le dieron like
      
          //       if (likes.includes(currentUser.uid)) { // quita like
          //         const filterLikes = likes.filter((idLike) => idLike !== currentUser.uid);
          //         updatePost(idPost, { likes: filterLikes });
          //         /* likeImg.setAttribute('src', '../img/corazon.png');
          //         console.log(likeImg, 'dentro del if'); */
          //       } else {
          //         updatePost(idPost, { likes: [...likes, currentUser.uid] }); // agrega like
          //         // likeImg.setAttribute('src', '../img/corazonActivo.png');
          //       }
          //     });
          //   });
          // }


    })


// }

    
