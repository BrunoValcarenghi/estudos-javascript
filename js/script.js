console.log("Hello, World!");

const input = document.getElementById(tarefa);
const listaTarefa = document.querySelector('ul');

function addTarefa(){

    const elementoLi = document.createElement('li');
    elementoLi.textContent = tarefa.value;
    listaTarefa.appendChild(elementoLi);

    console.log(tarefa.value);

}