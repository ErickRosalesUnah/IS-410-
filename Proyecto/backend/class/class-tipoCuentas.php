<?php

class TipoCuentas{
    private $tipo;
    private $foto;
    private $descripcion;

    public function __construct(
        $tipo,
        $foto,
        $descripcion
    ){
        $this->tipo = $tipo;
        $this->foto = $foto;
        $this->descripcion = $descripcion;
    
    }

    public static function obtenerTipos(){
        $contenidoArchivo = file_get_contents('../data/tipoCuentas.json');
        echo $contenidoArchivo;
    }

    public static function obtenerTipo($indice){
        $contenidoArchivo = file_get_contents("../data/tipoCuentas.json");
        $tipoCuentas = json_decode($contenidoArchivo, true);
        echo json_encode($tipoCuentas[$indice]);
    }

    public function guardarTipo(){
        $contenidoArchivo = file_get_contents('../data/tipoCuentas.json');
        $tipoCuentas = json_decode($contenidoArchivo, true);
        $tipoCuentas[] = array(
            "tipo" => $this->tipo,
            "foto" => $this->foto,
            "descripcion" => $this->descripcion
        );

        $archivo = fopen('../data/tipoCuentas.json', 'w');
        fwrite($archivo, json_encode($tipoCuentas));
        fclose($archivo); 

        echo '{"codigoResultado":1, "mensaje":"TipoCuentas guardado con exito"}';
    }

    public function actualizarTipo($indice){
        $contenidoArchivos = file_get_contents("../data/tipoCuentas.json");
        $tipoCuentas = json_decode($contenidoArchivos, true);
        //$usuario = $usuarios[$indice];
        $tipoCuenta = array(
               'tipo' => $this->tipo,
               'foto' => $this->foto,
               'descripcion' => $this->descripcion
        );
        $tipoCuentas[$indice] = $tipoCuenta;
        $archivo = fopen('../data/tipoCuentas.json','w');
        fwrite($archivo, json_encode($tipoCuentas));
        fclose($archivo);

        echo '{"codigoResultado":1, "mensaje":"TipoCuentas actualizado con exito"}';
    }

    public static function eliminarTipo($indice){
        $contenidoArchivos = file_get_contents("../data/tipoCuentas.json");
        $tipoCuentas = json_decode($contenidoArchivos, true);
        array_splice($tipoCuentas, $indice, 1);
        $archivo = fopen('../data/tipoCuentas.json','w');
        fwrite($archivo, json_encode($tipoCuentas));
        fclose($archivo);
    
        echo '{"codigoResultado":1, "mensaje":"TipoCuentas eliminado con exito"}';
    }

        /**
         * Get the value of tipo
         */ 
        public function getTipo()
        {
                return $this->tipo;
        }

        /**
         * Set the value of tipo
         *
         * @return  self
         */ 
        public function setTipo($tipo)
        {
                $this->tipo = $tipo;

                return $this;
        }

        /**
         * Get the value of foto
         */ 
        public function getFoto()
        {
                return $this->foto;
        }

        /**
         * Set the value of foto
         *
         * @return  self
         */ 
        public function setFoto($foto)
        {
                $this->foto = $foto;

                return $this;
        }

    /**
     * Get the value of descripcion
     */ 
    public function getDescripcion()
    {
        return $this->descripcion;
    }

    /**
     * Set the value of descripcion
     *
     * @return  self
     */ 
    public function setDescripcion($descripcion)
    {
        $this->descripcion = $descripcion;

        return $this;
    }
}

?>