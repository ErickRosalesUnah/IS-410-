<?php

class Basedatos{
    private $ciudad;
    private $lng;
    private $lat;

    public function __construct(
        $ciudad,
        $lng,
        $lat
    ){
        $this->ciudad = $ciudad;
        $this->lng = $lng;
        $this->lat = $lat;
    }

    public static function obtenerBasedatos(){
        $contenidoArchivo = file_get_contents('../data/basedatos.json');
        echo $contenidoArchivo;
    }

    public static function obtenerBasedato($indice){
        $contenidoArchivo = file_get_contents("../data/basedatos.json");
        $basedatos = json_decode($contenidoArchivo, true);
        echo json_encode($basedatos[$indice]);
    }
    
    public function guardarBasedatos(){
        $contenidoArchivo = file_get_contents('../data/basedatos.json');
        $basedatos = json_decode($contenidoArchivo, true);
        $basedatos[] = array(
                "ciudad" => $this->ciudad,
                "lng" => $this->lng,
                "lat" => $this->lat
        );

        $archivo = fopen('../data/basedatos.json', 'w');
        fwrite($archivo, json_encode($basedatos));
        fclose($archivo); 

        echo '{"codigoResultado":1, "mensaje":"Basedatos guardada con exito"}';
    }

    public function actualizarBasedatos($indice){
        $contenidoArchivos = file_get_contents("../data/basedatos.json");
        $basedatos = json_decode($contenidoArchivos, true);
        //$usuario = $usuarios[$indice];
        $basedato = array(
            'ciudad' => $this->ciudad,
            'lng' => $this->lng,
            'lat' => $this->lat
        );
        $basedatos[$indice] = $basedato;
        $archivo = fopen('../data/basedatos.json','w');
        fwrite($archivo, json_encode($basedatos));
        fclose($archivo);

        echo '{"codigoResultado":1, "mensaje":"Basedatos actualizada con exito"}';
 }

 public static function eliminarBasedatos($indice){
    $contenidoArchivos = file_get_contents("../data/basedatos.json");
    $basedatos = json_decode($contenidoArchivos, true);
    array_splice($basedatos, $indice, 1);
    $archivo = fopen('../data/basedatos.json','w');
    fwrite($archivo, json_encode($basedatos));
    fclose($archivo);

    echo '{"codigoResultado":1, "mensaje":"Basedatos eliminada con exito"}';
}

    /**
     * Get the value of lng
     */ 
    public function getLng()
    {
        return $this->lng;
    }

    /**
     * Set the value of lng
     *
     * @return  self
     */ 
    public function setLng($lng)
    {
        $this->lng = $lng;

        return $this;
    }

    /**
     * Get the value of lnt
     */ 
    public function getLat()
    {
        return $this->lat;
    }

    /**
     * Set the value of lnt
     *
     * @return  self
     */ 
    public function setLat($lat)
    {
        $this->lat = $lat;

        return $this;
    }

    /**
     * Get the value of ciudad
     */ 
    public function getCiudad()
    {
        return $this->ciudad;
    }

    /**
     * Set the value of ciudad
     *
     * @return  self
     */ 
    public function setCiudad($ciudad)
    {
        $this->ciudad = $ciudad;

        return $this;
    }
}

?>