<?php
session_start();
session_destroy();
setcookie("token", "", time()-1,"/");
setcookie("superAdministrador", "", time()-1,"/");
setcookie("Correo", "", time()-1,"/");
setcookie("codigoSuperUsuario", "", time()-1,"/");

header("Location: index.html");

?>