let contador = 0;
let input = document.getElementById("inputTarefa");
let btnAdd = document.getElementById("btn-add");
let main = document.getElementById("areaLista");

function addTarefa(){
    //PEGAR O VALOR DO INPUT
    let valorInput = input.value


    //VALIDAÇÃO 
    if ((valorInput !== "") && (valorInput !== null) && (valorInput !== undefined)) {

        ++contador;

        //ADICIONANDO A DIV
        let novoItem = `<div id= "${contador}" class="item">
        <div class="item-icone">
            <span class="material-symbols-outlined">
                radio_button_unchecked
            </span>
        </div>
        <div class="item-nome">
            ${valorInput}
        </div>
        <div class="item-botao">
            <button onclick="deletar(${contador})" class="delete"><span class="material-symbols-outlined">
                delete
                </span>Deletar</button>
        </div>
    </div>`

    //ADICIONAR NOVO ITEM NO MAIN
    main.innerHTML += novoItem;

    //ZERAR O CAMPO
    input.value = "";
    input.focus();
    }
}

//DELETAR TAREFA
function deletar(id){
    let tarefa = document.getElementById(id)
    tarefa.remove()
}



//ENVIAR COM ENTER
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault(); // Adicione os parênteses aqui
        btnAdd.click();
    }
});