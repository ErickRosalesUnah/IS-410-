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
    document.getElementById("bienvenida").innerHTML = '';
    document.getElementById("bienvenida").innerHTML +=
    `<h1 class="display-3">Bienvenid@, ${usuarios[parametro1].Nombre} ${usuarios[parametro1].Apellido}!</h1>
     <img src="${usuarios[parametro1].Foto}" width="50" height="200" class="card-img-top" alt="...">
    `;
    document.getElementById("ContenedorCliente").innerHTML = '';
}
  