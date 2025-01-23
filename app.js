//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Array para armazenar os nomes sorteados
let amigosSorteados = [];
let amigosDisponiveis = [];

// Função para adicionar amigo à lista
function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nome = input.value.trim(); // Remove espaços em branco

    if (nome) {
        const li = document.createElement('li');
        li.textContent = nome; // Define o texto do elemento de lista

        const listaAmigos = document.getElementById('listaAmigos');
        listaAmigos.appendChild(li); // Adiciona o novo elemento à lista de amigos

        // Adiciona o nome à lista de amigos disponíveis
        amigosDisponiveis.push(nome);

        input.value = ''; // Limpa o campo de entrada
    } else {
        alert('Por favor, digite um nome válido.'); // Alerta se o campo estiver vazio
    }
}