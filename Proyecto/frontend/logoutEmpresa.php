<?php
session_start();
session_destroy();
setcookie("token", "", time()-1,"/");
setcookie("Empresa", "", time()-1,"/");
setcookie("Direccion", "", time()-1,"/");
setcookie("Correo", "", time()-1,"/");
setcookie("codigoEmpresa", "", time()-1,"/");

header("Location: index.html");

?>