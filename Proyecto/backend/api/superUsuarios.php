<?php
    header("Content-Type: application/json");
    include_once("../class/class-superUsuario.php");
    $_POST = json_decode(file_get_contents('php://input'), true);
    switch($_SERVER['REQUEST_METHOD']){
        case 'POST': //Guardar
            $superUsuario = new SuperUsuario(
                $_POST['codigoSuperUsuario'],
                $_POST['superAdministrador'],
                $_POST['usuario'],
                $_POST['contrasena']
            );
            $superUsuario->guardarSuperUsuario();
        break;
        case 'GET':
            if(isset($_GET['id'])){
                SuperUsuario::obtenerSuperUsuario($_GET['id']);
            }else{
                SuperUsuario::obtenerSuperUsuarios();
            }
        break;
        case 'PUT':
            //Actualizar
            $_PUT = json_decode(file_get_contents('php://input'),true);
            $superUsuario = new SuperUsuario(
                $_PUT['codigoSuperUsuario'],
                $_PUT['superAdministrador'],
                $_PUT['usuario'],
                $_PUT['contrasena']
            );
            $superUsuario->actualizarSuperUsuario($_GET['id']);
        break;
        case 'DELETE':
            //Eliminar 
            SuperUsuario::eliminarSuperUsuario($_GET["id"]);
        break;
    }
?>