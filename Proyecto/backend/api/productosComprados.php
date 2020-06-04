<?php
    header("Content-Type: application/json");
    include_once("../class/class-productosComprados.php");
    $_POST = json_decode(file_get_contents('php://input'), true);
    switch($_SERVER['REQUEST_METHOD']){
        case 'POST': //Guardar
            $productoComprado = new ProductosCompras(
                $_POST['codigoUsuario'],
                $_POST['codigoEmpresa'],
                $_POST['codigoProducto'],
                $_POST['imagen'],
                $_POST['fecha'],
                $_POST['NombreProducto'],
                $_POST['Descripcion'],
                $_POST['Precio'],
                $_POST['PrecioPromocion'],
                $_POST['Promocion']
            );
            $productoComprado->guardarProductoComprado();
        break;
        case 'GET':
            if(isset($_GET['id'])){ 
                ProductosCompras::obtenerProductoComprado($_GET['id']);
            }else{
                ProductosCompras::obtenerProductosComprados();
            }
        break;
        case 'PUT':
            //Actualizar
            $_PUT = json_decode(file_get_contents('php://input'),true);
            $productoComprado = new ProductosCompras(
                $_PUT['codigoUsuario'],
                $_PUT['codigoEmpresa'],
                $_PUT['codigoProducto'],
                $_PUT['imagen'],
                $_PUT['fecha'],
                $_PUT['NombreProducto'],
                $_PUT['Descripcion'],
                $_PUT['Precio'],
                $_PUT['PrecioPromocion'],
                $_PUT['Promocion']
            );
            $productoComprado->actualizarProductoComprado($_GET['id']);
        break;
        case 'DELETE':
            //Eliminar
            ProductosCompras::eliminarProductoComprado($_GET["id"]);
        break;
    }
?>