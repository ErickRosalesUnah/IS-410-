var seleproductos;
var categorias;
var superuser;
var localStorage = window.localStorage;


if(localStorage.getItem("superuser")==null){
      superuser= [
                {
                   SuperAdministrador:'Super Administrador',
                   Usuario:'superusuario1',
                   Contraseña:'superusuario1'
                }
             ];
             localStorage.setItem("superuser", JSON.stringify(superuser));
            }else{
                superuser = JSON.parse(localStorage.getItem('superuser'));
            }

if(localStorage.getItem("categorias") == null){
     categorias = [
    {
    tipo:"Usuario",
    foto:'img/Usuario.jpg',
    Descripcion: 'Este tipo de cuenta es para las personas que quieren tener una mejor interaccion con esta pagina ya que te ofrece varias opciones que no estan disponibles sin ser usuario, te ofrecemos una lista de promociones que pueden ser de tu interes segun a tus gusto.',
    datos:[
            {
              Nombre:'Jose',
              Apellido:'Rosales',
              Edad: 23,
              Pais: 'Honduras',
              Ciudad: 'Tegucigalpa',
              Genero: 'Masculino',
              Foto: 'img/Usuarios/Persona1.jpg',
              Usuario: 'josros23',
              Contraseña: 'josros23',
              PromocionesFavoritas: [
                                      
                                    ],
              EmpresasFavoritas: [
                                  
                                ],
              Compras: [
                         
                       ]
            },{
                Nombre:'Helen',
                Apellido:'Fuentes',
                Edad: 25,
                Pais: 'Honduras',
                Ciudad: 'Olanchito',
                Genero: 'Femenino',
                Foto: 'img/Usuarios/Persona2.jpg',
                Usuario: 'helfue25',
                Contraseña: 'helfue25',
                PromocionesFavoritas: [
                                                       
                                      ],
                EmpresasFavoritas: [
                                    
                                  ],
                Compras: [
                           
                         ]
              }
          ]
    },
    {
    tipo:"Empresa",
    foto:'img/Empresa.jpg',
    Descripcion: 'Crea una cuenta para poder promocionar tus productos, esta opciones es solo para empresas que quieren llevar sus promociones a conocimiento de los usuarios que esten interesados en optener las mejores promociones.',
    datos:[
            {
              Empresa:'Todo en Zapatos',
              Pais:'Honduras',
              Direccion:'Tegucigalpa',
              Latitud: 14.1,
              Longitud: ' -87.216714° 6′ 0″ Norte, 87° 13′ 0″ Oeste ',
              Banner:'',
              Logotipo:'img/Logotipos/TodoenZapatos.jpg',
              Usuario:'TodoenZapatos',
              Contraseña: 'TodoenZapatos',
              Productos:
                        [
                           {
                             imagen:'img/Zapatos/Zapato1.jpg',
                             NombreProducto:'Zapato Beige',
                             Descripcion:'Zapato de cuero color beige con una textura rugosa por fuera, la parte interior es muy comoda y su peso es ligero',
                             Precio: 1500,
                             PrecioPromocion: 1300,
                             Promocion: '20%',
                             ComentarioP:[
                                           {
                                            NombreComentario:'Helen',
                                            ApellidoComentario:'Fuentes',
                                            imagenC:'img/Usuarios/Persona2.jpg',
                                            Tiempo:10, 
                                            Principal:'Este articulo me parece bonito me gustaria que pusieran mas articulos en promocion de este tipo',
                                            ComentarioS:
                                                        [
                                                          {
                                                            NombreComentarioS:'Jose',
                                                            ApellidoComentarioS:'Rosales',
                                                            imagenC:'img/Usuarios/Persona1.jpg',
                                                            Tiempo:15,
                                                            Secundario:'Ya tienen mas articulos en promocion en su perfil'
                                                          },
                                                          {
                                                            NombreComentario:'Helen',
                                                            ApellidoComentario:'Fuentes',
                                                            imagenC:'img/Usuarios/Persona2.jpg',
                                                            Tiempo:16, 
                                                            Secundario:'Es bueno saber que revisan los comentarios'
                                                          }
                                                        ]
                                           },
                                           {
                                            NombreComentario:'Jose',
                                            ApellidoComentario:'Rosales',
                                            imagenC:'img/Usuarios/Persona1.jpg',
                                            Tiempo:20, 
                                            Principal:'Me gusta lo que tienen en esta empresa',
                                            ComentarioS:[]
                                           }
                                         ]
                           },
                           {
                            imagen:'img/Zapatos/Zapato2.jpg',
                            NombreProducto:'Zapato Negro',
                            Descripcion:'Zapato de cuero color negro con una textura lisa por fuera, la parte interior es muy comoda y su peso es ligero',
                            Precio: 1200,
                            PrecioPromocion: 1020,
                            Promocion: '15%',
                            ComentarioP:[
                              {
                                ComentarioS:
                                             [
                                
                                             ]
                              }
                           ]
                          },
                          {
                            imagen:'img/Zapatos/Zapato3.jpg',
                            NombreProducto:'Zapato Rojos',
                            Descripcion:'Zapato de cuero color rojo con una textura lisa por fuera, la parte interior es muy comoda y su peso es ligero',
                            Precio: 2000,
                            PrecioPromocion: 1200,
                            Promocion: '40%',
                            ComentarioP:[
                                           {
                                             ComentarioS:
                                                          [
                                             
                                                          ]
                                           }
                                        ]
                          }
                        ],
              RedesSociales:
                           [
                              {
                                  Facebook:'Todo en Zapatos'
                              }
                           ]
            },
            {
                Empresa:'Magic',
                Pais:'Honduras',
                Direccion:'Tegucigalpa',
                Latitud: 14.1,
                Longitud: ' -87.216714° 6′ 0″ Norte, 87° 13′ 0″ Oeste ',
                Banner:'',
                Logotipo:'img/Logotipos/Magic.jpg',
                Usuario:'Magic',
                Contraseña: 'Magic',
                Productos:
                          [
                            {
                              imagen:'img/Sandalias/Sandalias.jpg',
                              NombreProducto:'Sandalias de Plataforma',
                              Descripcion:'Sandalias de Plataforma de tres colores beige oscuro y claro con un azul marino, son muy comodas y su peso es ligero',
                              Precio: 2100,
                              PrecioPromocion: 1575,
                              Promocion: '25%',
                              ComentarioP:[
                                {
                                  ComentarioS:
                                               [
                                  
                                               ]
                                }
                             ]
                            },
                            {
                              imagen:'img/Sandalias/Sandalias2.jpg',
                              NombreProducto:'Sandalias de Plataforma de tela',
                              Descripcion:'Sandalias de Plataforma de tela con diversos colores, son muy comodas y su peso es ligero',
                              Precio: 2500,
                              PrecioPromocion: 1500,
                              Promocion: '40%',
                              ComentarioP:[
                                {
                                  ComentarioS:
                                               [
                                  
                                               ]
                                }
                             ]
                            },
                            {
                              imagen:'img/Sandalias/Sandalias3.jpg',
                              NombreProducto:'Sandalias de Plataforma de cuero',
                              Descripcion:'Sandalias de Plataforma de cuero oscuro con una textura rugosa por fuera, la parte interior es muy comoda y su peso es ligero',
                              Precio: 2300,
                              PrecioPromocion: 1840,
                              Promocion: '20%',
                              ComentarioP:[
                                {
                                  ComentarioS:
                                               [
                                  
                                               ]
                                }
                             ]
                            }
                          ],
                RedesSociales:
                             [
                                {
                                    Facebook:'Magic'
                                }
                             ]
            },
            {
                Empresa:'Man',
                Pais:'Honduras',
                Direccion:'Tegucigalpa',
                Latitud: 14.1,
                Longitud: ' -87.216714° 6′ 0″ Norte, 87° 13′ 0″ Oeste ',
                Banner:'',
                Logotipo:'img/Logotipos/Man.jpg',
                Usuario:'Man',
                Contraseña: 'Man',
                Productos:
                          [
                            {
                              imagen:'img/RopaHombre/RopaHombre.jpg',
                              NombreProducto:'Combinacion 1',
                              Descripcion:'Consta de un sueter negro con un chaleco jeans azul y un pantalo jeans negro',
                              Precio: 2100,
                              PrecioPromocion: 1890,
                              Promocion: '10%',
                              ComentarioP:[
                                {
                                  ComentarioS:
                                               [
                                  
                                               ]
                                }
                             ]
                            },
                            {
                               imagen:'img/RopaHombre/RopaHombre2.jpg',
                               NombreProducto:'Combinacion 2',
                               Descripcion:'Consta de una centro negro con una manga larga color negro y un pantalon jeans azul oscuro',
                               Precio: 2000,
                               PrecioPromocion: 1700,
                               Promocion: '15%',
                               ComentarioP:[
                                {
                                  ComentarioS:
                                               [
                                  
                                               ]
                                }
                             ]
                            },
                            {
                              imagen:'img/RopaHombre/RopaHombre3.jpg',
                              NombreProducto:'Combinacion 3',
                              Descripcion:'Consta de un centro de color con un sueter color gris oscuro y un pantalon de tela color gris claro',
                              Precio: 2300,
                              PrecioPromocion: 1725,
                              Promocion: '25%',
                              ComentarioP:[
                                {
                                  ComentarioS:
                                               [
                                  
                                               ]
                                }
                             ]
                            }
                          ],
                RedesSociales:
                             [
                                {
                                    Facebook:'Man'
                                }
                             ]
            },
            {
                Empresa:'Melissa',
                Pais:'Honduras',
                Direccion:'Tegucigalpa',
                Latitud: 14.1,
                Longitud: ' -87.216714° 6′ 0″ Norte, 87° 13′ 0″ Oeste ',
                Banner:'',
                Logotipo:'img/Logotipos/Melissa.jpg',
                Usuario:'Melissa',
                Contraseña: 'Melissa',
                Productos:
                          [
                             {
                               imagen:'img/RopaMujer/RopaMujer.jpg',
                               NombreProducto:'Combinacion 1',
                               Descripcion:'Consta de una blusa de color rosa con un pantalon jeans azul y unos zapatos de tacon alto color rosa',
                               Precio: 3000,
                               PrecioPromocion: 2250,
                               Promocion: '25%',
                               ComentarioP:[
                                {
                                  ComentarioS:
                                               [
                                  
                                               ]
                                }
                             ]
                             },
                             {
                               imagen:'img/RopaMujer/RopaMujer2.jpg',
                               NombreProducto:'Combinacion 2',
                               Descripcion:'Consta de un de dos piezas con un color moteado y un par de tennies blancos',
                               Precio: 2100,
                               PrecioPromocion: 1890,
                               Promocion: '10%',
                               ComentarioP:[
                                {
                                  ComentarioS:
                                               [
                                  
                                               ]
                                }
                             ]
                               
                             },
                             {
                               imagen:'img/RopaMujer/RopaMujer3.jpg',
                               NombreProducto:'Combinacion 3',
                               Descripcion:'Consta de un conjunto deportivo formado por una blusa negra y pantalon leggins jeans de colores con unos tennies de color negro',
                               Precio: 2300,
                               PrecioPromocion: 1725,
                               Promocion: '25%',
                               ComentarioP:[
                                {
                                  ComentarioS:
                                               [
                                  
                                               ]
                                }
                             ]
                             }
                          ],
                RedesSociales:
                             [
                                {
                                    Facebook:'Melissa'
                                }
                             ]
            },
            {
                Empresa:'Retro',
                Pais:'Honduras',
                Direccion:'Tegucigalpa',
                Latitud: 14.1,
                Longitud: ' -87.216714° 6′ 0″ Norte, 87° 13′ 0″ Oeste ',
                Banner:'',
                Logotipo:'img/Logotipos/Retro.jpg',
                Usuario:'Retro',
                Contraseña: 'Retro',
                Productos:
                          [
                            {
                               imagen:'img/RetroConsolas/Retro.jpg',
                               NombreProducto:'Nintendo 64',
                               Descripcion:'Consola de los años 90, si quieres revivir esos tiempos de infancia esta es la consola que buscabas, viene acompañada con un control y un juego',
                               Precio: 2000,
                               PrecioPromocion: 1400,
                               Promocion: '40%',
                               ComentarioP:[
                                {
                                  ComentarioS:
                                               [
                                  
                                               ]
                                }
                             ]
                            },
                            {
                               imagen:'img/RetroConsolas/Retro2.jpg',
                               NombreProducto:'Super Nintendo',
                               Descripcion:'Consola de principio años 90, si quieres revivir esos tiempos de infancia esta es la consola que buscabas, viene acompañada con dos controles y 5 juegos',
                               Precio: 1500,
                               PrecioPromocion: 1200,
                               Promocion: '20%',
                               ComentarioP:[
                                {
                                  ComentarioS:
                                               [
                                  
                                               ]
                                }
                             ]
                            },
                            {
                               imagen:'img/RetroConsolas/Retro3.jpg',
                               NombreProducto:'PlayStation 1',
                               Descripcion:'Consola de mediados de los años 90, si quieres revivir esos tiempos de infancia esta es la consola que buscabas, viene acompañada con un control y 3 juegos',
                               Precio: 3000,
                               PrecioPromocion: 1950,
                               Promocion: '35%',
                               ComentarioP:[
                                {
                                  ComentarioS:
                                               [
                                  
                                               ]
                                }
                             ]
                            }
                          ],
                RedesSociales:
                             [
                                {
                                    Facebook:'Retro'
                                }
                             ]
            },
            {
                Empresa:'YourPhone',
                Pais:'Honduras',
                Direccion:'Tegucigalpa',
                Latitud: 14.1,
                Longitud: ' -87.216714° 6′ 0″ Norte, 87° 13′ 0″ Oeste ',
                Banner:'',
                Logotipo:'img/Logotipos/YourPhone.jpg',
                Usuario:'YourPhone',
                Contraseña: 'YourPhone',
                Productos:
                          [
                            {
                               imagen:'img/Celulares/IphoneX.jpg',
                               NombreProducto:'Celular Iphone X',
                               Descripcion:'El iPhone X cuenta con una pantalla llamada Super Retina HD4​ de 5.8 pulgadas de tipo OLED que cubre los espacios de color DCI-P3 y sRGB, y además es compatible con imágenes de alto rango dinámico (HDR). También incluye la tecnología True Tone que se encuentra en el iPad Pro y otros dispositivos de la compañía, y cuenta con un brillo máximo típico de 625 cd/m2.',
                               Precio: 21000,
                               PrecioPromocion: 18900,
                               Promocion: '10%',
                               ComentarioP:[
                                {
                                  ComentarioS:
                                               [
                                  
                                               ]
                                }
                             ]
                            },
                            {
                               imagen:'img/Celulares/IphoneXI.jpg',
                               NombreProducto:'Celular Iphone XI',
                               Descripcion:'Pantalla de 6.1 pulgadas con resolución Liquid Retina y potenciado por un procesador Apple A13 Bionic con 64GB, 128GB o 256GB de almacenamiento interno.',
                               Precio: 28000,
                               PrecioPromocion: 23800,
                               Promocion: '15%',
                               ComentarioP:[
                                {
                                  ComentarioS:
                                               [
                                  
                                               ]
                                }
                             ]
                            },
                            {
                               imagen:'img/Celulares/S10-PLUS.jpg',
                               NombreProducto:'Celular Samsung S10 Plus',
                               Descripcion:'El Samsung Galaxy S10+ es el más poderoso de la serie Galaxy S10. Con una pantalla AMOLED QHD+ de 6.4 pulgadas, el Galaxy S10+ está potenciado por el procesador Exynos 9820 octa-core o Snapdragon 855, con opciones de 6GB o 12GB de RAM y 128GB, 512GB o 1TB de almacenamiento.',
                               Precio: 26000,
                               PrecioPromocion: 23400,
                               Promocion: '10%',
                               ComentarioP:[
                                {
                                  ComentarioS:
                                               [
                                  
                                               ]
                                }
                             ]
                            }
                          ],
                RedesSociales:
                             [
                                {
                                    Facebook:'YourPhone'
                                }
                             ]
            }
          ]
    }];
    localStorage.setItem("categorias", JSON.stringify(categorias));
}else{
    categorias = JSON.parse(localStorage.getItem('categorias'));
}



/*---------- Esta funcion llena el texto de crear cuenta--------*/
function BienvenidaCrearCuenta(){
    /*---------- Añadimos elementos al div con este id--------*/
    document.getElementById("contenedor-crear-cuenta").innerHTML = '';
    document.getElementById("contenedor-crear-cuenta").innerHTML += 
                `<h1 class="display-3">Crea tu Cuenta ahora!</h1>
                 <p>Informacion sobre los beneficios de tener una cuenta....  This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</p>
                `;
    document.getElementById("row-crear-cuenta").innerHTML = '';
    for(let i =0; i<categorias.length;i++){
        document.getElementById("row-crear-cuenta").innerHTML += 
        `<div class="col-md-6 col-sm-6 col-12">
         <img src="${categorias[i].foto}" class="card-img-top" alt="...">
         <h2>${categorias[i].tipo}</h2>
         <p>${categorias[i].Descripcion}</p>
         <p><a class="btn btn-secondary" role="button" onclick="formulario(${i})">Crear &raquo;</a></p>
         </div>
        `;
    }
    document.getElementById("form_button").innerHTML = '';
    document.getElementById("form_button").innerHTML += 
                 `<button class="btn btn-outline-success my-2 my-sm-0" data-toggle="modal" data-target="#modal-inicio2" onclick="modalInicio2()">Iniciar Sesión</button>
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
                 <img src="${categorias[usu].foto}" class="card-img-top" alt="...">
                 <h2>${categorias[usu].tipo}</h2>
                 Nombre:<input value="" id="nombre" type="text" placeholder="Usuario"><br>
                 Apellido:<input value="" id="apellido" type="text" placeholder="Usuario"><br>
                 Edad:<input id="edad" type="number" name="numero" value="0" min="0" max="100" step="1"><br>
                 Pais:<input value="" id="pais" type="text" placeholder="Usuario"><br>
                 Ciudad:<input value="" id="ciudad" type="text" placeholder="Usuario"><br>
                 Genero:<input value="" id="genero" type="text" placeholder="Usuario"><br>
                 Foto:<input value="" id="foto" type="text" placeholder="Usuario"><br>
                 Usuario:<input value="" id="usuario" type="text" placeholder="Usuario"><br>
                 Contraseña:<input value="" id="contraseña" type="text" placeholder="Usuario"><br>
                 <a class="btn btn-secondary" role="button" onclick="guardarUsuario(${usu})">Guardar &raquo;</a><br><br>
                 <a class="btn btn-secondary" role="button" onclick="volver(${usu})">Volver &raquo;</a>
                 `;
    }
    if(parametro == emp){
        document.getElementById('container').style.display = 'none';
        document.getElementById('FormularioEmpresa').style.display = 'block';
        document.getElementById("FormularioEmpresa").innerHTML = '';
        document.getElementById("FormularioEmpresa").innerHTML += 
                 `<div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                 <img src="${categorias[emp].foto}" class="card-img-top" alt="...">
                 <h2>${categorias[emp].tipo}</h2>
                 Empresa:<input value="" id="empresa" type="text" placeholder="Usuario"><br>
                 Pais:<input value="" id="pais" type="text" placeholder="Usuario"><br>
                 Direccion:<input value="" id="direccion" type="text" placeholder="Usuario"><br>
                 Longitud:<input value="" id="longitud" type="text" placeholder="Usuario"><br>
                 Latitud:<input value="" id="latitud" type="text" placeholder="Usuario"><br>
                 Banner:<input value="" id="banner" type="text" placeholder="Usuario"><br>
                 Logotipo:<input value="" id="logotipo" type="text" placeholder="Usuario"><br>
                 Usuario:<input value="" id="usuario" type="text" placeholder="Usuario"><br>
                 Contraseña:<input value="" id="contraseña" type="text" placeholder="Usuario"><br>
                 <a class="btn btn-secondary" role="button" onclick="guardarEmpresas(${emp})">Guardar &raquo;</a><br><br>

                 <a class="btn btn-secondary" role="button" onclick="volver(${emp})">Volver &raquo;</a>
                 </div>
                 `;
    }
}

/*---------- Esta funcion guarda los usuarios--------*/
function guardarUsuario(usu){
    let guardarusu = {
        Nombre:document.getElementById('nombre').value,
        Apellido:document.getElementById('apellido').value,
        Edad:document.getElementById('edad').value,
        Pais:document.getElementById('pais').value,
        Ciudad:document.getElementById('ciudad').value,
        Genero:document.getElementById('genero').value,
        Foto:document.getElementById('foto').value,
        Usuario:document.getElementById('usuario').value,
        Contraseña:document.getElementById('contraseña').value,
        PromocionesFavoritas:[],
        EmpresasFavoritas:[],
        Compras:[]
    };
    categorias[usu].datos.push(guardarusu);
    localStorage.setItem('categorias',JSON.stringify(categorias));
    document.getElementById('container').style.display = 'block';
    document.getElementById('FormularioUsuario').style.display = 'none';
}

/*---------- Esta funcion guarda los empresas--------*/
function guardarEmpresas(emp){
    let guardaremp = {
        Empresa:document.getElementById('empresa').value,
        Pais:document.getElementById('pais').value,
        Direccion:document.getElementById('direccion').value,
        Longitud:document.getElementById('longitud').value,
        Latitud:document.getElementById('latitud').value,
        Banner:document.getElementById('banner').value,
        Logotipo:document.getElementById('logotipo').value,
        Usuario:document.getElementById('usuario').value,
        Contraseña:document.getElementById('contraseña').value,
        Productos:[],
        RedesSociales:[]
    };
    categorias[emp].datos.push(guardaremp);
    localStorage.setItem('categorias',JSON.stringify(categorias));
    document.getElementById('container').style.display = 'block';
    document.getElementById('FormularioEmpresa').style.display = 'none';
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

/*---------- Esta funcion llama al modal de inicio de sesion--------*/
function modalInicio2(){
    document.getElementById("title-inicio").innerHTML = 'Inicia tu Sesion';
    document.getElementById("modal-body-inicio").innerHTML = '';
    document.getElementById("modal-body-inicio").innerHTML += 
        `   Usuario:<input value="" id="usuario" type="text" placeholder="Usuario"><br>
            Contraseña:<input id="password" type="password" placeholder="Password"><br>
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit" onclick="">Iniciar</button><br><br><br>
            <h6 class="comment-name by-author"><a href="Crear_Cuenta.html">Crear cuenta</a></h6>
        `;
}

/*---------- Esta funcion genera las listas de empresas en el index--------*/
function generarLista(){
    let apendice = 1;
    seleproductos = apendice;
    document.getElementById("lista-empresas").innerHTML = '';
    for(let i =0; i<categorias[apendice].datos.length;i++){
        const empresa = categorias[apendice].datos[i];
        document.getElementById("lista-empresas").innerHTML += 
        `<div class="col-lg-4 col-md-6 col-sm-6 col-12">
         <img src="${empresa.Logotipo}" class="card-img-top" alt="...">
         <h2>${empresa.Empresa}</h2>
         <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
         <p><a class="btn btn-secondary" href="#" role="button" onclick="generarProductos(${i})">Ver Detalles &raquo;</a></p>
         </div>
        `;
    }
}

function generarProductos(sele){
    document.getElementById('productos-lista').style.display = 'block';
    document.getElementById('productos-lista2').style.display = 'block'; 
    document.getElementById("descripcion-productos").innerHTML = `Productos: Tienda ${categorias[seleproductos].datos[sele].Empresa}`;
    document.getElementById("contenedor-productos").innerHTML = '';
    for(let j=0;j<categorias[seleproductos].datos[sele].Productos.length;j++){
        const produ = categorias[seleproductos].datos[sele].Productos[j];
        console.log(produ);
        document.getElementById("contenedor-productos").innerHTML += 
        `<div class="col-lg-4 col-md-6 col-sm-6 col-12">
         <img src="${produ.imagen}" class="card-img-top" alt="...">
         <h2>${produ.NombreProducto}</h2>
         <p>Descripcion: <br>${produ.Descripcion}</p>
         <p>Precio: Lps.${produ.Precio}</p>
         <p>Precio en Promocion: Lps.${produ.PrecioPromocion}</p>
         <p>Promocion: ${produ.Promocion}</p>
         <p><a class="btn btn-secondary" href="#" role="button" onclick="()">Mas &raquo;</a></p>
         </div>
        `;

    }
}