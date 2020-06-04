<?php
     $nombre=$_FILES['imagenPro']['name'];
     $guardado=$_FILES['imagenPro']['tmp_name'];
     if(!file_exists('../../frontend/img/NuevasEmpresas')){
         mkdir('../../frontend/img/NuevasEmpresas',0777,true);
         if(file_exists('../../frontend/img/NuevasEmpresas')){
             if(move_uploaded_file($guardado, '../../frontend/img/NuevasEmpresas/'.$nombre)){
                 echo 'img/NuevasEmpresas/'.$nombre;
                 return 'img/NuevasEmpresas/'.$nombre;
             }else{
                 return "nada";
             }
         }
     }else{
         if(move_uploaded_file($guardado, '../../frontend/img/NuevasEmpresas/'.$nombre)){
             echo 'img/NuevasEmpresas/'.$nombre;
             return 'img/NuevasEmpresas/'.$nombre;
         }else{
             return "nada";
         }
     }
?>