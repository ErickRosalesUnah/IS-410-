<?php
    session_start();
    header("Content-Type: application/json");
    include_once("../class/class-usuarios.php");
    $_POST = json_decode(file_get_contents('php://input'), true);
    switch($_SERVER['REQUEST_METHOD']){
        case 'POST':
            //Verificar si existe usuario
            $usuario = Usuario::verificarUsuario($_POST['email'], $_POST['password']);
            if($usuario){
                //echo '{"codigoResultado":1,"mensaje":"Usuario autenticado", "token":"'.sha1(uniqid(rand(),true)).'"}';
                $resultado = array(
                    "codigoResultado"=>1,
                    "mensaje"=>"Usuario autenticado",
                    "token"=>sha1(uniqid(rand(),true))
                );
                $_SESSION["token"] = $resultado["token"];
                setcookie("token",$resultado["token"], time()+(60*60*24*31),"/");
                setcookie("Nombre", $usuario["Nombre"], time()+(60*60*24*31),"/");
                setcookie("Apellido", $usuario["Apellido"], time()+(60*60*24*31),"/");
                setcookie("Correo", $usuario["Correo"], time()+(60*60*24*31),"/");
                setcookie("codigoUsuario", $usuario["codigoUsuario"], time()+(60*60*24*31),"/");
                echo json_encode($resultado);
            }else{
                setcookie("token", "", time()-1,"/");
                setcookie("Nombre", "", time()-1,"/");
                setcookie("Apellido", "", time()-1,"/");
                setcookie("Correo", "", time()-1,"/");
                setcookie("codigoUsuario", "", time()-1,"/");
                echo '{"codigoResultado":0,"mensaje":"Usuario/Password incorrectos"}';
            }
            //echo json_encode($_POST);
    }
?>