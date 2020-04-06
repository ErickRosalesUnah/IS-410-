var client = JSON.parse(localStorage.getItem('datosuser'));
var categorias =JSON.parse(localStorage.getItem('categorias'));
var parametro1 = client[0].primerApendice;
var parametro2 = client[0].segundoApendice;
var usuario = categorias[parametro1].datos[parametro2];
var numEmpresas;
var numProdu;
var arregloProduc;
var apendice = 1;
var comentApendice;
var comentPro;

/*------------------- Esta funcion sirve para dar la bienvenida --------------------*/
function generarDatos(){
     document.getElementById("bienvenida").innerHTML = '';
     document.getElementById("bienvenida").innerHTML +=
     `<h1 class="display-3">Bienvenid@, ${categorias[parametro1].datos[parametro2].Nombre} ${categorias[parametro1].datos[parametro2].Apellido}!</h1>
      <img src="${usuario.Foto}" width="50" height="200" class="card-img-top" alt="...">
     `;
}

/*------------------- Esta funcion sirve para dar funcion al dorpdown con la opcion modificar perfil --------------------*/
function cambiarDatos(){
     let salirD = 1;
     document.getElementById("contenedor-dropdown").innerHTML = '';
     document.getElementById("contenedor-dropdown").innerHTML += 
     `<h1>Cambiar Datos <button class="btn btn-outline-success my-2 my-sm-0" id="" type="submit" href="index.html" onclick="salirDropdown(${salirD})">Salir</button></h1>
     Nombre:<input value="" id="nombre" type="text" placeholder="Usuario"><br>
                 Apellido:<input value="" id="apellido" type="text" placeholder="Usuario"><br>
                 Edad:<input id="edad" type="number" name="numero" value="0" min="0" max="100" step="1"><br>
                 Pais:<input value="" id="pais" type="text" placeholder="Usuario"><br>
                 Ciudad:<input value="" id="ciudad" type="text" placeholder="Usuario"><br>
                 Genero:<input value="" id="genero" type="text" placeholder="Usuario"><br>
                 Foto:<input value="" id="foto" type="text" placeholder="Usuario"><br>
                 Usuario:<input value="" id="usuario" type="text" placeholder="Usuario"><br>
                 Contraseña:<input value="" id="contraseña" type="password" placeholder="Usuario"><br>
      <button class="btn btn-outline-success my-2 my-sm-0" id="" type="submit" href="index.html" onclick="modificarlocal()">Guardar</button>
     `;
     document.getElementById("bienvenida").style.display = 'none';
     document.getElementById("contenedor-dropdown").style.display = 'block';
     document.getElementById("contenedor-preferencias").style.display = 'none';

        document.getElementById('nombre').value = categorias[parametro1].datos[parametro2].Nombre;
        document.getElementById('apellido').value = categorias[parametro1].datos[parametro2].Apellido;
        document.getElementById('edad').value = categorias[parametro1].datos[parametro2].Edad;
        document.getElementById('pais').value = categorias[parametro1].datos[parametro2].Pais;
        document.getElementById('ciudad').value = categorias[parametro1].datos[parametro2].Ciudad;
        document.getElementById('genero').value = categorias[parametro1].datos[parametro2].Genero;
        document.getElementById('foto').value = categorias[parametro1].datos[parametro2].Foto;
        document.getElementById('usuario').value = categorias[parametro1].datos[parametro2].Usuario;
        document.getElementById('contraseña').value = categorias[parametro1].datos[parametro2].Contraseña;
}

/*------------------- Esta funcion sirve para capturar los datos y guardarlos --------------------*/
function modificarlocal(){
  let guardarusu = {
        Nombre:document.getElementById('nombre').value,
        Apellido:document.getElementById('apellido').value,
        Edad:document.getElementById('edad').value,
        Pais:document.getElementById('pais').value,
        Ciudad:document.getElementById('ciudad').value,
        Genero:document.getElementById('genero').value,
        Foto:document.getElementById('foto').value,
        Usuario:document.getElementById('usuario').value,
        Contraseña:document.getElementById('contraseña').value
  };
  categorias[parametro1].datos[parametro2].Nombre = guardarusu.Nombre;
  categorias[parametro1].datos[parametro2].Apellido = guardarusu.Apellido;
  categorias[parametro1].datos[parametro2].Edad = guardarusu.Edad;
  categorias[parametro1].datos[parametro2].Pais = guardarusu.Pais;
  categorias[parametro1].datos[parametro2].Ciudad = guardarusu.Ciudad;
  categorias[parametro1].datos[parametro2].Genero = guardarusu.Genero;
  categorias[parametro1].datos[parametro2].Foto = guardarusu.Foto;
  categorias[parametro1].datos[parametro2].Usuario = guardarusu.Usuario;
  categorias[parametro1].datos[parametro2].Contraseña = guardarusu.Contraseña;

  localStorage.setItem("categorias", JSON.stringify(categorias));
  generarDatos();
}

/*------------------- Esta funcion sirve para las empresas favoritas --------------------*/
function favoritas(){
  let empresaFavo = {
       Empresa:categorias[apendice].datos[arregloProduc].Empresa,
       Logotipo:categorias[apendice].datos[arregloProduc].Logotipo,
       Descripcion:'Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.'
      }
      categorias[parametro1].datos[parametro2].EmpresasFavoritas.push(empresaFavo);
      localStorage.setItem('categorias',JSON.stringify(categorias));
}

/*------------------- Esta funcion sirve para ver los diferentes perfiles de las empresas --------------------*/
function perfilEmpresa(){
  let salirD = 2;
  document.getElementById("contenedor-dropdown").innerHTML = '';
  document.getElementById("contenedor-dropdown").innerHTML += 
  `<h1>Perfiles de Empresas <button class="btn btn-outline-success my-2 my-sm-0" id="" type="submit" href="" onclick="salirDropdown(${salirD})">Salir</button></h1>
   <p><a id="favo" style="display: none; class="btn btn-secondary" href="#" role="button" onclick="favoritas()">Agregar Favoritos &raquo;</a></p>
   <div class="row" id="row-crear-cuenta"></div>
  `;
  document.getElementById("row-crear-cuenta").innerHTML = '';
    for(let i =0; i<categorias[apendice].datos.length;i++){
        const empresa = categorias[apendice].datos[i];
        document.getElementById("row-crear-cuenta").innerHTML += 
        `<div class="col-lg-4 col-md-6 col-sm-6 col-12" id="perfilEmpre${i}" style="display: block;">
         <img src="${empresa.Logotipo}" class="card-img-top" alt="...">
         <h2>${empresa.Empresa}</h2>
         <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
         <p><a id="revisar${i}" style="display: block; class="btn btn-secondary" href="#" role="button" onclick="revisarPerfil(${i})">Revisar &raquo;</a></p>
         <button id="volver${i}" style="display: none; class="btn btn-outline-success my-2 my-sm-0" id="" type="submit" href="index.html" onclick="perfilEmpresa()">Volver</button>
         </div>
        `;
        numEmpresas = i;
    }
  document.getElementById("bienvenida").style.display = 'none';
  document.getElementById("contenedor-dropdown").style.display = 'block';
  document.getElementById("contenedor-preferencias").style.display = 'none';
}

/*------------------- Esta funcion sirve para entrar a cada una empresas y ver los productos --------------------*/
function revisarPerfil(valor){
      for(let i=0;i<numEmpresas+1;i++){
        if(valor == i){
          document.getElementById('favo').style.display = 'block';
          document.getElementById('perfilEmpre'+i).style.display = 'block';
          document.getElementById('revisar'+i).style.display = 'none';
          document.getElementById('volver'+i).style.display = 'block';
          document.getElementById("contenedor-dropdown").innerHTML += `<div class="row" id="productos-empre"></div>`;
          document.getElementById("productos-empre").innerHTML = '';
        for(let j=0;j<categorias[apendice].datos[valor].Productos.length;j++){
          const produ = categorias[apendice].datos[valor].Productos[j];
          arregloProduc = valor;
          document.getElementById("productos-empre").innerHTML += 
          `  <div class="col-lg-4 col-md-6 col-sm-6 col-12" id="producto${j}" style="display: block;">
             <img src="${produ.imagen}" class="card-img-top" alt="...">
             <h2>${produ.NombreProducto}</h2>
             <p>Descripcion: <br>${produ.Descripcion}</p>
             <p>Precio: Lps.${produ.Precio}</p>
             <p>Precio en Promocion: Lps.${produ.PrecioPromocion}</p>
             <p>Promocion: ${produ.Promocion}</p>
             <p><a class="btn btn-secondary" href="#" role="button" onclick="opcionesProductos(${j})" id="mas${j}" style="display: block;">Mas &raquo;</a></p>
             <p><a class="btn btn-secondary" href="#" role="button" onclick="volverProdu(${valor})" id="vol${j}" style="display: none;">Volver &raquo;</a></p>
             <p><a class="btn btn-secondary" href="#" role="button" onclick="promoFavo()" id="favorito${j}" style="display: none;">Agregar a Favoritos &raquo;</a></p>
             <p><a class="btn btn-secondary" href="#" role="button" onclick="" id="comprar${j}" style="display: none;">Agregar al Carrito &raquo;</a></p>
             </div>
          `;
          numProdu = j;
  
         }
        }else{
          document.getElementById('perfilEmpre'+i).style.display = 'none';
        }
      }
}

/*------------------- Esta funcion sirve para las promociones favoritas --------------------*/
function promoFavo(){
  let promofavo = {
    imagen:categorias[apendice].datos[arregloProduc].Productos[comentApendice].imagen,
    NombreProducto:categorias[apendice].datos[arregloProduc].Productos[comentApendice].NombreProducto,
    Descripcion:categorias[apendice].datos[arregloProduc].Productos[comentApendice].Descripcion,
    Precio:categorias[apendice].datos[arregloProduc].Productos[comentApendice].Precio,
    PrecioPromocion:categorias[apendice].datos[arregloProduc].Productos[comentApendice].PrecioPromocion,
    Promocion:categorias[apendice].datos[arregloProduc].Productos[comentApendice].Promocion,
   }
   categorias[parametro1].datos[parametro2].PromocionesFavoritas.push(promofavo);
   localStorage.setItem('categorias',JSON.stringify(categorias));
  
}

/*------------------- Esta funcion sirve para la activacion de los diferentes botones en los productos --------------------*/
function opcionesProductos(valor){
       for(let i=0;i<numProdu+1;i++){
         if(valor == i){
          document.getElementById('favo').style.display = 'none';
          document.getElementById('producto'+i).style.display = 'block';
          document.getElementById('mas'+i).style.display = 'none';
          document.getElementById('vol'+i).style.display = 'block';
          document.getElementById('favorito'+i).style.display = 'block';
          document.getElementById('comprar'+i).style.display = 'block';
          document.getElementById('volver'+arregloProduc).style.display = 'none';
         }else{
          document.getElementById('producto'+i).style.display = 'none';
         }
       }
       Comentarios(valor);
}

/*------------------- Esta funcion sirve para los comentarios --------------------*/
function Comentarios(jpro){
  document.getElementById("contenedor-dropdown").innerHTML += 
  `<div id="comments-container" class="comments-container">
      <h1>Comentarios<a href="">www.RapidoVentas.com </a></h1>
      <p class="comment-form-comment"><textarea id="comment" name="comment" cols="45" rows="8" maxlength="65525" required="required"></textarea>
      <p><a class="btn btn-secondary" href="#" role="button" onclick="comentar()" id="" style="display: block;">Comentar &raquo;</a></p>
      </p>
      <ul id="comments-list" class="comments-list">
      </ul>
  </div>`;
  document.getElementById("comments-list").innerHTML = '';
        for(let i=0;i<categorias[apendice].datos[arregloProduc].Productos[jpro].ComentarioP.length;i++){
          const comentario = categorias[apendice].datos[arregloProduc].Productos[jpro].ComentarioP[i];
          comentApendice = jpro;
          comentPro = i;
          document.getElementById("comments-list").innerHTML += 
          `
          <li id="lista_comentarios">
          <div class="comment-main-level">
            <!-- Avatar -->
            <div class="comment-avatar"><img src="${comentario.imagenC}" alt=""></div>
            <!-- Contenedor Comentario -->
            <div class="comment-box">
              <div class="comment-head">
                <h6 class="comment-name by-author"><a href="">${comentario.NombreComentario} ${comentario.ApellidoComentario}</a></h6>
                <span>hace ${comentario.Tiempo}min</span>
                <i class="fas fa-reply"></i>
                <i class="fas fa-heart"></i>
              </div>
              <div class="comment-content">
              ${comentario.Principal}
              </div>
              <a class="btn btn-secondary" href="#" role="button" onclick="activarRespuesta()" id="responder2" style="display: block;">Responder &raquo;</a>
              <p style="display: none;" class="comment-form-comment"><textarea id="comment-resp" name="comment" cols="45" rows="8" maxlength="65525" required="required"></textarea>
              <a class="btn btn-secondary" href="#" role="button" onclick="respuestaCom()" id="respuesta" style="display: none;">Comentar &raquo;</a>
            </div>
          </div>
          </li>
          `;
                  for(let j=0;j<comentario.ComentarioS.length;j++){
                      comentarioS = comentario.ComentarioS[j];
                      document.getElementById("lista_comentarios").innerHTML += 
                              `
                               <!-- Respuestas de los comentarios -->
				                        <ul class="comments-list reply-list">  
					                      <li>
				                      	<!-- Avatar -->
				                        <div class="comment-avatar"><img src="${comentarioS.imagenC}" alt=""></div>
					                      <!-- Contenedor Comentario -->
					                        <div class="comment-box">
						                    <div class="comment-head">
						     	              <h6 class="comment-name"><a href="">${comentarioS.NombreComentarioS} ${comentarioS.ApellidoComentarioS}</a></h6>
							                  <span>hace ${comentarioS.Tiempo}min</span>
						                   	<i class="fas fa-reply"></i>
							                  <i class="fas fa-heart"></i>
						                    </div>
                                <div class="comment-content">
                                    ${comentarioS.Secundario}
                                </div>
                                </div>
			                          </li>
			                        	</ul>
                               `;


                  }
        }
  

}

/*------------------- Esta funcion sirve para activar los botones y la caja de texto y dar respuesta a los comentarios --------------------*/
function activarRespuesta(){
  document.getElementById('responder2').style.display = 'none';
  document.getElementById('comment-resp').style.display = 'block';
  document.getElementById('respuesta').style.display = 'block';
}

/*------------------- Esta funcion sirve para los comentarios principales --------------------*/
function comentar(){
      let comentarP = {
        NombreComentario:categorias[parametro1].datos[parametro2].Nombre,
        ApellidoComentario:categorias[parametro1].datos[parametro2].Apellido,
        imagenC:categorias[parametro1].datos[parametro2].Foto,
        Tiempo:1, 
        Principal:document.getElementById('comment').value,
        ComentarioS:[]
      }
      categorias[apendice].datos[arregloProduc].Productos[comentApendice].ComentarioP.push(comentarP);
      localStorage.setItem('categorias',JSON.stringify(categorias));
      Comentarios(comentApendice);
}


/*------------------- Esta funcion sirve para las respuestas a los comentarios principales --------------------*/
function respuestaCom(){
               let comentarP = {
                   NombreComentario:categorias[parametro1].datos[parametro2].Nombre,
                   ApellidoComentario:categorias[parametro1].datos[parametro2].Apellido,
                   imagenC:categorias[parametro1].datos[parametro2].Foto,
                   Tiempo:1, 
                   Principal:document.getElementById('comment-resp').value,
                   ComentarioS:[]
                }
            categorias[apendice].datos[arregloProduc].Productos[comentApendice].ComentarioP[comentPro].ComentarioS.push(comentarP);
            localStorage.setItem('categorias',JSON.stringify(categorias));
            document.getElementById('responder2').style.display = 'block';
            document.getElementById('comment-resp').style.display = 'none';
            document.getElementById('respuesta').style.display = 'none';
            Comentarios(comentApendice);
}

/*------------------- Esta funcion sirve para regresar y ver todos los productos de una empresa --------------------*/
function volverProdu(valor){ 
      document.getElementById('favo').style.display = 'none';
      document.getElementById("comments-container").innerHTML = '';
      revisarPerfil(valor);
}

/*------------------- Esta funcion sirve para ver las promociones favoritas en la opcion del dropdown --------------------*/
function proFavoritas(){
  let salirD = 3;
  document.getElementById("contenedor-dropdown").innerHTML = '';
  document.getElementById("contenedor-dropdown").innerHTML += 
  `<h1>Promociones Favoritas <button class="btn btn-outline-success my-2 my-sm-0" id="" type="submit" href="index.html" onclick="salirDropdown(${salirD})">Salir</button></h1>
  `;
  document.getElementById("bienvenida").style.display = 'none';
  document.getElementById("contenedor-dropdown").style.display = 'block';
  document.getElementById("contenedor-preferencias").style.display = 'none';
}

/*------------------- Esta funcion sirve para ver las promociones atraves de google --------------------*/
function proGoogle(){
  let salirD = 4;
  document.getElementById("contenedor-dropdown").innerHTML = '';
  document.getElementById("contenedor-dropdown").innerHTML += 
  `<h1>Promociones GoogleMaps <button class="btn btn-outline-success my-2 my-sm-0" id="" type="submit" href="index.html" onclick="salirDropdown(${salirD})">Salir</button></h1>
  `;
  document.getElementById("bienvenida").style.display = 'none';
  document.getElementById("contenedor-dropdown").style.display = 'block';
  document.getElementById("contenedor-preferencias").style.display = 'none';
}

/*------------------- Esta funcion sirve para salir de las opciones del dropdonw --------------------*/
function salirDropdown(salirD){
    let option = [{pri:1,seg:2,ter:3,cuar:4}];
    if(salirD == option[0].pri){
      document.getElementById("bienvenida").style.display = 'block';
      document.getElementById("contenedor-dropdown").style.display = 'none';
      document.getElementById("contenedor-preferencias").style.display = 'block';
    }
    else if(salirD == option[0].seg){
      document.getElementById("bienvenida").style.display = 'block';
      document.getElementById("contenedor-dropdown").style.display = 'none';
      document.getElementById("contenedor-preferencias").style.display = 'block';
    }
    else if(salirD == option[0].ter){
      document.getElementById("bienvenida").style.display = 'block';
      document.getElementById("contenedor-dropdown").style.display = 'none';
      document.getElementById("contenedor-preferencias").style.display = 'block';
    }
    else if(salirD == option[0].cuar){
      document.getElementById("bienvenida").style.display = 'block';
      document.getElementById("contenedor-dropdown").style.display = 'none';
      document.getElementById("contenedor-preferencias").style.display = 'block';
    }
}

/*------------------- Esta funcion sirve para salir de la cuenta cliente --------------------*/
function cerrarCuenta(){
    location.href = "index.html";
    localStorage.removeItem('datosuser');
}

/*------------------- Esta funcion sirve para generar el boton de cerrar la cuenta --------------------*/
function generarBotonsalir(){
    document.getElementById("form-clientes").innerHTML = '';
    document.getElementById("form-clientes").innerHTML += 
    `
        <button class="btn btn-outline-success mr-sm-2" id="preventbutton" type="submit" onclick="">Carrito</button>
        <input class="form-control mr-sm-2" type="text" placeholder="Buscador" aria-label="Search">
        <button class="btn btn-outline-success my-2 my-sm-0" id="preventbutton" type="submit" href="index.html" onclick="cerrarCuenta()">Cerrar Cuenta</button>
    `;
  }

  generarBotonsalir();

  /*------------------- Esta funcion sirve para descactivar el refresh en los botones --------------------*/
  document.getElementById("preventbutton").addEventListener("click", function(event){
    event.preventDefault()
  });