<?php
    session_start();
    header("Content-Type: application/json");
    include_once("../class/class-usuarios.php");
    $_POST = json_decode(file_get_contents('php://input'), true);

    if(!isset($_SESSION["token"])){
     echo '{"Acceso no Autorizado"}';
     exit;
    }
    if(!isset($_COOKIE["token"])){
     echo '{"Acceso no Autorizado"}';
     exit;
    }
    if($_SESSION["token"] != $_COOKIE["token"]){
     echo '{"Acceso no Autorizado"}';
     exit;
    }

    switch($_SERVER['REQUEST_METHOD']){
        case 'POST': //Guardar
            $usuario = new Usuario(
                $_POST['codigoUsuario'],
                $_POST['Nombre'],
                $_POST['Apellido'],
                $_POST['Correo'],
                $_POST['Edad'],
                $_POST['Pais'],
                $_POST['Ciudad'],
                $_POST['Genero'],
                $_POST['Foto'],
                $_POST['Usuario'],
                $_POST['Contrasena'],
                $_POST['PromocionesFavoritas'],
                $_POST['EmpresasFavoritas'],
                $_POST['Compras']
            );
            $usuario->guardarUsuario();
        break;
        case 'GET':
            if(isset($_GET['id'])){ 
                Usuario::obtenerUsuario($_GET['id']);
            }else{
                Usuario::obtenerUsuarios();
            }
        break;
        case 'PUT':
            //Actualizar
            $_PUT = json_decode(file_get_contents('php://input'),true);
            $usuario = new Usuario(
                $_PUT['codigoUsuario'],
                $_PUT['Nombre'],
                $_PUT['Apellido'],
                $_PUT['Correo'],
                $_PUT['Edad'],
                $_PUT['Pais'],
                $_PUT['Ciudad'],
                $_PUT['Genero'],
                $_PUT['Foto'],
                $_PUT['Usuario'],
                $_PUT['Contrasena'],
                $_PUT['PromocionesFavoritas'],
                $_PUT['EmpresasFavoritas'],
                $_PUT['Compras']
            );
            $usuario->actualizarUsuario($_GET['id']);
        break;
        case 'DELETE':
            //Eliminar
            Usuario::eliminarUsuario($_GET["id"]);
        break;
    }
?>