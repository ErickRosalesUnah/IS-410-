var client = JSON.parse(localStorage.getItem('datosuser'));
var parametro1 = client[0].primerApendice;

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
    location.href = "index.html";
    localStorage.removeItem('datosuser');
}

/*------------------- Esta funcion sirve para generar el boton de cerrar la cuenta --------------------*/
function generarBotonsalir(){
    document.getElementById("form-super").innerHTML = '';
    document.getElementById("form-super").innerHTML += 
    `
        <button class="btn btn-outline-success my-2 my-sm-0" id="preventbutton" type="submit" href="index.html" onclick="cerrarCuenta()">Cerrar Cuenta</button>
    `;
}
generarBotonsalir();

/*------------------- Esta funcion sirve para descactivar el refresh en los botones --------------------*/
document.getElementById("preventbutton").addEventListener("click", function(event){
    event.preventDefault()
  });

function generarDatos(){
    document.getElementById("bienvenida").innerHTML = '';
    document.getElementById("bienvenida").innerHTML +=
    `<h1 class="display-3">Bienvenid@, ${usuarios[parametro1].Nombre} ${usuarios[parametro1].Apellido}!</h1>
     <img src="${usuarios[parametro1].Foto}" width="50" height="200" class="card-img-top" alt="...">
    `;
    document.getElementById("ContenedorCliente").innerHTML = '';
}
  