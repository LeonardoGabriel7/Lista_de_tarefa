let input = document.getElementById("inputTarefa");
let btnAdd = document.getElementById("btn-add");
let main = document.getElementById("areaLista");

function addTarefa(){
    //PEGAR O VALOR DO INPUT
    let valorInput = input.value

    //VALIDAÇÃO 
    if ((valorInput !== "") && (valorInput !== null) && (valorInput !== undefined)) {
        //ADICIONANDO A DIV
        let novoItem = `<div class="item">
        <div class="item-icone">
            <span class="material-symbols-outlined">
                radio_button_unchecked
            </span>
        </div>
        <div class="item-nome">
            ${valorInput}
        </div>
        <div class="item-botao">
            <button class="delete"><span class="material-symbols-outlined">
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

//ENVIAR COM ENTER
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault(); // Adicione os parênteses aqui
        btnAdd.click();
    }
});