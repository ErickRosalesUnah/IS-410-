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
    <link rel="stylesheet" href="css/mainMap.css">
    <script src='https://api.mapbox.com/mapbox-gl-js/v1.8.1/mapbox-gl.js'></script>
    <link href='https://api.mapbox.com/mapbox-gl-js/v1.8.1/mapbox-gl.css' rel='stylesheet' />
    <link rel="stylesheet" type="text/css" media="screen" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/all.css"><!--FontAwesome-->
    <link rel="stylesheet" href="css/main.css">
    <link rel="stylesheet" href="css/estilos.css">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/morris.css">
</head>
<body>
  <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
    <a class="navbar-brand" href="#"><img width="30" height="30" src="img/Pagina/Logo2.png"></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  
    <div class="collapse navbar-collapse" id="navbarsExampleDefault">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="Inicio_Empresas.php">Rápido Ventas<span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Opciones</a>
          <div class="dropdown-menu" aria-labelledby="dropdown01">
            <a class="dropdown-item" onclick="ActualizarPerfil()" name="" href="#">Actualizar Perfil</a>
            <a class="dropdown-item" onclick="RegistroSucursales()" name="" href="#">Registro de Sucursales</a>
            <a class="dropdown-item" onclick="RegistroProductos()" name="" href="#">Registro de Productos</a>
            <a class="dropdown-item" onclick="EliminarSurcursal()" name="" href="#">Eliminar Sucursal</a>
            <a class="dropdown-item" onclick="EliminarProducto()" name="" href="#">Eliminar Productos</a>
            <a class="dropdown-item" onclick="ActualizarProducto()" name="" href="#">Actualizar Producto</a>
          </div>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Estadisticas</a>
          <div class="dropdown-menu" aria-labelledby="dropdown01">
            <a class="dropdown-item" onclick="GraficosVentas()" name="" href="#">Graficos de Ventas</a> 
            <a class="dropdown-item" onclick="GraficosProductos()" name="" href="#">Graficos de Productos Favoritos</a>
          </div>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0" id="form-empresas">
      </form>
    </div> 
  </nav>

  <main role="main">

    <!-- Main jumbotron for a primary marketing message or call to action -->
    <div class="jumbotron">
      <div class="container" id="containerBienvenida">
        
      </div>
    </div>
  
    <div class="container">
      <!-- Example row of columns -->
      <div class="row" id="ProductosContenedor">
        
      </div>
      <hr>
    </div> <!-- /container -->
  
  </main>
  
  <footer class="container">
    <p>&copy; Company 2020</p>
  </footer>

    <script src="js/jquery-3.4.1.min.js"></script>
    <script src="js/popper.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/morris.min.js" charset="UTF-8"></script>
    <script src="js/jquery.min.js"></script>
	  <script src="js/raphael-min.js"></script>
    <script src="js/axios.min.js"></script>
    <script src="js/controlador_empresas.js"></script>
</body>
</html>
