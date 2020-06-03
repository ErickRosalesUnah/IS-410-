var seleproductos;

var tipoCuentas = [];
const url = '../../Proyecto/backend/api/tipoCuentas.php';
function obtenerTipos(){
    axios({
        method:'GET',
        url:url,
        responseType:'json'
    }).then(res=>{
        console.log(res.data);
        this.tipoCuentas = res.data;
        BienvenidaCrearCuenta();
    }).catch(error=>{
        console.error(error);
    });
}
obtenerTipos();

var empresas = [];
const url2 = '../../Proyecto/backend/api/empresas.php';
function obtenerEmpresas(){
    axios({
        method:'GET',
        url:url2,
        responseType:'json'
    }).then(res=>{
        console.log(res.data);
        this.empresas = res.data;
    }).catch(error=>{
        console.error(error);
    });
}
obtenerEmpresas();

var usuarios = [];
const url3 = '../../Proyecto/backend/api/usuarios.php';
function obtenerUsuarios(){
    axios({
        method:'GET',
        url:url3,
        responseType:'json'
    }).then(res=>{
        console.log(res.data);
        this.usuarios = res.data;
    }).catch(error=>{
        console.error(error);
    });
}
obtenerUsuarios();

const url4 = '../../Proyecto/backend/api/basedatos.php';
function obtenerBasedatos(){
    axios({
        method:'GET',
        url:url4,
        responseType:'json'
    }).then(res=>{
        console.log(res.data);
        this.basedatos = res.data;
    }).catch(error=>{
        console.error(error);
    });
}
obtenerBasedatos();

//Llave para MapBox incluir siempre
mapboxgl.accessToken = 'pk.eyJ1Ijoia2Fpcm96IiwiYSI6ImNrYXdodXl5YjA2eWEzMG53cnoxc3ZhbGwifQ.Lf842_jS0uwqSKaWrjnZ-w';

/*---------- Esta funcion llena el texto de crear cuenta--------*/
function BienvenidaCrearCuenta(){
    /*---------- Añadimos elementos al div con este id--------*/
    document.getElementById("contenedor-crear-cuenta").innerHTML = '';
    document.getElementById("contenedor-crear-cuenta").innerHTML += 
                `<h1 class="display-3">Crea tu Cuenta ahora!</h1>
                 <p>Informacion sobre los beneficios de tener una cuenta....  This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</p>
                `;
    document.getElementById("row-crear-cuenta").innerHTML = '';
    for(let i =0; i<tipoCuentas.length;i++){
      const tipoCuenta = tipoCuentas[i];
        document.getElementById("row-crear-cuenta").innerHTML += 
        `<div class="col-md-6 col-sm-6 col-12">
         <img src="${tipoCuenta.foto}" class="card-img-top" alt="...">
         <h2>${tipoCuenta.tipo}</h2>
         <p>${tipoCuenta.descripcion}</p>
         <p><a class="btn btn-secondary" role="button" onclick="formulario(${i})">Crear &raquo;</a></p>
         </div>
        `;
    }
    document.getElementById("form_button").innerHTML = '';
    document.getElementById("form_button").innerHTML += 
                 `<a class="btn btn-primary btn-lg" href="index.html" onclick="">Principal</a>
                  <a class="btn btn-primary btn-lg" href="Inicio_Sesion.html" onclick="">Inicio Sesion</a>
                 `;
}

/*---------- Esta funcion llama al formulario de creacion de cuenta--------*/
function formulario(parametro){
    let usu = 0;
    let emp = 1;
    if(parametro == usu){
        document.getElementById('container').style.display = 'none';
        document.getElementById('FormularioUsuario').style.display = 'block';
        document.getElementById("FormularioUsuario").innerHTML = '';
        document.getElementById("FormularioUsuario").innerHTML += 
                 `<div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                 <img src="${tipoCuentas[parametro].foto}" class="card-img-top" alt="...">
                 <h2>${tipoCuentas[parametro].tipo}</h2>
                 Nombre:<input value="" id="nombre" type="text" placeholder="Usuario"><br>
                 Apellido:<input value="" id="apellido" type="text" placeholder="Apellido"><br>
                 Correo Electronico:<input value="" id="correo" type="text" placeholder="Correo"><br>
                 Edad:<input id="edad" type="number" name="numero" value="0" min="0" max="100" step="1"><br>
                 Pais:<input value="" id="pais" type="text" placeholder="Pais"><br>
                 Ciudad:<input value="" id="ciudad" type="text" placeholder="Ciudad"><br>
                 Genero:<select id="genero" type="text">
                            <option value="Masculino">Masculino</option>
                            <option value="Femenino">Femenino</option>
                        </select><br>
                 <form id="form1" name="form1" method="POST" enctype="multipart/form-data">
                           Foto: <input type="file" name="imagenFoto" id="imagenFoto" accept="image/x-png,image/gif,image/jpeg" />
                 </form>
                 Usuario:<input value="" id="usuario" type="text" placeholder="Usuario"><br>
                 Contraseña:<input value="" id="contraseña" type="text" placeholder="Contraseña"><br>
                 <a class="btn btn-secondary" role="button" onclick="guardarUsuario(${parametro})">Guardar &raquo;</a><br><br>
                 <a class="btn btn-secondary" role="button" onclick="volver(${parametro})">Volver &raquo;</a>
                 `;
                 document.getElementById('genero').value = "";
    }
    if(parametro == emp){
        document.getElementById('container').style.display = 'none';
        document.getElementById('FormularioEmpresa').style.display = 'block';
        document.getElementById("FormularioEmpresa").innerHTML = '';
        document.getElementById("FormularioEmpresa").innerHTML += 
                 `<div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                 <img src="${tipoCuentas[parametro].foto}" class="card-img-top" alt="...">
                 <div id="contenedorMap" style="display: none;">
                     <div id="map">
                     
                     </div>
                     <h2>Mueva el marcador para apuntar la longitud y latitud</h2>
                 </div>
                 <h2>${tipoCuentas[parametro].tipo}</h2>
                 Empresa:<input value="" id="empresa" type="text" placeholder="Empresa"><br>
                 Pais:<select id="pais" type="text">
                            <option value="Honduras">Honduras</option>
                      </select><br>
                 Direccion:<select id="direccion" type="text" onchange="cambiarPosicion()">
                               
                           </select><br>
                 Longitud:<input value="" id="longitud" type="text" placeholder="Longitud"><br>
                 Latitud:<input value="" id="latitud" type="text" placeholder="Latitud"><br>
                 <form id="form1" name="form1" method="POST" enctype="multipart/form-data">
                         Banner: <input type="file" name="imagen1" id="imagenBanner" accept="image/x-png,image/gif,image/jpeg" />
                         Logotipo: <input type="file" name="imagen2" id="imagenLogo" accept="image/x-png,image/gif,image/jpeg" />
                 </form>
                 Usuario:<input value="" id="usuario" type="text" placeholder="Usuario"><br>
                 Contraseña:<input value="" id="contraseña" type="password" placeholder="Password"><br>
                 <a class="btn btn-secondary" role="button" onclick="guardarEmpresas(${parametro})">Guardar &raquo;</a><br><br>

                 <a class="btn btn-secondary" role="button" onclick="volver(${parametro})">Volver &raquo;</a>
                 </div>
                 `;
                 document.getElementById('direccion').innerHTML = '';
                 for(let i=0;i<basedatos.length;i++){
                     const base = basedatos[i];
                     document.getElementById('direccion').innerHTML += 
                     `
                     <option value="${i}">${base.ciudad}</option>
                     `;
                 }
                 document.getElementById('pais').value = '';
                 document.getElementById('direccion').value = '';
    }
}

function cambiarPosicion(){
    document.getElementById('contenedorMap').style.display = 'block';
    //Esto genera el mapa 
    let map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [0, 0],
        zoom: 15
    })

    var scale = new mapboxgl.ScaleControl({
        maxWidth: 80,
        unit: 'imperial'
    });
    map.addControl(scale);
    
    scale.setUnit('metric');

    map.addControl(new mapboxgl.FullscreenControl({container: document.querySelector('map')}));

    map.boxZoom.enable();

    var nav = new mapboxgl.NavigationControl();
    map.addControl(nav, 'top-left');

    let ciudadSeleccionada = document.querySelector('#direccion').value;
    console.log(ciudadSeleccionada);
        map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [basedatos[ciudadSeleccionada].lng, basedatos[ciudadSeleccionada].lat],
        zoom: 15
    })

    var marker = new mapboxgl.Marker({
        color: 'green',
        draggable: true
    })
    .setLngLat([basedatos[ciudadSeleccionada].lng, basedatos[ciudadSeleccionada].lat])
    .addTo(map);
     local = marker.getLngLat();
    function onDragEnd() {
    var lngLat = marker.getLngLat();
    local = {
        "lng": lngLat.lng,
        "lat": lngLat.lat
    };
    
    document.getElementById('longitud').value = local.lng;
    document.getElementById('latitud').value = local.lat;

    }
         
    marker.on('dragend', onDragEnd);
}

/*---------- Esta funcion guarda los usuarios--------*/
function guardarUsuario(usu){
    var frm = $('#form1');
    let formData = new FormData(frm[0]);
    axios.post('../../Proyecto/backend/subir/subeUsuario.php',formData)
        .then(res=>{
    let guardarusu = {
        codigoUsuario: usuarios.length + 1,
        Nombre:document.getElementById('nombre').value,
        Apellido:document.getElementById('apellido').value,
        Correo:document.getElementById('correo').value,
        Edad:document.getElementById('edad').value,
        Pais:document.getElementById('pais').value,
        Ciudad:document.getElementById('ciudad').value,
        Genero:document.getElementById('genero').value,
        Foto:res.data,
        Usuario:document.getElementById('usuario').value,
        Contrasena:document.getElementById('contraseña').value,
        PromocionesFavoritas:[],
        EmpresasFavoritas:[],
        Compras:[]
    };

    axios({
      method:'POST',
      url:url3,
      responseType:'json',
      data:guardarusu
  }).then(res=>{
      console.log(res.data);
      document.getElementById('container').style.display = 'block';
      document.getElementById('FormularioUsuario').style.display = 'none';
  }).catch(error=>{
      console.error(error);
  });
}).catch(err=>{
    console.error(err);
});

}

/*---------- Esta funcion guarda los empresas--------*/
function guardarEmpresas(emp){
    var frm = $('#form1');
    let formData = new FormData(frm[0], frm[1]);
    console.log(formData);
    axios.post('../../Proyecto/backend/subir/subeEmpresa.php',formData)
        .then(res=>{
            console.log(res);
    let guardaremp = {
        codigoEmpresa: empresas.length + 1,
        Empresa:document.getElementById('empresa').value,
        Pais:document.getElementById('pais').value,
        Direccion:basedatos[document.getElementById('direccion').value].ciudad,
        Latitud:document.getElementById('latitud').value,
        Longitud:document.getElementById('longitud').value,
        Banner:res.data[0],
        Logotipo:res.data[1],
        Usuario:document.getElementById('usuario').value,
        Contrasena:document.getElementById('contraseña').value,
        Sucursales:[],
        Productos:[]
    };
    axios({
      method:'POST',
      url:url2,
      responseType:'json',
      data:guardaremp
  }).then(res=>{
      console.log(res.data);
      document.getElementById('container').style.display = 'block';
      document.getElementById('FormularioEmpresa').style.display = 'none';
  }).catch(error=>{
      console.error(error);
  });
}).catch(err=>{
    console.error(err);
});

}

/*---------- Esta funcion desactiva el llamado al formulario de creacion de cuenta--------*/
function volver(regresar){
    let usu = 0;
    let emp = 1;
    if(regresar == usu){
        document.getElementById('container').style.display = 'block';
        document.getElementById('FormularioUsuario').style.display = 'none';
    }
    if(regresar == emp){
        document.getElementById('container').style.display = 'block';
        document.getElementById('FormularioEmpresa').style.display = 'none';
    }
}