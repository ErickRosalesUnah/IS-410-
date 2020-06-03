<?php

class SuperUsuario{
    private $codigoSuperUsuario;
    private $superAdministrador;
    private $Correo;
    private $usuario;
    private $contrasena;

    public function __construct(
        $codigoSuperUsuario,
        $superAdministrador,
        $Correo,
        $usuario,
        $contrasena
    ){
        $this->codigoSuperUsuario = $codigoSuperUsuario;
        $this->superAdministrador = $superAdministrador;
        $this->Correo = $Correo;
        $this->usuario = $usuario;
        $this->contrasena = $contrasena;
    }
    
    public static function obtenerSuperUsuarios(){
        $contenidoArchivo = file_get_contents('../data/superUsuario.json');
        echo $contenidoArchivo;
    }

    public static function obtenerSuperUsuario($indice){
        $contenidoArchivo = file_get_contents("../data/superUsuario.json");
        $superUsuarios = json_decode($contenidoArchivo, true);
        echo json_encode($superUsuarios[$indice]);
    }

    public function guardarSuperUsuario(){
        $contenidoArchivo = file_get_contents('../data/superUsuario.json');
        $superUsuario = json_decode($contenidoArchivo, true);
        $superUsuario[] = array(
            "codigoSuperUsuario" => $this->codigoSuperUsuario,
            "superAdministrador" => $this->superAdministrador,
            "Correo" => $this->Correo,
            "usuario" => $this->usuario,
            "contrasena" => $this->contrasena
        );

        $archivo = fopen('../data/superUsuario.json', 'w');
        fwrite($archivo, json_encode($superUsuario));
        fclose($archivo); 

        echo '{"codigoResultado":1, "mensaje":"SuperUsuario guardado con exito"}';
    }

    public function actualizarSuperUsuario($indice){
        $contenidoArchivos = file_get_contents("../data/superUsuario.json");
        $superUsuarios = json_decode($contenidoArchivos, true);
        //$usuario = $usuarios[$indice];
        $superUsuario = array(
               'codigoSuperUsuario' => $this->codigoSuperUsuario,
               'superAdministrador' => $this->superAdministrador,
               'Correo' => $this->Correo,
               'usuario' => $this->usuario,
               'contrasena' => $this->contrasena
        );
        $superUsuarios[$indice] = $superUsuario;
        $archivo = fopen('../data/superUsuario.json','w');
        fwrite($archivo, json_encode($superUsuarios));
        fclose($archivo);

        echo '{"codigoResultado":1, "mensaje":"SuperUsuario actualizado con exito"}';
 }

 public static function eliminarSuperUsuario($indice){
    $contenidoArchivos = file_get_contents("../data/superUsuario.json");
    $superUsuarios = json_decode($contenidoArchivos, true);
    array_splice($superUsuarios, $indice, 1);
    $archivo = fopen('../data/superUsuario.json','w');
    fwrite($archivo, json_encode($superUsuarios));
    fclose($archivo);

    echo '{"codigoResultado":1, "mensaje":"SuperUsuario eliminado con exito"}';
}

    /**
     * Get the value of codigoSuperUsuario
     */ 
    public function getCodigoSuperUsuario()
    {
        return $this->codigoSuperUsuario;
    }

    /**
     * Set the value of codigoSuperUsuario
     *
     * @return  self
     */ 
    public function setCodigoSuperUsuario($codigoSuperUsuario)
    {
        $this->codigoSuperUsuario = $codigoSuperUsuario;

        return $this;
    }

    /**
     * Get the value of superAdministrador
     */ 
    public function getSuperAdministrador()
    {
        return $this->superAdministrador;
    }

    /**
     * Set the value of superAdministrador
     *
     * @return  self
     */ 
    public function setSuperAdministrador($superAdministrador)
    {
        $this->superAdministrador = $superAdministrador;

        return $this;
    }

    /**
     * Get the value of Correo
     */ 
    public function getCorreo()
    {
        return $this->Correo;
    }

    /**
     * Set the value of Correo
     *
     * @return  self
     */ 
    public function setCorreo($Correo)
    {
        $this->Correo = $Correo;

        return $this;
    }

    /**
     * Get the value of usuario
     */ 
    public function getUsuario()
    {
        return $this->usuario;
    }

    /**
     * Set the value of usuario
     *
     * @return  self
     */ 
    public function setUsuario($usuario)
    {
        $this->usuario = $usuario;

        return $this;
    }

    /**
     * Get the value of contrasena
     */ 
    public function getContrasena()
    {
        return $this->contrasena;
    }

    /**
     * Set the value of contrasena
     *
     * @return  self
     */ 
    public function setContrasena($contrasena)
    {
        $this->contrasena = $contrasena;

        return $this;
    }

    public static function verificarSuperUsuario($email, $password){
        $contenidoArchivoUsuarios = file_get_contents('../data/superUsuario.json');
        $usuarios = json_decode($contenidoArchivoUsuarios, true);
        for($i=0; $i<sizeof($usuarios); $i++){
            if($usuarios[$i]["Correo"]==$email && $usuarios[$i]["contrasena"]==$password){
                return $usuarios[$i];
            }
        }
        return null;
    }


    
}

?>