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
var parametro1 = getCookie("codigoEmpresa") - 1;
var pri;

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
        Bienvenida();
    }).catch(error=>{
        console.error(error);
    });
}
obtenerEmpresas();

var proCompra = [];
const url2 = '../../Proyecto/backend/api/productosComprados.php';
function obtenerProductosComprados(){
    axios({
        method:'GET',
        url:url2,
        responseType:'json'
    }).then(res=>{
        console.log(res.data);
        this.proCompra = res.data;
    }).catch(error=>{
        console.error(error);
    });
}
obtenerProductosComprados();

const url3 = '../../Proyecto/backend/api/basedatos.php';
function obtenerBasedatos(){
    axios({
        method:'GET',
        url:url3,
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


/*------------------- Esta funcion sirve para generar el boton de cerrar la cuenta --------------------*/
function generarBotonsalir(){
    document.getElementById("form-empresas").innerHTML = '';
    document.getElementById("form-empresas").innerHTML += 
    `
    <button class="btn btn-primary my-2 my-sm-0" type="button" onclick="cerrar()">Cerrar</button>  
    `;
  }
  generarBotonsalir();

function cerrar(){
  window.location.href = "logoutEmpresa.php"; 
}

function Bienvenida(){
      document.getElementById("containerBienvenida").innerHTML = '';
      document.getElementById("containerBienvenida").innerHTML += 
             `<h1 class="display-3">Bienvenido a ${empresas[parametro1].Empresa}!</h1>
              <h3>Los Productos Actuales!<h3>
             `;
             document.getElementById("ProductosContenedor").innerHTML = '';
             for(let i=0; i<empresas[parametro1].Productos.length; i++){
                const productos = empresas[parametro1].Productos[i];
                if(productos.PrecioPromocion == ""){
                document.getElementById("ProductosContenedor").innerHTML += 
                `<div class="col-lg-4 col-md-6 col-sm-6 col-12" id="producto${i}">
                    <img src="${productos.imagen}" class="card-img-top" alt="...">
                    <h2>${productos.NombreProducto}</h2>
                    <p>${productos.Descripcion}</p>
                    <p>Precio: Lps.${productos.Precio}</p>
                    <p><a class="btn btn-secondary" role="button">Ver Comentarios &raquo;</a></p>
                 </div>
                `;
                }else if(productos.PrecioPromocion != ""){
                    document.getElementById("ProductosContenedor").innerHTML += 
                `<div class="col-lg-4 col-md-6 col-sm-6 col-12" id="producto${i}">
                    <img src="${productos.imagen}" class="card-img-top" alt="...">
                    <h2>${productos.NombreProducto}</h2>
                    <p>${productos.Descripcion}</p>
                    <p>Precio: Lps.${productos.Precio}</p>
                    <p>Precio Promocion: Lps.${productos.PrecioPromocion}</p>
                    <p>Promocion: Descuento del ${productos.Promocion}</p>
                    <p><a class="btn btn-secondary" role="button">Ver Comentarios &raquo;</a></p>
                 </div>
                `;
                }
                
             }
  }
/*----------------------------Desde aqui empieza Actualizar Perfil------------------------------- */
  function ActualizarPerfil(){
    document.getElementById("containerBienvenida").innerHTML = '';
    document.getElementById("containerBienvenida").innerHTML += 
           `<h1 class="display-3">Bienvenido a ${empresas[parametro1].Empresa}!</h1>
            <h3>¿Que datos deseas modificar?<h3>
           `;
    /*------------------Aqui capturamos los datos para modificar-----*/
    document.getElementById("ProductosContenedor").innerHTML = '';
    document.getElementById("ProductosContenedor").innerHTML += 
    `<div class="col-lg-4 col-md-6 col-sm-6 col-12" id="">
                 <div id="contenedorMap" style="display: none;">
                     <div id="map">
                     
                     </div>
                     <h2>Mueva el marcador para apuntar la nueva longitud y latitud</h2>
                 </div>
     <h1>Cambiar Datos <button class="btn btn-outline-success my-2 my-sm-0" id="" type="submit" onclick="Bienvenida()">Salir</button></h1>
                  Empresa:<input value="" id="empresa" type="text" placeholder="Empresa"><br>
                  Correo Electronico:<input value="" id="correo" type="text" placeholder="Correo"><br>
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
                  Contraseña:<input value="" id="contraseña" type="text" placeholder="Contraseña"><br>
     <button class="btn btn-outline-success my-2 my-sm-0" id="" type="submit" onclick="modificarlocal()">Guardar</button>
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
       document.getElementById('empresa').value = empresas[parametro1].Empresa;
       document.getElementById('correo').value = empresas[parametro1].Correo;
       document.getElementById('pais').value = empresas[parametro1].Pais;
       document.getElementById('direccion').value = empresas[parametro1].Direccion;
       document.getElementById('latitud').value = empresas[parametro1].Latitud;
       document.getElementById('longitud').value = empresas[parametro1].Longitud;
       document.getElementById('usuario').value = empresas[parametro1].Usuario;
       document.getElementById('contraseña').value = empresas[parametro1].Contrasena;
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

/*------------------- Esta funcion sirve para capturar los datos y guardarlos --------------------*/
function modificarlocal(){
    var frm = $('#form1');
    let formData = new FormData(frm[0], frm[1]);
    console.log(formData);
    axios.post('../../Proyecto/backend/subir/subeEmpresa.php',formData)
        .then(res=>{
    let guardaremp = {
        codigoEmpresa: empresas[parametro1].codigoEmpresa,
        Empresa:document.getElementById('empresa').value,
        Correo:document.getElementById('correo').value,
        Pais:document.getElementById('pais').value,
        Direccion:basedatos[document.getElementById('direccion').value].ciudad,
        Latitud:document.getElementById('latitud').value,
        Longitud:document.getElementById('longitud').value,
        Banner:res.data[0],
        Logotipo:res.data[1],
        Usuario:document.getElementById('usuario').value,
        Contrasena:document.getElementById('contraseña').value,
        Sucursales:empresas[parametro1].Sucursales,
        Productos:empresas[parametro1].Productos
    };
    axios({
        method:'PUT',
        url:url + `?id=${parametro1}`,
        responseType:'json',
        data:guardaremp
      }).then(res=>{
        console.log(res.data);
        obtenerEmpresas();
      }).catch(error=>{
        console.error(error);
      });
    }).catch(err=>{
        console.error(err);
    });
}
/*----------------------------Aqui termina Actualizar Perfil------------------------------- */

/*----------------------------Aqui empieza Registro Sucursales------------------------------- */
function RegistroSucursales(){
    document.getElementById("containerBienvenida").innerHTML = '';
    document.getElementById("containerBienvenida").innerHTML += 
           `<h1 class="display-3">Bienvenido a ${empresas[parametro1].Empresa}!</h1>
            <h3>¿Que sucursal deseas agregar?<h3>
           `;
    document.getElementById("ProductosContenedor").innerHTML = '';
    document.getElementById("ProductosContenedor").innerHTML +=
    `
    <div id="contenedorMap">
        <div id="map">
        
        </div>
        <div>
            <h4>Mueva el marcador para apuntar la longitud y latitud</h4>
            Selecciona la ciudad para la sucursal:<select id="direccion" type="text" onchange="cambiarPosicionSucursal()">
                                   
                                               </select><br>
            Escrie el nombre de la sucursal:<input value="" id="sucursal" type="text" placeholder="Nombre"><br>
            Longitud:<input value="" id="longitud" type="text" placeholder="Longitud"><br>
            Latitud:<input value="" id="latitud" type="text" placeholder="Latitud"><br>
            <button class="btn btn-outline-success my-2 my-sm-0" id="" type="submit" onclick="guardarSucursal()">Guardar</button>
            <button class="btn btn-outline-success my-2 my-sm-0" id="" type="submit" onclick="Bienvenida()">Salir</button>
        </div>
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
                 document.getElementById('direccion').value = '';
    generarMapa();
}

function generarMapa(){
    //Esto genera el mapa 
    let map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [empresas[parametro1].Longitud, empresas[parametro1].Latitud],
        zoom: 15
    })

    let element = document.createElement('div')
    element.className = 'marker'
    
    element.addEventListener('click', ()=>{
        window.alert('Esta es la empresa principal')
    })
    
    let marker = new mapboxgl.Marker(element).setLngLat({
        lng: empresas[parametro1].Longitud,
        lat: empresas[parametro1].Latitud
    })
    .addTo(map)

    if(empresas[parametro1].Sucursales != ''){
        for(let i=0; i<empresas[parametro1].Sucursales.length; i++){
            const sucu = empresas[parametro1].Sucursales[i];
            let element2 = document.createElement('div')
            element2.className = 'marker1'
            
            element2.addEventListener('click', ()=>{
                window.alert('Esta es la sucursal: ' + sucu.nombreSucursal)
            })
            
            let marker1 = new mapboxgl.Marker(element2).setLngLat({
                lng: sucu.longitud,
                lat: sucu.latitud
            })
            .addTo(map)
        }
    }

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

}

function cambiarPosicionSucursal(){
    //Este es el marcador en el mapa que guardara la posicion de la nueva sucursal
    let ciudadSeleccionada = document.querySelector('#direccion').value;
    console.log(ciudadSeleccionada);
        map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [basedatos[ciudadSeleccionada].lng, basedatos[ciudadSeleccionada].lat],
        zoom: 15
    })

    let element = document.createElement('div')
    element.className = 'marker'
    
    element.addEventListener('click', ()=>{
        window.alert('Esta es la empresa principal')
    })
    
    let marker = new mapboxgl.Marker(element).setLngLat({
        lng: empresas[parametro1].Longitud,
        lat: empresas[parametro1].Latitud
    })
    .addTo(map)

    if(empresas[parametro1].Sucursales != ''){
        for(let i=0; i<empresas[parametro1].Sucursales.length; i++){
            const sucu = empresas[parametro1].Sucursales[i];
            let element2 = document.createElement('div')
            element2.className = 'marker1'
            
            element2.addEventListener('click', ()=>{
                window.alert('Esta es la sucursal' + sucu.nombreSucursal)
            })
            
            let marker1 = new mapboxgl.Marker(element2).setLngLat({
                lng: sucu.longitud,
                lat: sucu.latitud
            })
            .addTo(map)
        }
    }

    var marker2 = new mapboxgl.Marker({
        color: 'green',
        draggable: true
    })
    .setLngLat([basedatos[ciudadSeleccionada].lng, basedatos[ciudadSeleccionada].lat])
    .addTo(map);
     local = marker2.getLngLat();
    function onDragEnd() {
    var lngLat = marker2.getLngLat();
    local = {
        "lng": lngLat.lng,
        "lat": lngLat.lat
    };
    
    document.getElementById('longitud').value = local.lng;
    document.getElementById('latitud').value = local.lat;

    }
         
    marker2.on('dragend', onDragEnd);

}

function guardarSucursal(){
    let sucursalCreada = {
        codigoEmpresa:empresas[parametro1].codigoEmpresa,
        codigoSucursal:empresas[parametro1].Sucursales.length + 1,
        nombreSucursal:document.getElementById('sucursal').value,
        longitud:document.getElementById('longitud').value,
        latitud:document.getElementById('latitud').value
    };

    empresas[parametro1].Sucursales.push(sucursalCreada);

    let guardaremp = {
        codigoEmpresa: empresas[parametro1].codigoEmpresa,
        Empresa:empresas[parametro1].Empresa,
        Correo:empresas[parametro1].Correo,
        Pais:empresas[parametro1].Pais,
        Direccion:empresas[parametro1].Direccion,
        Latitud:empresas[parametro1].Latitud,
        Longitud:empresas[parametro1].Longitud,
        Banner:empresas[parametro1].Banner,
        Logotipo:empresas[parametro1].Logotipo,
        Usuario:empresas[parametro1].Usuario,
        Contrasena:empresas[parametro1].Contrasena,
        Sucursales:empresas[parametro1].Sucursales,
        Productos:empresas[parametro1].Productos
    };
    axios({
        method:'PUT',
        url:url + `?id=${parametro1}`,
        responseType:'json',
        data:guardaremp
      }).then(res=>{
        console.log(res.data);
        obtenerEmpresas();
      }).catch(error=>{
        console.error(error);
      });
}

/*----------------------------Aqui termina Registro Sucursales------------------------------- */

/*----------------------------Aqui empieza Registro Productos------------------------------- */

function RegistroProductos(){
    document.getElementById("containerBienvenida").innerHTML = '';
    document.getElementById("containerBienvenida").innerHTML += 
           `<h1 class="display-3">Bienvenido a ${empresas[parametro1].Empresa}!</h1>
            <h3>¿Que producto deseas agregar?<h3>
           `;
    /*------------------Aqui capturamos los datos para modificar-----*/
    document.getElementById("ProductosContenedor").innerHTML = '';
    document.getElementById("ProductosContenedor").innerHTML += 
    `<div class="col-md-6 col-sm-6 col-12" id="">
     <h1>Agregar Datos <button class="btn btn-outline-success my-2 my-sm-0" id="" type="submit" onclick="Bienvenida()">Salir</button></h1>
                  <form id="form1" name="form1" method="POST" enctype="multipart/form-data">
                        Imagen: <input type="file" name="imagenPro" id="imagenFoto" accept="image/x-png,image/gif,image/jpeg" />
                  </form>
                  Nombre Producto:<input value="" id="nombre" type="text" placeholder="Nombre Producto"><br>
                  Descripcion:<input value="" id="descripcion" type="text" placeholder="Direccion"><br>
                  Precio:<input value="" id="precio" type="text" placeholder="Precio"><br>
     <button class="btn btn-outline-success my-2 my-sm-0" id="" type="submit" onclick="modificarlocal2()">Guardar</button>
     </div>
    `;
}
  
function modificarlocal2(){
    var frm = $('#form1');
    let formData = new FormData(frm[0]);
    axios.post('../../Proyecto/backend/subir/subeProducto.php',formData)
        .then(res=>{
    let productoCreado = {
        codigoEmpresa: empresas[parametro1].codigoEmpresa,
        codigoProducto:empresas[parametro1].Productos.length + 1,
        imagen:res.data,
        NombreProducto:document.getElementById('nombre').value,
        Descripcion:document.getElementById('descripcion').value,
        Precio:document.getElementById('precio').value,
        PrecioPromocion:"",
        Promocion:""
    };

    empresas[parametro1].Productos.push(productoCreado);

    let guardaremp = {
        codigoEmpresa: empresas[parametro1].codigoEmpresa,
        Empresa:empresas[parametro1].Empresa,
        Correo:empresas[parametro1].Correo,
        Pais:empresas[parametro1].Pais,
        Direccion:empresas[parametro1].Direccion,
        Latitud:empresas[parametro1].Latitud,
        Longitud:empresas[parametro1].Longitud,
        Banner:empresas[parametro1].Banner,
        Logotipo:empresas[parametro1].Logotipo,
        Usuario:empresas[parametro1].Usuario,
        Contrasena:empresas[parametro1].Contrasena,
        Sucursales:empresas[parametro1].Sucursales,
        Productos:empresas[parametro1].Productos
    };
    axios({
        method:'PUT',
        url:url + `?id=${parametro1}`,
        responseType:'json',
        data:guardaremp
      }).then(res=>{
        console.log(res.data);
        obtenerEmpresas();
      }).catch(error=>{
        console.error(error);
      });
    }).catch(err=>{
        console.error(err);
    });
    
}
/*----------------------------Aqui termina Registro Productos------------------------------- */

/*----------------------------Aqui empieza Eliminar Sucursales------------------------------- */
function EliminarSurcursal(){
    if(empresas[parametro1].Sucursales == ''){
        document.getElementById("containerBienvenida").innerHTML = '';
        document.getElementById("containerBienvenida").innerHTML += 
               `<h1 class="display-3">Bienvenido a ${empresas[parametro1].Empresa}!</h1>
                <h3>No tienes sucursales para eliminar<h3>
               `;
        document.getElementById("ProductosContenedor").innerHTML = '';
        document.getElementById("ProductosContenedor").innerHTML +=
        `
        <div id="contenedorMap">
            <div id="map">
            
            </div>
        </div>
        `;

        generarMapaElim();
    }else{
        document.getElementById("containerBienvenida").innerHTML = '';
        document.getElementById("containerBienvenida").innerHTML += 
               `<h1 class="display-3">Bienvenido a ${empresas[parametro1].Empresa}!</h1>
                <h3>¿Que sucursal deseas eliminar?<h3>
               `;
        document.getElementById("ProductosContenedor").innerHTML = '';
        document.getElementById("ProductosContenedor").innerHTML +=
        `
        <div id="contenedorMap">
            <div id="map">
            
            </div>
            Selecciona la sucursal a eliminar:<select id="sucursal" type="text" onchange="selecElimSucursal()">
                                       
                                              </select><br>
            <button class="btn btn-outline-success my-2 my-sm-0" id="" type="submit" onclick="elimSucursal()">Eliminar</button>
            <button class="btn btn-outline-success my-2 my-sm-0" id="" type="submit" onclick="Bienvenida()">Salir</button>
        </div>
        `;
        for(let i=0; i<empresas[parametro1].Sucursales.length;i++){
            const sucu = empresas[parametro1].Sucursales[i];
            document.getElementById('sucursal').innerHTML += 
                         `
                         <option value="${i}">${sucu.nombreSucursal}</option>
                         `;
        }
        document.getElementById('sucursal').value = '';
        generarMapaElim();
    }
}

function generarMapaElim(){
    //Esto genera el mapa 
    let map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [empresas[parametro1].Longitud, empresas[parametro1].Latitud],
        zoom: 15
    })

    let element = document.createElement('div')
    element.className = 'marker'
    
    element.addEventListener('click', ()=>{
        window.alert('Esta es la empresa principal')
    })
    
    let marker = new mapboxgl.Marker(element).setLngLat({
        lng: empresas[parametro1].Longitud,
        lat: empresas[parametro1].Latitud
    })
    .addTo(map)

    if(empresas[parametro1].Sucursales != ''){
        for(let i=0; i<empresas[parametro1].Sucursales.length; i++){
            const sucu = empresas[parametro1].Sucursales[i];
            let element2 = document.createElement('div')
            element2.className = 'marker1'
            
            element2.addEventListener('click', ()=>{
                window.alert('Esta es la sucursal: ' + sucu.nombreSucursal)
            })
            
            let marker1 = new mapboxgl.Marker(element2).setLngLat({
                lng: sucu.longitud,
                lat: sucu.latitud
            })
            .addTo(map)
        }
    }

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

}

function selecElimSucursal(){
    //Este es el marcador en el mapa que guardara la posicion de la nueva sucursal
    let sucursalSeleccionada = document.querySelector('#sucursal').value;
    console.log(sucursalSeleccionada);
        map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [empresas[parametro1].Sucursales[sucursalSeleccionada].longitud, empresas[parametro1].Sucursales[sucursalSeleccionada].latitud],
        zoom: 15
    })

    let element = document.createElement('div')
    element.className = 'marker'
    
    element.addEventListener('click', ()=>{
        window.alert('Esta es la empresa principal')
    })
    
    let marker = new mapboxgl.Marker(element).setLngLat({
        lng: empresas[parametro1].Longitud,
        lat: empresas[parametro1].Latitud
    })
    .addTo(map)

    if(empresas[parametro1].Sucursales != ''){
        for(let i=0; i<empresas[parametro1].Sucursales.length; i++){
            const sucu = empresas[parametro1].Sucursales[i];
            let element2 = document.createElement('div')
            element2.className = 'marker1'
            
            element2.addEventListener('click', ()=>{
                window.alert('Esta es la sucursal' + sucu.nombreSucursal)
            })
            
            let marker1 = new mapboxgl.Marker(element2).setLngLat({
                lng: sucu.longitud,
                lat: sucu.latitud
            })
            .addTo(map)
        }
    }
}

function elimSucursal(){
    let seg = document.getElementById('sucursal').value;
    empresas[parametro1].Sucursales.splice(seg,1);
  
    let guardaremp = {
        codigoEmpresa: empresas[parametro1].codigoEmpresa,
        Empresa:empresas[parametro1].Empresa,
        Correo:empresas[parametro1].Correo,
        Pais:empresas[parametro1].Pais,
        Direccion:empresas[parametro1].Direccion,
        Latitud:empresas[parametro1].Latitud,
        Longitud:empresas[parametro1].Longitud,
        Banner:empresas[parametro1].Banner,
        Logotipo:empresas[parametro1].Logotipo,
        Usuario:empresas[parametro1].Usuario,
        Contrasena:empresas[parametro1].Contrasena,
        Sucursales:empresas[parametro1].Sucursales,
        Productos:empresas[parametro1].Productos
  };
   axios({
     method:'PUT',
     url:url + `?id=${parametro1}`,
     responseType:'json',
     data:guardaremp
   }).then(res=>{
     console.log(res.data);
     window.alert("Sucursal eliminada con exito.")
     EliminarSurcursal();
   }).catch(error=>{
     console.error(error);
   });
  }

/*----------------------------Aqui termina Eliminar Sucursales------------------------------- */

/*------------------- Esta funcion sirve para eliminar producto --------------------*/
function EliminarProducto(){
    if(empresas[parametro1].Productos == ""){
        document.getElementById("containerBienvenida").innerHTML = '';
        document.getElementById("containerBienvenida").innerHTML += 
               `<h1 class="display-3">Bienvenido a ${empresas[parametro1].Empresa}!</h1>
                <h3>No tienes productos para eliminar.<h3>
               `;
        document.getElementById("ProductosContenedor").innerHTML = '';

    }else{
        document.getElementById("containerBienvenida").innerHTML = '';
        document.getElementById("containerBienvenida").innerHTML += 
               `<h1 class="display-3">Bienvenido a ${empresas[parametro1].Empresa}!</h1>
                <h3>¿Que producto deseas eliminar?<h3>
               `;
        document.getElementById("ProductosContenedor").innerHTML = '';
        document.getElementById("ProductosContenedor").innerHTML += 
        `<h5>Seleccion el producto: <h5>
         <select id="producto-actual" class="form-control" style="width: 200px;" onchange="verElimProducto()">
         </select>
        `;
                 for(let i=0; i<empresas[parametro1].Productos.length; i++){
                    const productos = empresas[parametro1].Productos[i];
                    document.getElementById("producto-actual").innerHTML += 
                    ` <option value="${i}">${productos.NombreProducto}</option>
                    `;
                 }
                 document.getElementById("ProductosContenedor").innerHTML += 
                 `<div id="formulario">
                  </div>
                 `;
        document.getElementById('producto-actual').value = null;
    }
}

function verElimProducto(){
    const numpro = document.getElementById('producto-actual').value;
    document.getElementById('formulario').innerHTML = '';
    if(empresas[parametro1].Productos[numpro].Promocion == ""){
        document.getElementById('formulario').innerHTML +=
        `<img src="${empresas[parametro1].Productos[numpro].imagen}" class="card-img-top" alt="...">
         <h2>${empresas[parametro1].Productos[numpro].NombreProducto}</h2>
         <p>${empresas[parametro1].Productos[numpro].Descripcion}</p>
         <p>Precio: Lps.${empresas[parametro1].Productos[numpro].Precio}</p>
         <button class="btn btn-outline-success my-2 my-sm-0" id="" type="submit" onclick="elimProducto(${numpro})">Eliminar</button>
        `;
    }else{
        document.getElementById('formulario').innerHTML +=
        `<img src="${empresas[parametro1].Productos[numpro].imagen}" class="card-img-top" alt="...">
         <h2>${empresas[parametro1].Productos[numpro].NombreProducto}</h2>
         <p>${empresas[parametro1].Productos[numpro].Descripcion}</p>
         <p>Precio: Lps.${empresas[parametro1].Productos[numpro].Precio}</p>
         <p>Precio Promocion: Lps.${empresas[parametro1].Productos[numpro].PrecioPromocion}</p>
         <p>Promocion: Descuento del ${empresas[parametro1].Productos[numpro].Promocion}</p>
         <button class="btn btn-outline-success my-2 my-sm-0" id="" type="submit" onclick="elimProducto(${numpro})">Eliminar</button>
        `;
    }
}

function elimProducto(seg){
  
    empresas[parametro1].Productos.splice(seg,1);
  
    let guardaremp = {
        codigoEmpresa: empresas[parametro1].codigoEmpresa,
        Empresa:empresas[parametro1].Empresa,
        Correo:empresas[parametro1].Correo,
        Pais:empresas[parametro1].Pais,
        Direccion:empresas[parametro1].Direccion,
        Latitud:empresas[parametro1].Latitud,
        Longitud:empresas[parametro1].Longitud,
        Banner:empresas[parametro1].Banner,
        Logotipo:empresas[parametro1].Logotipo,
        Usuario:empresas[parametro1].Usuario,
        Contrasena:empresas[parametro1].Contrasena,
        Sucursales:empresas[parametro1].Sucursales,
        Productos:empresas[parametro1].Productos
  };
   axios({
     method:'PUT',
     url:url + `?id=${parametro1}`,
     responseType:'json',
     data:guardaremp
   }).then(res=>{
     console.log(res.data);
     window.alert("Producto eliminado con exito.")
     EliminarProducto();
   }).catch(error=>{
     console.error(error);
   });
  }
/*----------------------------Aqui termina Eliminar Productos------------------------------- */

/*----------------------------Aqui empieza Actualizacion de Productos------------------------------- */
function ActualizarProducto(){
    if(empresas[parametro1].Productos == ""){
        document.getElementById("containerBienvenida").innerHTML = '';
        document.getElementById("containerBienvenida").innerHTML += 
               `<h1 class="display-3">Bienvenido a ${empresas[parametro1].Empresa}!</h1>
                <h3>No tienes productos para actualizar<h3>
               `;
        document.getElementById("ProductosContenedor").innerHTML = '';
    }else{
        document.getElementById("containerBienvenida").innerHTML = '';
        document.getElementById("containerBienvenida").innerHTML += 
               `<h1 class="display-3">Bienvenido a ${empresas[parametro1].Empresa}!</h1>
                <h3>¿A que producto deseas hacerle una modificacion?<h3>
               `;
        document.getElementById("ProductosContenedor").innerHTML = '';
        document.getElementById("ProductosContenedor").innerHTML += 
        `<h5>Seleccion el producto: <h5>
         <select id="usuario-actual" class="form-control" style="width: 200px;" onchange="cambiarProducto()">
         </select>
        `;
                 for(let i=0; i<empresas[parametro1].Productos.length; i++){
                    const productos = empresas[parametro1].Productos[i];
                    document.getElementById("usuario-actual").innerHTML += 
                    ` <option value="${i}">${productos.NombreProducto}</option>
                    `;
                 }
                 document.getElementById("ProductosContenedor").innerHTML += 
                 `<div id="formulario">
                  </div>
                 `;
        document.getElementById('usuario-actual').value = null;
    }
}

function cambiarProducto(){
    const numpro = document.getElementById('usuario-actual').value;
    document.getElementById('formulario').innerHTML = '';
    if(empresas[parametro1].Productos[numpro].Promocion == ""){
        document.getElementById('formulario').innerHTML +=
        `<img src="${empresas[parametro1].Productos[numpro].imagen}" class="card-img-top" alt="...">
         <h2>${empresas[parametro1].Productos[numpro].NombreProducto}</h2>
         <p>${empresas[parametro1].Productos[numpro].Descripcion}</p>
         <p>Precio: Lps.${empresas[parametro1].Productos[numpro].Precio}</p>
        `;
    }else{
        document.getElementById('formulario').innerHTML +=
        `<img src="${empresas[parametro1].Productos[numpro].imagen}" class="card-img-top" alt="...">
         <h2>${empresas[parametro1].Productos[numpro].NombreProducto}</h2>
         <p>${empresas[parametro1].Productos[numpro].Descripcion}</p>
         <p>Precio: Lps.${empresas[parametro1].Productos[numpro].Precio}</p>
         <p>Precio Promocion: Lps.${empresas[parametro1].Productos[numpro].PrecioPromocion}</p>
         <p>Promocion: Descuento del ${empresas[parametro1].Productos[numpro].Promocion}</p>
        `;
    }
    document.getElementById('formulario').innerHTML += 
    `<h1>Introduzca los datos deseados <button class="btn btn-outline-success my-2 my-sm-0" id="" type="submit" onclick="Bienvenida()">Salir</button></h1>
            Imagen:<input value="" id="imagenP" type="text" placeholder=""><br>    
            Nombre Producto:<input value="" id="nombreP" type="text" placeholder=""><br>  
            Descripcion:<input value="" id="descripcionP" type="text" placeholder=""><br>
            Precio:<input value="" id="precioP" type="text" placeholder=""><br> 
            Descuento:<input value="" id="promocionP" type="text" placeholder=""><br>
     <button class="btn btn-outline-success my-2 my-sm-0" id="" type="submit" onclick="modificarlocal3(${numpro})">Guardar</button>
    `;

    document.getElementById('imagenP').value = empresas[parametro1].Productos[numpro].imagen;
    document.getElementById('nombreP').value = empresas[parametro1].Productos[numpro].NombreProducto;
    document.getElementById('descripcionP').value = empresas[parametro1].Productos[numpro].Descripcion;
    document.getElementById('precioP').value = empresas[parametro1].Productos[numpro].Precio;
    document.getElementById('promocionP').value = empresas[parametro1].Productos[numpro].Promocion;
}

function modificarlocal3(numpro){
    empresas[parametro1].Productos.forEach(item => {
        if(item.codigoProducto == empresas[parametro1].Productos[numpro].codigoProducto){
            item.imagen = document.getElementById('imagenP').value;
            item.NombreProducto = document.getElementById('nombreP').value;
            item.Descripcion = document.getElementById('descripcionP').value;
            item.Precio = document.getElementById('precioP').value;
            item.PrecioPromocion = item.Precio - (item.Precio * (document.getElementById('promocionP').value / 100));
            item.Promocion = document.getElementById('promocionP').value + "%";
        }
    });;

    let guardaremp = {
        codigoEmpresa: empresas[parametro1].codigoEmpresa,
        Empresa:empresas[parametro1].Empresa,
        Correo:empresas[parametro1].Correo,
        Pais:empresas[parametro1].Pais,
        Direccion:empresas[parametro1].Direccion,
        Latitud:empresas[parametro1].Latitud,
        Longitud:empresas[parametro1].Longitud,
        Banner:empresas[parametro1].Banner,
        Logotipo:empresas[parametro1].Logotipo,
        Usuario:empresas[parametro1].Usuario,
        Contrasena:empresas[parametro1].Contrasena,
        Sucursales:empresas[parametro1].Sucursales,
        Productos:empresas[parametro1].Productos
    };
    axios({
        method:'PUT',
        url:url + `?id=${parametro1}`,
        responseType:'json',
        data:guardaremp
      }).then(res=>{
        console.log(res.data);
        cambiarProducto();
      }).catch(error=>{
        console.error(error);
      });
}
/*----------------------------Aqui termina Actualizar Productos------------------------------- */



/*----------------------------!!!!!!!!!!!Estadisticas!!!!!!!!!!!------------------------------- */
/*---------------------------- Graficos de Ventas ------------------------------- */
function GraficosVentas(){
    document.getElementById("containerBienvenida").innerHTML = '';
    document.getElementById("containerBienvenida").innerHTML += 
           `<h1 class="display-3">Bienvenido a ${empresas[parametro1].Empresa}!</h1>
            <h3>Graficos de Ventas<h3>
           `;
    document.getElementById("ProductosContenedor").innerHTML = '';
    document.getElementById("ProductosContenedor").innerHTML += 
    `<div class="container">
         <hr>
         <div class="row">
             <div class="col-md-12">
                 <h2>Datos mostrados en Año-Meses</h2>
                 <hr>
                 <div id="misProductos"></div>
             </div>
         </div>
     </div>
    `;
    
    var pro = empresas[parametro1].Productos;
    var produ = [];
    var keyY = []
    for(let i=0; i<pro.length; i++){
       produ.push(pro[i].NombreProducto);
       keyY.push(pro[i].NombreProducto);
    }

    var mesesData = [
        {"periodo": "2020-01", "Producto1": 2, "Producto2": 8, "Producto3": 7},
        {"periodo": "2020-02", "Producto1": 5, "Producto2": 9, "Producto3": 8},
        {"periodo": "2020-03", "Producto1": 2, "Producto2": 5, "Producto3": 4},
        {"periodo": "2020-04", "Producto1": 3, "Producto2": 4, "Producto3": 3},
        {"periodo": "2020-05", "Producto1": 1, "Producto2": 2, "Producto3": 1},
        {"periodo": "2020-06", "Producto1": 0, "Producto2": 3, "Producto3": 2},
        {"periodo": "2020-07", "Producto1": 5, "Producto2": 1, "Producto3": 0},
        {"periodo": "2020-08", "Producto1": 4, "Producto2": 5, "Producto3": 4},
        {"periodo": "2020-09", "Producto1": 2, "Producto2": 4, "Producto3": 3},
        {"periodo": "2020-10", "Producto1": 3, "Producto2": 6, "Producto3": 7},
        {"periodo": "2020-11", "Producto1": 5, "Producto2": 7, "Producto3": 6},
        {"periodo": "2020-12", "Producto1": 8, "Producto2": 3, "Producto3": 2}
      ];

      var mesesData2 = [
        {"periodo": "2020-01"},
        {"periodo": "2020-02"},
        {"periodo": "2020-03"},
        {"periodo": "2020-04"},
        {"periodo": "2020-05"},
        {"periodo": "2020-06"},
        {"periodo": "2020-07"},
        {"periodo": "2020-08"},
        {"periodo": "2020-09"},
        {"periodo": "2020-10"},
        {"periodo": "2020-11"},
        {"periodo": "2020-12"}
      ];
 
    
    for(let i=0;i<12;i++){
        for(let j=0;j<pro.length;j++){
            let historialProductos = proCompra.filter(item=>{
                return item.codigoProducto == empresas[parametro1].Productos[j].codigoProducto && item.fecha == mesesData2[i].periodo && item.codigoEmpresa == empresas[parametro1].Productos[j].codigoEmpresa;
              });
            for(let k=0;k<historialProductos.length;k++){
                const histo = historialProductos[k];
                if(mesesData2[i].periodo == histo.fecha){
                    var variable1 = pro[j].NombreProducto;
                    var variable2 = historialProductos.length;
                    mesesData2[i][variable1] = variable2;
                }
            }
        }
    }
    console.log(mesesData2);
      
      Morris.Line({
        element: 'misProductos',
        data: mesesData2,
        xkey: 'periodo',
        ykeys: keyY,
        labels: produ,
        smooth: false
      });
}
/*---------------------------- Termina Graficos de Ventas ------------------------------- */

/*---------------------------- Graficos de Productos Favoritos ------------------------------- */
function GraficosProductos(){
    document.getElementById("containerBienvenida").innerHTML = '';
    document.getElementById("containerBienvenida").innerHTML += 
           `<h1 class="display-3">Bienvenido a ${empresas[parametro1].Empresa}!</h1>
            <h3>Graficos de Productos Favoritos<h3>
           `;
    document.getElementById("ProductosContenedor").innerHTML = '';
    document.getElementById("ProductosContenedor").innerHTML += 
    `
    `;
}
/*---------------------------- Termina Graficos de Productos Favoritos ------------------------------- */