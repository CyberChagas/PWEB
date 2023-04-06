
// Perdoa a escolhas de nomes das variaveis

var nome = prompt("Qual é o seu nome?");
var n1 = prompt("Digite a primeira nota: ");
var n2 = prompt("Digite a segunda nota: ");
var n3 = prompt("Digite a terceira nota: ");

var media = ((parseFloat(n1) + parseFloat(n2) + parseFloat(n3)) / 3);

alert("A média do aluno chamado " + nome + " é: " + media.toFixed(2));




