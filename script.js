function calculadora() {
    var valor1 = parseFloat(document.getElementById('valor1').value);
    var valor2 = parseFloat(document.getElementById('valor2').value);
    var resultado = valor2 + valor1
    document.getElementById('resultado').value = resultado;
}
