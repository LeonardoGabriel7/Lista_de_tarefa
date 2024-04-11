let contador = 0;
let input = document.getElementById("inputTarefa");
let btnAdd = document.querySelector(".btn-add");
let main = document.getElementById("areaLista");

function addTarefa() {
    // Pegar o valor do input
    let valorInput = input.value;

    // Validação
    if (valorInput.trim() !== "") {
        ++contador;

        // Criar novo item de tarefa
        let novoItem = `<div id="${contador}" class="item">
            <div onclick="toggleMarcarTarefa(${contador})" class="item-icone">
                <span id="icone_${contador}" class="material-symbols-outlined">radio_button_unchecked</span>
            </div>
            <div class="item-nome">${valorInput}</div>
            <div class="item-botao">
                <button class="delete" onclick="deletar(${contador})">
                    <span class="material-symbols-outlined">delete</span>Deletar
                </button>
            </div>
        </div>`;

        // Adicionar novo item ao main
        main.insertAdjacentHTML('beforeend', novoItem);

        // Limpar o campo de input e focar nele novamente
        input.value = "";
        input.focus();
    }
}

// Função para marcar ou desmarcar a tarefa como concluída
function toggleMarcarTarefa(id) {
    let item = document.getElementById(id);
    item.classList.toggle('clicado');
    
    let icone = document.getElementById(`icone_${id}`);
    let isClicado = item.classList.contains('clicado');
    icone.innerHTML = isClicado ? '<span class="material-symbols-outlined">check_circle</span>' : '<span class="material-symbols-outlined">radio_button_unchecked</span>';
}

// Função para deletar a tarefa
function deletar(id) {
    let tarefa = document.getElementById(id);
    tarefa.remove();
}

// Permitir adicionar tarefa ao pressionar Enter
input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        btnAdd.click();
    }
});