//Funcion Boton encriptar
function encriptar() {
    var texto = document.getElementById("inputtexto").value.toLowerCase(); //Convertir a minusculas
    //Texto a remplacar Replace()//
    var txtcifrado = texto.replace(/e/,"enter");
    var txtcifrado = txtcifrado.replace(/o/,"ober");
    var txtcifrado = txtcifrado.replace(/i/,"imes");
    var txtcifrado = txtcifrado.replace(/a/,"ai");
    var txtcifrado = txtcifrado.replace(/u/,"ufat");
    //Esconder logo y texto//
    document.getElementById("logo2").style.display = "none";
    document.getElementById("texto").style.display = "none";
    //Habilitar boton copiar
    document.getElementById("copiar").style.display = "show";
    //Aguegando al HTML
    document.getElementById("texto2").innerHTML = txtcifrado;
    document.getElementById("inputtexto").innerHTML = " ";
    document.getElementById("copiar").style.display = "inherit";
    
}
  //Funcion del boton desencriptar
  function desencriptar() {
    //Converitir a minusculas
    var texto = document.getElementById("inputtexto").value.toLowerCase();
    //Valores reemplazados replace()
    var txtcifrado = texto.replace(/enter/,"e");
    var txtcifrado = txtcifrado.replace(/ober/,"o");
    var txtcifrado = txtcifrado.replace(/imes/,"i");
    var txtcifrado = txtcifrado.replace(/ai/,"a");
    var txtcifrado = txtcifrado.replace(/ufat/,"u");
    //Escronder logo2 y caja de texto
    document.getElementById("logo2").style.display = "none";
    document.getElementById("texto").style.display = "none";
    //Habitar boton copiar
    document.getElementById("copiar").style.display = "show";
    //Insertar HTML
    document.getElementById("texto2").innerHTML = txtcifrado;
    document.getElementById("inputtexto").innerHTML = " ";
    document.getElementById("copiar").style.display = "inherit";
  }
  //Funcion boton Copiar
  function copiar() {
    //Traida de informacion por QuerySelector
    var contenido = document.querySelector("#texto2");
    contenido.select();
    //Ejecutar Comando de copiar
    document.execCommand('copy');
    //Alerta de que el texto fue copiado exitoso
    alert("Copiado corectamente");
  }
 