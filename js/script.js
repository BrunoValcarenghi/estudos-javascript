console.log("Hello, World!");

const body = document.querySelector('body');

let tema = carregarTema();
body.classList = tema;
console.log(tema);

function mudarTema(){

    tema = carregarTema();    

    if (tema == "light"){tema = "dark"}
    else{tema = "light"}

    localStorage.setItem("tema", tema)

    body.classList = tema;
    console.log("tema: ", tema);


}

function carregarTema(){

    if(localStorage.getItem("tema")){return localStorage.getItem("tema")}
    else{return "light"}

}