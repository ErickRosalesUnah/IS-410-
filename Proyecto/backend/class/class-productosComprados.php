<?php

class ProductosCompras{
    private $codigoUsuario;
    private $codigoEmpresa;
    private $codigoProducto;
    private $imagen;
    private $fecha;
    private $NombreProducto;
    private $Descripcion;
    private $Precio;
    private $PrecioPromocion;
    private $Promocion;

    public function __construct(
        $codigoUsuario,
        $codigoEmpresa,
        $codigoProducto,
        $imagen,
        $fecha,
        $NombreProducto,
        $Descripcion,
        $Precio,
        $PrecioPromocion,
        $Promocion
    ){
        $this->codigoUsuario = $codigoUsuario;
        $this->codigoEmpresa = $codigoEmpresa;
        $this->codigoProducto = $codigoProducto;
        $this->imagen = $imagen;
        $this->fecha = $fecha;
        $this->NombreProducto = $NombreProducto;
        $this->Descripcion = $Descripcion;
        $this->Precio = $Precio;
        $this->PrecioPromocion = $PrecioPromocion;
        $this->Promocion = $Promocion;
    }

    public static function obtenerProductosComprados(){
        $contenidoArchivo = file_get_contents('../data/productosComprados.json');
        echo $contenidoArchivo;
    }
    
    public static function obtenerProductoComprado($indice){
        $contenidoArchivo = file_get_contents("../data/productosComprados.json");
        $productoComprado = json_decode($contenidoArchivo, true);
        echo json_encode($productoComprado[$indice]);
    }

    public function guardarProductoComprado(){
        $contenidoArchivo = file_get_contents('../data/productosComprados.json');
        $productoComprado = json_decode($contenidoArchivo, true);
        $productoComprado[] = array(
            "codigoUsuario" => $this->codigoUsuario,
            "codigoEmpresa" => $this->codigoEmpresa,
            "codigoProducto" => $this->codigoProducto,
            "imagen" => $this->imagen,
            "fecha" => $this->fecha,
            "NombreProducto" => $this->NombreProducto,
            "Descripcion" => $this->Descripcion,
            "Precio" => $this->Precio,
            "PrecioPromocion" => $this->PrecioPromocion,
            "Promocion" => $this->Promocion
        );

        $archivo = fopen('../data/productosComprados.json', 'w');
        fwrite($archivo, json_encode($productoComprado));
        fclose($archivo); 

        echo '{"codigoResultado":1, "mensaje":"Producto Comprado guardado con exito"}';
    }

    public function actualizarProductoComprado($indice){
        $contenidoArchivos = file_get_contents("../data/productosComprados.json");
        $productosComprados = json_decode($contenidoArchivos, true);
        //$usuario = $usuarios[$indice];
        $productoComprado = array(
               'codigoUsuario' => $this->codigoUsuario,
               'codigoEmpresa' => $this->codigoEmpresa,
               'codigoProducto' => $this->codigoProducto,
               'imagen' => $this->imagen,
               'fecha' => $this->fecha,
               'NombreProducto' => $this->NombreProducto,
               'Descripcion' => $this->Descripcion,
               'Precio' => $this->Precio,
               'PrecioPromocion' => $this->PrecioPromocion,
               'Promocion' => $this->Promocion
        );
        $productosComprados[$indice] = $productoComprado;
        $archivo = fopen('../data/productosComprados.json','w');
        fwrite($archivo, json_encode($productosComprados));
        fclose($archivo);

        echo '{"codigoResultado":1, "mensaje":"Producto Comprado actualizado con exito"}';
 }
    
 public static function eliminarProductoComprado($indice){
    $contenidoArchivos = file_get_contents("../data/productosComprados.json");
    $productoComprado = json_decode($contenidoArchivos, true);
    array_splice($productoComprado, $indice, 1);
    $archivo = fopen('../data/productosComprados.json','w');
    fwrite($archivo, json_encode($productoComprado));
    fclose($archivo);

    echo '{"codigoResultado":1, "mensaje":"SuperUsuario eliminado con exito"}';
}
        /**
         * Get the value of codigoUsuario
         */ 
        public function getCodigoUsuario()
        {
                return $this->codigoUsuario;
        }

        /**
         * Set the value of codigoUsuario
         *
         * @return  self
         */ 
        public function setCodigoUsuario($codigoUsuario)
        {
                $this->codigoUsuario = $codigoUsuario;

                return $this;
        }

        /**
         * Get the value of codigoEmpresa
         */ 
        public function getCodigoEmpresa()
        {
                return $this->codigoEmpresa;
        }

        /**
         * Set the value of codigoEmpresa
         *
         * @return  self
         */ 
        public function setCodigoEmpresa($codigoEmpresa)
        {
                $this->codigoEmpresa = $codigoEmpresa;

                return $this;
        }

        /**
         * Get the value of codigoProducto
         */ 
        public function getCodigoProducto()
        {
                return $this->codigoProducto;
        }

        /**
         * Set the value of codigoProducto
         *
         * @return  self
         */ 
        public function setCodigoProducto($codigoProducto)
        {
                $this->codigoProducto = $codigoProducto;

                return $this;
        }

        /**
         * Get the value of imagen
         */ 
        public function getImagen()
        {
                return $this->imagen;
        }

        /**
         * Set the value of imagen
         *
         * @return  self
         */ 
        public function setImagen($imagen)
        {
                $this->imagen = $imagen;

                return $this;
        }

        /**
         * Get the value of NombreProducto
         */ 
        public function getNombreProducto()
        {
                return $this->NombreProducto;
        }

        /**
         * Set the value of NombreProducto
         *
         * @return  self
         */ 
        public function setNombreProducto($NombreProducto)
        {
                $this->NombreProducto = $NombreProducto;

                return $this;
        }

        /**
         * Get the value of Descripcion
         */ 
        public function getDescripcion()
        {
                return $this->Descripcion;
        }

        /**
         * Set the value of Descripcion
         *
         * @return  self
         */ 
        public function setDescripcion($Descripcion)
        {
                $this->Descripcion = $Descripcion;

                return $this;
        }

        /**
         * Get the value of Precio
         */ 
        public function getPrecio()
        {
                return $this->Precio;
        }

        /**
         * Set the value of Precio
         *
         * @return  self
         */ 
        public function setPrecio($Precio)
        {
                $this->Precio = $Precio;

                return $this;
        }

        /**
         * Get the value of PrecioPromocion
         */ 
        public function getPrecioPromocion()
        {
                return $this->PrecioPromocion;
        }

        /**
         * Set the value of PrecioPromocion
         *
         * @return  self
         */ 
        public function setPrecioPromocion($PrecioPromocion)
        {
                $this->PrecioPromocion = $PrecioPromocion;

                return $this;
        }

        /**
         * Get the value of Promocion
         */ 
        public function getPromocion()
        {
                return $this->Promocion;
        }

        /**
         * Set the value of Promocion
         *
         * @return  self
         */ 
        public function setPromocion($Promocion)
        {
                $this->Promocion = $Promocion;

                return $this;
        }

    /**
     * Get the value of fecha
     */ 
    public function getFecha()
    {
        return $this->fecha;
    }

    /**
     * Set the value of fecha
     *
     * @return  self
     */ 
    public function setFecha($fecha)
    {
        $this->fecha = $fecha;

        return $this;
    }
}

?>