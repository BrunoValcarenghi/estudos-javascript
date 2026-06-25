console.log("Hello, World!");

const input = document.getElementById(tarefa);
const listaTarefa = document.querySelector('ul');

function addTarefa(){

    if (tarefa.value == ""){
       return alert("Falha ao adicionar tarefa!");
    }

    const novoLi = document.createElement('li');
    novoLi.textContent = tarefa.value;
    listaTarefa.appendChild(novoLi);
    alert("Tarefa adicionada com sucesso!");

    console.log(tarefa.value);

    novoLi.addEventListener("click", () => {

        novoLi.style.textDecoration = "line-through"

    });

}