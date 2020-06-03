var activo = false;
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
        generarLista();
    }).catch(error=>{
        console.error(error);
    });
}
obtenerEmpresas();

/*---------- Esta funcion llena el texto de bienvenida--------*/
function Bienvenida(){
    /*---------- Añadimos elementos al div con este id--------*/
    document.getElementById("form_button").innerHTML = '';
    document.getElementById("form_button").innerHTML += 
                 `<a class="btn btn-primary btn-lg" href="Inicio_Sesion.html" onclick="inicio()">Inicio Sesion</a>
                 `;
    document.getElementById("container_principal").innerHTML = '';
    document.getElementById("container_principal").innerHTML += 
                `<h1 class="display-3">Bienvenido a Rápido Ventas!</h1>
                 <p>Informacion sobre la empresa....  This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</p>
                 <div id="mas_info" style="display: none;"></div>
                 <p><a class="btn btn-primary btn-lg" href="#" onclick="verMas()">Leer más &raquo;</a></p>
                `;
}
Bienvenida();

/*------------Inicio Sesion------------*/
function inicio(){
    location.href = "Inicio_Sesion.html";
}

/*---------- Esta funcion es llamada por el evento del boton y activa o desactiva el div -------- */
function verMas(){
    document.getElementById("mas_info").innerHTML = '';
    if(activo == false){
        document.getElementById('mas_info').style.display = 'block';
        document.getElementById("mas_info").innerHTML += 
                `<p>Informacion sobre la empresa....  This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</p>
                `;
        activo = true;
    }
    else if(activo == true){
        document.getElementById('mas_info').style.display = 'none';
        activo = false;
    }
}

/*---------- Esta funcion genera las listas de empresas--------*/
function generarLista(){
    let apendice = 1;
    seleproductos = apendice;
    document.getElementById("lista-empresas").innerHTML = '';
    for(let i =0; i<empresas.length;i++){
        const empresa = empresas[i];
        document.getElementById("lista-empresas").innerHTML += 
        `<div class="col-lg-4 col-md-6 col-sm-6 col-12">
         <img src="${empresa.Logotipo}" class="card-img-top" alt="...">
         <h2>${empresa.Empresa}</h2>
         <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
         </div>
        `;
    }
}

