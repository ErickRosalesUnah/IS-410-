<?php
     $nombre=$_FILES['imagenFoto']['name'];
     $guardado=$_FILES['imagenFoto']['tmp_name'];
     if(!file_exists('../../frontend/img/Usuarios')){
         mkdir('../../frontend/img/Usuarios',0777,true);
         if(file_exists('../../frontend/img/Usuarios')){
             if(move_uploaded_file($guardado, '../../frontend/img/Usuarios/'.$nombre)){
                 echo 'img/Usuarios/'.$nombre;
                 return 'img/Usuarios/'.$nombre;
             }else{
                 return "nada";
             }
         }
     }else{
         if(move_uploaded_file($guardado, '../../frontend/img/Usuarios/'.$nombre)){
             echo 'img/Usuarios/'.$nombre;
             return 'img/Usuarios/'.$nombre;
         }else{
             return "nada";
         }
     }
?>