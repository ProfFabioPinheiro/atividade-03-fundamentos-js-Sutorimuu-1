
function descontao(valor, desconto){
    const desc = valor * (desconto / 100);
    const final = valor - desc;

    console.log("O valor original:" + valor);
    console.log("O valor do desconto" + desc);
    console.log("O valor final:" + final);
}

descontao(900, 48)