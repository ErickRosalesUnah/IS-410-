function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
      var c = ca[i];
      while (c.charAt(0)==' ') c = c.substring(1,c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}
var parametro1 = getCookie("codigoUsuario") - 1;
var pri;
var arregloProduc;

var empresas = [];
const url = '../../Proyecto/backend/api/empresas.php';
function obtenerEmpresas(){
    axios({
        method:'GET',
        url:url,
        responseType:'json'
    }).then(res=>{
        console.log(res.data);
        this.empresas = res.data;
        console.log(parametro1);
    }).catch(error=>{
        console.error(error);
    });
}
obtenerEmpresas();

var usuarios = [];
const url1 = '../../Proyecto/backend/api/usuarios.php';
function obtenerUsuarios(){
    axios({
        method:'GET',
        url:url1,
        responseType:'json'
    }).then(res=>{
        console.log(res.data);
        this.usuarios = res.data;
        generarDatos();
    }).catch(error=>{
        console.error(error);
    });
}
obtenerUsuarios();

var comentariosJSON = [];
const url2 = '../../Proyecto/backend/api/comentarios.php';
function obtenerCometarios(){
    axios({
        method:'GET',
        url:url2,
        responseType:'json'
    }).then(res=>{
        console.log(res.data);
        this.comentariosJSON = res.data;
    }).catch(error=>{
        console.error(error);
    });
}
obtenerCometarios();

var produComp = [];
const url3 = '../../Proyecto/backend/api/productosComprados.php';
function obtenerProductosComprados(){
    axios({
        method:'GET',
        url:url3,
        responseType:'json'
    }).then(res=>{
        console.log(res.data);
        this.produComp = res.data;
    }).catch(error=>{
        console.error(error);
    });
}
obtenerProductosComprados();


/*------------------- Esta funcion sirve para dar la bienvenida --------------------*/
function generarDatos(){
     document.getElementById("bienvenida").innerHTML = '';
     document.getElementById("bienvenida").innerHTML +=
     `<h1 class="display-3">Bienvenid@, ${usuarios[parametro1].Nombre} ${usuarios[parametro1].Apellido}!</h1>
      <img src="${usuarios[parametro1].Foto}" width="50" height="200" class="card-img-top" alt="...">
     `;
     document.getElementById("ContenedorCliente").innerHTML = '';
}

/*------------------- Esta funcion sirve para generar el boton de cerrar la cuenta --------------------*/
function generarBotonsalir(){
  document.getElementById("form-clientes").innerHTML = '';
  document.getElementById("form-clientes").innerHTML += 
  `   <button class="btn btn-outline-success mr-sm-2" id="botonOrdenes" data-toggle="modal" data-target="#CarritoModal" type="submit" onclick="verOrdenes()">Carrito</button>
      <input class="form-control mr-sm-2" type="text" placeholder="Buscador" aria-label="Search">
      <button class="btn btn-primary my-2 my-sm-0" type="button" onclick="cerrar()">Cerrar</button>  
  `;
}
generarBotonsalir();

function cerrar(){
  window.location.href = "logoutUsuario.php"; 
}

/*------------------- Esta funcion sirve para descactivar el refresh en los botones --------------------*/
document.getElementById("botonOrdenes").addEventListener("click", function(event){
  event.preventDefault()
});

/*------------------- Esta funcion sirve para dar funcion al dorpdown con la opcion modificar perfil --------------------*/
function cambiarDatos(){
    document.getElementById("bienvenida").innerHTML = '';
    document.getElementById("bienvenida").innerHTML += 
           `<h1 class="display-3">Bienvenido ${usuarios[parametro1].Nombre}!</h1>
            <h3>¿Que Datos Deseas Cambiar<h3>
            `;
     document.getElementById("ContenedorCliente").innerHTML = '';
     document.getElementById("ContenedorCliente").innerHTML += 
     `<div>
      <h1>Cambiar Datos <button class="btn btn-outline-success my-2 my-sm-0" id="" type="submit" href="index.html" onclick="generarDatos()">Salir</button></h1>
                 Nombre:<input value="" id="nombre" type="text" placeholder="Usuario"><br>
                 Apellido:<input value="" id="apellido" type="text" placeholder="Usuario"><br>
                 Correo Electronico:<input value="" id="correo" type="text" placeholder="Correo"><br>
                 Edad:<input id="edad" type="number" name="numero" value="0" min="0" max="100" step="1"><br>
                 Pais:<input value="" id="pais" type="text" placeholder="Usuario"><br>
                 Ciudad:<input value="" id="ciudad" type="text" placeholder="Usuario"><br>
                 Genero:<input value="" id="genero" type="text" placeholder="Usuario"><br>
                 Foto:<input value="" id="foto" type="text" placeholder="Usuario"><br>
                 Usuario:<input value="" id="usuario" type="text" placeholder="Usuario"><br>
                 Contraseña:<input value="" id="contraseña" type="password" placeholder="Usuario"><br>
      <button class="btn btn-outline-success my-2 my-sm-0" id="" type="submit" href="index.html" onclick="modificarlocal()">Guardar</button>
      </div>
      `;
        document.getElementById('nombre').value = usuarios[parametro1].Nombre;
        document.getElementById('apellido').value = usuarios[parametro1].Apellido;
        document.getElementById('correo').value = usuarios[parametro1].Correo;
        document.getElementById('edad').value = usuarios[parametro1].Edad;
        document.getElementById('pais').value = usuarios[parametro1].Pais;
        document.getElementById('ciudad').value = usuarios[parametro1].Ciudad;
        document.getElementById('genero').value = usuarios[parametro1].Genero;
        document.getElementById('foto').value = usuarios[parametro1].Foto;
        document.getElementById('usuario').value = usuarios[parametro1].Usuario;
        document.getElementById('contraseña').value = usuarios[parametro1].Contrasena;
}

/*------------------- Esta funcion sirve para capturar los datos y guardarlos --------------------*/
function modificarlocal(){
  let guardarusu = {
        codigoUsuario: usuarios[parametro1].codigoUsuario,
        Nombre:document.getElementById('nombre').value,
        Apellido:document.getElementById('apellido').value,
        Correo:document.getElementById('correo').value,
        Edad:document.getElementById('edad').value,
        Pais:document.getElementById('pais').value,
        Ciudad:document.getElementById('ciudad').value,
        Genero:document.getElementById('genero').value,
        Foto:document.getElementById('foto').value,
        Usuario:document.getElementById('usuario').value,
        Contrasena:document.getElementById('contraseña').value,
        PromocionesFavoritas:usuarios[parametro1].PromocionesFavoritas,
        EmpresasFavoritas:usuarios[parametro1].EmpresasFavoritas,
        Compras:usuarios[parametro1].Compras
  };
     axios({
       method:'PUT',
       url:url1 + `?id=${parametro1}`,
       responseType:'json',
       data:guardarusu
     }).then(res=>{
       console.log(res.data);
       obtenerUsuarios();
     }).catch(error=>{
       console.error(error);
     });
     generarDatos();
}

/*------------------- Esta funcion sirve para ver los diferentes perfiles de las empresas --------------------*/
function perfilEmpresa(){
  document.getElementById("bienvenida").innerHTML = '';
  document.getElementById("bienvenida").innerHTML += 
           `<h1 class="display-3">Bienvenido ${usuarios[parametro1].Nombre}!</h1>
            <h3>Estas son las Empresas<h3>
            `;
  document.getElementById("ContenedorCliente").innerHTML = '';
  document.getElementById("ContenedorCliente").innerHTML += 
  `<h1>Perfiles de Empresas <button class="btn btn-outline-success my-2 my-sm-0" id="" type="submit" href="" onclick="generarDatos()">Salir</button></h1>
   <p><a id="favo" style="display: none; class="btn btn-secondary" href="#" role="button" onclick="">Agregar Favoritos &raquo;</a></p>
   <div class="row" id="row-crear-cuenta"></div>
  `;
  document.getElementById("row-crear-cuenta").innerHTML = '';
    for(let i =0; i<empresas.length;i++){
        const empresa = empresas[i];
        document.getElementById("row-crear-cuenta").innerHTML += 
        `<div class="col-lg-4 col-md-6 col-sm-6 col-12" id="perfilEmpre${i}" style="display: block;">
         <img src="${empresa.Logotipo}" class="card-img-top" alt="...">
         <h2>${empresa.Empresa}</h2>
         <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
         <p><a id="revisar${i}" style="display: block; class="btn btn-secondary" href="#" role="button" onclick="revisarPerfil(${i})">Revisar &raquo;</a></p>
         <button id="volver${i}" style="display: none; class="btn btn-outline-success my-2 my-sm-0" id="" type="submit" onclick="perfilEmpresa()">Volver</button>
         </div>
        `;
        numEmpresas = i;
    }
}

/*------------------- Esta funcion sirve para entrar a cada una de las empresas y ver los productos --------------------*/
function revisarPerfil(valor){
      document.getElementById("bienvenida").innerHTML = '';
      document.getElementById("bienvenida").innerHTML += 
               `<h1 class="display-3">Bienvenido ${usuarios[parametro1].Nombre}!</h1>
                <h3>Estas en la Empresa !!${empresas[valor].Empresa}!!<h3>
                `;
      document.getElementById("ContenedorCliente").innerHTML = '';
      for(let j=0;j<empresas[valor].Productos.length;j++){
          const produ = empresas[valor].Productos[j];
          arregloProduc = valor;
          document.getElementById("ContenedorCliente").innerHTML += 
          `  <div class="col-lg-4 col-md-6 col-sm-6 col-12" id="producto${j}" style="display: block;">
             <img src="${produ.imagen}" class="card-img-top" alt="...">
             <h2>${produ.NombreProducto}</h2>
             <p>Descripcion: <br>${produ.Descripcion}</p>
             <p>Precio: Lps.${produ.Precio}</p>
             <p>Precio en Promocion: Lps.${produ.PrecioPromocion}</p>
             <p>Promocion: ${produ.Promocion}</p>
             <p><a class="btn btn-secondary" role="button" onclick="opcionesProductos(${j})" id="mas${j}">Mas &raquo;</a></p>
             <p><a class="btn btn-secondary" role="button" onclick="perfilEmpresa()" id="vol${j}">Volver &raquo;</a></p>
             </div>
          `;
          numProdu = j;
  
         }
}

/*------------------- Esta funcion sirve para las promociones favoritas --------------------*/
function promoFavo(seg){
  let promofavo = {
    codigoEmpresa: empresas[arregloProduc].codigoEmpresa,
    Empresa: empresas[arregloProduc].Empresa,
    codigoProducto: empresas[arregloProduc].Productos[seg].codigoProducto,
    imagen:empresas[arregloProduc].Productos[seg].imagen,
    NombreProducto:empresas[arregloProduc].Productos[seg].NombreProducto,
    Descripcion:empresas[arregloProduc].Productos[seg].Descripcion,
    Precio:empresas[arregloProduc].Productos[seg].Precio,
    PrecioPromocion:empresas[arregloProduc].Productos[seg].PrecioPromocion,
    Promocion:empresas[arregloProduc].Productos[seg].Promocion
   };

   usuarios[parametro1].PromocionesFavoritas.push(promofavo);

   let guardarusu = {
    codigoUsuario: usuarios[parametro1].codigoUsuario,
    Nombre:usuarios[parametro1].Nombre,
    Apellido:usuarios[parametro1].Apellido,
    Correo:usuarios[parametro1].Correo,
    Edad:usuarios[parametro1].Edad,
    Pais:usuarios[parametro1].Pais,
    Ciudad:usuarios[parametro1].Ciudad,
    Genero:usuarios[parametro1].Genero,
    Foto:usuarios[parametro1].Foto,
    Usuario:usuarios[parametro1].Usuario,
    Contrasena:usuarios[parametro1].Contrasena,
    PromocionesFavoritas:usuarios[parametro1].PromocionesFavoritas,
    EmpresasFavoritas:usuarios[parametro1].EmpresasFavoritas,
    Compras:usuarios[parametro1].Compras
};
 axios({
   method:'PUT',
   url:url1 + `?id=${parametro1}`,
   responseType:'json',
   data:guardarusu
 }).then(res=>{
   console.log(res.data);
 }).catch(error=>{
   console.error(error);
 });
  
}

/*------------------- Esta funcion sirve para la activacion de los diferentes botones en los productos --------------------*/
function opcionesProductos(valor){
  const np = valor;
  productoSeleccionado = empresas[arregloProduc].Productos[valor];
  document.getElementById("bienvenida").innerHTML = '';
  document.getElementById("bienvenida").innerHTML += 
           `<h1 class="display-3">Bienvenido ${usuarios[parametro1].Nombre}!</h1>
            <h3>Estas en la Empresa !!${empresas[arregloProduc].Empresa}!! viendo el Producto <h3>
            `;
  document.getElementById("ContenedorCliente").innerHTML = '';
  document.getElementById("ContenedorCliente").innerHTML += 
  `<div class="col-lg-4 col-md-6 col-sm-6 col-12" style="display: block;">
      <img src="${productoSeleccionado.imagen}" class="card-img-top" alt="...">
      <h2>${productoSeleccionado.NombreProducto}</h2>
      <p>Descripcion: <br>${productoSeleccionado.Descripcion}</p>
      <p>Precio: Lps.${productoSeleccionado.Precio}</p>
      <p>Precio en Promocion: Lps.${productoSeleccionado.PrecioPromocion}</p>
      <p>Promocion: ${productoSeleccionado.Promocion}</p>
      <p><a class="btn btn-secondary" role="button" onclick="promoFavo(${np})"">Agregar a Favoritos &raquo;</a></p>
      <p><a class="btn btn-secondary" role="button" onclick="agregarCarrito(${np})" id="comprar${np}">Agregar al Carrito &raquo;</a></p>
      <p><a class="btn btn-secondary" role="button" onclick="revisarPerfil(${arregloProduc})">Volver &raquo;</a></p>
   </div>
  `;
  Comentarios(np);
}

/*------------------- Esta funcion sirve para los comentarios --------------------*/
function Comentarios(valor){
  let comen = valor;
  let historialComentarios = comentariosJSON.filter(item=>{
    return item.codigoEmpresa == empresas[arregloProduc].codigoEmpresa && item.codigoProducto == empresas[parametro1].Productos[valor].codigoProducto;
  });
  console.log(historialComentarios);
  document.getElementById("ContenedorCliente").innerHTML += 
  `<div id="comments-container" class="comments-container">
      <h1>Comentarios<a href="">www.RapidoVentas.com </a></h1>
      <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="Comenta" id="comentario">
          <div class="input-group-append">
              <button type="button" onclick="comentar(${comen})" class="btn btn-outline-danger"><i class="far fa-paper-plane"></i></button>
          </div>
      </div>
      </p>
      <ul id="comments-list" class="comments-list">
      </ul>
  </div>`;
          document.getElementById("comments-list").innerHTML = '';
          for(let i=0;i<historialComentarios.length;i++){
            const comment = historialComentarios[i];
            document.getElementById("comments-list").innerHTML += 
            `<li id="lista_comentarios">
                <div class="comment-main-level">
                  <!-- Avatar -->
                  <div class="comment-avatar"><img src="${comment.imagenC}" alt=""></div>
                  <!-- Contenedor Comentario -->
                  <div class="comment-box">
                    <div class="comment-head">
                      <h6 class="comment-name by-author"><a href="">${comment.NombreComentario} ${comment.ApellidoComentario}</a></h6>
                      <span>hace ${comment.Tiempo}min</span>
                      <i class="fas fa-reply"></i>
                      <i class="fas fa-heart"></i>
                    </div>
                    <div class="comment-content">
                    ${comment.Principal}
                    </div>
                  </div>
                </div>
            </li>
            `;
          }

}

function comentar(valor){
  let historialComentarios = comentariosJSON.filter(item=>{
    return item.codigoEmpresa == empresas[arregloProduc].codigoEmpresa && item.codigoProducto == empresas[parametro1].Productos[valor].codigoProducto;
  });

  axios({
    url:'../backend/api/comentarios.php',
    method:'post',
    responseType: 'json',
    data:{
        codigoEmpresa: empresas[arregloProduc].codigoEmpresa,
        codigoProducto: empresas[arregloProduc].Productos[valor].codigoProducto,
        codigoComentario: historialComentarios.length + 1,
        NombreComentario: usuarios[parametro1].Nombre,
        ApellidoComentario: usuarios[parametro1].Apellido,
        imagenC: usuarios[parametro1].Foto,
        Tiempo: 1,
        Principal: document.getElementById('comentario').value,
        ComentarioS: []
    }
    }).then(res=>{
        console.log(res);
        obtenerCometarios();
        document.getElementById('comments-list').innerHTML +=
                 `<li id="lista_comentarios">
                 <div class="comment-main-level">
                   <!-- Avatar -->
                   <div class="comment-avatar"><img src="${usuarios[parametro1].Foto}" alt=""></div>
                   <!-- Contenedor Comentario -->
                   <div class="comment-box">
                     <div class="comment-head">
                       <h6 class="comment-name by-author"><a href="">${usuarios[parametro1].Nombre} ${usuarios[parametro1].Apellido}</a></h6>
                       <span>hace ${1}min</span>
                       <i class="fas fa-reply"></i>
                       <i class="fas fa-heart"></i>
                     </div>
                     <div class="comment-content">
                     ${document.getElementById('comentario').value}
                     </div>
                   </div>
                 </div>
                </li>`;
    }).catch(error=>{
        console.error(error);
    }); 
}

/*------------------- Esta funcion sirve para ver las promociones favoritas en la opcion del dropdown --------------------*/
function proFavoritas(){
    if(usuarios[parametro1].PromocionesFavoritas.length == ""){
      document.getElementById("bienvenida").innerHTML = '';
      document.getElementById("bienvenida").innerHTML += 
             `<h1 class="display-3">Bienvenido ${usuarios[parametro1].Nombre}!</h1>
              <h3>No tienes Promociones Favoritas<h3>
             `;
      document.getElementById("ContenedorCliente").innerHTML = '';
    }else{
      document.getElementById("bienvenida").innerHTML = '';
      document.getElementById("bienvenida").innerHTML += 
             `<h1 class="display-3">Bienvenido ${usuarios[parametro1].Nombre}!</h1>
              <h3>Estas son tus Promociones Favoritas<h3>
             `;
      document.getElementById("ContenedorCliente").innerHTML = '';
      for(let i=0; i<usuarios[parametro1].PromocionesFavoritas.length; i++){
       const usuariosFavo = usuarios[parametro1].PromocionesFavoritas[i];
       console.log(usuariosFavo);
       document.getElementById("ContenedorCliente").innerHTML += 
       `<div class="col-lg-4 col-md-6 col-sm-6 col-12" id="producto${i}">
           <img src="${usuariosFavo.imagen}" class="card-img-top" alt="...">
           <h2>${usuariosFavo.NombreProducto}</h2>
           <p>${usuariosFavo.Descripcion}</p>
           <p>Precio: Lps.${usuariosFavo.Precio}</p>
           <p>Precio de Promocion: Lps.${usuariosFavo.PrecioPromocion}</p>
           <p>Promocion:Descuento de ${usuariosFavo.Promocion}</p>
           <p><a class="btn btn-secondary" onclick="eliminarProFavo(${i})" role="button">Eliminar Favoritos</a></p>
        </div>
       `;
      }
    }
}

/*------------------- Esta funcion sirve para eliminar promociones favoritas --------------------*/
function eliminarProFavo(seg){
  
  usuarios[parametro1].PromocionesFavoritas.splice(seg,1);

  let guardarusu = {
    codigoUsuario: usuarios[parametro1].codigoUsuario,
    Nombre:usuarios[parametro1].Nombre,
    Apellido:usuarios[parametro1].Apellido,
    Correo:usuarios[parametro1].Correo,
    Edad:usuarios[parametro1].Edad,
    Pais:usuarios[parametro1].Pais,
    Ciudad:usuarios[parametro1].Ciudad,
    Genero:usuarios[parametro1].Genero,
    Foto:usuarios[parametro1].Foto,
    Usuario:usuarios[parametro1].Usuario,
    Contrasena:usuarios[parametro1].Contrasena,
    PromocionesFavoritas:usuarios[parametro1].PromocionesFavoritas,
    EmpresasFavoritas:usuarios[parametro1].EmpresasFavoritas,
    Compras:usuarios[parametro1].Compras
};
 axios({
   method:'PUT',
   url:url1 + `?id=${parametro1}`,
   responseType:'json',
   data:guardarusu
 }).then(res=>{
   console.log(res.data);
   proFavoritas();
 }).catch(error=>{
   console.error(error);
 });
}

/*------------------- Esta funcion sirve para agregar elementos al localStorage del carrito --------------------*/
function agregarCarrito(seg){
  let elementoCompra = {
    codigoUsuario: usuarios[parametro1].codigoUsuario,
    codigoEmpresa: empresas[arregloProduc].codigoEmpresa,
    codigoProducto: empresas[arregloProduc].Productos[seg].codigoProducto,
    imagen:empresas[arregloProduc].Productos[seg].imagen,
    NombreProducto:empresas[arregloProduc].Productos[seg].NombreProducto,
    Descripcion:empresas[arregloProduc].Productos[seg].Descripcion,
    Precio:empresas[arregloProduc].Productos[seg].Precio,
    PrecioPromocion:empresas[arregloProduc].Productos[seg].PrecioPromocion,
    Promocion:empresas[arregloProduc].Productos[seg].Promocion
   };

   usuarios[parametro1].Compras.push(elementoCompra);

   let guardarusu = {
    codigoUsuario: usuarios[parametro1].codigoUsuario,
    Nombre:usuarios[parametro1].Nombre,
    Apellido:usuarios[parametro1].Apellido,
    Correo:usuarios[parametro1].Correo,
    Edad:usuarios[parametro1].Edad,
    Pais:usuarios[parametro1].Pais,
    Ciudad:usuarios[parametro1].Ciudad,
    Genero:usuarios[parametro1].Genero,
    Foto:usuarios[parametro1].Foto,
    Usuario:usuarios[parametro1].Usuario,
    Contrasena:usuarios[parametro1].Contrasena,
    PromocionesFavoritas:usuarios[parametro1].PromocionesFavoritas,
    EmpresasFavoritas:usuarios[parametro1].EmpresasFavoritas,
    Compras:usuarios[parametro1].Compras
};
 axios({
   method:'PUT',
   url:url1 + `?id=${parametro1}`,
   responseType:'json',
   data:guardarusu
 }).then(res=>{
   console.log(res.data);
 }).catch(error=>{
   console.error(error);
 });
}

/*------------------- Esta funcion sirve para ver el Carrito --------------------*/
function verOrdenes(){
  if(usuarios[parametro1].Compras.length == ""){
    document.getElementById("TituloCarrito").innerHTML = `${usuarios[parametro1].Nombre}, No tienes elementos agregados.`;
    document.getElementById("mmodal-carrito").innerHTML = '';
  }
  else{
    document.getElementById("TituloCarrito").innerHTML = `${usuarios[parametro1].Nombre}, Estas son tus ordenes.`;
    document.getElementById("mmodal-carrito").innerHTML = '';
    document.getElementById("mmodal-carrito").innerHTML += '<div class ="row" id="contenedor-empresas"> </div>';
    for(let i=0;i<usuarios[parametro1].Compras.length;i++){
        const usua = usuarios[parametro1].Compras[i];
        document.getElementById("contenedor-empresas").innerHTML += 
        `<div class="col-md-6 col-sm-6 col-12" id="contenedor-productos">
             <img src="${usua.imagen}" id="imagen-empresa">
             <p>
                <b><i>Nombre:<i></b> ${usua.NombreProducto}.<br>
                <b><i>Fecha de Compra:<i></b><select id="fecha${i}" type="text">
                          <option value="2020-01">Enero</option>
                          <option value="2020-02">Febrero</option>
                          <option value="2020-03">Marzo</option>
                          <option value="2020-04">Abril</option>
                          <option value="2020-05">Mayo</option>
                          <option value="2020-06">Junio</option>
                          <option value="2020-07">Julio</option>
                          <option value="2020-08">Agosto</option>
                          <option value="2020-09">Septiembre</option>
                          <option value="2020-10">Octubre</option>
                          <option value="2020-11">Noviembre</option>
                          <option value="2020-12">Diciembre</option>
                     </select><br>
                <b><i>Descripcion:<i></b> ${usua.Descripcion}.<br>
                <b><i>Precio:<i></b> ${usua.Precio}<br>
                <b><i>Precio Promocion:<i></b> ${usua.PrecioPromocion}<br>
                <b><i>Promocion:<i></b> Descuento del ${usua.Promocion}%<br>
             </p>
             <p><a class="btn btn-secondary" onclick="eliminarCarrito(${i})" role="button">Eliminar</a><a class="btn btn-secondary" id="compra" onclick="comprarProdu(${i})" role="button">Comprar</a></p>
        </div>
        `;
    }
  }
}

/*------------------- Esta funcion sirve para eliminar elementos del Carrito --------------------*/
function eliminarCarrito(seg){
  
  usuarios[parametro1].Compras.splice(seg,1);

  let guardarusu = {
    codigoUsuario: usuarios[parametro1].codigoUsuario,
    Nombre:usuarios[parametro1].Nombre,
    Apellido:usuarios[parametro1].Apellido,
    Correo:usuarios[parametro1].Correo,
    Edad:usuarios[parametro1].Edad,
    Pais:usuarios[parametro1].Pais,
    Ciudad:usuarios[parametro1].Ciudad,
    Genero:usuarios[parametro1].Genero,
    Foto:usuarios[parametro1].Foto,
    Usuario:usuarios[parametro1].Usuario,
    Contrasena:usuarios[parametro1].Contrasena,
    PromocionesFavoritas:usuarios[parametro1].PromocionesFavoritas,
    EmpresasFavoritas:usuarios[parametro1].EmpresasFavoritas,
    Compras:usuarios[parametro1].Compras
};
 axios({
   method:'PUT',
   url:url1 + `?id=${parametro1}`,
   responseType:'json',
   data:guardarusu
 }).then(res=>{
   console.log(res.data);
   verOrdenes();
 }).catch(error=>{
   console.error(error);
 });
}

/*------------------- Esta funcion sirve para comprar elementos del Carrito --------------------*/
function comprarProdu(seg){
    let productoComprado = {
        codigoUsuario: usuarios[parametro1].Compras[seg].codigoUsuario,
        codigoEmpresa: usuarios[parametro1].Compras[seg].codigoEmpresa,
        codigoProducto: usuarios[parametro1].Compras[seg].codigoProducto,
        imagen: usuarios[parametro1].Compras[seg].imagen,
        fecha: document.getElementById('fecha'+seg).value,
        NombreProducto: usuarios[parametro1].Compras[seg].NombreProducto,
        Descripcion: usuarios[parametro1].Compras[seg].Descripcion,
        Precio: usuarios[parametro1].Compras[seg].Precio,
        PrecioPromocion: usuarios[parametro1].Compras[seg].PrecioPromocion,
        Promocion: usuarios[parametro1].Compras[seg].Promocion
    };
    axios({
      method:'PUT',
      url:url3 + `?id=${produComp.length}`,
      responseType:'json',
      data:productoComprado
    }).then(res=>{
      console.log(res.data);
      window.alert("Producto comprado con exito")
      eliminarCarrito(seg);
      obtenerProductosComprados();
    }).catch(error=>{
      console.error(error);
    });
}

/*------------------- Esta funcion sirve para ver los Productos Comprados --------------------*/
function proCompra(){
    let listaComprados = produComp.filter(item=>{
    return item.codigoUsuario == usuarios[parametro1].codigoUsuario;
  });
    if(listaComprados.length == ""){
      document.getElementById("bienvenida").innerHTML = '';
      document.getElementById("bienvenida").innerHTML += 
               `<h1 class="display-3">Bienvenido ${usuarios[parametro1].Nombre}!</h1>
                <h3>No tienes Productos Comprados<h3>
               `;
      document.getElementById("ContenedorCliente").innerHTML = '';
    }else{
      document.getElementById("bienvenida").innerHTML = '';
      document.getElementById("bienvenida").innerHTML += 
             `<h1 class="display-3">Bienvenido ${usuarios[parametro1].Nombre}!</h1>
              <h3>Estas son tus Compras<h3>
             `;
      document.getElementById("ContenedorCliente").innerHTML = '';
      for(let i=0; i<listaComprados.length; i++){
       const listcomp = listaComprados[i];
       console.log(listcomp);
       document.getElementById("ContenedorCliente").innerHTML += 
       `<div class="col-lg-4 col-md-6 col-sm-6 col-12" id="producto${i}">
           <img src="${listcomp.imagen}" class="card-img-top" alt="...">
           <div id="pdf">
              <h2>${listcomp.NombreProducto}</h2>
              <p>${listcomp.Descripcion}</p>
              <p>Precio: Lps.${listcomp.Precio}</p>
              <p>Precio de Promocion: Lps.${listcomp.PrecioPromocion}</p>
              <p>Promocion:Descuento de ${listcomp.Promocion}</p>
              </div>
           <button class="btn btn-primary my-2 my-sm-0" type="button" onclick="recibo(${i});">Imprimir Recibo</button>
        </div>
        <div id="elementH"></div>
       `;
      }
    }
}

function recibo(valor){
  console.log(valor);
  var doc = new jsPDF();
    var elementHTML = $('#pdf').html();
    var specialElementHandlers = {
        '#elementH' : function(element, renderer){
            return true;
        }
    };

    doc.fromHTML(elementHTML, 15, 15, {
        'width' : 170,
        'elementHandlers' : specialElementHandlers
    });

    //Save document PDf
    doc.save(produComp[valor].NombreProducto +'-document.pdf');
}

/*------------------- Esta funcion sirve para ver las promociones atraves de google --------------------*/
function proGoogle(){
  document.getElementById("bienvenida").innerHTML = '';
    document.getElementById("bienvenida").innerHTML += 
           `<h1 class="display-3">Bienvenido ${usuarios[parametro1].Nombre}!</h1>
            <h3>Estas son las Promos de Google<h3>
           `;
    document.getElementById("ContenedorCliente").innerHTML = '';
}