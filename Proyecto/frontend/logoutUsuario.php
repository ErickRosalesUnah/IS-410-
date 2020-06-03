<?php
session_start();
session_destroy();
setcookie("token", "", time()-1,"/");
setcookie("Nombre", "", time()-1,"/");
setcookie("Apellido", "", time()-1,"/");
setcookie("Correo", "", time()-1,"/");
setcookie("codigoUsuario", "", time()-1,"/");

header("Location: index.html");

?>