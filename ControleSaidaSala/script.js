// Duas listas: uma para quem está aguardando a saída, outra para quem já voltou.
let fila = [];
let sairam = [];

// Quando a página carrega...
window.onload = function () {
  // Verifica se há dados salvos no localStorage para a fila
  const salvaFila = localStorage.getItem("filaAlunos");

  // Verifica se há dados salvos no localStorage para os que voltaram
  const salvaSairam = localStorage.getItem("alunosQueVoltaram");

  // Se existir algo salvo, transforma de volta em array (JSON.parse)
  if (salvaFila) fila = JSON.parse(salvaFila);
  if (salvaSairam) sairam = JSON.parse(salvaSairam);

  // Atualiza as listas na tela com os dados carregados
  atualizarListas();
};

//Função para registrar nova saída
function registrarSaida() {
  // Pega o valor digitado no input com id="nomeAluno"
  const input = document.getElementById("nomeAluno");
  const nome = input.value.trim(); // Remove espaços extras

  // Se o campo estiver vazio, não faz nada
  if (nome === "") return;

  // Adiciona o nome no final da fila (como uma fila real)
  fila.push(nome);

  // Limpa o campo de texto
  input.value = "";

  // Salva no localStorage e atualiza a tela
  salvarDados();
  atualizarListas();
}

//Função para marcar que um aluno voltou 
function marcarComoVoltou(index) {
  // Remove o aluno da fila (usando o índice) e guarda o nome
  const aluno = fila.splice(index, 1)[0];

  // Adiciona o aluno removido na lista dos que voltaram
  sairam.push(aluno);

  // Atualiza o armazenamento e a interface
  salvarDados();
  atualizarListas();
}
// Como o botão remove o aluno correto?
//Porque a função marcarComoVoltou(index) recebe o index do aluno na fila, 
// e o .splice(index, 1) remove exatamente o elemento naquela posição. 
// Quando o forEach é recriado, os índices se atualizam — a numeração muda automaticamente!

//Função para limpar todos os dados
function limparFila() {
  // Confirma se o usuário quer mesmo apagar tudo
  const confirmar = window.confirm("Tem certeza que deseja limpar tudo?");
  if(!confirmar){ 
    return; 
  };

  // Zera os arrays
  fila = [];
  sairam = [];

  // Remove os dados salvos no navegador
  localStorage.removeItem("filaAlunos");
  localStorage.removeItem("alunosQueVoltaram");

  // Atualiza a tela
  atualizarListas();
}

//Função para salvar os dados
function salvarDados() {
  // Converte os arrays em texto JSON e salva no localStorage
  localStorage.setItem("filaAlunos", JSON.stringify(fila));
  localStorage.setItem("alunosQueVoltaram", JSON.stringify(sairam));
}

//Função que atualiza os elementos na tela
function atualizarListas() {
  // Pega as referências das listas na tela
  const listaFila = document.getElementById("filaSaida");
  const listaVoltou = document.getElementById("listaVoltou");

  // Limpa as listas antes de recriar os elementos
  listaFila.innerHTML = "";
  listaVoltou.innerHTML = "";

  // Monta a lista da fila de saída
  fila.forEach((nome, index) => {
    // Cria um <li> com o número da fila e o nome
    const li = document.createElement("li");
    li.textContent = `${index + 1} - ${nome}`; // o +1 é para exibir como "1º da fila", "2º", etc.

    // Cria o botão "Voltou"
    const botaoVoltou = document.createElement("button");
    botaoVoltou.textContent = "Voltou";

    // Define a ação do botão: remover o aluno da fila
    botaoVoltou.onclick = () => marcarComoVoltou(index);

    // Junta tudo no <li> e coloca na tela
    li.appendChild(botaoVoltou);
    listaFila.appendChild(li);
  });

  // Monta a lista de quem já voltou
  sairam.forEach((nome) => {
    const li = document.createElement("li");
    li.textContent = nome;
    listaVoltou.appendChild(li);
  });
}

