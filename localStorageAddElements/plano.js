// // ---------------------------------- Primeira Parte ------------------------------- // 
// // Exemplo: armazenando um array no localStorage
// const lista = []; // vazio

// // let vetor = ["Lucas",35,true]; 
                   
// // console.log(vetor[2]); // true

// for(let i = 0; i < 3; i++){
//    let content = window.prompt("Digite um nome"); 
//    lista[i] = content; 
// }
// // console.log(lista); 

// localStorage.setItem("alunos", JSON.stringify(lista)); // gravar

// const listaSalva = localStorage.getItem("alunos"); // recuperar

// if(listaSalva) {
//     const alunos = JSON.parse(listaSalva);
//     //console.log(alunos); // ["Ana", "João", "Lucas"]
//     // for(let i = 0; i < 3; i++){
//     // const alunos = JSON.parse(listaSalva);
//     // console.log(`item - ${i} : ${alunos[i]}`);
//     // }
//   }

// // // Apaga um item específico
// // localStorage.removeItem("alunos");

// // // Apaga tudo do localStorage
// // localStorage.clear();

// ---------------------------------- Segunda Parte ------------------------------- // 

// document.getElementById("carregar").addEventListener("click",carregarCriar); 

// function carregarCriar(){
//     const novoItem = document.createElement("li"); // cria elemento html com js
//     novoItem.textContent = "Aluno: João";  // adiciono o conteúdo ao novoItem == <li> Aluno: João </li> 
//    // novoItem.innerHTML = "Aluno: João <button>Voltar</button>"; // caso a gente precise também adicionar html dentro do elemento
// //    novoItem.classList.add("meu-estilo"); // usa uma classe do CSS
//    novoItem.style.backgroundColor = "#eee"; // ou define direto no JS

//    //Colocando o elemento na tela
//    document.getElementById("listaAlunos").appendChild(novoItem);

// }

// ---------------------------------- Terceira Parte | Junto com a primeira ------------------------------- // 

document.getElementById("carregar").addEventListener("click", carregarAlunos);
function carregarAlunos() {
    const listaSalva = localStorage.getItem("alunos"); // ["Ana", "João", "Lucas"]
    if (listaSalva) {
        const alunos = JSON.parse(listaSalva);
        alunos.forEach(function(item) {
            const novoItem = document.createElement("li");
            novoItem.textContent = `Aluno: ${item}`;
            document.getElementById("listaAlunos").appendChild(novoItem);
        });
    }
}

// ---------------------------------- Quarta Parte | Junto com a primeira ------------------------------- // 

// document.getElementById("carregar").addEventListener("click", carregarAlunos);

// function carregarAlunos() {
//     const listaSalva = localStorage.getItem("alunos");

//     if (listaSalva) {
//         const alunos = JSON.parse(listaSalva);

//         alunos.forEach(function(nome) {
//             const novoItem = document.createElement("li");

//             // Criar texto do aluno
//             const span = document.createElement("span");
//             span.textContent = `Aluno: ${nome}`;

//             // Criar botão de remover
//             const botaoRemover = document.createElement("button");
//             botaoRemover.textContent = "Remover";
            
//             botaoRemover.style.marginLeft = "10px";

//             botaoRemover.addEventListener("click",function(){
//                 novoItem.remove();
//             });

//             // Adicionar os elementos ao <li>
//             novoItem.appendChild(span);
//             novoItem.appendChild(botaoRemover);

//             // Colocar o <li> na tela
//             document.getElementById("listaAlunos").appendChild(novoItem);
//         });
//     }
// }




