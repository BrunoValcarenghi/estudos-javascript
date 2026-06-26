console.log("Hello, World!");

const body = document.querySelector('body');

function mudarTema(){

    if (body.classList == "light"){body.classList = "dark"}
    else{body.classList = "light"}

}