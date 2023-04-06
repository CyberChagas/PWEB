
//Inovação nos nomes de variaveis é comigo mesmo


var n1 = prompt("Digite o primeiro número: ");
var n2 = prompt("Digite o segundo número: ");

var soma = (parseFloat(n1) + parseFloat(n2));
var sub = (parseFloat(n1) - parseFloat(n2));
var produto = (parseFloat(n1) * parseFloat(n2));
var division = (parseFloat(n1) / parseFloat(n2));
var restinho = (parseFloat(n1) % parseFloat(n2));


alert("Soma: " + soma.toFixed(2) + " \nSubtração: " + sub.toFixed(2) + "\nProduto: " + produto.toFixed(2) + "\nDivisão: " + division.toFixed(2) + "\nResto da divisão: " + restinho.toFixed(2));
