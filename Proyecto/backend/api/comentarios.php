<?php
    header("Content-Type: application/json");
    include_once("../class/class-comentarios.php");
    $_POST = json_decode(file_get_contents('php://input'), true);
    switch($_SERVER['REQUEST_METHOD']){
        case 'POST': //Guardar
            $comentario = new Comentarios(
                $_POST['codigoEmpresa'],
                $_POST['codigoProducto'],
                $_POST['codigoComentario'],
                $_POST['NombreComentario'],
                $_POST['ApellidoComentario'],
                $_POST['imagenC'],
                $_POST['Tiempo'],
                $_POST['Principal'],
                $_POST['ComentarioS']
            );
            $comentario->guardarComentario();
        break;
        case 'GET':
            if(isset($_GET['id'])){ 
                Comentarios::obtenerComentario($_GET['id']);
            }else{
                Comentarios::obtenerComentarios();
            }
        break;
        case 'PUT':
            //Actualizar
            $_PUT = json_decode(file_get_contents('php://input'),true);
            $usuario = new Comentarios(
                $_PUT['codigoEmpresa'],
                $_PUT['codigoProducto'],
                $_PUT['codigoComentario'],
                $_PUT['NombreComentario'],
                $_PUT['ApellidoComentario'],
                $_PUT['imagenC'],
                $_PUT['Tiempo'],
                $_PUT['Principal'],
                $_PUT['ComentarioS']
            );
            $usuario->actualizarComentario($_GET['id']);
        break;
        case 'DELETE':
            //Eliminar 
            Comentarios::eliminarComentario($_GET["id"]);
        break;
    }
?>