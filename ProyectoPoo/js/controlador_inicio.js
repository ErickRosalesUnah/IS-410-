var activo = false;
var contenidousersLocalStorage = JSON.parse(localStorage.getItem('superuser'));
var contenidoLocalstorage = JSON.parse(localStorage.getItem('categorias'));

var datosuser;
var localStorage = window.localStorage;

if(localStorage.getItem("datosuser") ==null){
    datosuser= [
        
               ];
             localStorage.setItem("datosuser", JSON.stringify(datosuser));
            }else{
                datosuser = JSON.parse(localStorage.getItem('datosuser'));
            }

/*----------------- Seguridad para el login ------------------*/           
if(datosuser[0] != null){
    location.href = datosuser[0].direccion;
}



/*---------- Esta funcion llena el texto de bienvenida--------*/
function Bienvenida(){
    /*---------- Añadimos elementos al div con este id--------*/
    document.getElementById("form_button").innerHTML = '';
    document.getElementById("form_button").innerHTML += 
                 `<button class="btn btn-outline-success my-2 my-sm-0" data-toggle="modal" data-target="#modal-inicio" onclick="modalInicio()">Iniciar Sesión</button>
                 `;
    document.getElementById("container_principal").innerHTML = '';
    document.getElementById("container_principal").innerHTML += 
                `<h1 class="display-3">Bienvenido a Rápido Ventas!</h1>
                 <p>Informacion sobre la empresa....  This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</p>
                 <div id="mas_info" style="display: none;"></div>
                 <p><a class="btn btn-primary btn-lg" href="#" onclick="verMas()">Leer más &raquo;</a></p>
                `;
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

/*---------- Esta funcion llama al modal de inicio de sesion--------*/
function modalInicio(){
    document.getElementById("title-inicio").innerHTML = 'Inicia tu Sesion';
    document.getElementById("modal-body-inicio").innerHTML = '';
    document.getElementById("modal-body-inicio").innerHTML += 
        `   <form class="form" id="form">
            <input value="" id="username" type="text" class="form-control" placeholder="Ingrese usuario" required><br>
            <input value="" id="password" type="password" placeholder="Ingrese Contraseña" required><br><br>
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit" onclick="verificarUsuario()">Iniciar</button><br><br>
            <h6 class="comment-name by-author"><a href="Crear_Cuenta.html">Crear cuenta</a></h6>
            </form>
        `;
}

function verificarUsuario(){
    const usu = document.getElementById('username').value;
    const pas = document.getElementById('password').value;

    if(usu == contenidousersLocalStorage[0].Usuario && pas == contenidousersLocalStorage[0].Contraseña){
            let admin = {
                Nombre:'Super Usuario',
                primerApendice:0,
                direccion:'Inicio_SuperAdministrador.html'
            };
            datosuser.push(admin);
            localStorage.setItem('datosuser',JSON.stringify(datosuser));
            location.href = "Inicio_SuperAdministrador.html";
    }
    else if(usu != contenidousersLocalStorage.Usuario && pas != contenidousersLocalStorage.Contraseña)
    {
        console.log("No pude acceder");
    }

    /*------- Ciclo for para recorrer el arreglo guardado en localstorage y conseguir el apendice del cliente ---------*/
    for(let i=0;i<contenidoLocalstorage[0].datos.length;i++){
        if(usu == contenidoLocalstorage[0].datos[i].Usuario && pas == contenidoLocalstorage[0].datos[i].Contraseña){
            const segundo = i;
            let clientes = {
                Nombre:'Cliente',
                primerApendice:0,
                segundoApendice:JSON.stringify(segundo),
                direccion:'Inicio_Clientes.html'
            };
            datosuser.push(clientes);
            localStorage.setItem('datosuser',JSON.stringify(datosuser));
            location.href = "Inicio_Clientes.html";
        }
        else if(usu != contenidoLocalstorage[0].datos[i].Usuario && pas != contenidoLocalstorage[0].datos[i].Contraseña)
        {
            console.log("No pude acceder");
        }
    }

    /*------- Ciclo for para recorrer el arreglo guardado en localstorage y conseguir el apendice de la empresa ---------*/
    for(let i=0;i<contenidoLocalstorage[1].datos.length;i++){
        if(usu == contenidoLocalstorage[1].datos[i].Usuario && pas == contenidoLocalstorage[1].datos[i].Contraseña){
            const segundo = i;
            let empresa = {
                Nombre:'Empresa',
                primerApendice:0,
                segundoApendice:JSON.stringify(segundo),
                direccion:'Inicio_Empresas.html'
            };
            datosuser.push(empresa);
            localStorage.setItem('datosuser',JSON.stringify(datosuser));
            location.href = "Inicio_Empresas.html";
            
        }
        else if(usu != contenidoLocalstorage[1].datos[i].Usuario && pas != contenidoLocalstorage[1].datos[i].Contraseña)
        {
            console.log("No pude acceder");
        }
    }
}
