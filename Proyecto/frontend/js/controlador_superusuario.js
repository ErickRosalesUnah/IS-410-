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
    document.getElementById("Contenedor").innerHTML += 
    `
     <table border="0" width="600" cellspacing="0" cellpadding="0">
        <h2>Planes para empresas</h2>
        <colgroup>
            <col width="300">
            <col width="300">
        </colgroup>
            <tbody>
            <tr>
            <td width="300" height="17"><a  onclick="ropa();"><img class="alignleft" title="" src="https://blog.cofike.com/wp-content/uploads/2017/11/tienda-de-ropa.png" alt="" width="42" height="42"></a><a title="" onclick="ropa();">Tienda de ropa</a></td>
            <td></td>
            </tr>
            <tr>
            <td width="300" height="17"><a  onclick="viaje();"><img class="alignleft" title="" src="https://blog.cofike.com/wp-content/uploads/2018/01/42x42-agencia-de-viajes.png" alt="" width="42" height="42"></a><a title=""  onclick="viaje();">Agencia de viajes</a></td>
            <td width="300" height="17"><a  onclick="hotel();"><img class="alignleft" title="" src="https://blog.cofike.com/wp-content/uploads/2018/01/42x42-hotel.jpg" alt="" width="42" height="42"></a><a title=""  onclick="hotel();">Hotel</a></td>
            </tr>
     </table>
    `;
}

function viaje(){
    document.getElementById("containerBienvenida").innerHTML = '';
    document.getElementById("containerBienvenida").innerHTML +=
    `<h1 class="display-3">!Plan para empresa de Viaje!</h1>
    `;
    document.getElementById("Contenedor").innerHTML = '';
    document.getElementById("Contenedor").innerHTML += 
    `<div class="col-lg-4 col-md-6 col-sm-6 col-sm-12 col-12" id="" style="display: block;">
        <img src="img/Pagina/img.jpg" class="card-img-top" alt="...">
        <button class="btn btn-primary my-2 my-sm-0" type="button" onclick="generarDatos()">Volver</button>
        <p>Si hay un sector que ha tenido que modificar totalmente el planteamiento de su modelo de negocio, ese es el sector de las agencias de viajes. La irrupción de Internet cambió para siempre las formas de comprar billetes de tren, de avión e incluso paquetes turísticos. Pero, al mismo tiempo, el auge del low cost multiplicó el número de viajeros. Por eso merece la pena plantear el plan de empresa de una agencia de viajes, que puede ser un negocio rentable, especialmente con algo de especialización</p>
        <h3>Modelo de negocio y propuesta de valor</h3>
        <p>Hasta hace unos quince años aproximadamente, para comprar un billete de avión, lo normal era dirigirse a las oficinas de una agencia de viajes. La clientela era masiva y muy generalista, y por lo tanto surgieron muchas agencias que se dedicaban a vender vuelos, billetes de tren o paquetes turísticos a esos clientes poco especializados. Se cobraba una comisión interesante en cada operación, y lo habitual es que los clientes no hicieran muchas comparativas con los precios de la competencia.

        Pero poco a poco, Internet fue atrayendo a la clientela más generalista y preocupada por el precio. La aparición de los buscadores y de las compañías de bajo coste que solo vendían por Internet permitió a muchas personas conseguir buenos precios e investigar ofertas cómodamente desde el sillón de casa. En un primer momento, las agencias de viajes tradicionales se confiaron, y pensaron que sus consejos personalizados iban a retener a los clientes. Pero como la preocupación de buena parte de la clientela era comprar productos estándares al mejor precio, no pudieron competir  perdieron mucha cuota de mercado.
        
        Hoy en día, la clave está en la especialización, el diseño del viaje a medida y la calidad del servicio. No tiene sentido competir solo por precios con las agencias online. El éxito está en centrarse en clientes que buscan consejos y aportarles precios competitivos, o incluso orientarse a nichos de mercado, con viajes totalmente a medida, totalmente originales, para clientes con un poder adquisitivo alto. U optar por productos como los cruceros y los paquetes vacacionales, que siguen funcionando muy bien.</p>
        <h3>Evolución del sector</h3>
        <p>Tras una gran caída de las ventas de las agencias minoristas entre 2007 y 2009, la situación se ha ido estabilizando y recuperando año tras año, aunque el peso de las agencias tradicionales sigue disminuyendo frente a las ventas por Internet, que en 2018 representaban un 33% del total de ventas minoristas de las agencias de viajes.</p>
        <img src="img/Pagina/img1.jpg" class="card-img-top" alt="...">
        <p>Sin embargo, hablamos de un mercado minorista (Internet excluido) de casi 10.000 millones de euros de facturación en España en 2018, lo que significa que hay lugar para empresas innovadoras y especializadas con locales a pie de calle.</p>
</div>
    `;
}

function ropa(){
    document.getElementById("containerBienvenida").innerHTML = '';
    document.getElementById("containerBienvenida").innerHTML +=
    `<h1 class="display-3">!Plan de negocio para una tienda de ropa!</h1>
    `;
    document.getElementById("Contenedor").innerHTML = '';
    document.getElementById("Contenedor").innerHTML += 
    `<div class="col-lg-4 col-md-6 col-sm-6 col-sm-12 col-12" id="" style="display: block;">
        <img src="img/Pagina/ropa.jpg" class="card-img-top" alt="...">
        <button class="btn btn-primary my-2 my-sm-0" type="button" onclick="generarDatos()">Volver</button>
        <p>Montar una tienda de ropa es una de las formas más comunes de emprender en España, y por este motivo hemos decidido preparar este artículo explicativo de ejemplo de plan de empresa para esta actividad. Desde el planteamiento de la idea de negocio hasta la estimación de ventas y los resultados, la lectura de este post es una gran ayuda para cualquiera que quiera abrir una tienda de ropa.</p>
        <h3>Planteamiento de la idea de negocio</h3>
        <p>Hay muchas formas de plantear el modelo de negocio de un proyecto de tienda de ropa. Puede ser una actividad online o con local propio, se puede hacer una distribución multimarca o al contrario entrar en una red de franquiciados, y existe la opción de vender creaciones propias o de subcontratar el diseño. La ropa puede ser de “prêt-à-porter” o a medida, dirigirse a un público generalista o al contrario a un segmento muy concreto.

        Antes de lanzar el negocio, es fundamental plantearse todas esas opciones (y muchas más), para definir y plantear correctamente el proyecto de empresa. En este ejemplo, vamos a imaginar que se abre una tienda de ropa para mujer centrada en tallas grandes, y con unos modelos de diseño propio aunque de fabricación subcontratada.
        
        </p>
        <img src="img/RopaMujer/RopaMujer.jpg" class="card-img-top" alt="...">
        <h3>Equipo promotor del proyecto</h3>
        <p>Para este tipo de negocio, lo ideal es tener a un promotor con experiencia en la moda, mejor aún si puede combinar la experiencia en venta y en diseño de ropa. Hay que ser muy consciente de que las pequeñas tiendas generalistas están desapareciendo a favor del crecimiento de las grandes cadenas y marcas, y conocer el funcionamiento de esas empresas líderes es una ventaja para poder competir contra ellas.</p>
     </div>
     `;
}

function hotel(){
    document.getElementById("containerBienvenida").innerHTML = '';
    document.getElementById("containerBienvenida").innerHTML +=
    `<h1 class="display-3">!Plan de empresa para un hotel!</h1>
    `;
    document.getElementById("Contenedor").innerHTML = '';
    document.getElementById("Contenedor").innerHTML += 
    `<div class="col-lg-4 col-md-6 col-sm-6 col-sm-12 col-12" id="" style="display: block;">
        <img src="img/Pagina/imgh.jpg" class="card-img-top" alt="...">
        <button class="btn btn-primary my-2 my-sm-0" type="button" onclick="generarDatos()">Volver</button>
        <p>El turismo ha sido durante la crisis una de las vías de crecimiento para la economía española. Después de unos años de consolidación, ahora el volumen de negocio de los hoteles es bastante alto, pese a la competencia de nuevos formatos. Vamos a plantear el plan de negocio para un establecimiento hotelero, una oportunidad para montar una empresa, especialmente en las zonas de sol y playa, pero no exclusivamente. Datos actualizados en mayo 2019.</p>
        <h3>Datos del sector</h3>
        <p>Dada la importancia estratégica del turismo, uno de los indicadores más conocidos del INE es la ocupación hotelera. En este plan de negocio hemos considerado la apertura de un hotel tradicional, y por lo tanto los datos que nos interesan no incluyen los hostales o las casas rurales, sino solamente los establecimientos que tienen entre una a cinco estrellas de oro.

        Durante el año 2018, según el INE operaron unos 8.105 hoteles de esas características, que acogieron más de 95 millones de viajeros (50 millones extranjeros). La ocupación media fue de 63% y del 69% los fines de semana.
        
        Si miramos más en detalle la evolución en los últimos años, podemos apreciar como el incremento de la demanda se ha visto acompañado con una mayor oferta. El número de hoteles ha crecido un 3% en los últimos 3 años, con una ocupación media que se mantiene e incluso aumenta ligeramente. Respecto al 2008, último año antes de la crisis, el número de establecimientos ha crecido un 16% y la tasa de ocupación es netamente superior a entonces.</p>
        <img src="img/Pagina/imgh1.jpg" class="card-img-top" alt="...">
        <h3>Estudio de mercado</h3>
        <p>Antes de pensar en abrir un nuevo hotel, es fundamental estudiar la competencia en la zona. Los datos del INE dan referencias interesantes de las provincias más idóneas para un nuevo establecimiento, pero en realidad hay que hacer un estudio más pormenorizado, por áreas concretas. Puede suceder que haya sobreoferta de habitaciones en una ciudad, pero que falten hoteles en general en la provincia y viceversa.

        Hay que destacar que el INE tiene datos para áreas turísticas, incluso para puntos turísticos (ciudades), que pueden ser de ayuda para saber la capacidad hotelera y los ratios de ocupación, y encontrar huecos donde ubicar un nuevo hotel.</p>
     </div>
     `;
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