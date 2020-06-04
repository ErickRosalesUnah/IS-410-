<?php
   session_start();
   if(!isset($_SESSION["token"]))
      header("Location: 401.html");

   if(!isset($_COOKIE["token"]))
   header("Location: 401.html");

   if($_SESSION["token"] != $_COOKIE["token"])
   header("Location: 401.html");
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="shortcut icon" href="img/Pagina/Logo.png" />
    <title>Rápido Ventas</title>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" type="text/css" media="screen" href="css/bootstrap.min.css"/>
    <link rel="stylesheet" href="css/all.min.css"><!--FontAwesome-->
    <link rel="stylesheet" href="css/main.css">
    <link rel="stylesheet" href="css/estilos.css">
    <link rel="stylesheet" href="css/style.css">
</head>
<body onload="">
  <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
    <a class="navbar-brand" href="#"><img width="30" height="30" src="img/Pagina/Logo2.png"></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  
    <div class="collapse navbar-collapse" id="navbarsExampleDefault">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="Inicio_Clientes.php">Rápido Ventas<span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" name="drop1" href="#" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Opciones</a>
          <div class="dropdown-menu" name="drop2" aria-labelledby="dropdown01">
            <a class="dropdown-item" href="#" name="Cambiar Datos" onclick="cambiarDatos()">Cambiar Datos</a>
            <a class="dropdown-item" href="#" name="Perfiles de Empresas" onclick="perfilEmpresa()">Perfiles de Empresas</a>
            <a class="dropdown-item" href="#" name="Promociones Asociadas" onclick="proFavoritas()">Promociones Favoritas</a>
            <a class="dropdown-item" href="#" name="Promociones de GoogleMaps" onclick="proCompra()">Productos Comprados</a>
            <a class="dropdown-item" href="#" name="Promociones de GoogleMaps" onclick="proGoogle()">Promociones de GoogleMaps</a>
          </div>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0" id="form-clientes">
        
      </form>
    </div>
  </nav> 

  <main role="main">
    <!-- Main jumbotron for a primary marketing message or call to action -->
    <div class="jumbotron" id="jumbotron" style="display: block;">
      <div class="container" id="bienvenida">
        
      </div>
    </div>
    <div class="container">
      <!-- Example row of columns -->
      <div class="row" id="ContenedorCliente">
        
      </div>
      <hr>
    </div> <!-- /container -->
    
      <!-- Example row of columns -->
      <div class="row" id="contenedor-preferencias">
        <div id="layout" class="col-md-12" data-tracking-area="layout">
          <div id="thread_wrapper">
          <header id="main-nav" data-tracking-area="main-nav">
           <nav class="nav nav-primary">
             <ul>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" name="drop1" href="#" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Preferencias</a>
                <div class="dropdown-menu" name="drop2" aria-labelledby="dropdown01">
                  <a class="dropdown-item" name="" onclick="">Productos Favoritos</a>
                  <a class="dropdown-item" name="" onclick="">Empresas Favoritas</a>
                </div>
              </li>
             </ul>
           </nav>
          </header>
          </div>
        </div>
      </div>
  
      <hr>
  
    </div> <!-- /container -->
  
  </main>

  <footer class="container">
    <p>&copy; Compañia Rápido Ventas 2020</p>
  </footer>

    <script src="js/jquery-3.4.1.min.js"></script>
    <script src="js/popper.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/axios.min.js"></script>
    <script src="js/jspdf.min.js"></script>
    <script src="js/controlador_clientes.js"></script>
</body>
</html>

<!-- Modal Carrito-->
<div class="modal fade" id="CarritoModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true" style="overflow-y: scroll;">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="TituloCarrito"></h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body" id="mmodal-carrito">
        
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
      </div>
    </div>
  </div>