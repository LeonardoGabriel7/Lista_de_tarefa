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
            Teste de tarefa
        </div>
        <div class="item-botao">
            <button class="delete"><span class="material-symbols-outlined">
                delete
                </span>Deletar</button>
        </div>
    </div>`

    main.innerHTML += novoItem;
    }
}