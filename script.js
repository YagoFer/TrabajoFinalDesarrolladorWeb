function Ver_Hora() {
    var mihora = new Date();
    var horas = mihora.getHours().toString();
    var minutos = mihora.getMinutes().toString();
    if (minutos.length == 1) minutos = "0" + minutos;
    var segundos = mihora.getSeconds().toString();
    if  (segundos.length == 1) segundos = "0" + segundos;
  
    document.forms[0].mireloj.value = horas + " : " + minutos + " : " + segundos;
}

document.getElementById("btnSumar").addEventListener("click", function() {
    resolverOperacion("+");
});


document.getElementById("btnRestar").addEventListener("click", function() {
    resolverOperacion("-");
});


document.getElementById("btnDividir").addEventListener("click", function() {
    resolverOperacion("/");
});


document.getElementById("btnMultiplicar").addEventListener("click", function() {
    resolverOperacion("*");
});


document.getElementById("btnPotencia").addEventListener("click", function() {    
    resolverOperacion("^");
});


var historial = "";

function mostrarHistorial(uno, dos, operacion, resultado) {
    historial = historial + uno + " " + operacion + " " + dos + " = " + resultado + "<br>";
    document.getElementById("historial").innerHTML = historial;
}


document.getElementById("btnBorrar").addEventListener("click", function() {
    historial = "";
    document.getElementById("historial").innerHTML = historial;
});


function resolverOperacion(operacion) {

    var uno = parseFloat(document.getElementById("uno").value);   
     
    var dos = parseFloat(document.getElementById("dos").value);    

    var resultado = 0;

    switch(operacion) {
        case "+":
            resultado = uno + dos;
            mostrarHistorial(uno, dos, operacion, resultado);
            break;
        case "-":
            resultado = uno - dos;
            mostrarHistorial(uno, dos, operacion, resultado);
            break;
        case "*":
            resultado = uno * dos;
            mostrarHistorial(uno, dos, operacion, resultado);
            break;
        case "/":
            resultado = uno / dos;
            mostrarHistorial(uno, dos, operacion, resultado);
            break;
        case "^":
            resultado = Math.pow(uno, dos);
            mostrarHistorial(uno, dos, operacion, resultado);
            break;        
    }

    document.querySelector("h1").textContent = resultado;

}
    function mailpage() {
        mail_str = "mailto:nombre@dominio.com?subject=Ejemplo: " + document.title;
        mail_str += "&body=Te recomiendo que visites esta pagina (http://www.cnice.mec.es/) --" + document.title;
        mail_str += ". Enlace:" + location.href;
        location.href = mail_str;
    }
