console.log("Hello, World!");

const input = document.getElementById(tarefa);
const listaTarefa = document.querySelector('ul');

function addTarefa(){

    if (tarefa.value == ""){
       return alert("Falha ao adicionar tarefa!");
    }

    const novoLi = document.createElement('li');

    const pTexto = document.createElement('p');
    pTexto.onclick = concluir;
    pTexto.textContent = tarefa.value;

    const btnRemover = document.createElement('button');
    btnRemover.onclick = remover;
    btnRemover.textContent = "Remover";
    
    novoLi.appendChild(pTexto);
    novoLi.appendChild(btnRemover);
    listaTarefa.appendChild(novoLi);

    alert("Tarefa adicionada com sucesso!");

    console.log("Adicionou tarefa: " + tarefa.value);
    
    function concluir(){

        console.log("Concluiu tarefa: " + pTexto.textContent);
        pTexto.style.textDecoration = "line-through"

    }

    function remover(){

        console.log("Excluiu tarefa: " + pTexto.textContent);
        novoLi.remove();

    }
   
}


