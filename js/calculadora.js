const x = document.getElementById("n1");
const y = document.getElementById("n2");

let r;

const btnSum = document.getElementById('btn_sum');
const btnSub = document.getElementById('btn_sub');
const btnMul = document.getElementById('btn_mul');
const btnDiv = document.getElementById('btn_div');

const result = document.getElementById('resultado')

const listaH = document.getElementById('historico')

function validacao(x, y){

    if (parseFloat(x.value) && parseFloat(y.value)){return true}
    else if (parseFloat(x.value) == 0 && parseFloat(y.value) == 0 ){return true}
    else if (parseFloat(x.value) == 0 && parseFloat(y.value)){return true}
    else if (parseFloat(y.value) == 0 && parseFloat(x.value)){return true}
    else {return false}

}

function addHistorico(x,s,y,r){

    const novoLi = document.createElement('li');
    novoLi.textContent = x.value + s + y.value +  "=" + r;
    listaH.appendChild(novoLi);

}

btnSum.addEventListener ("click", (soma) => {

    if (!validacao(x,y)){return alert("Preencha os campos corretamente")}

    r = parseFloat(x.value);
    r += parseFloat(y.value);

    result.textContent = "Soma: " + x.value + " + " + y.value + " Resultado: " + r;

    console.log("Somou! Resultado: " + r);

    addHistorico(x, "+", y, r);

});

btnSub.addEventListener ("click", (subtracao) => {

    if (!validacao(x,y)){return alert("Preencha os campos corretamente")}

    r = parseFloat(x.value);
    r -= parseFloat(y.value);
    
    result.textContent = "Subtraiu: " + x.value + " - " + y.value + " Resultado: " + r;

    console.log("Subtraiu! Resultado: " + r);
    
    addHistorico(x, "-", y, r);

});

btnMul.addEventListener ("click", (multiplicacao) => {

    if (!validacao(x,y)){return alert("Preencha os campos corretamente")}

    r = parseFloat(x.value);
    r *= parseFloat(y.value);
    
    result.textContent = "Multiplicou: " + x.value + " * " + y.value + " Resultado: " + r;

    console.log("Multiplicou! Resultado: " + r);

    addHistorico(x, "*", y, r);

});

btnDiv.addEventListener ("click", (divisao) => {

    if (y.value == 0){return alert("Impossível dividir por 0")}
    if (!validacao(x,y)){return alert("Preencha os campos corretamente")}

    r = parseFloat(x.value);
    r /= parseFloat(y.value);
    
    result.textContent = "Dividiu: " + x.value + " / " + y.value + " Resultado: " + r;

    console.log("Dividiu! Resultado: " + r);

    addHistorico(x, "/", y, r);

});