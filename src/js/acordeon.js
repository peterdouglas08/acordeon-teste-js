// Pegar todos os elementos html que serão utilizados para a interação (nesse caso, pegar todos os elementos que possuem a classe ".item")

const itensPerguntasERespostas = document.querySelectorAll('.item');


// Pode-se utilizar o console.log para verificar se os elementos foram selecionados corretamente
// console.log(itensPerguntasERespostas)

// Criar uma função para mostrar a classe "ativo" e que possa mostrar o display block com a resposta para a pergunta selecionada. Para isso, utilizar o forEach para percorrer todos os elementos que possuem a classe desejada, no caso, a classe "item".

itensPerguntasERespostas.forEach(function(item) {
    item.addEventListener("click", function () {
       
        const itemAtivoAtual = document.querySelector(".ativo"); // Criar uma variável para pegar o item ativo atual. Como pegar somente um dos elementos, deve-se usar o querySelector e não o querySelectorall

        if(itemAtivoAtual) {
            itemAtivoAtual.classList.remove("ativo");
        } // Aqui, faço uma validação para verificar se existe o elemento ".ativo" no html. Caso exista, o JS irá removê-lo por meio deste comando. IMPORTANTE! É obrigatório remover o item antes de adicioná-lo, ou poderá não funcionar corretamente.

        item.classList.add("ativo"); // Agora, basta adicionar a classe do elemento ativo para que a interação na página funcione
    });
});