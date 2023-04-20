

/*


Vou corrigir o programa no feriado, não sei pq estou tendo bastante problemas na hora de 'resetar' o formulario, salvando os dados e exibindo os valores.

Tentei limpar, mas acho que no feriado corrigo tudo.

(idade,sexoeopinião) e retornar: a média da idade das pessoasque responderam ao questionário;a idade da pessoa mais
velha;a idade da pessoa mais nova;a quantidadede pessoas que responderam péssimo;a porcentagemde pessoas que
responderam ótimo e bom;o número de mulherese homensque responderam ao questionário.

    idades.push(idade);
    document.getElementById('idade').value = ""; // Limpar o campo de idade

*/


function salvarIdade(idade) {
    alert("Sua idade é: " idade);
  }

  
function exibirIdades() {
  alert("Idades: " + idades.join(", "));
}
