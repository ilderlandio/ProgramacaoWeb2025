function validaForm(){
    let valor = document.getElementById("nome").value;
    alert(valor);  
}
// document.getElementById("meuForm").addEventListener("submit",validaForm);

// function validaOnClick() {
//     let valor = document.getElementById("nome").value;
//     alert(valor); 
// }

// document.getElementById("enviar").addEventListener("click",validaForm);

// function handleKeyPress(event) {
//     // Verifica se a tecla pressionada é a tecla "Enter"
//     if (event.keyCode === 13) {
//      // alert('Tecla Enter pressionada!');
//       validaForm(); 
//       // Adicione aqui o código que deseja executar ao pressionar a tecla Enter
//     }
//   }

//   // Adiciona um ouvinte de eventos para o evento 'keydown' no documento
//   document.addEventListener('keydown', handleKeyPress);

//   function exibirMensagem() {
//     alert('Olá, esta é uma mensagem após 2000 milissegundos (2 segundos).');
//   }
//   // Agendando a execução da função após 2000 milissegundos (2 segundos)
//   setTimeout(exibirMensagem, 2000);


// // Variável para contar o número de vezes que a função é executada
// var contador = 0;
// // Função a ser executada a cada 1000 milissegundos (1 segundo)
// function exibirContador() {
//   contador++;
//   console.log('Contador:', contador);

//   // Condição para parar o setInterval após 5 execuções
//   if (contador === 5) {
//     clearInterval(intervalId);
//     console.log('Intervalo parado após 5 execuções.');
//   }
// }

// // Agendando a execução da função a cada 1000 milissegundos (1 segundo)
// var intervalId = setInterval(exibirContador, 1000);

// <!-- 2. Evento change
// Acionado quando o valor de um campo muda (como um <select> ou <input> de tipo diferente de texto). -->



document.getElementById("meuSelect").addEventListener("change", function() {
    alert("Você selecionou: " + this.value);
});

function passaTexto(){
    let textoOrigem = document.getElementById("texto").value; 
    document.getElementById("recebeTexto").innerText = textoOrigem;
}

document.getElementById("texto").addEventListener("input",passaTexto);