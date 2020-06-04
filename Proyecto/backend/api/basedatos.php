<?php
    header("Content-Type: application/json");
    include_once("../class/class-basedatos.php");
    switch($_SERVER['REQUEST_METHOD']){
        case 'POST':
            $_POST = json_decode(file_get_contents('php://input'),true);
            $basedato = new Basedatos(
                $_POST["ciudad"],
                $_POST["lng"], 
                $_POST["lat"]
            );
            $basedato->guardarBasedatos();
        break;
        case 'GET':
            if(isset($_GET['id'])){
                Basedatos::obtenerBasedato($_GET['id']);
            }else{
                Basedatos::obtenerBasedatos();
            }
        break;
        case 'PUT':
            $_PUT = json_decode(file_get_contents('php://input'),true);
            $basedato = new Basedatos(
                $_PUT["ciudad"],
                $_PUT["lng"], 
                $_PUT["lat"]
            );
            $basedato->actualizarBasedatos($_GET['id']);
        break;
        case 'DELETE':
            Basedatos::eliminarBasedatos($_GET["id"]);
        break;
    }
?>