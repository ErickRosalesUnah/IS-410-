<?php
    header("Content-Type: application/json");
    include_once("../class/class-tipoCuentas.php");
    $_POST = json_decode(file_get_contents('php://input'), true);
    switch($_SERVER['REQUEST_METHOD']){
        case 'POST':
            //Guardar
            case 'POST': //Guardar
                $tipoCuentas = new TipoCuentas(
                    $_POST['tipo'],
                    $_POST['foto'],
                    $_POST['descripcion']
                );
                $tipoCuentas->guardarTipo();
        break;
        case 'GET':
            if(isset($_GET['id'])){
                TipoCuentas::obtenerTipo($_GET['id']);
            }else{
                TipoCuentas::obtenerTipos();
            }
        break;
        case 'PUT':
            //Actualizar
            $_PUT = json_decode(file_get_contents('php://input'),true);
            $tipoCuentas = new TipoCuentas(
                $_PUT['tipo'],
                $_PUT['foto'],
                $_PUT['descripcion']
            );
            $tipoCuentas->actualizarTipo($_GET['id']);
        break;
        case 'DELETE':
            //Eliminar 
            TipoCuentas::eliminarTipo($_GET["id"]);
        break;
    }
?>