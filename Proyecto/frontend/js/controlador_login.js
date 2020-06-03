var activo = false;

function login(){
    axios({
        url:"../../Proyecto/backend/api/login.php",
        method:"post",
        responseType: "json",
        data:{
            email: document.getElementById('email').value,
            password: document.getElementById('password').value
        }
    }).then(res=>{
        if(res.data.codigoResultado==1){
            window.location.href = "Inicio_Clientes.php";
        }else{
            document.getElementById('error').style.display = 'block';
            document.getElementById('error').innerHTML = res.data.mensaje;
        }
            
        console.log(res);
    }).catch(err=>{
        console.log(err);
    });
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
                 <input type="text" class="form-control nr-sm-2" id="email" type="text" placeholder="Email"><br>
                 <input type="password" class="form-control nr-sm-2" id="password" type="text" placeholder="Password"><br>
                 <button class="btn btn-primary my-2 my-sm-0" type="button" onclick="login();">Login</button><br><br>
                 <div class="alert alert-danger" id="error" style="display: none;"></div>
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

