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
    }).catch(error=>{
        console.error(error);
    });
}
obtenerEmpresas();

var usuarios = [];
const url2 = '../../Proyecto/backend/api/usuarios.php';
function obtenerUsuarios(){
    axios({
        method:'GET',
        url:url2,
        responseType:'json'
    }).then(res=>{
        console.log(res.data);
        this.usuarios = res.data;
    }).catch(error=>{
        console.error(error);
    });
}
obtenerUsuarios();

var superUsuarios = [];
const url3 = '../../Proyecto/backend/api/superUsuarios.php';
function obtenerSuperUsuarios(){
    axios({
        method:'GET',
        url:url3,
        responseType:'json'
    }).then(res=>{
        console.log(res.data);
        this.superUsuarios = res.data;
    }).catch(error=>{
        console.error(error);
    });
}
obtenerSuperUsuarios();

/*------------Aqui hago uso de localStorage para guardar informacion de login--------- */
var datosuser;
var localStorage = window.localStorage;

if(localStorage.getItem("datosuser") ==null){
    datosuser= [
        
               ];
             localStorage.setItem("datosuser", JSON.stringify(datosuser));
            }else{
                datosuser = JSON.parse(localStorage.getItem('datosuser'));
            }


/*---------- Esta funcion llena el texto de bienvenida--------*/
function Bienvenida(){
    /*---------- Añadimos elementos al div con este id--------*/
    document.getElementById("form_button").innerHTML = '';
    document.getElementById("form_button").innerHTML += 
                 `<a class="btn btn-primary btn-lg" href="index.html" onclick="">Principal</a>
                 <a class="btn btn-primary btn-lg" href="Crear_Cuenta.html" onclick="">Crear Cuenta</a>
                 `;
    document.getElementById("container_principal").innerHTML = '';
    document.getElementById("container_principal").innerHTML += 
                `<h1 class="display-3">Bienvenido al Login de Rápido Ventas!</h1>
                 <p>Informacion sobre la empresa....  This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</p>
                 <div id="mas_info" style="display: none;"></div>
                 <p><a class="btn btn-primary btn-lg" href="#" onclick="verMas()">Leer más &raquo;</a></p>
                 <form class="form" id="form">
                 <input value="" id="username" type="text" class="form-control" placeholder="Ingrese usuario" required><br>
                 <input value="" id="password" type="password" placeholder="Ingrese Contraseña" required><br><br>
                 <button class="btn btn-outline-success my-2 my-sm-0" type="submit" onclick="verificarUsuario()">Iniciar</button><br><br>
                 <h6 class="comment-name by-author"><a href="Crear_Cuenta.html">Crear cuenta</a></h6>
                 </form>
                `;
}
Bienvenida();

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

/*----------------- Seguridad para el login ------------------*/     
if(datosuser[0] != null){
    location.href = datosuser[0].direccion;
}


/*---------------------Sirve para verificar el tipo de acceso--------------------*/
function verificarUsuario(){
    const usu = document.getElementById('username').value;
    const pas = document.getElementById('password').value;

    if(usu == superUsuarios[0].usuario && pas == superUsuarios[0].contrasena){
            let admin = {
                Nombre:'Super Usuario',
                primerApendice:0,
                direccion:'Inicio_SuperAdministrador.html'
            };
            datosuser.push(admin);
            localStorage.setItem('datosuser',JSON.stringify(datosuser));
            location.href = "Inicio_SuperAdministrador.html";
    }
    else if(usu != superUsuarios[0].usuario && pas != superUsuarios[0].contrasena)
    {
        console.log("No pude acceder");
    }

    /*------- Ciclo for para recorrer el arreglo guardado en localstorage y conseguir el apendice del cliente --------*/
    for(let i=0;i<usuarios.length;i++){
        const usuario = usuarios[i];
        if(usu == usuario.Usuario && pas == usuario.Contrasena){
            const segundo = i;
            let clientes = {
                nombre:'Cliente',
                primerApendice:JSON.stringify(segundo),
                direccion:'Inicio_Clientes.html'
            };
            datosuser.push(clientes);
            localStorage.setItem('datosuser',JSON.stringify(datosuser));
            location.href = "Inicio_Clientes.html";
        }
        else if(usu != usuario.Usuario && pas != usuario.Contrasena)
        {
            console.log("No pude acceder");
        }
    }

    /*------- Ciclo for para recorrer el arreglo guardado en localstorage y conseguir el apendice de la empresa ---------*/
    for(let i=0;i<empresas.length;i++){
        const empresa = empresas[i];
        if(usu == empresa.Usuario && pas == empresa.Contrasena){
            const segundo = i;
            let empres = {
                Nombre:'Empresa',
                primerApendice:JSON.stringify(segundo),
                direccion:'Inicio_Empresas.html'
            };
            datosuser.push(empres);
            localStorage.setItem('datosuser',JSON.stringify(datosuser));
            location.href = "Inicio_Empresas.html";
            
        }
        else if(usu != empresa.Usuario && pas != empresa.Contrasena)
        {
            console.log("No pude acceder");
        }
    }
}