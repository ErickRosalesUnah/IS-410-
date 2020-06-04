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
var parametro1 = getCookie("codigoSuperUsuario") - 1;
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
    }).catch(error=>{
        console.error(error);
    });
}
obtenerUsuarios();

var superUsu = [];
const url2 = '../../Proyecto/backend/api/superUsuarios.php';
function obtenerSuperUsuarios(){
    axios({
        method:'GET',
        url:url2,
        responseType:'json'
    }).then(res=>{
        console.log(res.data);
        this.superUsu = res.data;
        generarDatos();
    }).catch(error=>{
        console.error(error);
    });
}
obtenerSuperUsuarios();

/*------------------- Esta funcion sirve para salir de la cuenta cliente --------------------*/
function cerrarCuenta(){
    window.location.href = "logoutSuperUsuario.php"; 
}

/*------------------- Esta funcion sirve para generar el boton de cerrar la cuenta --------------------*/
function generarBotonsalir(){
    document.getElementById("form-super").innerHTML = '';
    document.getElementById("form-super").innerHTML += 
    `
    <button class="btn btn-primary my-2 my-sm-0" type="button" onclick="cerrarCuenta()">Cerrar</button> 
    `;
}
generarBotonsalir();

function generarDatos(){
    document.getElementById("containerBienvenida").innerHTML = '';
    document.getElementById("containerBienvenida").innerHTML +=
    `<h1 class="display-3">Bienvenid@, ${superUsu[parametro1].superAdministrador}!</h1>
    `;
    document.getElementById("Contenedor").innerHTML = '';
}
  
/*------------------- Esta funcion sirve para eliminar usuario --------------------*/

function eliminarUsuario(){
    document.getElementById("containerBienvenida").innerHTML = '';
    document.getElementById("containerBienvenida").innerHTML +=
    `<h1 class="display-3">!Que usuario deseas eliminar!</h1>
    `;
    document.getElementById("Contenedor").innerHTML = '';
    for(let i=0; i<usuarios.length; i++){
        const usu = usuarios[i];
        document.getElementById("Contenedor").innerHTML += 
        `
        <div class="col-lg-4 col-md-6 col-sm-6 col-sm-12 col-12" id="perfilEmpre${i}" style="display: block;">
            <img src="${usu.Foto}" class="card-img-top" alt="...">
            <h4>Persona: ${usu.Nombre} ${usu.Apellido}</h4>
            <p>Pais: ${usu.Pais}</p>
            <p>Ciudad: ${usu.Ciudad}</p>
            <p>Genero: ${usu.Genero}</p>
            <button class="btn btn-primary my-2 my-sm-0" type="button" onclick="eliminar(${i})">Eliminar</button>
        </div>
        `;
    }
}

function eliminar(valor){
    axios({
        method:'DELETE',
        url:url1 + `?id=${valor}`,
        responseType:'json'
    }).then(res=>{
        console.log(res.data);
        obtenerUsuarios();
        generarDatos();
    }).catch(error=>{
        console.error(error);
    });
}

/*------------------- Aqui termina eliminar usuario --------------------*/

/*------------------- Esta funcion sirve para eliminar empresa --------------------*/

function eliminarEmpresa(){
    document.getElementById("containerBienvenida").innerHTML = '';
    document.getElementById("containerBienvenida").innerHTML +=
    `<h1 class="display-3">!Que empresa deseas eliminar!</h1>
    `;
    document.getElementById("Contenedor").innerHTML = '';
    for(let i=0; i<empresas.length; i++){
        const emp = empresas[i];
        document.getElementById("Contenedor").innerHTML += 
        `
        <div class="col-lg-4 col-md-6 col-sm-6 col-sm-12 col-12" id="perfilEmpre${i}" style="display: block;">
            <img src="${emp.Logotipo}" class="card-img-top" alt="...">
            <h4>Empresa: ${emp.Empresa}</h4>
            <p>Pais: ${emp.Pais}</p>
            <p>Ciudad: ${emp.Direccion}</p>
            <button class="btn btn-primary my-2 my-sm-0" type="button" onclick="eliminarEmp(${i})">Eliminar</button>
        </div>
        `;
    }
}

function eliminarEmp(valor){
    axios({
        method:'DELETE',
        url:url + `?id=${valor}`,
        responseType:'json'
    }).then(res=>{
        console.log(res.data);
        obtenerEmpresas();
        generarDatos();
    }).catch(error=>{
        console.error(error);
    });
}

/*------------------- Aqui termina eliminar empresa --------------------*/