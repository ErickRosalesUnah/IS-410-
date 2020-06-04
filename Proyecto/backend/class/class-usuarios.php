<?php

class Usuario{
    private $codigoUsuario;
    private $Nombre;
    private $Apellido;
    private $Correo;
    private $Edad;
    private $Pais;
    private $Ciudad;
    private $Genero;
    private $Foto;
    private $Usuario;
    private $Contrasena;
    private $PromocionesFavoritas;
    private $EmpresasFavoritas;
    private $Compras;

    public function __construct(
        $codigoUsuario,
        $Nombre,
        $Apellido,
        $Correo,
        $Edad,
        $Pais,
        $Ciudad,
        $Genero,
        $Foto,
        $Usuario,
        $Contrasena,
        $PromocionesFavoritas,
        $EmpresasFavoritas,
        $Compras

    ){
        $this->codigoUsuario = $codigoUsuario;
        $this->Nombre = $Nombre;
        $this->Apellido = $Apellido;
        $this->Correo = $Correo;
        $this->Edad = $Edad;
        $this->Pais = $Pais;
        $this->Ciudad = $Ciudad;
        $this->Genero = $Genero;
        $this->Foto = $Foto;
        $this->Usuario = $Usuario;
        $this->Contrasena = $Contrasena;
        $this->PromocionesFavoritas = $PromocionesFavoritas;
        $this->EmpresasFavoritas = $EmpresasFavoritas;
        $this->Compras = $Compras;

    }

    public static function obtenerUsuarios(){
        $contenidoArchivo = file_get_contents('../data/usuarios.json');
        echo $contenidoArchivo;
    }

    public static function obtenerUsuario($indice){
        $contenidoArchivosUsuarios = file_get_contents("../data/usuarios.json");
        $usuarios = json_decode($contenidoArchivosUsuarios, true);
        echo json_encode($usuarios[$indice]);
 }
 

    public function guardarUsuario(){
        $contenidoArchivoUsuarios = file_get_contents('../data/usuarios.json');
        $usuario = json_decode($contenidoArchivoUsuarios, true);
        $usuario[] = array(
            "codigoUsuario" => $this->codigoUsuario,
            "Nombre" => $this->Nombre,
            "Apellido" => $this->Apellido,
            "Correo" => $this->Correo,
            "Edad" => $this->Edad,
            "Pais" => $this->Pais,
            "Ciudad" => $this->Ciudad,
            "Genero" => $this->Genero,
            "Foto" => $this->Foto,
            "Usuario" => $this->Usuario,
            "Contrasena" => $this->Contrasena,
            "PromocionesFavoritas" => $this->PromocionesFavoritas,
            "EmpresasFavoritas" => $this->EmpresasFavoritas,
            "Compras" => $this->Compras
        );

        $archivo = fopen('../data/usuarios.json', 'w');
        fwrite($archivo, json_encode($usuario));
        fclose($archivo); 

        echo '{"codigoResultado":1, "mensaje":"Usuario guardado con exito"}';
    }

    public function actualizarUsuario($indice){
        $contenidoArchivos = file_get_contents("../data/usuarios.json");
        $usuarios = json_decode($contenidoArchivos, true);
        //$usuario = $usuarios[$indice];
        $usuario = array(
               'codigoUsuario' => $this->codigoUsuario,
               'Nombre' => $this->Nombre,
               'Apellido' => $this->Apellido,
               'Correo' => $this->Correo,
               'Edad' => $this->Edad,
               'Pais' => $this->Pais,
               'Ciudad' => $this->Ciudad,
               'Genero' => $this->Genero,
               'Foto' => $this->Foto,
               'Usuario' => $this->Usuario,
               'Contrasena' => $this->Contrasena,
               'PromocionesFavoritas' => $this->PromocionesFavoritas,
               'EmpresasFavoritas' => $this->EmpresasFavoritas,
               'Compras' => $this->Compras
        );
        $usuarios[$indice] = $usuario;
        $archivo = fopen('../data/usuarios.json','w');
        fwrite($archivo, json_encode($usuarios));
        fclose($archivo);

        echo '{"codigoResultado":1, "mensaje":"Usuario actualizado con exito"}';
 }

 public static function eliminarUsuario($indice){
    $contenidoArchivos = file_get_contents("../data/usuarios.json");
    $usuarios = json_decode($contenidoArchivos, true);
    array_splice($usuarios, $indice, 1);
    $archivo = fopen('../data/usuarios.json','w');
    fwrite($archivo, json_encode($usuarios));
    fclose($archivo);

    echo '{"codigoResultado":1, "mensaje":"Usuario eliminado con exito"}';
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
     * Get the value of Nombre
     */ 
    public function getNombre()
    {
        return $this->Nombre;
    }

    /**
     * Set the value of Nombre
     *
     * @return  self
     */ 
    public function setNombre($Nombre)
    {
        $this->Nombre = $Nombre;

        return $this;
    }

    /**
     * Get the value of Apellido
     */ 
    public function getApellido()
    {
        return $this->Apellido;
    }

    /**
     * Set the value of Apellido
     *
     * @return  self
     */ 
    public function setApellido($Apellido)
    {
        $this->Apellido = $Apellido;

        return $this;
    }

    /**
     * Get the value of Edad
     */ 
    public function getEdad()
    {
        return $this->Edad;
    }

    /**
     * Set the value of Edad
     *
     * @return  self
     */ 
    public function setEdad($Edad)
    {
        $this->Edad = $Edad;

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
     * Get the value of Ciudad
     */ 
    public function getCiudad()
    {
        return $this->Ciudad;
    }

    /**
     * Set the value of Ciudad
     *
     * @return  self
     */ 
    public function setCiudad($Ciudad)
    {
        $this->Ciudad = $Ciudad;

        return $this;
    }

    /**
     * Get the value of Genero
     */ 
    public function getGenero()
    {
        return $this->Genero;
    }

    /**
     * Set the value of Genero
     *
     * @return  self
     */ 
    public function setGenero($Genero)
    {
        $this->Genero = $Genero;

        return $this;
    }

    /**
     * Get the value of Foto
     */ 
    public function getFoto()
    {
        return $this->Foto;
    }

    /**
     * Set the value of Foto
     *
     * @return  self
     */ 
    public function setFoto($Foto)
    {
        $this->Foto = $Foto;

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
     * Get the value of Contrasena
     */ 
    public function getContrasena()
    {
            return $this->Contrasena;
    }
    /**
     * Set the value of Contrasena
     *
     * @return  self
     */ 
    public function setContrasena($Contrasena)
    {
            $this->Contrasena = $Contrasena;
            return $this;
    }

    /**
     * Get the value of PromocionesFavoritas
     */ 
    public function getPromocionesFavoritas()
    {
        return $this->PromocionesFavoritas;
    }

    /**
     * Set the value of PromocionesFavoritas
     *
     * @return  self
     */ 
    public function setPromocionesFavoritas($PromocionesFavoritas)
    {
        $this->PromocionesFavoritas = $PromocionesFavoritas;

        return $this;
    }

    /**
     * Get the value of EmpresasFavoritas
     */ 
    public function getEmpresasFavoritas()
    {
        return $this->EmpresasFavoritas;
    }

    /**
     * Set the value of EmpresasFavoritas
     *
     * @return  self
     */ 
    public function setEmpresasFavoritas($EmpresasFavoritas)
    {
        $this->EmpresasFavoritas = $EmpresasFavoritas;

        return $this;
    }

    /**
     * Get the value of Compras
     */ 
    public function getCompras()
    {
        return $this->Compras;
    }

    /**
     * Set the value of Compras
     *
     * @return  self
     */ 
    public function setCompras($Compras)
    {
        $this->Compras = $Compras;

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

    public static function verificarUsuario($email, $password){
        $contenidoArchivoUsuarios = file_get_contents('../data/usuarios.json');
        $usuarios = json_decode($contenidoArchivoUsuarios, true);
        for($i=0; $i<sizeof($usuarios); $i++){
            if($usuarios[$i]["Correo"]==$email && $usuarios[$i]["Contrasena"]==$password){
                return $usuarios[$i];
            }
        }
        return null;
    }

}

?>