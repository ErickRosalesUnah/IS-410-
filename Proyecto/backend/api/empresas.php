<?php
    session_start();
    header("Content-Type: application/json");
    include_once("../class/class-empresas.php");
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
        $empresa = new Empresas(
            $_POST['codigoEmpresa'],
            $_POST['Empresa'],
            $_POST['Correo'],
            $_POST['Pais'],
            $_POST['Direccion'],
            $_POST['Latitud'],
            $_POST['Longitud'],
            $_POST['Banner'],
            $_POST['Logotipo'],
            $_POST['Usuario'],
            $_POST['Contrasena'],
            $_POST['Sucursales'],
            $_POST['Productos']
        );
        $empresa->guardarEmpresa();
        break;
        case 'GET':
            if(isset($_GET['id'])){
                Empresas::obtenerEmpresa($_GET['id']);
            }else{
                Empresas::obtenerEmpresas();
            }
        break;
        case 'PUT':
            //Actualizar
            $_PUT = json_decode(file_get_contents('php://input'),true);
            $usuario = new Empresas(
                $_PUT['codigoEmpresa'],
                $_PUT['Empresa'],
                $_PUT['Correo'],
                $_PUT['Pais'],
                $_PUT['Direccion'],
                $_PUT['Latitud'],
                $_PUT['Longitud'],
                $_PUT['Banner'],
                $_PUT['Logotipo'],
                $_PUT['Usuario'],
                $_PUT['Contrasena'],
                $_PUT['Sucursales'],
                $_PUT['Productos']
            );
            $usuario->actualizarEmpresa($_GET['id']);
        break;
        case 'DELETE':
            //Eliminar 
            Empresas::eliminarEmpresa($_GET["id"]);
        break;
    }
?>