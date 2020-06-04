<?php
    session_start();
    header("Content-Type: application/json");
    include_once("../class/class-empresas.php");
    $_POST = json_decode(file_get_contents('php://input'), true);
    switch($_SERVER['REQUEST_METHOD']){
        case 'POST':
            //Verificar si existe usuario
            $empresa = Empresas::verificarEmpresas($_POST['email'], $_POST['password']);
            if($empresa){
                //echo '{"codigoResultado":1,"mensaje":"Usuario autenticado", "token":"'.sha1(uniqid(rand(),true)).'"}';
                $resultado = array(
                    "codigoResultado"=>1,
                    "mensaje"=>"Empresa autenticada",
                    "token"=>sha1(uniqid(rand(),true))
                );
                $_SESSION["token"] = $resultado["token"];
                setcookie("token",$resultado["token"], time()+(60*60*24*31),"/");
                setcookie("Empresa", $empresa["Empresa"], time()+(60*60*24*31),"/");
                setcookie("Direccion", $empresa["Direccion"], time()+(60*60*24*31),"/");
                setcookie("Correo", $empresa["Correo"], time()+(60*60*24*31),"/");
                setcookie("codigoEmpresa", $empresa["codigoEmpresa"], time()+(60*60*24*31),"/");
                echo json_encode($resultado);
            }else{
                setcookie("token", "", time()-1,"/");
                setcookie("Empresa", "", time()-1,"/");
                setcookie("Direccion", "", time()-1,"/");
                setcookie("Correo", "", time()-1,"/");
                setcookie("codigoEmpresa", "", time()-1,"/");
                echo '{"codigoResultado":0,"mensaje":"Usuario/Password incorrectos"}';
            }
            //echo json_encode($_POST);
        break;
    }
?>