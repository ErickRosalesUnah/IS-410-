<?php
     $arreglo = array();
     $nombre=$_FILES['imagen1']['name'];
     $nombre2=$_FILES['imagen2']['name'];
     $guardado=$_FILES['imagen1']['tmp_name'];
     $guardado2=$_FILES['imagen2']['tmp_name'];
     if(!file_exists('../../frontend/img/NuevasEmpresas')){
         mkdir('../../frontend/img/NuevasEmpresas',0777,true);
         if(file_exists('../../frontend/img/NuevasEmpresas')){
             if(move_uploaded_file($guardado, '../../frontend/img/NuevasEmpresas/'.$nombre) || move_uploaded_file($guardado2, '../../frontend/img/NuevasEmpresas/'.$nombre2)){
                 array_push($arreglo, 'img/NuevasEmpresas/'.$nombre);
                 array_push($arreglo, 'img/NuevasEmpresas/'.$nombre2);
                 echo json_encode($arreglo);
                 return json_encode($arreglo);
             }else{
                 return "nada";
             }
         }
     }else{
         if(move_uploaded_file($guardado, '../../frontend/img/NuevasEmpresas/'.$nombre) || move_uploaded_file($guardado2, '../../frontend/img/NuevasEmpresas/'.$nombre2)){
            array_push($arreglo, 'img/NuevasEmpresas/'.$nombre);
            array_push($arreglo, 'img/NuevasEmpresas/'.$nombre2);
             echo json_encode($arreglo);
             return json_encode($arreglo);
         }else{
             return "nada";
         }
     }
?>