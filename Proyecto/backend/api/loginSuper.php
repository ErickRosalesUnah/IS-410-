<?php
    session_start();
    header("Content-Type: application/json");
    include_once("../class/class-superUsuario.php");
    $_POST = json_decode(file_get_contents('php://input'), true);
    switch($_SERVER['REQUEST_METHOD']){
        case 'POST':
            //Verificar si existe usuario
            $usuario = SuperUsuario::verificarSuperUsuario($_POST['email'], $_POST['password']);
            if($usuario){
                //echo '{"codigoResultado":1,"mensaje":"Usuario autenticado", "token":"'.sha1(uniqid(rand(),true)).'"}';
                $resultado = array(
                    "codigoResultado"=>1,
                    "mensaje"=>"SuperUsuario autenticado",
                    "token"=>sha1(uniqid(rand(),true))
                );
                $_SESSION["token"] = $resultado["token"];
                setcookie("token",$resultado["token"], time()+(60*60*24*31),"/");
                setcookie("superAdministrador", $usuario["superAdministrador"], time()+(60*60*24*31),"/");
                setcookie("Correo", $usuario["Correo"], time()+(60*60*24*31),"/");
                setcookie("codigoSuperUsuario", $usuario["codigoSuperUsuario"], time()+(60*60*24*31),"/");
                echo json_encode($resultado);
            }else{
                setcookie("token", "", time()-1,"/");
                setcookie("superAdministrador", "", time()-1,"/");
                setcookie("Correo", "", time()-1,"/");
                setcookie("codigoSuperUsuario", "", time()-1,"/");
                echo '{"codigoResultado":0,"mensaje":"Usuario/Password incorrectos"}';
            }
            //echo json_encode($_POST);
    }
?>