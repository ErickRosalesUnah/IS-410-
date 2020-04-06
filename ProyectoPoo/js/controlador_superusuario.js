/*------------------- Esta funcion sirve para salir de la cuenta cliente --------------------*/
function cerrarCuenta(){
    location.href = "index.html";
    localStorage.removeItem('datosuser');
}

/*------------------- Esta funcion sirve para generar el boton de cerrar la cuenta --------------------*/
function generarBotonsalir(){
    document.getElementById("form-super").innerHTML = '';
    document.getElementById("form-super").innerHTML += 
    `
        <button class="btn btn-outline-success my-2 my-sm-0" id="preventbutton" type="submit" href="index.html" onclick="cerrarCuenta()">Cerrar Cuenta</button>
    `;
  }
  generarBotonsalir();
  