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


// Função para sortear um amigo secreto
function sortearAmigo() {
    const listaAmigos = document.getElementById('listaAmigos');
    const amigos = Array.from(listaAmigos.getElementsByTagName('li')); // Obtém todos os elementos <li>

    if (amigos.length === 0) {
        alert('Adicione amigos à lista antes de sortear.'); // Alerta se não houver amigos
        return;
    }

   // Se todos os amigos já foram sorteados, exibe uma mensagem
    if (amigosDisponiveis.length === 0) {
        alert('Você já sorteou todos os nomes da Lista do Amigo Secreto.');
        return;
    }

    // Escolhe um amigo aleatoriamente
    const indiceAleatorio = Math.floor(Math.random() * amigosDisponiveis.length);
    const amigoSorteado = amigosDisponiveis[indiceAleatorio];
    // Remove o amigo sorteado da lista de disponíveis e adiciona à lista de sorteados
    amigosDisponiveis.splice(indiceAleatorio, 1);
    amigosSorteados.push(amigoSorteado);
}
