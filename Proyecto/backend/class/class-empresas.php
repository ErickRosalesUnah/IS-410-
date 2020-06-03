<?php

class Empresas{
    private $codigoEmpresa;
    private $Empresa;
    private $Pais;
    private $Direccion;
    private $Latitud;
    private $Longitud;
    private $Banner;
    private $Logotipo;
    private $Usuario;
    private $Contraseña;
    private $Sucursales;
    private $Productos;

    public function __construct(
        $codigoEmpresa,
        $Empresa,
        $Pais,
        $Direccion,
        $Latitud,
        $Longitud,
        $Banner,
        $Logotipo,
        $Usuario,
        $Contraseña,
        $Sucursales,
        $Productos
    ){
        $this->codigoEmpresa = $codigoEmpresa;
        $this->Empresa = $Empresa;
        $this->Pais = $Pais;
        $this->Direccion = $Direccion;
        $this->Latitud = $Latitud;
        $this->Longitud = $Longitud;
        $this->Banner = $Banner;
        $this->Logotipo = $Logotipo;
        $this->Usuario = $Usuario;
        $this->Contraseña = $Contraseña;
        $this->Sucursales = $Sucursales;
        $this->Productos = $Productos;

    }

    public static function obtenerEmpresas(){
        $contenidoArchivo = file_get_contents('../data/empresas.json');
        echo $contenidoArchivo;
    }

    public static function obtenerEmpresa($indice){
        $contenidoArchivo = file_get_contents("../data/empresas.json");
        $empresas = json_decode($contenidoArchivo, true);
        echo json_encode($empresas[$indice]);
 }

    public function guardarEmpresa(){
        $contenidoArchivo = file_get_contents('../data/empresas.json');
        $empresas = json_decode($contenidoArchivo, true);
        $empresas[] = array(
                "codigoEmpresa" => $this->codigoEmpresa,
                "Empresa" => $this->Empresa,
                "Pais" => $this->Pais,
                "Direccion" => $this->Direccion,
                "Latitud" => $this->Latitud,
                "Longitud" => $this->Longitud,
                "Banner" => $this->Banner,
                "Logotipo" => $this->Logotipo,
                "Usuario" => $this->Usuario,
                "Contrasena" => $this->Contraseña,
                "Sucursales" => $this->Sucursales,
                "Productos" => $this->Productos
        );

        $archivo = fopen('../data/empresas.json', 'w');
        fwrite($archivo, json_encode($empresas));
        fclose($archivo); 

        echo '{"codigoResultado":1, "mensaje":"Empresa guardada con exito"}';
    }

    public function actualizarEmpresa($indice){
        $contenidoArchivos = file_get_contents("../data/empresas.json");
        $empresas = json_decode($contenidoArchivos, true);
        //$usuario = $usuarios[$indice];
        $empresa = array(
            'codigoEmpresa' => $this->codigoEmpresa,
            'Empresa' => $this->Empresa,
            'Pais' => $this->Pais,
            'Direccion' => $this->Direccion,
            'Latitud' => $this->Latitud,
            'Longitud' => $this->Longitud,
            'Banner' => $this->Banner,
            'Logotipo' => $this->Logotipo,
            'Usuario' => $this->Usuario,
            'Contrasena' => $this->Contraseña,
            'Sucursales' => $this->Sucursales,
            'Productos' => $this->Productos
        );
        $empresas[$indice] = $empresa;
        $archivo = fopen('../data/empresas.json','w');
        fwrite($archivo, json_encode($empresas));
        fclose($archivo);

        echo '{"codigoResultado":1, "mensaje":"Empresa actualizada con exito"}';
 }

 public static function eliminarEmpresa($indice){
    $contenidoArchivos = file_get_contents("../data/empresas.json");
    $empresas = json_decode($contenidoArchivos, true);
    array_splice($empresas, $indice, 1);
    $archivo = fopen('../data/empresas.json','w');
    fwrite($archivo, json_encode($empresas));
    fclose($archivo);

    echo '{"codigoResultado":1, "mensaje":"Empresa eliminada con exito"}';
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
     * Get the value of Empresa
     */ 
    public function getEmpresa()
    {
        return $this->Empresa;
    }

    /**
     * Set the value of Empresa
     *
     * @return  self
     */ 
    public function setEmpresa($Empresa)
    {
        $this->Empresa = $Empresa;

        return $this;
    }

    /**
     * Get the value of Pais
     */ 
    public function getPais()
    {
        return $this->Pais;
    }

    /**
     * Set the value of Pais
     *
     * @return  self
     */ 
    public function setPais($Pais)
    {
        $this->Pais = $Pais;

        return $this;
    }

    /**
     * Get the value of Direccion
     */ 
    public function getDireccion()
    {
        return $this->Direccion;
    }

    /**
     * Set the value of Direccion
     *
     * @return  self
     */ 
    public function setDireccion($Direccion)
    {
        $this->Direccion = $Direccion;

        return $this;
    }

    /**
     * Get the value of Latitud
     */ 
    public function getLatitud()
    {
        return $this->Latitud;
    }

    /**
     * Set the value of Latitud
     *
     * @return  self
     */ 
    public function setLatitud($Latitud)
    {
        $this->Latitud = $Latitud;

        return $this;
    }

    /**
     * Get the value of Longitud
     */ 
    public function getLongitud()
    {
        return $this->Longitud;
    }

    /**
     * Set the value of Longitud
     *
     * @return  self
     */ 
    public function setLongitud($Longitud)
    {
        $this->Longitud = $Longitud;

        return $this;
    }

    /**
     * Get the value of Banner
     */ 
    public function getBanner()
    {
        return $this->Banner;
    }

    /**
     * Set the value of Banner
     *
     * @return  self
     */ 
    public function setBanner($Banner)
    {
        $this->Banner = $Banner;

        return $this;
    }

    /**
     * Get the value of Logotipo
     */ 
    public function getLogotipo()
    {
        return $this->Logotipo;
    }

    /**
     * Set the value of Logotipo
     *
     * @return  self
     */ 
    public function setLogotipo($Logotipo)
    {
        $this->Logotipo = $Logotipo;

        return $this;
    }

    /**
     * Get the value of Usuario
     */ 
    public function getUsuario()
    {
        return $this->Usuario;
    }

    /**
     * Set the value of Usuario
     *
     * @return  self
     */ 
    public function setUsuario($Usuario)
    {
        $this->Usuario = $Usuario;

        return $this;
    }

    /**
     * Get the value of Contraseña
     */ 
    public function getContraseña()
    {
        return $this->Contraseña;
    }

    /**
     * Set the value of Contraseña
     *
     * @return  self
     */ 
    public function setContraseña($Contraseña)
    {
        $this->Contraseña = $Contraseña;

        return $this;
    }

    /**
     * Get the value of Productos
     */ 
    public function getProductos()
    {
        return $this->Productos;
    }

    /**
     * Set the value of Productos
     *
     * @return  self
     */ 
    public function setProductos($Productos)
    {
        $this->Productos = $Productos;

        return $this;
    }

    /**
     * Get the value of Sucursales
     */ 
    public function getSucursales()
    {
        return $this->Sucursales;
    }

    /**
     * Set the value of Sucursales
     *
     * @return  self
     */ 
    public function setSucursales($Sucursales)
    {
        $this->Sucursales = $Sucursales;

        return $this;
    }
}

?>