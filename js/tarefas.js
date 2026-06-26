const tarefa = document.getElementById('tarefa');
const listaTarefa = document.querySelector('ul');

const divTarefa = document.getElementById('div_tarefa');
const divSobre = document.getElementById('div_sobre');

let tarefas = [];

carregarTarefas();

function carregarTarefas(){

    const dados = localStorage.getItem('tarefas');

    if (dados != "[]" && dados){

        tarefas = JSON.parse(dados);
        renderizar();
        console.log("Carregou as tarefas!", dados);

    }

    verSobre()

}

function verSobre(){

    divSobre.style.display = "block";
    divTarefa.style.display = "none";

}

function verTarefa(){

    divTarefa.style.display = "block";
    divSobre.style.display = "none";

}

function renderizar(){

    verTarefa();

    listaTarefa.innerHTML = "";

    tarefas.forEach((item, indice) => {

    const novoLi = document.createElement('li');

    const pTexto = document.createElement('p');
    pTexto.onclick = concluir;
    pTexto.textContent = item.texto;

    const btnRemover = document.createElement('button');
    btnRemover.onclick = excluir;
    btnRemover.textContent = "Remover";
    
    novoLi.appendChild(pTexto);
    novoLi.appendChild(btnRemover);
    listaTarefa.appendChild(novoLi);
    
    if (item.concluido){

        pTexto.style.textDecoration = "line-through"

    }

    function concluir(){

        concluirTarefa(item, indice);

    }

    function excluir(){

        excluirTarefa(indice);

    }

    });


}

function addTarefa(){

    if (tarefa.value == ""){
       return alert("Falha ao adicionar tarefa!");
    }

    tarefas.push({texto: tarefa.value, concluido: false});
    console.log("Salvou no array: ", tarefas, "\nTamanho: ", tarefas.length);
    
    tarefa.value = "";
    
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
    renderizar();
   
}

function concluirTarefa(item, n){

    if (!item.concluido){

        item.concluido = true;

    }
    else{

        item.concluido = false;

    }
    console.log("Concluiu tarefa: ", tarefas[n]);

    localStorage.setItem('tarefas', JSON.stringify(tarefas));
    renderizar();

}

function excluirTarefa(n){

    tarefas.splice(n, 1);
    console.log("Excluiu no array: ", tarefas, "\nTamanho: ", tarefas.length);
    
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
    renderizar();

}