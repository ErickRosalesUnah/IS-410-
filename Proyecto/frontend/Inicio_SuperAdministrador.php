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
    <link rel="stylesheet" type="text/css" media="screen" href="css/bootstrap.min.css"/>
    <link rel="stylesheet" href="css/all.css"><!--FontAwesome-->
    <link rel="stylesheet" href="css/main.css">
    <link rel="stylesheet" href="css/estilos.css">
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
          <a class="nav-link" href="Inicio_SuperAdministrador.php">Rápido Ventas<span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Opciones</a>
          <div class="dropdown-menu" aria-labelledby="dropdown01">
            <a class="dropdown-item" onclick="eliminarUsuario()" name="" href="#">Eliminar Usuario</a>
            <a class="dropdown-item" onclick="eliminarEmpresa()" name="" href="#">Eliminar Empresa</a>
          </div>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0" id="form-super">
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
      <div class="row" id="Contenedor">
        
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
    <script src="js/axios.min.js"></script>
    <script src="js/controlador_superusuario.js"></script>
</body>
</html>
