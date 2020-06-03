<?php

class Comentarios{
    private $codigoEmpresa;
    private $codigoProducto;
    private $codigoComentario;
    private $NombreComentario;
    private $ApellidoComentario;
    private $imagenC;
    private $Tiempo;
    private $Principal;
    private $ComentarioS;

    public function __construct(
        $codigoEmpresa,
        $codigoProducto,
        $codigoComentario,
        $NombreComentario,
        $ApellidoComentario,
        $imagenC,
        $Tiempo,
        $Principal,
        $ComentarioS
    ){
        $this->codigoEmpresa = $codigoEmpresa;
        $this->codigoProducto = $codigoProducto;
        $this->codigoComentario = $codigoComentario;
        $this->NombreComentario = $NombreComentario;
        $this->ApellidoComentario = $ApellidoComentario;
        $this->imagenC = $imagenC;
        $this->Tiempo = $Tiempo;
        $this->Principal = $Principal;
        $this->ComentarioS = $ComentarioS;
    }

    public static function obtenerComentarios(){
        $contenidoArchivoComentarios = file_get_contents('../data/comentarios.json');
        echo $contenidoArchivoComentarios;
    }

    public static function obtenerComentario($indice){
        $contenidoArchivoComentario = file_get_contents("../data/comentarios.json");
        $comentarios = json_decode($contenidoArchivoComentario, true);
        echo json_encode($comentarios[$indice]);
    }
    public function guardarComentario(){
        $contenidoArchivoComentario = file_get_contents('../data/comentarios.json');
        $comentario = json_decode($contenidoArchivoComentario, true);
        $comentario[] = array(
            'codigoEmpresa' => $this->codigoEmpresa,
            'codigoProducto' => $this->codigoProducto,
            'codigoComentario' => $this->codigoComentario,
            'NombreComentario' => $this->NombreComentario,
            'ApellidoComentario' => $this->ApellidoComentario,
            'imagenC' => $this->imagenC,
            'Tiempo' => $this->Tiempo,
            'Principal' => $this->Principal,
            'ComentarioS' => $this->ComentarioS
        );

        $archivo = fopen('../data/comentarios.json', 'w');
        fwrite($archivo, json_encode($comentario));
        fclose($archivo); 

        echo '{"codigoResultado":1, "mensaje":"Comentario guardado con exito"}';
    }

    public function actualizarComentario($indice){
        $contenidoArchivos = file_get_contents("../data/comentarios.json");
        $comentarios = json_decode($contenidoArchivos, true);
        //$usuario = $usuarios[$indice];
        $comentario = array(
            'codigoEmpresa' => $this->codigoEmpresa,
            'codigoProducto' => $this->codigoProducto,
            'codigoComentario' => $this->codigoComentario,
            'NombreComentario' => $this->NombreComentario,
            'ApellidoComentario' => $this->ApellidoComentario,
            'imagenC' => $this->imagenC,
            'Tiempo' => $this->Tiempo,
            'Principal' => $this->Principal,
            'ComentarioS' => $this->ComentarioS
        );
        $comentarios[$indice] = $comentario;
        $archivo = fopen('../data/comentarios.json','w');
        fwrite($archivo, json_encode($comentarios));
        fclose($archivo);

        echo '{"codigoResultado":1, "mensaje":"Comentario actualizado con exito"}';
    }

    public static function eliminarComentario($indice){
        $contenidoArchivos = file_get_contents("../data/comentarios.json");
        $comentarios = json_decode($contenidoArchivos, true);
        array_splice($comentarios, $indice, 1);
        $archivo = fopen('../data/comentarios.json','w');
        fwrite($archivo, json_encode($comentarios));
        fclose($archivo);
    
        echo '{"codigoResultado":1, "mensaje":"Comentario eliminado con exito"}';
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
         * Get the value of codigoComentario
         */ 
        public function getCodigoComentario()
        {
                return $this->codigoComentario;
        }

        /**
         * Set the value of codigoComentario
         *
         * @return  self
         */ 
        public function setCodigoComentario($codigoComentario)
        {
                $this->codigoComentario = $codigoComentario;

                return $this;
        }

        /**
         * Get the value of NombreComentario
         */ 
        public function getNombreComentario()
        {
                return $this->NombreComentario;
        }

        /**
         * Set the value of NombreComentario
         *
         * @return  self
         */ 
        public function setNombreComentario($NombreComentario)
        {
                $this->NombreComentario = $NombreComentario;

                return $this;
        }

        /**
         * Get the value of ApellidoComentario
         */ 
        public function getApellidoComentario()
        {
                return $this->ApellidoComentario;
        }

        /**
         * Set the value of ApellidoComentario
         *
         * @return  self
         */ 
        public function setApellidoComentario($ApellidoComentario)
        {
                $this->ApellidoComentario = $ApellidoComentario;

                return $this;
        }

    /**
     * Get the value of imagenC
     */ 
    public function getImagenC()
    {
        return $this->imagenC;
    }

    /**
     * Set the value of imagenC
     *
     * @return  self
     */ 
    public function setImagenC($imagenC)
    {
        $this->imagenC = $imagenC;

        return $this;
    }

    /**
     * Get the value of Tiempo
     */ 
    public function getTiempo()
    {
        return $this->Tiempo;
    }

    /**
     * Set the value of Tiempo
     *
     * @return  self
     */ 
    public function setTiempo($Tiempo)
    {
        $this->Tiempo = $Tiempo;

        return $this;
    }

    /**
     * Get the value of Principal
     */ 
    public function getPrincipal()
    {
        return $this->Principal;
    }

    /**
     * Set the value of Principal
     *
     * @return  self
     */ 
    public function setPrincipal($Principal)
    {
        $this->Principal = $Principal;

        return $this;
    }

    /**
     * Get the value of ComentarioS
     */ 
    public function getComentarioS()
    {
        return $this->ComentarioS;
    }

    /**
     * Set the value of ComentarioS
     *
     * @return  self
     */ 
    public function setComentarioS($ComentarioS)
    {
        $this->ComentarioS = $ComentarioS;

        return $this;
    }
}

?>